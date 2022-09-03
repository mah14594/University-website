export class University {
  public id: number;
  public name: string;
  public url: string;
  public countryName: string;
  public countryCode: string;
  public wishListed: boolean = false;
  public checked: boolean = false;

  constructor(universityDTO: IUniversityDTO) {
    this.id = universityDTO.id;
    this.name = universityDTO.name;
    this.url = universityDTO.web_pages[0];
    this.countryName = universityDTO.country;
    this.countryCode = universityDTO.alpha_two_code;
  }
}

export interface IUniversityDTO {
  id: number;
  alpha_two_code: string;
  country: string;
  name: string;
  web_pages: string[];
}
