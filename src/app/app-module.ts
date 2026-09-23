import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AboutComponent } from './about/about.component';
import { App } from './app';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OffersComponent } from './offers/offers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ServicesComponent } from './services/services.component';
import { Signup } from './signup/signup';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ServicesComponent,
    RestaurantsComponent,
    OffersComponent,
    AboutComponent,
    ContactComponent,
    Signup,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
