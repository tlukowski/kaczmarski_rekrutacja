export type SortDirection = "ASC" | "DESC";
export type SortKey = "Name" | "Value" | "Date" | "NIP";

export interface Debtor {
  Id: number;
  Name: string;
  NIP: string;
  Value: number;
  Date: string;
}
