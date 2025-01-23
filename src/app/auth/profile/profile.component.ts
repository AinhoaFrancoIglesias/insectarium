import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  onPhotoClick(): void {
    const uploadPhoto = document.getElementById('uploadPhoto') as HTMLInputElement;
    uploadPhoto.click();
  }

  onPhotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const userPhoto = document.getElementById('userPhoto') as HTMLImageElement;
        userPhoto.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
