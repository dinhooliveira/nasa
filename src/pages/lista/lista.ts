import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {NasaProvider} from '../../providers/nasa/nasa';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  date_start = '2017-01-01';
  date_end = '2017-01-20';
  dados =[];
  constructor(
    public navCtrl: NavController, 
    public nasa:NasaProvider,
    public alertCtrl: AlertController
    ) {
      this.search();
    }

    valida(){
       if(this.date_start==null || this.date_start==""){
        this.alertCtrl.create({
          title: 'Alerta!', 
          subTitle: 'Data inicial é obrigátoria',
          buttons: ['OK']
        }).present();

    

       }else if(this.date_end==null || this.date_end==""){
        this.alertCtrl.create({
          title: 'Alerta!', 
          subTitle: 'Data  final é obrigátoria',
          buttons: ['OK']
        }).present();

       }else{
        this.search();
       }
    }

    search(){
   
     this.nasa.feed(this.date_start,this.date_end)
     .then((result:any)=>{
        if(result == null){
          this.alertCtrl.create({
            title: 'Alerta!', 
            subTitle: 'Não foi encontrado informação para esse periodo',
            buttons: ['OK']
          }).present();
        }else{
          this.dados = result;
        }
     })
     .catch((error:any)=>{
       console.log(error);
     });
 
    }


    

}
