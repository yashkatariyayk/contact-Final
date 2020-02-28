import { ContactService } from "./contact.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { ContactComponent } from "./contact/contact.component";
import { AddedContactComponent } from "./contact/add-edit-contact/add-edit-contact.component";
import { ListContactComponent } from "./contact/list-contact/list-contact.component";
import { ContactPipe } from "./contact/list-contact/contact.pipe";
import { FavoritelistComponent } from "./contact/favoritelist/favoritelist.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactPipe,
    ContactComponent,
    AddedContactComponent,
    ListContactComponent,
    FavoritelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
