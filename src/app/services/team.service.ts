import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';



@Injectable({
  providedIn: 'root'
})
export class TeamService {
  

  url:string = 'https://myparkingtesithon.000webhostapp.com/apiteam/';

  constructor(private http:HttpClient) { }
  
  public getTeams(){
    return this.http.get<Team[]>(this.url)

}


}