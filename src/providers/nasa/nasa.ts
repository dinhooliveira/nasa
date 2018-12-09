import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the NasaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NasaProvider {
  private KEY = "ejp2JCf0kESngXxA8qg2GMbNvnl7jdGI60ers2pM";
  private URL_API ="https://images-api.nasa.gov/";
  private URL_API2 = "https://api.nasa.gov/DONKI/CME?";
  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello NasaProvider Provider');
  }
  
  imagens(search:any=""){
    return new Promise((resolve,reject)=>{
      let url = this.URL_API+"search?q="+search;
      this.http.get(url).subscribe((result:any)=>{
        resolve(result)
      },
      (error)=>{
          reject(error);
      })
    });
   
  }

  feed(date_start,date_end){
    return new Promise((resolve,reject)=>{

      let loading = this.loadingCtrl.create({
        content: 'Procurando...',
        duration: 10000
      });
      loading.present();

      let url = this.URL_API2+"startDate="+date_start+"&endDate"+date_end+"&api_key="+this.KEY;
      this.http.get(url).subscribe((result:any)=>{
        loading.dismiss();
        resolve(result)
      },
      (error)=>{
        loading.dismiss();
          reject(error);
      })
    });
   
  }




}
