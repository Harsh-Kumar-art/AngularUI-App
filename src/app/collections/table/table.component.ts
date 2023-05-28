import { Component, OnInit, Input } from '@angular/core';


interface Data {
  name:string;
  age: number;
  job: string;
}

interface Headers {
  key:string;
  label: string;
}
interface Data {
  [key: string]: any
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames = '';
  @Input() data: Data[]= [];
  @Input() headers: Headers[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}
