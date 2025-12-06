import Sale from "../models/Sale.js";

export const getSales = async (req, res) => {
  try {
    const {
      search = "",
      region = [],
      gender = [],
      ageMin,
      ageMax,
      category = [],
      tags = [],
      payment = [],
      dateFrom,
      dateTo,
      sortBy = "date",
      order = "desc",
      page = 1,
    } = req.query;

    const query = {};

    // SEARCH
    if (search) {
      query.$or = [
        { customerName: { $regex: search, $options: "i" } },
        { phoneNumber: { $regex: search, $options: "i" } },
      ];
    }

    // FILTERS
    if (region.length) query.customerRegion = { $in: region };
    if (gender.length) query.gender = { $in: gender };
    if (category.length) query.productCategory = { $in: category };
    if (payment.length) query.paymentMethod = { $in: payment };
    if (tags.length) query.tags = { $in: tags };

    if (ageMin && ageMax) {
      query.age = { $gte: parseInt(ageMin), $lte: parseInt(ageMax) };
    }

    if (dateFrom && dateTo) {
      query.date = {
        $gte: new Date(dateFrom),
        $lte: new Date(dateTo),
      };
    }

    const sort = {};
    sort[sortBy] = order === "desc" ? -1 : 1;

    const limit = 10;
    const skip = (parseInt(page) - 1) * limit;

    const results = await Sale.find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Sale.countDocuments(query);

    res.json({
      data: results,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};
