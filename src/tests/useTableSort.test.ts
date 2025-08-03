import useTableSort from "../hooks/useTableSort";
import { expect, describe, it } from "vitest";
const mockData = [
  {
    Id: 1,
    Name: "Anna",
    Value: 100,
    NIP: "1112223303",
    Date: "2017-03-01T00:00:00",
  },
  {
    Id: 2,
    Name: "Bartek",
    Value: 50,
    NIP: "1112223302",
    Date: "2017-03-01T00:00:00",
  },
  {
    Id: 3,
    Name: "Celina",
    Value: 200,
    NIP: "1112223304",
    Date: "2017-03-01T00:00:00",
  },
];

describe("useTableSort", () => {
  it("sorts by name ascending", () => {
    const sorted = useTableSort({
      data: mockData,
      sortKey: "Name",
      direction: "ASC",
    });
    expect(sorted[0].Name).toBe("Anna");
    expect(sorted[1].Name).toBe("Bartek");
    expect(sorted[2].Name).toBe("Celina");
  });
  it("sorts by NIP descending", () => {
    const sorted = useTableSort({
      data: mockData,
      sortKey: "NIP",
      direction: "DESC",
    });
    expect(sorted[0].NIP).toBe("1112223304");
    expect(sorted[1].NIP).toBe("1112223303");
    expect(sorted[2].NIP).toBe("1112223302");
  });
  it("returns empty array if data is empty", () => {
    const sorted = useTableSort({
      data: [],
      sortKey: "Name",
      direction: "ASC",
    });
    expect(sorted).toEqual([]);
  });
});
