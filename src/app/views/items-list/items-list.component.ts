import { Component, OnInit, Input } from '@angular/core';

interface Items {
  image:string;
  title:string;
  Description:string;
  
}
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Items[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
