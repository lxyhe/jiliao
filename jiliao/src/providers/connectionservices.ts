import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
declare var io: any;
import * as $ from 'jquery';
@Injectable()
export class ConnectionServices {
  public socketHost;
  public socket;
  constructor(public http: Http, public events: Events) {
    this.connectInit();
    this.socket.on('chat message', function(msg) {
      console.log("服务端消息:" + msg)
      $('#messages').append($('<li>').text(msg));
    });
    this.socket.on('newUser',function(){
      console.log('欢迎新人加入聊天室')
    })
  }
  connectInit() {
    console.log('连接server端成功');
    this.socketHost = "http://localhost:3000";
    this.socket = io(this.socketHost);
  }
  chatMessage(msge) {
    this.socket.emit('chat message', msge);
  }

}
