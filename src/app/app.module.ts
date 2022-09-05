import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NotFountComponent } from "./not-fount/not-fount.component";
import { UniversityComponent } from "./universties/university/university.component";
import { UniverstiesComponent } from "./universties/universties.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { CountriesListComponent } from "./universties/countries-list/countries-list.component";
import { CountryComponent } from "./universties/countries-list/country/country.component";
const routes = [
  { path: "", component: UniverstiesComponent },
  { path: "universities-list", component: UniverstiesComponent },
  { path: "universities-list/:country", component: UniverstiesComponent },
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
    CountriesListComponent,
    CountryComponent,
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
