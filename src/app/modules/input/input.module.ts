import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { SpeechRecognitionService } from '../../services/speachservice';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent],
  providers: [
    SpeechRecognitionService
  ]
})
export class InputModule { }
