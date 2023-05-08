import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraPhotoComponent } from './camera-photo/camera-photo.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WebcamModule } from 'ngx-webcam';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    CameraPhotoComponent,
    HobbiesComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    WebcamModule,
    ImageCropperModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    DialogModule,
    ButtonModule

  ],
  exports: [
    CameraPhotoComponent,
    HobbiesComponent,
    UserFormComponent
  ]
})
export class SharedModule { }
