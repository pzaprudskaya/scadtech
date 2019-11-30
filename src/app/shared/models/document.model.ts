export interface IDocument {
  _id?: string;
  title: string;
  number: string;
  date: string;
  descriptionIssuedBy: string;
  descriptionTypesOfJobs: string;
  link: string;
  validity: string;
}
export interface IAllDocuments {
  count: number;
  data: IDocument[];
}
