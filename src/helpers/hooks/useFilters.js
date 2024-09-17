import { useState } from "react";

export const useFilters = (intialFilters) => {
  const [filters, setFilters] = useState(intialFilters);

  const changeFilter = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilter };
};
