import React, { useEffect } from "react";
import FilterAndSort from "../context/FilterAndSortContext";

const ScrollToTop = () => {
  const { currentPage } = FilterAndSort();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return null;
};

export default ScrollToTop;
