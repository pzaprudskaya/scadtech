export interface IEvent {
  _id?: string;
  created?: string;
  title: string;
  date: string;
  previewImage?: string;
  preview: string;
  content: string;
}

export interface IAllEvents {
  count: string;
  data: IEvent[];
}
