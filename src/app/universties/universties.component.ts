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
  universitiesList: University[];
  constructor(
    private unService: UnService,
    private wishService: WishListService
  ) {
    setInterval(() => {
      this.fetchData();
    }, 60000);
  }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    const wishList = this.wishService.wishList;
    this.unService.fetchData().subscribe((data) => {
      data.forEach((item) => {
        const checkListedItem = wishList.find((i) => i.name === item.name);
        if (checkListedItem) {
          item.wishListed = true;
          item.checked = checkListedItem.checked;
        }
      });
      this.universitiesList = data;
    });
  }
}
