import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { GuestDataService } from '../guest-data/guest-data.service';

@Component ({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent {

  guestForm = this.fb.group ({
    name: [this.data.name, [Validators.required]],
    beds: ['' + this.data.beds, [Validators.required]],
    pets: ['' + this.data.pets, [Validators.required]],
    accessible: [this.data.accessible]
  });

  constructor (private fb: FormBuilder, public data: GuestDataService) {
    this.guestForm.valueChanges.pipe (debounceTime (500)).subscribe (values => {
      console.log (values);
      const {name, beds, pets, accessible} = values;
      data.name = name;
      data.beds = beds;
      data.pets = pets;
      data.accessible = accessible;
    });
  }
}
