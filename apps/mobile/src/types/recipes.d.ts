export interface Recipes {
  id: string;
  name: string;
  costForMe: number;
  priceForUnit: number;
  profits: Profits;
}

export interface Profits {
  day: number;
  week: number;
  month: number;
}
