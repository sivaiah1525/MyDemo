import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchaild',
  templateUrl: './viewchaild.component.html',
  styleUrls: ['./viewchaild.component.css']
})
export class ViewchaildComponent implements OnInit {


  @ViewChild('btn', { static: true }) myelement: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
  action(event) {
    this.myelement.nativeElement.style.color = 'red'
  }

}
