export interface IProduct {
  _id?: string;
  name: string;
  content: string;
}

export interface IAllProducts {
  count: string;
  data: IProduct[];
}
