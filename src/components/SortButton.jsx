import React, { useState } from "react";
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

const SortButton = () => {
  const [open, setOpen] = useState();
  const [value, setValue] = useState();
  const sortOptions = [
    {
      value: "name",
      label: "Name",
    },
    {
      value: "likes",
      label: "Popular",
    },
    {
      value: "age_months",
      label: "Age",
    },
    {
      value: "price_naria",
      label: "price",
    },
  ];
  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[130px] sm:w-[200px] h-[30pxp] justify-around btn-outline border border-[#0034595e] rounded-2xl text-lg font-medium cursor-pointer"
          >
            {value
              ? sortOptions.find((sortOption) => sortOption.value === value)
                  ?.label
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
                      setValue(currentValue === value ? "" : currentValue);
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
