import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { University } from "../models/univeristy.model";
import { WishListService } from "../wishlist/wishList.service";
import { UnService } from "./universities.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-universties",
  templateUrl: "./universties.component.html",
  styleUrls: ["./universties.component.css"],
})
export class UniverstiesComponent implements OnInit {
  universitiesList: University[] = []; //avoid error of reading lenght of undefined array
  enteredName: string = "";
  loading: boolean = false;
  country: string = "";
  private fethcDataSubscription: Subscription;
  constructor(
    private unService: UnService,
    private wishService: WishListService,
    private activatedRoute: ActivatedRoute
  ) {
    // setInterval(() => {
    //   console.log("re-fetch");
    //   this.fetchData();
    // }, 30000);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data["country"]);
      if (data["country"] === "All Countries") {
        this.country = "";
      } else {
        this.country = data["country"] || "";
      }
      this.fetchData();
    });
  }
  filterByName() {
    this.fetchData();
  }

  fetchData() {
    const wishList = this.wishService.wishList;
    this.loading = true;
    this.fethcDataSubscription = this.unService
      .fetchData(
        `http://universities.hipolabs.com/search?name=${this.enteredName}&country=${this.country}`
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
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.fethcDataSubscription.unsubscribe();
  }
}
