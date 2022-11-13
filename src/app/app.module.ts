import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import {FormsModule} from "@angular/forms";
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import {MyService} from "./services/MyService";
import {ToUpperCasePipe} from "./pipes/toUpperCase.pipe";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ChildcomponentComponent,
    ToUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
