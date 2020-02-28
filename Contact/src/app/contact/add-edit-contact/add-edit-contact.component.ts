import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { ContactService } from "src/app/contact.service";
import { MustMatch } from "../_helper/must-match.validator";
import { ActivatedRoute, Router } from "@angular/router";
import Contact from "./contact";

@Component({
  selector: "app-add-edit-contact.component",
  templateUrl: "./add-edit-contact.component.html",
  styleUrls: ["./add-edit-contact.component.scss"]
})
export class AddedContactComponent implements OnInit {
  registerForm: FormGroup;
  // contact: Object;
  contacts: Contact[];
  contact: Contact;
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contactservice: ContactService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group(
      {
        FirstName: ["", [Validators.required]],
        LastName: ["", [Validators.required]],
        Email: ["", [Validators.required, Validators.email]],
        Phone: [
          "",
          [
            Validators.required,
            Validators.pattern(/^-?(0|[1-9]\d*)?$/),
            Validators.minLength(10)
          ]
        ],
        Password: ["", [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ["", Validators.required]
      },
      {
        validator: MustMatch("Password", "ConfirmPassword")
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {});
    this.contact = new Contact();

    this.getId();
  }

  addContact(contact) {
    this.contactservice.addContact(contact);
  }

  getId() {
    this.route.params.subscribe(params => {
      this.contactservice
        .editContact(params["id"])
        .subscribe((res: Contact) => {
          if (res) {
            this.contact = res;
          } else {
            this.contact = new Contact();
          }
        });
      this.edit = params["id"];
    });
  }

  updateContact(contact) {
    this.route.params.subscribe(params => {
      this.contactservice.updateContact(contact, params["id"]);
    });
  }
}
