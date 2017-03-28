import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Getuserlist }from '../../providers/getuserlist';
import { ChatboundaryPage } from '../chatboundary/chatboundary';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public chatlist;
  constructor(
    public navCtrl: NavController,
    public getuserlistCtrl: Getuserlist,
  ) {
    this.getuserlistCtrl.getuserlist()
    .then(res=>{
      this.chatlist=res;

      console.log(this.chatlist.currentTime)
    })
}

gochat(){
  console.log("11111")
  this.navCtrl.push(ChatboundaryPage);
}
}
