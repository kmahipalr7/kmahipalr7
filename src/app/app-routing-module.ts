import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OffersComponent } from './offers/offers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ServicesComponent } from './services/services.component';
import { Signup } from './signup/signup';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: Signup },
  { path: 'menu', component: MenuComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
