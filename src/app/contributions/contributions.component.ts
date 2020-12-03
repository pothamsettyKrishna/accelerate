import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {

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
