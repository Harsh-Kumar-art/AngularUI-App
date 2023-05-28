import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  
  data= [
    {name:'Harsh', age:24, job:'Designer'},
    {name:'Yash', age:19, job:'Engineer'},
    {name:'Harsh', age:20, job:'Designer'},
  ];        // data and header property for communicating to the child component Table and make table reusable
  headers= [
    {key:'name', label: 'Name'},
    {key:'age', label: 'Age'},
    {key:'job', label: 'Job'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
