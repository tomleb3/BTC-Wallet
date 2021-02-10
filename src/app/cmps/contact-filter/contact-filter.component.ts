import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() filterTxt: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }
  // filterTxt: string

  onFilter(txt) {
    this.filterTxt.emit(txt)
  }

  ngOnInit(): void {
  }
}
