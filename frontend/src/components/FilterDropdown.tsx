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

            <button
                onClick={onOpen}
                className="
          flex items-center gap-2 px-4 py-2
          rounded-md bg-[#F3F3F3]
          text-sm text-[#3A3A47]
          hover:bg-gray-50
        "
            >
                <span>{label}</span>
                <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div
                    className="absolute top-full mt-2 w-64 bg-white border shadow-md rounded-md p-3 z-50"
                    style={{
                        right: type === "region" ? "-50px" : "0",
                        minWidth: "16rem",
                    }}
                >

                    {type === "region" &&
                        regionOptions.map((opt) => (
                            <CheckboxItem
                                key={opt}
                                label={opt}
                                checked={value.includes(opt)}
                                onClick={() => onChange(toggleValue(value, opt))}
                            />
                        ))}

                    {type === "gender" &&
                        genderOptions.map((opt) => (
                            <RadioItem
                                key={opt}
                                name="gender-filter"
                                label={opt}
                                checked={value?.[0] === opt}
                                onClick={() => onChange([opt])}
                            />
                        ))}

                    {type === "category" &&
                        categoryOptions.map((opt) => (
                            <CheckboxItem
                                key={opt}
                                label={opt}
                                checked={value.includes(opt)}
                                onClick={() => onChange(toggleValue(value, opt))}
                            />
                        ))}

                    {type === "tags" &&
                        tagsOptions.map((opt) => (
                            <CheckboxItem
                                key={opt}
                                label={opt}
                                checked={value.includes(opt)}
                                onClick={() => onChange(toggleValue(value, opt))}
                            />
                        ))}

                    {type === "payment" &&
                        paymentOptions.map((opt) => (
                            <RadioItem
                                key={opt}
                                name="payment-method"
                                label={opt}
                                checked={value?.[0] === opt}
                                onClick={() => onChange([opt])}
                            />
                        ))}

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
                                onChange={(e) =>
                                    onChange({ ...value, min: Number(e.target.value) })
                                }
                                className="w-full"
                            />

                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={value.max}
                                onChange={(e) =>
                                    onChange({ ...value, max: Number(e.target.value) })
                                }
                                className="w-full"
                            />
                        </div>
                    )}

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

                    {type === "sort" && (
                        <div className="space-y-2 text-sm">
                            <select
                                className="w-full border p-1 rounded"
                                value={value.sortBy}
                                onChange={(e) =>
                                    onChange({ ...value, sortBy: e.target.value })
                                }
                            >
                                <option value="date">Date (Newest First)</option>
                                <option value="quantity">Quantity</option>
                                <option value="customerName">Customer Name (A-Z)</option>
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

const regionOptions = ["North", "South", "East", "West", "Central"];
const genderOptions = ["Male", "Female"];
const categoryOptions = ["Clothing", "Electronics", "Beauty"];
const paymentOptions = ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking", "Wallet"];
const tagsOptions = ["organic", "skincare", "makeup", "portable", "wireless", "smart", "fashion", "casual", "unisex", "gadgets", "accessories", "fragrance-free", "beauty", "formal", "cotton", "trending", "new", "sale"];

const CheckboxItem = ({ label, checked, onClick }: any) => (
    <label className="flex items-center gap-2 py-1 cursor-pointer">
        <input type="checkbox" checked={checked} onChange={onClick} />
        <span>{label}</span>
    </label>
);

const RadioItem = ({ name, label, checked, onClick }: any) => (
    <label className="flex items-center gap-2 py-1 cursor-pointer">
        <input type="radio" name={name} checked={checked} onChange={() => onClick()} />
        <span>{label}</span>
    </label>
);
