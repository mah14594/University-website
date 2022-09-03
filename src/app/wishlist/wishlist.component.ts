import { Component, Input, OnInit } from "@angular/core";
import { IWishList } from "../models/wishList.model";
import { WishListService } from "./wishList.service";
import { University } from "../models/univeristy.model";
@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"],
})
export class WishlistComponent implements OnInit {
  wishList: University[];
  constructor(private wishService: WishListService) {}
  ngOnInit(): void {
    this.wishList = this.wishService.wishList;
  }
  removeFromWishList(id: number) {
    this.wishService.removeFromWishList(id);
  }
  toggleChecked(id: number) {
    this.wishService.toggleCheckItem(id);
  }
}
