import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';

import { HomeComponent } from './Home/home.component';
import { NavService } from './nav.service';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
	HttpClient
  ],
  declarations: [
    AppComponent,
    MenuListItemComponent,
    HomeComponent,
    TopNavComponent,
  ],
  bootstrap: [AppComponent],
  providers: [NavService],
})
export class AppModule {}
