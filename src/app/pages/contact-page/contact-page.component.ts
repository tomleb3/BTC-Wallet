import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    public router: Router,
    private contactService: ContactService
  ) { }
  contacts
  subscription: Subscription

  onFilter(filterTxt) {
    this.contactService.loadContacts(filterTxt)
  }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
