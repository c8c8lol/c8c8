import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ScheDetailPage } from './scheDetail/scheDetail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private worker: any;
  private sche: any;

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController) {
    this.init();
  }

  private init(){
    this.worker = ["Serj", "Daron", "Shavo", "John", "Sako", "Jack", "Jim", "Rumi", "Sevag"];
    this.sche = [];
    this.create_schedule_easy();
  }

  ionViewWillEnter(){
    this.init();
  }

  private create_schedule_easy(){
    let count = 0;   
    for(let day=1; day<=30; day++){
      let sche_day = {
          date: day,
          worker: [],
          sche_time: []
        };
      sche_day.date = day;
      for(let no = 0; no < 3; no++){
        let sche_time_temp = {
          time: "",
          worker: [],
        };

        if(no == 0)
            sche_time_temp.time = "早班";
        else if(no == 1)
          sche_time_temp.time = "小夜班";
        else
          sche_time_temp.time = "大夜班";
        for(let i = 0; i < 2; i++, count++){
          sche_day.worker.push(this.worker[count%9]);
          sche_time_temp.worker.push(this.worker[count%9]);
        }
        sche_day.sche_time.push(sche_time_temp);
      }
      this.sche.push(sche_day);
    }

    console.log(this.sche);
        
  }

  go_scheDetail(sche){
    let profileModal = this.modalCtrl.create(ScheDetailPage, { 
      param1: sche
    }, {showBackdrop: false});
    profileModal.present();
  }

}
