import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpeechRecognitionService } from '../../services/speachservice';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  public search_text = '';
  public blink = false;
  @Output() spokenText = new EventEmitter<string>();
  constructor(
    private speech: SpeechRecognitionService
  ) { }

  ngOnInit() {
  }

  triggerMike() {
    if (!('webkitSpeechRecognition' in window)) {
      console.log('please upgrade');
    } else {
      this.search_text = '';
      this.blink = true;
      this.speech.record().subscribe((text) => {
        this.search_text = text;
        this.blink = false;
        this.spokenText.emit(this.search_text);
        this.speech.stop();
      });
    }
  }

}
