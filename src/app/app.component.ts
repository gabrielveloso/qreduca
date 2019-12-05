import { Component } from '@angular/core';

import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private loading: any;
  public appPages = [
    {
      title: 'Principal',
      url: '/mapa',
      icon: 'map'
    },
    {
      title:  'Escanear QRcode',
      url: '/pqrcode',
      icon: 'qr-scanner'
    },
    {
      title:  'Informações',
      url:  '/minformacoes',
      icon: 'information-circle'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'flag'
    },
    {
      title:  'Login',
      url:  '/login',
      icon: 'contact'
    },
    {
      title:  'Lista',
      url:  '/lista-itens',
      icon: 'list-box'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  async logout() {
    await this.presentLoading();
    
    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
