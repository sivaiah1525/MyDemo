import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchaildComponent } from './viewchaild/viewchaild.component';
import { UserComponent } from './user/user/user.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HostlistenerComponent } from './@hostlistener/hostlistener/hostlistener.component';
import { HostbindingComponent } from './@hostlistener/hostbinding/hostbinding.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewchaildComponent,
    UserComponent,
    HostlistenerComponent,
    HostbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
