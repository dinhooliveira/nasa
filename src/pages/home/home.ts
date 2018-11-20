import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NasaProvider} from '../../providers/nasa/nasa';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  constructor(
    public navCtrl: NavController,
    public nasa:NasaProvider,
    ) {
  }

  public  dados:any = [];
  public next:any=false;

   search(search:any=""){
     let s = search != "" ? search.target.value : "";
    this.nasa.imagens(s)
    .then((result:any)=>{
      console.log(result);
      this.dados = result.collection.items;
      this.next = result.collection.links.next;
      console.log(this.next);


    })
    .catch((error:any)=>{
      
    });

   }

 
 

}
