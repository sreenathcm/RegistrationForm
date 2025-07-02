import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fistName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.email],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public onClicksubmit() {
    if (this.registrationForm.valid) {
      alert('Form submitted successfully');
      console.log(this.registrationForm.value);
    } else{
      alert('Invalid form!');
    }
  }
}
