import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContactModel } from 'src/app/model/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: ContactModel;
  @ViewChild('userImg') userImg;
  constructor() { }
  imgLoaded = false

  ngOnInit(): void {
  }

  onImgLoad() {
    this.imgLoaded = true
    this.userImg.nativeElement.style.display = 'inline-block'
    setTimeout(() => this.userImg.nativeElement.style.opacity = 1, 100)
  }
}
