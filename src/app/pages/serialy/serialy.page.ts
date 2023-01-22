import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { SerialinfoService } from 'src/app/services/serialinfo.service';

@Component({
  selector: 'app-serialy',
  templateUrl: './serialy.page.html',
  styleUrls: ['./serialy.page.scss'],
})
export class SerialyPage implements OnInit {

  serialy = [];
  aktualniStranka = 1;

  constructor(private SerialinfoService: SerialinfoService, private controller: LoadingController) { }

  ngOnInit() {
    this.nacteniSerialu();
  }

   async nacteniSerialu(){

      const loading = await this.controller.create({
        message: 'nacitam serialy...',
        spinner: 'bubbles',

      } );

      await loading.present();


      this.SerialinfoService.getNejlepeHodnoceneSerialy(this.aktualniStranka).subscribe((res) => {
        loading.dismiss();
     //   this.serialy.push (...res.results);
        console.log(res);
      });
    }
}
