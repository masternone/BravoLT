import { Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root'
})
export class GuestDataService {

  private dataName: string;
  private dataBeds: number;
  private dataPets: number;
  private dataAccessible: boolean;
  private dataTotal: number;
  private dataFloor: number;

  constructor () {
    this.name = '';
    this.beds = 1;
    this.pets = 0;
    this.accessible = false;
  }

  get name (): string {
    return this.dataName;
  }

  set name (name: string) {
    this.dataName = name;
  }

  get beds (): number {
    return this.dataBeds;
  }

  set beds (beds) {
    this.dataBeds = beds;
    this.total = 0;
  }

  get pets (): number {
    return this.dataPets;
  }

  set pets (pets: number) {
    this.dataPets = pets;
    this.total = 0;
    this.floor = this.accessible || this.pets > 0 ? 1 : 2;
  }

  get accessible (): boolean {
    return this.dataAccessible;
  }

  set accessible (accessible: boolean) {
    this.dataAccessible = accessible;
    this.floor = this.accessible || this.pets > 0 ? 1 : 2;
  }

  get total (): number {
    return this.dataTotal;
  }

  set total (total: number) {
    this.dataTotal = total;
    switch (Number(this.beds)) {
      case 1:
        this.dataTotal += 50;
        break;
      case 2:
        this.dataTotal += 75;
        break;
      case 3:
        this.dataTotal += 90;
        break;
    }
    this.dataTotal += this.pets * 20;
  }

  get floor (): number {
    return this.dataFloor;
  }

  set floor (floor: number) {
    this.dataFloor = floor;
  }
}
