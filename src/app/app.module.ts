import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { ButtonlogaoutComponent } from './buttonlogaout/buttonlogaout.component';
import { ButtonloginComponent } from './buttonlogin/buttonlogin.component';
import { BannerdashboardComponent } from './bannerdashboard/bannerdashboard.component';
import { LogaoutComponent } from './modals/logaout/logaout.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    PresentacionComponent,
    AcercademiComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ReferenciasComponent,
    ContactoComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent,
    IntroComponent,
    NavbardashboardComponent,
    ButtonlogaoutComponent,
    ButtonloginComponent,
    BannerdashboardComponent,
    LogaoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
