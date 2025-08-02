import { useState } from "react";
import useTableSort from "../../hooks/useTableSort";
import formatDate from "../../utils/formatDate";
import Skeleton from "../ui/skeleton/skeleton";
import { currentCurrency } from "../../consts/current-currency";
import {
  type Debtor,
  type SortKey,
  type SortDirection,
} from "../../types/types";
import CaretIcon from "../ui/caret-icon/caret-icon";
interface FilterTableProps {
  isLoading: boolean;
  data: Debtor[];
  headers: Array<{ key: SortKey; name: string }>;
}

const FilterTable = ({ isLoading, data, headers }: FilterTableProps) => {
  const [sort, setSort] = useState<{
    sortKey: SortKey;
    sortDirection: SortDirection;
  }>({
    sortKey: "Name",
    sortDirection: "ASC",
  });
  const filteredData = useTableSort({
    data,
    sortKey: sort.sortKey,
    direction: sort.sortDirection,
  });

  const handleSort = (key: SortKey) => {
    if (sort.sortKey === key) {
      setSort((prev) => ({
        sortKey: key,
        sortDirection: prev.sortDirection === "ASC" ? "DESC" : "ASC",
      }));
    } else {
      setSort({ sortKey: key, sortDirection: "ASC" });
    }
  };
  return (
    <div className="container">
      {isLoading ? (
        <div aria-live="polite" aria-label="Ładowanie danych">
          <Skeleton rowNumber={10} />
        </div>
      ) : (
        <div className="filter__table-container mt-1">
          <table
            className="filter__table"
            role="table"
            aria-label="Tabela wierzytelności z możliwością sortowania"
          >
            <thead>
              <tr>
                {headers.map((header) => (
                  <th
                    className="filter__cell filter__cell--heading"
                    key={header.key}
                    onClick={() => {
                      handleSort(header.key);
                    }}
                  >
                    <button type="button" className="btn filter__cell-btn">
                      {header.name}
                      <span className="filter__cell-icon">
                        {sort.sortKey === header.key && (
                          <CaretIcon direction={sort.sortDirection} />
                        )}
                      </span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item: Debtor) => (
                  <tr key={item.Id}>
                    <td className="filter__cell filter__cell--item">
                      {item.Name}
                    </td>
                    <td className="filter__cell filter__cell--item">
                      {item.NIP}
                    </td>
                    <td className="filter__cell filter__cell--item">
                      {item.Value}
                      {currentCurrency}
                    </td>
                    <td className="filter__cell filter__cell--item">
                      {formatDate(item.Date)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="filter__cell filter__cell--center filter__cell--item "
                  >
                    Brak wyników dla podanych kryteriów
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FilterTable;
