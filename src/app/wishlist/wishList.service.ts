import { Injectable } from "@angular/core";
import { University } from "../models/univeristy.model";

@Injectable({ providedIn: "root" })
export class WishListService {
  wishList: University[] = [];

  addToWishList(un: University) {
    un.wishListed = true;
    this.wishList.push(un);
  }
  removeFromWishList(id: number) {
    const removedUniIndex = this.wishList.findIndex((uni) => uni.id === id);
    this.wishList[removedUniIndex].wishListed = false;
    this.wishList.splice(removedUniIndex, 1);
  }
  toggleCheckItem(id: number) {
    const checkedUniIndex = this.wishList.findIndex((uni) => uni.id === id);
    const chekedItem = this.wishList[checkedUniIndex];
    chekedItem.checked = !chekedItem.checked;
    console.log(chekedItem);
  }
}
