import { Component } from '@angular/core';
//import { Http } from '@angular/http';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { TabsPage } from '../tabs/tabs';

var debug = 1;
var debug_email = 'a0970713198@gmail.com';
var debug_passwd = '850611abc';

declare var FCMPlugin;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private data: any;
  private output: any;
  
  constructor(//private http: Http, 
              private navCtrl: NavController, 
              private navParams: NavParams,
              private loadingCtrl: LoadingController,
              private nativeStorage: NativeStorage,
              //private sqlite: SQLite,
              private platform: Platform,
              ) {
    
    this.data = {};
    if ( debug == 1 ) {
      this.data.userid = debug_email;
      this.data.userpasswd = debug_passwd;
    } // if
    else {
      this.data.userid = '';
      this.data.userpasswd = '';
    } // else
      
    this.data.response = '';    
    
  } // constructor()

  submit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present().then(() => {
      this.nativeStorage.setItem('UserData', { userid: this.data.userid, userpasswd: this.data.userpasswd })
      .then(
        () => console.log('Stored item!'),
        error => console.log('Error storing item: ' + error)
      );
      loading.dismiss();
      this.navCtrl.push(TabsPage);
    });
  }
  

  
  
} // class