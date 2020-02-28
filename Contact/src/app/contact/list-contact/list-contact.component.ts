import { Component, OnInit } from "@angular/core";
import Contact from "src/app/contact/add-edit-contact/contact";
import { ContactService } from "src/app/contact.service";
import { Router } from "@angular/router";
import { ContactPipe } from "../list-contact/contact.pipe";

@Component({
  selector: "app-list-contact",
  templateUrl: "./list-contact.component.html",
  styleUrls: ["./list-contact.component.scss"]
})
export class ListContactComponent implements OnInit {
  [x: string]: any;
  contacts: Contact[] = [];
  favoriteContacts: Contact[] = [];
  searchname: string = "";
  data: any;
  public isFavorite: boolean = false;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contactService.getContact().subscribe((data: Contact[]) => {
      this.contacts = data;
      let favList = [];
      data.forEach(contact => {
        if (contact.isFavorite) {
          favList.push(contact);
        }
      });

      this.favoriteContacts = favList;
      console.log("favoriteContacts", this.favoriteContacts);
    });
  }

  //Delete Products
  deleteContact(cid) {
    this.contactService.deleteContact(cid).subscribe(newData => {
      this.data = newData;
      console.log(this.data);
      console.log("Deleted");
      this.getContact();
    });
  }

  addasFavorite(contact) {
    const isFavorite = !contact.isFavorite;
    this.contactService
      .addasFavorite(contact._id, isFavorite)
      .subscribe((data: Contact) => {
        this.getContact();

        this.toggleColor(contact);
      });
  }

  toggleColor(contact) {
    contact.isFavorite = !contact.isFavorite;
  }
}
