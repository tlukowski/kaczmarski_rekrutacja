import { getTopDebts, getFilteredDebts } from "./debts";
import { type Debtor } from "../types/types";

export const fetchTopDebts = async (
  setData: React.Dispatch<React.SetStateAction<Debtor[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  setIsLoading(true);
  try {
    const result = await getTopDebts();
    setData(result);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

export const fetchFilteredDebts = async (
  setData: React.Dispatch<React.SetStateAction<Debtor[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  phrase: string
): Promise<void> => {
  setIsLoading(true);
  try {
    const result = await getFilteredDebts(phrase);
    setData(result);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
