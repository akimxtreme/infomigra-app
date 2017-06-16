import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { VideoPage } from '../pages/video/video';
// import { HomePage } from '../pages/home/home';
// import { InfoPage } from '../pages/info/info';
// import { Info2Page } from '../pages/info2/info2';
// import { Info3Page } from '../pages/info3/info3';
// import { WelcomePage } from '../pages/welcome/welcome';
// import { SeguridadPage } from '../pages/seguridad/seguridad';
// import { SexoPage } from '../pages/sexo/sexo';
// import { PaisPage } from '../pages/pais/pais';
// import { LlegadaChilePage } from '../pages/llegada-chile/llegada-chile';
// import { RegistroPage } from '../pages/registro/registro';
// import { PerfilExitosoPage } from '../pages/perfil-exitoso/perfil-exitoso';
// import { LineaPasosPage } from '../pages/linea-pasos/linea-pasos';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = VideoPage;
  // rootPage:any = HomePage;
  // rootPage:any = InfoPage;
  // rootPage:any = Info2Page;
  // rootPage:any = Info3Page;
  // rootPage:any = WelcomePage;
  // rootPage:any = SeguridadPage;
  //rootPage:any = SexoPage;
  // rootPage:any = PaisPage;
  // rootPage:any = LlegadaChilePage;
  // rootPage:any = RegistroPage;
  // rootPage:any = PerfilExitosoPage;
  // rootPage:any = LineaPasosPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

