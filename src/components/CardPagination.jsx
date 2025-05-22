import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

function CardPagination({
  startIndex,
  endIndex,
  setStartIndex,
  setEndIndex,
  itemPerPage,
  length,
}) {
  const [clicked, setClicked] = useState(1);

  return (
    <Pagination className=" pt-4 flex items-center gap-4  min-h-[110px] w-full">
      <span>Pages </span>
      <PaginationContent>
        {startIndex > 9 && startIndex < length ? (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => {
                setStartIndex(startIndex - itemPerPage);
                setEndIndex(endIndex - itemPerPage);
                setClicked(clicked - 1);
              }}
              isActive={clicked == 1}
            />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={clicked === 1}
              onClick={() => {
                setStartIndex(0);
                setEndIndex(itemPerPage);
                setClicked(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              setStartIndex(10);
              setEndIndex(20);
              setClicked(2);
            }}
            className={length < 11 && "pointer-events-none opacity-0"}
            isActive={clicked == 2}
          >
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              setStartIndex(20);
              setEndIndex(30);
              setClicked(3);
            }}
            className={length < 21 && "pointer-events-none opacity-0"}
            isActive={clicked == 3}
          >
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className={length < 31 && "pointer-events-none opacity-0"}
            onClick={() => {
              setStartIndex(30);
              setEndIndex(40);
              setClicked(4);
            }}
            isActive={clicked == 4}
          >
            4
          </PaginationLink>
        </PaginationItem>

        {length >= 40 ? (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={clicked == 5}
              className={length < 41 && "pointer-events-none opacity-0"}
              onClick={() => setClicked(5)}
            >
              5
            </PaginationLink>
          </PaginationItem>
        ) : (
          length > 10 && (
            <PaginationItem>
              <PaginationNext
                href="#"
                className={startIndex > 40 && "pointer-events-none opacity-0"}
                onClick={() => {
                  setStartIndex(startIndex + itemPerPage);
                  setEndIndex(endIndex + itemPerPage);
                  setClicked(clicked + 1);
                }}
                isActive={clicked == 5}
              />
            </PaginationItem>
          )
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default CardPagination;
