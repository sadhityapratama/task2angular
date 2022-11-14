import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KontakComponent } from './kontak/kontak.component';
import { KontakDetailComponent } from './kontak-detail/kontak-detail.component';
import { PhonePipe } from './pipe/phone.pipe';
import { AddKontakComponent } from './add-kontak/add-kontak.component';
import { KontakChildComponent } from './kontak-child/kontak-child.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddKontakFormComponent } from './add-kontak-form/add-kontak-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KontakComponent,
    KontakDetailComponent,
    PhonePipe,
    AddKontakComponent,
    KontakChildComponent,
    NavbarComponent,
    AddKontakFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
