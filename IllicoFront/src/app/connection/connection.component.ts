import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss'
})
export class ConnectionComponent {
    loginForm : FormGroup;
    router = inject(Router);

constructor(private _fb : FormBuilder,private _apiService : ApiService){
  this.loginForm = this._fb.group({
      email : [null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password : [null, [Validators.required]]
  })
}

login(){
  if(this.loginForm.valid){
      const loginInfo = {
      email : this.loginForm.get("email")?.value,
      password : this.loginForm.get("password")?.value
      } 

    this._apiService.login(loginInfo).subscribe({
      next : (data) => {

        // Login successful, handle the token as needed
        const token = data.token;
        // Store the token in a secure way (e.g., localStorage)
        localStorage.setItem('token', token);
        console.log(data);

        // Redirect or perform other necessary actions
        this.router.navigateByUrl("home");
      },
      error : (error) => {
        // Handle login errors
        console.error('Error during login:', error);
      }
    })
  }
  else{
    this.loginForm.markAllAsTouched();
  }

}
}
