import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import CONFIG from "../config";
import { Observable } from "rxjs";

@Injectable()
export class ProyectService {
  constructor(public http: HttpClient) {}

  getCitys(cityName : string): Observable<any> {
    return this.http.get<any>(
      "q=" + cityName + "&appid=" 
    );
  }

  getPopulation(): Observable<any> {
    return this.http.get<any>(
      CONFIG.POPULATIONAPI
    );
  }
}
