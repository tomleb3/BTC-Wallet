import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactEditComponent,
    AppHeaderComponent,
    StatsPageComponent,
    PageNotFoundComponent,
    ContactDetailsComponent,
    LoginSignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    GoogleChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
