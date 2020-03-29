import { Component, OnInit, Input } from '@angular/core';
import Typed from "typed.js";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: string;
  options;
  typed: Typed;

  constructor() { }

  ngOnInit() {
    this.options = { strings: [this.message], typeSpeed: 30, showCursor: false };
    this.typed = new Typed('.typed-element', this.options);
  }

  ngOnChanges() {
    try {
      this.options = { strings: [this.message], typeSpeed: 30, showCursor: false };
      this.typed.destroy();
      this.typed = new Typed('.typed-element', this.options);
    }
    catch (e) { console.log("Typed is not instantiated") } // ignore the type error
  }
}
