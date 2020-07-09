import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { GuestTotalComponent } from './guest-total/guest-total.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe ('AppComponent', () => {
  beforeEach (async (() => {
    TestBed.configureTestingModule ({
      imports: [
        RouterTestingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        GuestFormComponent,
        GuestTotalComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents ();
  }));

  it ('should create the app', () => {
    const fixture = TestBed.createComponent (AppComponent);
    const app = fixture.componentInstance;
    expect (app).toBeTruthy ();
  });
});
