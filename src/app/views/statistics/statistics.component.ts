import { Component, OnInit, Input } from '@angular/core';

interface Data {
  value:number;
  label: string;
  
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @Input() data: Data[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}
