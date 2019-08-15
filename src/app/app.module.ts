import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


//Modulos:
import {SharedModule} from './shared/shared.module';
import {PagesModules} from './pages/pages.module';
//Rutas:
import { APP_ROUTES } from './app-routing.module';
import {PagesRouteModule} from './pages/pages.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModules,
    SharedModule,
    PagesRouteModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
