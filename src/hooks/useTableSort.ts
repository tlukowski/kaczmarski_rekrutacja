import { type Debtor, type SortKey, type SortDirection } from "../types/types";

interface useTableSortProps {
  data: Debtor[];
  sortKey: SortKey;
  direction: SortDirection;
}

const useTableSort = ({ data, sortKey, direction }: useTableSortProps) => {
  const sorted = [...data].sort((a, b) => {
    if (a[sortKey] > b[sortKey]) return direction === "ASC" ? 1 : -1;
    if (a[sortKey] < b[sortKey]) return direction === "ASC" ? -1 : 1;
    return 0;
  });
  return sorted;
};

export default useTableSort;
