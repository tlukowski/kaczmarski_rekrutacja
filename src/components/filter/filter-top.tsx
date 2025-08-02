import { useState } from "react";

interface FilterTopProps {
  searchPhrase: string;
  onSearchPhraseChange: (phrase: string) => void;
  onSearch: (phrase: string) => void;
  onReset: () => void;
  showResetButton: boolean;
}

const FilterTop = ({
  searchPhrase,
  onSearchPhraseChange,
  onSearch,
  onReset,
  showResetButton,
}: FilterTopProps) => {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (searchPhrase.length < 3) {
      setError("Wpisz przynajmniej 3 znaki");
      return;
    }
    onSearch(searchPhrase);
  };

  const handleClear = () => {
    onSearchPhraseChange("");
    onReset();
    setError("");
  };

  return (
    <div className="filter__top">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label className="filter__label">Podaj NIP lub nazwę dłużnika</label>
          <div>
            <div className="filter__wrapper">
              <div className="filter__input-group">
                <input
                  className="filter__input"
                  type="text"
                  value={searchPhrase}
                  onChange={(e) => onSearchPhraseChange(e.target.value)}
                  aria-label="Wyszukaj dłużnika po NIP lub nazwie"
                  placeholder="Wprowadź NIP lub nazwę dłużnika"
                />
                {showResetButton && (
                  <button
                    onClick={handleClear}
                    type="button"
                    className="btn btn--reset"
                    aria-label="Wyczyść wyszukiwanie i pokaż wszystkich dłużników"
                  />
                )}
              </div>
              <button
                type="submit"
                className="btn btn--primary uppercase"
                aria-label="Wyszukaj dłużników"
              >
                Szukaj
              </button>
            </div>
          </div>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default FilterTop;
