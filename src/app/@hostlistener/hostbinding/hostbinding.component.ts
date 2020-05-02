import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  styleUrls: ['./hostbinding.component.css']
})
export class HostbindingComponent implements OnInit {

  constructor() { }
@HostBinding('style.color') color:'red';

  ngOnInit(): void {


  }

}
