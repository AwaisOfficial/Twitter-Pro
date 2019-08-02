import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(document.body.classList);
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
