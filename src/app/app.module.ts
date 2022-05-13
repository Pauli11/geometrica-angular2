import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { TemplateDrivenFormModule } from './modules/template-driven-form/template-driven-form.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    HeaderComponent,
    FooterComponent,
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TemplateDrivenFormModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
