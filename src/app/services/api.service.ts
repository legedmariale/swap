import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = '';
  loading: any;

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) { }

  /** Login */
  public async login(email: string, password: string) {

    const data = {
      email: email,
      password: password
    }

    let promise = new Promise((resolve, reject) => {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      let result = this.http.post(
        environment.apiUrl + 'login',
        data,
        {
          headers: reqHeader,
        }
      );

      const locationsSubscription = result.subscribe({
        next(data) {
          console.log(data);
          const dataHolder = data;
          resolve(dataHolder);
        },
        error(msg) {
          console.log('Error', msg);
          resolve(null);
        },
      });
    });

    let result = await promise;
    return result;
  }


  /* Get items **/
  public async getItems() {

    let promise = new Promise((resolve, reject) => {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer 92|K3StEIL3s1fa6opkAVKR2hYyKex1wcVLhV8gvYrw'
      });

      let result = this.http.get(
        environment.apiUrl + 'item',
        {
          headers: reqHeader,
        }
      );

      const locationsSubscription = result.subscribe({
        next(data) {
          console.log(data);
          const dataHolder = data;
          resolve(dataHolder);
        },
        error(msg) {
          console.log('Error', msg);
          resolve(null);
        },
      });
    });

    let result = await promise;
    return result;
  }

  /** Store item */
  public async storeItem(id_owner: BigInteger, id_newOwner: BigInteger, modelName: string, recycled_percent: BigInteger, water_used: BigInteger, carbon: BigInt, category: string, state: string) {

    const data = {
      id_owner: id_owner,
      id_newOwner: id_newOwner,
      modelName: modelName,
      recycled_percent: recycled_percent,
      water_used: water_used,
      carbon: carbon,
      category: category,
      state: state
    }

    let promise = new Promise((resolve, reject) => {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      });

      let result = this.http.post(
        environment.apiUrl + 'item',
        data,
        {
          headers: reqHeader,
        }
      );

      const locationsSubscription = result.subscribe({
        next(data) {
          console.log(data);
          const dataHolder = data;
          resolve(dataHolder);
        },
        error(msg) {
          console.log('Error', msg);
          resolve(null);
        },
      });
    });

    let result = await promise;
    return result;
  }

  /* Get item(item_id) **/
  public async getItem_id() {

    let promise = new Promise((resolve, reject) => {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer 92|K3StEIL3s1fa6opkAVKR2hYyKex1wcVLhV8gvYrw'
      });

      let result = this.http.get(
        environment.apiUrl + 'item/{item_id}',
        {
          headers: reqHeader,
        }
      );

      const locationsSubscription = result.subscribe({
        next(data) {
          console.log(data);
          const dataHolder = data;
          resolve(dataHolder);
        },
        error(msg) {
          console.log('Error', msg);
          resolve(null);
        },
      });
    });

    let result = await promise;
    return result;
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Process...',
    });
    await this.loading.present();
  }

  async hideLoading() {
    await new Promise((resolve) => setTimeout(resolve, 700));
    this.loading.dismiss();
  }

}
