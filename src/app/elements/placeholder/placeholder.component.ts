import { Component, OnInit, Input } from '@angular/core'; //Input decorator

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() header=true;
  @Input() lines=3; // for customization in template
  constructor() { }

  ngOnInit(): void {
  }

}
