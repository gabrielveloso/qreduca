import { Component, OnInit, OnDestroy } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pqrcode',
  templateUrl: './pqrcode.page.html',
  styleUrls: ['./pqrcode.page.scss'],
})
export class PQRCodePage implements OnInit, OnDestroy {

  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};
  constructor(private qrScanCtrl: QRScanner, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.goToQrScan();
  }

  ngOnDestroy() {
    this.closeScanner();
  }

  goToQrScan() {
    this.qrScanCtrl.prepare().then((status: QRScannerStatus) => {
      console.log('status.canChangeCamera', status.canChangeCamera);
      this.isOn = true;
      if (status.authorized) {
        // camera permission was granted

        // start scanning
        const scanSub = this.qrScanCtrl.scan().subscribe((text: any) => {
          // console.log('Scanned something', text);
          // this.scannedData = text;
          // this.navCtrl.navigateForward('/detalhamento-item/' + text.result);
          // essa parâmetro não existe no Android Nativo
          if (text.result) {
            this.navCtrl.navigateForward('/detalhamento-item/' + text.result);
          } else {
            this.navCtrl.navigateForward('/detalhamento-item/' + text);
          }

          // this.closeScanner(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning

        });
        this.qrScanCtrl.show();

      } else if (status.denied) {
        alert('Permissão da câmera negada :(');
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        alert('Permissão foi negada, mas não permanentemente. Você pode pedir permissão novamente mais tarde.');
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    }).catch((e: any) => console.log('Error is', e));
  }

  closeScanner() {
    this.isOn = false;
    this.qrScanCtrl.hide();
    this.qrScanCtrl.destroy();
  }

}
