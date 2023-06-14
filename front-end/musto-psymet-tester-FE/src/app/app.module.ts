import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GuessNumberComponent } from "./views/guess-number/guess-number.component";
import { WelcomeComponent } from "./views/welcome/welcome.component";

@NgModule({
  declarations: [AppComponent, GuessNumberComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
