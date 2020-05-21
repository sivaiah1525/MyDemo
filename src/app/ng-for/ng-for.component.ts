import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  productList: any;
  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {
        option1: 'English',
        option2: 'math',
        option3: 'physics ',
        option4: 'social',
      },
      {
        option1: 'English',
        option2: 'math',
        option3: 'physics ',
        option4: 'social',
      },
      {
        option1: 'English',
        option2: 'math',
        option3: 'physics ',
        option4: 'social',
      },
    ];
  }

}
