import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './sharedModule/core.module';
import { MainComponent } from './main/main.component';
import { AppRouting } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouting,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
