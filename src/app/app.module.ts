import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { 
          MatButtonModule ,
          MatInputModule ,
          MatIconModule,
          MatSelectModule,
          MatOptionModule,
          MatCheckboxModule,
          MatFormFieldModule,
          MatGridListModule
     } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

// importing the compinnts 
import { MainFormComponent } from './main-form/main-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
