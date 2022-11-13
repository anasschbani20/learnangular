import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import {FormsModule} from "@angular/forms";
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ChildcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
