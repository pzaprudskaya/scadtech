interface  Address {
  type: string;
  name: string;
}
interface  Phone {
  type: string;
  name: string;
}
interface  Fax {
  type: string;
  name: string;
}
interface  Email {
  type: string;
  name: string;
}
export interface IContact {
  _id?: string;
  name: string;
  image: string;
  numbers: Phone[];
  addresses: Address[];
  faxes: Fax[];
  emails: Email[];
}
