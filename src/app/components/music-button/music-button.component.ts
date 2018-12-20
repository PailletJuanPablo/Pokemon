import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-button',
  templateUrl: './music-button.component.html',
  styleUrls: ['./music-button.component.scss']
})
export class MusicButtonComponent implements OnInit {
  musicEnabled = true;
  constructor() { }

  ngOnInit() {
  }

  switchMusic() {
    this.musicEnabled = !this.musicEnabled;
  }

}
