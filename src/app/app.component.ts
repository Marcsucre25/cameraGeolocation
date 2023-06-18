import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBarPlugin } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private plarform:Platform,
    //private statusBar: StatusBarPlugin
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.plarform.ready().then(() => {
      //this.statusBar.setStyle();
      this.router.navigateByUrl('splash');
    })
  }
}