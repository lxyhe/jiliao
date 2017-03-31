import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionServices }  from '../../providers/connectionservices';
//import * as $ from 'jquery';
declare var  io:any;

@Component({
  selector: 'page-chatboundary',
  templateUrl: 'chatboundary.html'
})
export class ChatboundaryPage {
  public myInput;
  constructor(public navCtrl: NavController, public navParams: NavParams,public conserver:ConnectionServices,public events:Events ) {
  }
  onInput(){
    this.conserver.chatMessage(this.myInput);
    this.myInput='';
  }

}
