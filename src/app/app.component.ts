import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    console.log('>>>>',VERSION.full); 
    
  }


  title = 'AngularMaterialGettingStarted';

      isMenuOpen = true;
      contentMargin = 240;

      task: string[] = [
        'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
      ]

      onToolbarMenuToggle() {
        console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;

        if(!this.isMenuOpen) {
          this.contentMargin = 70;
        } else {
          this.contentMargin = 240;
        }
      }

}
