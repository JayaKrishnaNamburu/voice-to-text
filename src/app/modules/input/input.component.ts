import { Component, OnInit, Input,
  Output, EventEmitter } from '@angular/core';
import { SpeechRecognitionService } from '../../services/speechservice';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  public search_text = '';
  public blink = false;
  @Output() spokenText = new EventEmitter<string>();
  @Output() error = new EventEmitter<string>();
  @Input() showInput = true;
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
      this.search();
    }
  }

  search(): void {
    this.speech.record().subscribe((text) => {
        this.search_text = text;
        this.blink = false;
        this.spokenText.emit(this.search_text);
        this.speech.stop();
      },
      (err) => {
        this.error.emit('Failed in Fetching');
        if (err.error === 'no-speech') {
          this.search();
        }
      }
    );
  }

}
