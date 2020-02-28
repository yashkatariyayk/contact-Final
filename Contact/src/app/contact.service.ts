import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Contact from "./contact/add-edit-contact/contact";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  isFavorite: boolean = false;
  contact: Contact[] = [];

  uri = "http://localhost:3000/contact";

  constructor(private http: HttpClient) {}

  addContact(contact: Contact) {
    return this.http
      .post(`${this.uri}/addcontact`, contact)
      .subscribe(res => console.log("Add Contact"));
  }

  // To Get The List Of Contact
  getContact() {
    return this.http.get(`${this.uri}`);
  }

  // To Get Contact Details For Single Record Using Id
  editContact(id): Observable<any> {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  //To update contact
  updateContact(contact, id) {
    this.http
      .post(`${this.uri}/update/${id}`, contact)
      .subscribe(res => console.log("Update Done"));
  }

  // To Delete Any Contact
  deleteContact(cid) {
    return this.http.get(`${this.uri}/delete/${cid}`);
  }

  //To get Favorite list
  getFavoritelist() {
    return this.http.get(`${this.uri}/favorite`);
  }

  //To add as Favorite Contact
  addasFavorite(cid, isFavorite) {
    const obj = {
      isFavorite: isFavorite
    };
    return this.http.put(`${this.uri}/favorite/${cid}`, obj);
  }
}
