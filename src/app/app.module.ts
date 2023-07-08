import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiographyComponent } from './biography/biography.component';
import { Routes } from '@angular/router';
const routes: Routes = [
  {path: '', component: BiographyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BiographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
