import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {
//  @Input() title= ''; // for customizing the Title of the component
  constructor() { }

  ngOnInit(): void {
  }

}
