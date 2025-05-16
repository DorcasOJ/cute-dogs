import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <Pagination className="py-4">
      <PaginationContent>
        {startIndex > 9 ? (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => {
                setStartIndex(startIndex - itemPerPage);
                setEndIndex(endIndex - itemPerPage);
              }}
              isActive={startIndex > 9}
            />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={startIndex < 10}
              onClick={() => {
                setStartIndex(0);
                setEndIndex(itemPerPage);
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
            }}
            isActive={startIndex < 10}
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
            }}
            isActive={startIndex < 10}
          >
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => {
              setStartIndex(30);
              setEndIndex(40);
            }}
            isActive={startIndex < 10}
          >
            4
          </PaginationLink>
        </PaginationItem>

        {startIndex >= 40 ? (
          <PaginationItem>
            <PaginationLink href="#" isActive={startIndex < 10}>
              5
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationNext
              href="#"
              className={startIndex === 40 && "pointer-events-none opacity-50"}
              onClick={() => {
                setStartIndex(startIndex + itemPerPage);
                setEndIndex(endIndex + itemPerPage);
              }}
              isActive={startIndex < 10}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default CardPagination;
