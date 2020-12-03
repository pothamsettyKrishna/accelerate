import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  constructor() { }

  @Input()
  nextTab:string;
  @Input() prevTab:string

  @Output() tabId = new EventEmitter<string>();

  ngOnInit() {
  }

  back(){
    this.tabId.emit(this.prevTab);
  }
  
  next(){
    this.tabId.emit(this.nextTab);
  }

}
