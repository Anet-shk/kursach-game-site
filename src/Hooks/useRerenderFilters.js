import { useStatStyles } from "@chakra-ui/react";
import { useState } from "react";


export function useRerenderFilters(init) {
  const [rerenderFilters, setRerenderFilters] = useState(init);

  return {rerenderFilters, setRerenderFilters};
}