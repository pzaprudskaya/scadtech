export interface IFeedback {
  _id?: string;
  surname: string;
  name: string;
  middleName: string;
  phone: string;
  email: string;
  text: string;
  unread: boolean;
}

export interface IAllFeedbacks {
  count: string;
  data: IFeedback[];
}
