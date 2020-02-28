import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddedContactComponent } from "./contact/add-edit-contact/add-edit-contact.component";
import { ListContactComponent } from "./contact/list-contact/list-contact.component";

const routes: Routes = [
  { path: "", redirectTo: "/contactlist", pathMatch: "full" },
  { path: "add/contact", component: AddedContactComponent },
  { path: "edit/:id", component: AddedContactComponent },
  { path: "contactlist", component: ListContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
