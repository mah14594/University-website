import { Component, OnInit } from "@angular/core";
import { University } from "../models/univeristy.model";
import { WishListService } from "../wishlist/wishList.service";
import { UnService } from "./universities.service";

@Component({
  selector: "app-universties",
  templateUrl: "./universties.component.html",
  styleUrls: ["./universties.component.css"],
})
export class UniverstiesComponent implements OnInit {
  universitiesList: University[] = []; //avoid error of reading lenght of undefined array
  enteredCountry: string = "";
  loading: boolean = false;
  constructor(
    private unService: UnService,
    private wishService: WishListService
  ) {
    // setInterval(() => {
    //   console.log("re-fetch");
    //   this.fetchData();
    // }, 30000);
  }
  ngOnInit(): void {
    this.fetchData();
  }
  filterCountries() {
    this.fetchData();
  }

  fetchData() {
    const wishList = this.wishService.wishList;
    this.loading = true;
    this.unService

      .fetchData(
        // "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json"
        `http://universities.hipolabs.com/search?name=middle&country=${this.enteredCountry}`
      )
      .subscribe((data) => {
        data.forEach((item) => {
          const checkListedItem = wishList.find((i) => i.name === item.name);
          if (checkListedItem) {
            item.wishListed = true;
            item.checked = checkListedItem.checked;
          }
        });
        this.universitiesList = data;
        this.loading = false;
      });
  }
}
