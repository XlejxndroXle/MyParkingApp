import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  caracteres = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://myparkingtesithon.000webhostapp.com/json.php')
    .subscribe(res => {
      console.log(res);
      this.caracteres = res.results;
    })
    
  }

}
