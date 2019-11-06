import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './pages/button/button.component';
import { ButtonModule } from 'projects/button/src/public-api';
import { FieldsetModule } from 'projects/fieldset/src/public-api';
import { CheckboxModule } from 'projects/checkbox/src/public-api';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    FieldsetModule,
    CheckboxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
