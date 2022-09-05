import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUniversityDTO, University } from "../models/univeristy.model";
@Injectable({ providedIn: "root" })
export class UnService {
  constructor(private http: HttpClient) {}
  fetchData(url: string): Observable<University[]> {
    const universtiesNames = new Set();
    return this.http.get(url).pipe(
      map((data: IUniversityDTO[]) => {
        const uniqueNameslist: University[] = [];
        data.forEach((uni, index) => {
          if (!universtiesNames.has(uni.name)) {
            uniqueNameslist.push({ ...new University(uni), id: index });
            universtiesNames.add(uni.name);
          }
        });
        return uniqueNameslist;
      })
    );
  }
}
