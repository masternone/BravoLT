import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuestTotalComponent } from './guest-total/guest-total.component';

@NgModule ({
  declarations: [
    AppComponent,
    GuestFormComponent,
    GuestTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
