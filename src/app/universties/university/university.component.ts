import { Component, Input, OnInit } from "@angular/core";
import { University } from "../../models/univeristy.model";
import { WishListService } from "../../wishlist/wishList.service";

@Component({
  selector: "app-university",
  templateUrl: "./university.component.html",
  styleUrls: ["./university.component.css"],
})
export class UniversityComponent implements OnInit {
  @Input() university: University;
  constructor(private wishlistService: WishListService) {}

  ngOnInit(): void {}
  addToWishList(uni: University) {
    this.wishlistService.addToWishList(uni);
  }

  removeFromWishList(id: number) {
    this.wishlistService.removeFromWishList(id);
  }
}
