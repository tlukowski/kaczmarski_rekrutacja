import { getTopDebts } from "./../api/debts";
import { expect, it, describe, vi } from "vitest";

describe("getTopDebts", () => {
  it("fetches and returns data", async () => {
    const mockResponse = [
      {
        Id: 1,
        Number: "DI/KOSZT/P/138483",
        Name: "Marcin Szymczak (Test)",
        Value: 10000.0,
        NIP: "1112223301",
        Date: "2017-03-01T00:00:00",
      },
    ];
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );

    const result = await getTopDebts();
    expect(result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
