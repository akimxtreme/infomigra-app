import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { Info2Page } from '../pages/info2/info2';
import { Info3Page } from '../pages/info3/info3';
import { WelcomePage } from '../pages/welcome/welcome';
import { SeguridadPage } from '../pages/seguridad/seguridad';
import { SexoPage } from '../pages/sexo/sexo';
import { PaisPage } from '../pages/pais/pais';
import { LlegadaChilePage } from '../pages/llegada-chile/llegada-chile';
import { RegistroPage } from '../pages/registro/registro';
import { PerfilExitosoPage } from '../pages/perfil-exitoso/perfil-exitoso';
import { LineaPasosPage } from '../pages/linea-pasos/linea-pasos';
import { ThemePage } from '../pages/theme/theme';
import { ProfilePage } from '../pages/profile/profile';
import { VideoPage } from '../pages/video/video';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    Info2Page,
    Info3Page,
    WelcomePage,
    SeguridadPage,
    SexoPage,
    PaisPage,
    LlegadaChilePage,
    RegistroPage,
    PerfilExitosoPage,
    LineaPasosPage,
    ThemePage,
    ProfilePage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    Info2Page,
    Info3Page,
    WelcomePage,
    SeguridadPage,
    SexoPage,
    PaisPage,
    LlegadaChilePage,
    RegistroPage,
    PerfilExitosoPage,
    LineaPasosPage,
    ThemePage,
    ProfilePage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
