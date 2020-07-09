import { TestBed } from '@angular/core/testing';

import { GuestDataService } from './guest-data.service';

describe ('GuestDataService', () => {
  let service: GuestDataService;

  beforeEach (() => {
    TestBed.configureTestingModule ({});
    service = TestBed.inject (GuestDataService);
  });

  it ('should be created', () => {
    expect (service).toBeTruthy ();
  });

  it ('should set the floor correctly when setting pets', () => {
    service.pets = 0;
    expect (service.floor).toEqual (2);
    service.pets = 1;
    expect (service.floor).toEqual (1);
    service.pets = 2;
    expect (service.floor).toEqual (1);
  });

  it ('should set the floor correctly when setting accessible', () => {
    service.accessible = false;
    expect (service.floor).toEqual (2);
    service.accessible = true;
    expect (service.floor).toEqual (1);
  });

  it ('should set the price correctly when setting beds', () => {
    service.beds = 1;
    expect (service.total).toEqual (50);
    service.beds = 2;
    expect (service.total).toEqual (75);
    service.beds = 3;
    expect (service.total).toEqual (90);
  });

  it ('should set the price correctly when setting pets', () => {
    service.beds = 1; // you cannot have less than one bed
    service.pets = 0;
    expect (service.total).toEqual (50);
    service.pets = 1;
    expect (service.total).toEqual (70);
    service.pets = 2;
    expect (service.total).toEqual (90);
  });
});
