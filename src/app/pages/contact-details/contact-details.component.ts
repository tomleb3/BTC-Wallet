import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ContactModel } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @ViewChild('userImg') userImg;
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    public router: Router
  ) { }
  contact: ContactModel
  subscription: Subscription
  imgLoaded = false

  ngOnInit(): void {
    this.subscription = this.route.params.pipe(
      mergeMap(params => this.contactService.getContactById(params.id))
    ).subscribe(contact => this.contact = contact)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onImgLoad() {
    this.imgLoaded = true
    this.userImg.nativeElement.style.display = 'inline-block'
    setTimeout(() => this.userImg.nativeElement.style.opacity = 1, 100)
  }
}
