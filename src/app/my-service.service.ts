import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Details} from './Details';
import { Observable } from 'rxjs';
@Injectable()
export class MyserviceService {

  constructor(private http:HttpClient) { }
private API_URL :string="";
   getDetails(username: any, pass: any):Observable<Details[]>{
  this.API_URL = "http://localhost:9000/api/workorder/workorder-details?password=" +pass+ "&siteId=BEDFORD&userName="+username;
  return this.http.get<Details[]>(this.API_URL);
}
}
// getDetails(username: any, pass: any):Observable<Details[]>{
//   this.API_URL = "http://localhost:9000/api/workorder?password="+pass+"&siteId%5B%5D=BEDFORD&userName=" + username+"&woNums%5B%5D=1007&woNums%5B%5D=42001&woNums%5B%5D=43002&woNums%5B%5D=";
//   return this.http.get<Details[]>(this.API_URL);
// }