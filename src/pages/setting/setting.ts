import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  private worker_data: any;

  constructor(public navCtrl: NavController) {
    this.worker_data = {
      name: "林均柔",
      phone: "0912345678",
      mail: "aaa@gmail.com",
      id: "A012345",
      position: "掃地阿婆",
      pw: "12345"
    };
  }


  private EditData(){
    //this.username = this.username;
  }



}
