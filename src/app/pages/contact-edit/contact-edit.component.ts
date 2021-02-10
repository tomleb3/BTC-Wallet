import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModel } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  @ViewChild('userImg') userImg;
  constructor(
    public contactService: ContactService,
    private route: ActivatedRoute,
    public router: Router
  ) { }
  contact: ContactModel
  subscription: Subscription
  imgLoaded = false

  ngOnInit(): void {
    this.subscription = this.route.params.pipe(
      mergeMap(params => params.id ?
        this.contactService.getContactById(params.id) : this.contactService.emptyContact)
    ).subscribe(contact => this.contact = contact)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  redirectToContacts() {
    this.router.navigateByUrl('/contact')
  }

  onSubmitForm(formData) {
    this.contact = {
      _id: this.contact._id,
      name: formData.name,
      phone: formData.phone,
      email: formData.email
    }
    this.contactService.saveContact(this.contact)
    this.redirectToContacts()
  }

  onImgLoad() {
    this.imgLoaded = true
    this.userImg.nativeElement.style.display = 'inline-block'
    setTimeout(() => this.userImg.nativeElement.style.opacity = 1, 100)
  }
}