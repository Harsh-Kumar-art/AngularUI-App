import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value: 22, label: '# of Users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'}
  ];
  items = [
    {image: '/assets/images/couch.jpg', title: 'Couch', Description: 'This is the fantastic couch to sit on'},
    {image: '/assets/images/dresser.jpg', title: 'Dresser', Description: 'This is the fantastic dresser to put stuff'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
