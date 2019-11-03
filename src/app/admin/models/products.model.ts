export interface IProduct {
  _id?: string;
  created?: string;
  title: string;
  date: string;
  previewImage?: string;
  preview: string;
  content: string;
}

export interface IAllProducts {
  count: string;
  data: IProduct[];
}
