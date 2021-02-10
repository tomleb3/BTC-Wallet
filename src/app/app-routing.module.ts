import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';

const routes: Routes = [
  { path: 'login', component: LoginSignupComponent },
  { path: 'stats', component: StatsPageComponent },
  { path: 'contact/edit/:id', component: ContactEditComponent },
  { path: 'contact/edit', component: ContactEditComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
