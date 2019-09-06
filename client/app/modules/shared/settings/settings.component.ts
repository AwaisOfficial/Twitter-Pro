import { Component, OnInit } from '@angular/core';
import { Commons } from 'client/app/helpers';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  profile : any;
  commons : Commons;

  constructor() { }

  ngOnInit() {
    this.commons = new Commons();
    this.profile = history.state.data.profile;
    console.log(document.body.classList , this.profile);
    
  }

  onThemeChange(event){
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', event.target.value);
    const bodyClasses = document.body.classList;
    document.body.classList.remove(bodyClasses.value);
    bodyClasses.add(event.target.value);
  }

  get currentTheme(){
    const theme = localStorage.getItem('Theme');
    return theme ? theme : 'white-theme';
  }
}
