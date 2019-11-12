export interface IPartners {
  _id?: string;
  name: string;
  image: string;
  description: string;
  file: string;
}
export interface IAllPartners {
  count: string;
  data: IPartners[];
}
