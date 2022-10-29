import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Green Information ',
      subHeader: 'Recycled materials: 80%,  Lt Water: 2500 , CO2: 2 % ',
      message: 'Inventory: <img style="height: 10px; margin-left: 2%;" src="/assets/img/1899462658.jpg" alt="" />',
      buttons: ['Swap'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
