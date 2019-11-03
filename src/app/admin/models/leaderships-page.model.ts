export interface ILeadership {
  _id?: string;
  name: string;
  image: string;
  post: string;
}
export interface IAllLeaderships {
  count: string;
  data: ILeadership[];
}
