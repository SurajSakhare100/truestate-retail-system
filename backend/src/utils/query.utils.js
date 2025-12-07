export const applyFiltersAndSort = (data, params) => {
  let results = [...data];

  const {
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
  } = params;

  // -------------------------
  // SEARCH
  // -------------------------
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (item) =>
        item.customerName.toLowerCase().includes(q) ||
        item.phoneNumber.toLowerCase().includes(q)
    );
  }

  // -------------------------
  // FILTERS
  // -------------------------
  if (region) {
    const arr = Array.isArray(region) ? region : [region];
    results = results.filter((item) => arr.includes(item.customerRegion));
  }

  if (gender) {
    const arr = Array.isArray(gender) ? gender : [gender];
    results = results.filter((item) => arr.includes(item.gender));
  }

  if (category) {
    const arr = Array.isArray(category) ? category : [category];
    results = results.filter((item) => arr.includes(item.productCategory));
  }

  if (tags) {
    const arr = Array.isArray(tags) ? tags : [tags];
    results = results.filter((item) =>
      item.tags.some((t) => arr.includes(t))
    );
  }

  if (payment) {
    const arr = Array.isArray(payment) ? payment : [payment];
    results = results.filter((item) => arr.includes(item.paymentMethod));
  }

  if (ageMin || ageMax) {
    results = results.filter((item) => {
      const age = Number(item.age);
      if (ageMin && age < Number(ageMin)) return false;
      if (ageMax && age > Number(ageMax)) return false;
      return true;
    });
  }

  if (dateFrom || dateTo) {
    results = results.filter((item) => {
      const date = new Date(item.date);
      if (dateFrom && date < new Date(dateFrom)) return false;
      if (dateTo && date > new Date(dateTo)) return false;
      return true;
    });
  }

  // -------------------------
  // SORTING
  // -------------------------
  results.sort((a, b) => {
    let fieldA = a[sortBy];
    let fieldB = b[sortBy];

    if (sortBy === "date") {
      fieldA = new Date(a.date);
      fieldB = new Date(b.date);
    }

    if (typeof fieldA === "string") {
      fieldA = fieldA.toLowerCase();
      fieldB = fieldB.toLowerCase();
    }

    if (order === "asc") return fieldA > fieldB ? 1 : -1;
    return fieldA < fieldB ? 1 : -1;
  });

  return results;
};
