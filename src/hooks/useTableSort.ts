import { type Debtor, type SortKey, type SortDirection } from "../types/types";

interface useTableSortProps {
  data: Debtor[];
  sortKey: SortKey;
  direction: SortDirection;
}

const useTableSort = ({ data, sortKey, direction }: useTableSortProps) => {
  if (direction === "ASC") {
    return data.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : 0));
  }
  return data.sort((a, b) => (a[sortKey] > b[sortKey] ? 0 : 1));
};

export default useTableSort;
