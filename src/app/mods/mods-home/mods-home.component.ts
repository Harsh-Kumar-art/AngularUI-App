import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: "What is your name?", content: "My name is Harsh Kumar"},
    {title: "What is your age?", content: "My age is 22"},
    {title: "What is your degree?", content: "My degree is B.Tech"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
