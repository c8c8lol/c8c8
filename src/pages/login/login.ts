import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs/tabs';

import { AlertController } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';

import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:string;
  usermail:string;
  private mail:any;
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData,public alertCtrl: AlertController) { //private sms: SMS,private emailComposer: EmailComposer
    this.mail=
    {
      name:'',
      email:''
    }
  }

  /*getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  getmail() {
    this.userData.getUsername().then((usermail) => {
      this.usermail = usermail;
    });
  }*/

  Email() {
    let alert = this.alertCtrl.create({
      title: 'Forget Password',
      subTitle: "Enter your username and e-mail to change your password"+this.mail.name+this.mail.email+"**",

      });
      alert.addInput({
        type:'prompt',
        name: 'username',
        value: this.mail.name,
        placeholder: 'username'
      });
      alert.addInput({
        type:'prompt',
        name: 'e-mail',
        value: this.mail.email,
        placeholder: 'e-mail'
      });

      alert.addButton({
        text: 'Cancel',
        handler: (data: any) => {
          this.ForgetPW();
        }
      });

      alert.addButton({
          text: 'Submit',
          handler: (data: any) => {
            console.log("data:",data)
            //this.mail.name=this.username;
            //this.getUsername();
            //this.mail.email=this.usermail;
            //this.getmail();
          }
        });  
    
        alert.present();
      }

      SMS() {
        let alert = this.alertCtrl.create({
          title: 'Forget Password',
          subTitle: "Enter your Phone number to change password"+this.mail.name+this.mail.email+"**",
          buttons: [
            'Cancel'
          ]
          });
          alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
          });
          alert.addInput({
            name: 'phone_number',
            value: this.usermail,
            placeholder: 'phone number'
          });
            alert.addButton({
              text: 'Submit',
              handler: (data: any) => {
                this.mail.name=this.username;
                //this.getUsername();
                this.mail.email=this.usermail;
                //this.getmail();
              }
            });
        
            alert.present();
          }

  ForgetPW() {
    let alert = this.alertCtrl.create({
      title: 'Forget Password',
      subTitle: "How to change your password?",
      });
        alert.addButton({
          text: 'By E-mail',
          handler: (data: any) => {
            this.Email();
          }
        });
        alert.addButton({
          text: 'By SMS',
          handler: (data: any) => {
            this.SMS();
          }
        });
        alert.present();
      }


  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  /*this.emailComposer.isAvailable().then((available: boolean) =>{
    if(available) {
      //Now we know we can send
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'WRONG EMAIL',
        subTitle: "Please enter the correct email ,this email is unavailable",
        buttons: [
          'OK'//re-enter
        ]
        }); 
    }
   });
   
   let email = {
     to: 'max@mustermann.de',
     cc: 'erika@mustermann.de',
     bcc: ['john@doe.com', 'jane@doe.com'],
     subject: 'Cordova Icons',
     body: 'Dear @username, please enter the VSCode to change your password.\n The VCode is XXXX',
     isHtml: true
   };
   
   // Send a text message using default options
   this.emailComposer.open(email);*/

}
