import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"],
})
export class CountryComponent implements OnInit {
  @Input() country: string;
  selectedCountry: string = "";
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedCountry = params["country"];
    });
  }
  selectCountry(data: string) {
    this.router.navigate([`/universities-list/${data}`]);
  }
}
