import Sale from "../models/Sale.js";

export const fetchSales = async (query) => {

  const q = {
    ...query,
    gender: query.gender || query["gender[]"] || [],
    region: query.region || query["region[]"] || [],
    category: query.category || query["category[]"] || [],
    tags: query.tags || query["tags[]"] || [],
    payment: query.payment || query["payment[]"] || [],
  };

  ["gender", "region", "category", "tags", "payment"].forEach((k) => {
    if (q[k] && !Array.isArray(q[k])) q[k] = [q[k]];
  });

  const match = {};

  if (q.search) {
    match.$or = [
      { customerName: { $regex: q.search, $options: "i" } },
      { phoneNumber: { $regex: q.search, $options: "i" } },
    ];
  }

  if (q.region.length) match.customerRegion = { $in: q.region };
  if (q.gender.length) match.gender = { $in: q.gender };
  if (q.category.length) match.productCategory = { $in: q.category };
  if (q.tags.length) match.tags = { $in: q.tags };
  if (q.payment.length) match.paymentMethod = { $in: q.payment };

  if (q.ageMin || q.ageMax) {
    match.age = {
      $gte: Number(q.ageMin) || 0,
      $lte: Number(q.ageMax) || 100,
    };
  }

  if (q.dateFrom || q.dateTo) {
    match.date = {};
    if (q.dateFrom) match.date.$gte = new Date(q.dateFrom);
    if (q.dateTo) match.date.$lte = new Date(q.dateTo);
  }

  const page = Number(q.page) || 1;
  const limit = Math.min(Number(q.limit) || 10, 50);
  const skip = (page - 1) * limit;

  const sortField = q.sortBy || "date";
  const sortOrder = q.order === "asc" ? 1 : -1;

  const aggregation = [
    { $match: match },

    {
      $facet: {
        paginatedResults: [
          { $sort: { [sortField]: sortOrder } },
          { $skip: skip },
          { $limit: limit },
        ],

        totalStats: [
          {
            $group: {
              _id: null,

              totalUnits: { $sum: "$quantity" },
              totalAmount: { $sum: "$finalAmount" },
              totalDiscount: {
                $sum: {
                  $subtract: ["$totalAmount", "$finalAmount"] 
                }
              },

              salesCount: { $sum: 1 },

              discountCount: {
                $sum: {
                  $cond: [
                    { $gt: [{ $subtract: ["$totalAmount", "$finalAmount"] }, 0] },
                    1,
                    0
                  ]
                }
              }
            }
          }
        ],

        totalCount: [
          { $count: "count" }
        ]
      }
    }
  ];

  const result = await Sale.aggregate(aggregation);

  const data = result[0].paginatedResults;

  const stats = result[0].totalStats[0] || {
    totalUnits: 0,
    totalAmount: 0,
    totalDiscount: 0,
    salesCount: 0,
    discountCount: 0,
  };

  const total = result[0].totalCount[0]?.count || 0;

  return {
    data,
    total,
    page,
    pages: Math.ceil(total / limit),
    meta: stats,
  };
};
