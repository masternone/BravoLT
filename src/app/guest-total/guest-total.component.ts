import { Component } from '@angular/core';
import { GuestDataService } from '../guest-data/guest-data.service';

@Component ({
  selector: 'app-guest-total',
  templateUrl: './guest-total.component.html',
  styleUrls: ['./guest-total.component.scss']
})
export class GuestTotalComponent {

  constructor (public data: GuestDataService) { }

}
