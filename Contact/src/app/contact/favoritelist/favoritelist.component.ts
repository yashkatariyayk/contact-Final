import { Component, OnInit, Input } from "@angular/core";
import Contact from "../add-edit-contact/contact";

@Component({
  selector: "app-favoritelist",
  templateUrl: "./favoritelist.component.html",
  styleUrls: ["./favoritelist.component.scss"]
})
export class FavoritelistComponent implements OnInit {
  @Input() favList: Contact[];
  [x: string]: any;
  contacts: Contact[] = [];
  favoriteContacts: Contact[] = [];

  data: any;
  public isFavorite: boolean = false;
  constructor() {}

  public favoriteCotacts: any;

  ngOnInit() {
    console.log("called", this.favList);
  }
}
