"use client";

import { useEffect, useRef, useState } from "react";
import RefreshButton from "./RefreshButton";
import FilterDropdown from "./FilterDropdown";

const FilterBar = ({
  filters,
  setFilters,
  sortBy,
  setSortBy,
  order,
  setOrder,
  resetAllFilters,
  setCurrentPage
}: any) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (barRef.current && !barRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // resets page whenever filter changes (server-driven)
  const applyFilter = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1); // 🔥 ensures data reload
  };

  return (
    <div
      ref={barRef}
      className="
        flex flex-wrap items-center gap-3 
        p-4 bg-white border-b border-gray-200 
        sticky top-0 z-30
      "
    >
      {/* RESET */}
      <RefreshButton
        onClick={() => {
          resetAllFilters();
          setCurrentPage(1);
        }}
      />

      {/* REGION */}
      <FilterDropdown
        label="Customer Region"
        type="region"
        value={filters.region}
        open={openDropdown === "region"}
        onOpen={() =>
          setOpenDropdown(openDropdown === "region" ? null : "region")
        }
        onChange={(v: any) => applyFilter("region", v)}
      />

      {/* GENDER */}
      <FilterDropdown
        label="Gender"
        type="gender"
        value={filters.gender}
        open={openDropdown === "gender"}
        onOpen={() =>
          setOpenDropdown(openDropdown === "gender" ? null : "gender")
        }
        onChange={(v: any) => applyFilter("gender", v)}
      />

      {/* AGE */}
      <FilterDropdown
        label="Age Range"
        type="age"
        value={filters.age}
        open={openDropdown === "age"}
        onOpen={() =>
          setOpenDropdown(openDropdown === "age" ? null : "age")
        }
        onChange={(v: any) => applyFilter("age", v)}
      />

      {/* CATEGORY */}
      <FilterDropdown
        label="Product Category"
        type="category"
        value={filters.category}
        open={openDropdown === "category"}
        onOpen={() =>
          setOpenDropdown(openDropdown === "category" ? null : "category")
        }
        onChange={(v: any) => applyFilter("category", v)}
      />

      {/* TAGS */}
      <FilterDropdown
        label="Tags"
        type="tags"
        value={filters.tags}
        open={openDropdown === "tags"}
        onOpen={() =>
          setOpenDropdown(openDropdown === "tags" ? null : "tags")
        }
        onChange={(v: any) => applyFilter("tags", v)}
      />

      {/* PAYMENT */}
      <FilterDropdown
        label="Payment Method"
        type="payment"
        value={filters.payment}
        open={openDropdown === "payment"}
        onOpen={() =>
          setOpenDropdown(openDropdown === "payment" ? null : "payment")
        }
        onChange={(v: any) => applyFilter("payment", v)}
      />

      {/* DATE */}
      <FilterDropdown
        label="Date"
        type="date"
        value={filters.date}
        open={openDropdown === "date"}
        onOpen={() =>
          setOpenDropdown(openDropdown === "date" ? null : "date")
        }
        onChange={(v: any) => applyFilter("date", v)}
      />

      {/* SORT */}
      <div className="ml-auto">
        <FilterDropdown
          label="Sort by"
          type="sort"
          value={{ sortBy, order }}
          open={openDropdown === "sort"}
          onOpen={() =>
            setOpenDropdown(openDropdown === "sort" ? null : "sort")
          }
          onChange={(data: any) => {
            setSortBy(data.sortBy);
            setOrder(data.order);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
};

export default FilterBar;
