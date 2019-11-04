export interface ILeadership {
  _id?: string;
  name: string;
  image: string;
  position: string;
}
export interface IAllLeaderships {
  count: string;
  data: ILeadership[];
}
