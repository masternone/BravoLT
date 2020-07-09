import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFormComponent } from './guest-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe ('GuestFormComponent', () => {
  let component: GuestFormComponent;
  let fixture: ComponentFixture<GuestFormComponent>;

  beforeEach (async (() => {
    TestBed.configureTestingModule ({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [GuestFormComponent]
    })
      .compileComponents ();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent (GuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges ();
  });

  it ('should create', () => {
    expect (component).toBeTruthy ();
  });
});
