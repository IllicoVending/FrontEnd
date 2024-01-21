import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  router = inject(Router);

  constructor(private _fb : FormBuilder, private _apiService : ApiService){
    this.inscriptionForm = this._fb.group({
        name : [null, [Validators.required]],
        email : [null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
        phoneNumber : [null, [Validators.required]],
        password : [null, [Validators.required]]
    })
  }
  inscription(){
    if(this.inscriptionForm.valid)
    {
      const registerInfo = {
        name : this.inscriptionForm.get("name")?.value,
        email : this.inscriptionForm.get("email")?.value,
        phone : this.inscriptionForm.get("phoneNumber")?.value,
        password : this.inscriptionForm.get("password")?.value
        }
      this._apiService.createUser(registerInfo).subscribe({
        next : (data) => {
          // Login successful, handle the token as needed
  
          // Redirect or perform other necessary actions
          this.router.navigateByUrl("");
        },
        error : (error) => {
          // Handle login errors
          console.error('Error during login:', error);
        }
      })
    }
    else{
      this.inscriptionForm.markAllAsTouched();
    }
  }
}
