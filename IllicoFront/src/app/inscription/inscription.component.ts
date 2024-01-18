import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  inscriptionForm : FormGroup;

  constructor(private _fb : FormBuilder, private _apiService : ApiService){
    this.inscriptionForm = this._fb.group({
        name : [null, [Validators.required]],
        email : [null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
        phoneNumber : [null, [Validators.required]],
        address : [null,[Validators.required]],
        city : [null, [Validators.required]],
        postCode : [null, [Validators.required]],
        password : [null, [Validators.required]]
    })
  }
  inscription(){
    if(this.inscriptionForm.valid)
    {
      
    }
    else{
      this.inscriptionForm.markAllAsTouched();
    }
  }
}
