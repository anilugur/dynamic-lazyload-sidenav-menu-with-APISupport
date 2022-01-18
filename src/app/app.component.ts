import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  /*
  navItems: NavItem[] = [
    {
      displayName: 'About',
      route: 'aboutMR'
    },
    {
      displayName: 'Career',
      route: 'careerMR'
    },
    {
      displayName: 'Thanks',
      route: 'thanksMR'
    }
  ];*/
  
   navItems: NavItem[] = [];
  
  constructor(private navService: NavService, http: HttpClient) {
    menuItems = http.get<NavItem[]>('https://localhost:7094/nav').subscribe(result => {
      this.menuItems = result;
    }, error => console.error(error));
  }

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
