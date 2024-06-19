import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../auth.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm: FormGroup;
  token: string | null
  name: string
  email: string
  bio: string
  work: string
  location: string
  university: string
  isEditing: boolean = false

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileForm = this.fb.group({
      name: [''],
      bio: [''],
    });

    this.token = this.authService.getToken();
    this.name = this.authService.getValueFromToken(this.token, 'name');
    this.email = this.authService.getValueFromToken(this.token, 'email');
    this.bio = this.authService.getValueFromToken(this.token, 'bio');
    this.work = this.authService.getValueFromToken(this.token, 'work');
    this.location = this.authService.getValueFromToken(this.token, 'location');
    this.university = this.authService.getValueFromToken(this.token, 'university');
  }

  editProfile(): void {
    this.isEditing = true;
    this.profileForm.setValue({
      name: this.name,
      bio: this.bio,
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedProfile = this.profileForm.value;
      this.name = updatedProfile.name;
      this.bio = updatedProfile.bio;

      this.isEditing = false;
      console.log('Profile updated and token refreshed:', this.token);
    }
  }
}
