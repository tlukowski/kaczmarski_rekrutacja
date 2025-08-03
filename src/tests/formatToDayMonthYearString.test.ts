import { formatToDayMonthYearString } from "../utils/formatToDayMonthYearString";
import { expect, it, describe } from "vitest";

const mockupData = "2017-03-30T00:00:00";

describe("Format data to DD/MM/YYYY", () => {
  it("returns 30-03-2017 for valid date", () => {
    expect(formatToDayMonthYearString(mockupData)).toBe("30-03-2017");
  });
});
