import "./filter.less";
import FilterTop from "./filter-top";
import FilterTable from "./filter-table";
import { getTopDebts, getFilteredDebts } from "../../api/debts";
import { useState, useEffect } from "react";
import { type SortKey, type Debtor } from "../../types/types";

const FilterSection = () => {
  const [data, setData] = useState<Debtor[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResetButton, setShowResetButton] = useState<boolean>(false);

  const headers: Array<{ key: SortKey; name: string }> = [
    {
      key: "Name",
      name: "Dłużnik",
    },
    {
      key: "NIP",
      name: "NIP",
    },
    {
      key: "Value",
      name: "Kwota zadłużenia",
    },
    {
      key: "Date",
      name: "Data powstania zobowiązania",
    },
  ];
  const fetchTopDebts = () => {
    setIsLoading(true);
    setTimeout(() => {
      getTopDebts()
        .then((result) => setData(result))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }, 300);
  };
  useEffect(() => {
    fetchTopDebts();
  }, []);

  const handleSearch = async (phrase: string) => {
    setIsLoading(true);
    getFilteredDebts(phrase)
      .then((result) => {
        setData(result);
        setShowResetButton(true);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleReset = () => {
    setShowResetButton(false);
    fetchTopDebts();
  };

  return (
    <section className="filter">
      <FilterTop
        searchPhrase={searchPhrase}
        onSearchPhraseChange={setSearchPhrase}
        onSearch={handleSearch}
        onReset={handleReset}
        showResetButton={showResetButton}
      />
      <FilterTable headers={headers} isLoading={isLoading} data={data} />
    </section>
  );
};

export default FilterSection;
