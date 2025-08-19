import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconComponent, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Footer } from "./layout/footer/footer";
import { Navbar } from './layout/navbar/navbar';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  imports: [RouterModule, FaIconComponent, Navbar, Footer],
  selector: 'ecom-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);
  protected title = 'ecom-frontend';

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
