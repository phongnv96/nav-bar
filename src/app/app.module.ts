import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from 'src/home-page/home-page.component';
import { NavBarComponent } from 'src/home-container/nav-bar/nav-bar.component';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      NavBarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
