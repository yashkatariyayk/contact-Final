export default class Contact {
  _id?: string;
  FirstName: string;
  LastName: string;
  Email: string;
  UserName: string;
  Phone: number;
  Address: string;
  Password: string;
  ConfirmPassword: string;
  isFavorite: boolean = false;
}
