import { mockSales } from "../data/data.js";
import { applyFiltersAndSort } from "../utils/query.utils.js";
export const fetchSales = async (query) => {
  let data = [...mockSales];

  const {
    search = "",
    region,
    gender,
    category,
    tags,
    payment,
    ageMin,
    ageMax,
    dateFrom,
    dateTo,
    sortBy = "date",
    order = "desc",
    page = 1,
    limit = 10,
  } = query;

  // Apply filters, sorting, search
  const filteredData = applyFiltersAndSort(data, {
    search,
    region,
    gender,
    category,
    tags,
    payment,
    ageMin,
    ageMax,
    dateFrom,
    dateTo,
    sortBy,
    order,
  });

  // Pagination
  const start = (page - 1) * limit;
  const paginated = filteredData.slice(start, start + Number(limit));

  return {
    data: paginated,
    total: filteredData.length,
    page: Number(page),
    pages: Math.ceil(filteredData.length / limit),
  };
};
