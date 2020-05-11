import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent,HomeComponent,ArticlesComponent,HeaderComponent,FooterComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,HttpClientModule
  ],
  exports:[HomeComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
