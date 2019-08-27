import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Principal',
      url: '/principal',
      icon: 'map'
    },
    {
      title: 'Sobre o aplicativo',
      url: '/sobre',
      icon: 'flag'
    },
    {
      title:  'Escanear QRcode',
      url: '/pqrcode',
      icon: 'qr-scanner'
    },
    {
      title:  'informações',
      url:  '/minformacoes',
      icon: 'information-circle'
    },
    {
      title:  'Login',
      url:  '/login',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
