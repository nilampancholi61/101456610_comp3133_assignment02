import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;
  
  constructor(private fb: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm?.valid) {
      // Call the authentication service (see next section)
      // Store the session token
      localStorage.setItem('authToken', 'dummy_token');
      this.router.navigate(['/employees']);
    }
  }
}
