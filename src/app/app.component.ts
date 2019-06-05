import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Projeto criado em angular';
  cursos: string[] = [];
  constructor(){
    this.cursos[0] = 'abc';
  }
  ngOnInit(){
  }
}


