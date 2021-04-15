import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  logo = 'https://res.cloudinary.com/unjfsc/image/upload/v1618443166/Foxbel-Music/foxbel-music_guvh68.png';
  check: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  mostarOcultar(): void {
    this.check = !this.check;
}
}
