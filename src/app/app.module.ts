import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UniverstiesComponent } from "./universties/universties.component";
import { UniversityComponent } from "./universties/university/university.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { NotFountComponent } from "./not-fount/not-fount.component";
import { CountriesComponent } from "./countries/countries.component";
const routes = [
  { path: "", component: UniverstiesComponent },
  { path: "universities-list", component: UniverstiesComponent },
  { path: "wish-list", component: WishlistComponent },
  { path: "**", component: NotFountComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UniverstiesComponent,
    UniversityComponent,
    WishlistComponent,
    NotFountComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
