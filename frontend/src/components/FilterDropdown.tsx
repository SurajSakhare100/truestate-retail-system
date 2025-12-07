import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  label: string;
  type: string;
  value: any;
  onChange: (v: any) => void;
  open: boolean;
  onOpen: () => void;
}

const FilterDropdown = ({
  label,
  type,
  value,
  onChange,
  open,
  onOpen
}: FilterDropdownProps) => {
  return (
    <div className="relative select-none text-black">

      {/* Button */}
      <button
        onClick={onOpen}
        className="
          flex items-center gap-2 px-4 py-2
          rounded-md bg-white
          border border-gray-300
          text-sm text-gray-800
          hover:bg-gray-50
        "
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white border shadow-md rounded-md p-3 z-50">

          {/* REGION */}
          {type === "region" &&
            regionOptions.map((opt) => (
              <CheckboxItem
                key={opt}
                label={opt}
                checked={value.includes(opt)}
                onClick={() =>
                  onChange(toggleValue(value, opt))
                }
              />
            ))}

          {/* GENDER */}
          {type === "gender" &&
            genderOptions.map((opt) => (
              <RadioItem
                key={opt}
                label={opt}
                checked={value.includes(opt)}
                onClick={() => onChange([opt])}
              />
            ))}

          {/* CATEGORY */}
          {type === "category" &&
            categoryOptions.map((opt) => (
              <CheckboxItem
                key={opt}
                label={opt}
                checked={value.includes(opt)}
                onClick={() =>
                  onChange(toggleValue(value, opt))
                }
              />
            ))}

          {/* TAGS */}
          {type === "tags" &&
            tagsOptions.map((opt) => (
              <CheckboxItem
                key={opt}
                label={opt}
                checked={value.includes(opt)}
                onClick={() =>
                  onChange(toggleValue(value, opt))
                }
              />
            ))}

          {/* PAYMENT */}
          {type === "payment" &&
            paymentOptions.map((opt) => (
              <RadioItem
                key={opt}
                label={opt}
                checked={value.includes(opt)}
                onClick={() => onChange([opt])}
              />
            ))}

          {/* AGE RANGE */}
          {type === "age" && (
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Min: {value.min}</span>
                <span>Max: {value.max}</span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={value.min}
                onChange={(e) => onChange({ ...value, min: Number(e.target.value) })}
                className="w-full"
              />

              <input
                type="range"
                min={0}
                max={100}
                value={value.max}
                onChange={(e) => onChange({ ...value, max: Number(e.target.value) })}
                className="w-full"
              />
            </div>
          )}

          {/* DATE RANGE */}
          {type === "date" && (
            <div className="space-y-2 text-sm">
              <input
                type="date"
                value={value.from || ""}
                className="border p-1 rounded w-full"
                onChange={(e) =>
                  onChange({ ...value, from: e.target.value })
                }
              />
              <input
                type="date"
                value={value.to || ""}
                className="border p-1 rounded w-full"
                onChange={(e) =>
                  onChange({ ...value, to: e.target.value })
                }
              />
            </div>
          )}

          {/* SORT */}
          {type === "sort" && (
            <div className="space-y-2 text-sm">
              <select
                className="w-full border p-1 rounded"
                value={value.sortBy}
                onChange={(e) =>
                  onChange({ ...value, sortBy: e.target.value })
                }
              >
                <option value="date">Date</option>
                <option value="age">Age</option>
                <option value="quantity">Quantity</option>
              </select>

              <select
                className="w-full border p-1 rounded"
                value={value.order}
                onChange={(e) =>
                  onChange({ ...value, order: e.target.value })
                }
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default FilterDropdown;



const toggleValue = (arr: string[], val: string) =>
  arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];

const regionOptions = ["North", "South", "East", "West"];
const genderOptions = ["Male", "Female", "Other"];
const categoryOptions = ["Clothing", "Electronics", "Food", "Cosmetics"];
const paymentOptions = ["Cash", "Card", "UPI"];
const tagsOptions = ["New", "Sale", "Trending"];

const CheckboxItem = ({ label, checked, onClick }: any) => (
  <label className="flex items-center gap-2 py-1 cursor-pointer">
    <input type="checkbox" checked={checked} onChange={onClick} />
    <span>{label}</span>
  </label>
);

const RadioItem = ({ label, checked, onClick }: any) => (
  <label className="flex items-center gap-2 py-1 cursor-pointer">
    <input type="radio" checked={checked} onChange={onClick} />
    <span>{label}</span>
  </label>
);
