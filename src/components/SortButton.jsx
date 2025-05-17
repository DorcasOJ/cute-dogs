import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import FilterAndSort from "../context/FilterAndSortContext";

const SortButton = () => {
  const [open, setOpen] = useState();
  const [value, setValue] = useState();
  const { setSortValue, sortValue, setSortResult, sortResult, sortValueInput } =
    FilterAndSort();

  useEffect(() => {
    sortValueInput(sortValue);
  }, [sortValue]);
  const sortOptions = [
    {
      value: "name",
      label: "Name Asc",
    },
    {
      value: "likes",
      label: "Most Popular",
    },
    {
      value: "likes_least",
      label: "Least Popular",
    },
    {
      value: "age_months_desc",
      label: "Age Desc",
    },
    {
      value: "age_months",
      label: "Age Asc",
    },
    {
      value: "price_naria_higest",
      label: "Highest price",
    },
    {
      value: "price_naria",
      label: "Lowest price",
    },
  ];
  console.log();
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] sm:w-[250px] h-[30pxp] justify-around btn-outline border border-[#0034595e] rounded-2xl text-lg font-medium cursor-pointer"
          >
            {sortValue
              ? `Sort by ${
                  sortOptions.find((u) => (u.value = sortValue))["label"]
                }`
              : "Sort by..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[130px] sm:w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Sort by ..." className="h-9" />
            <CommandList>
              <CommandGroup>
                {sortOptions.map((sortOption) => (
                  <CommandItem
                    key={sortOption.value}
                    value={sortOption.value}
                    onSelect={(currentValue) => {
                      setSortValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {sortOption.label}

                    <Check
                      className={cn(
                        "ml-auto",
                        value === sortOption.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SortButton;
