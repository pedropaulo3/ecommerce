import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ecom-footer',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  faTruckFast = faTruckFast;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faFacebook = faFacebook;
}
