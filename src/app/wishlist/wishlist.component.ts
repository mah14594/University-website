import { Component, OnInit } from "@angular/core";
import { University } from "../models/univeristy.model";
import { WishListService } from "./wishList.service";
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
