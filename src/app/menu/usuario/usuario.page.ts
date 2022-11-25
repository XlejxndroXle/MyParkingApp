import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from 'src/app/models/team';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage  {

  ListTeam:Team[]
  
  constructor(private teamService:TeamService) 
  {
    this.ListTeam = [];
    this.loadTeam();
  }

  
  public loadTeam():void{
    this.teamService.getTeams().subscribe(
      (response) => { 
        this.ListTeam = response
        console.log(response);
       },
      (error) => { console.log(error) })
  }

 

}
