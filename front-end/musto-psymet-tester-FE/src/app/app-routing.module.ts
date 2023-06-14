import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GuessNumberComponent } from "./views/guess-number/guess-number.component";
import { WelcomeComponent } from "./views/welcome/welcome.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "guess-number", component: GuessNumberComponent },
  { path: "**", redirectTo: "/welcome", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
