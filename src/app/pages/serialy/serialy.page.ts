import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SerialinfoService } from 'src/app/services/serialinfo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-serialy',
  templateUrl: './serialy.page.html',
  styleUrls: ['./serialy.page.scss'],
})
export class SerialyPage implements OnInit {

  serialy = [] as any;
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(
    private SerialinfoService: SerialinfoService,
     private loadingCtrl: LoadingController) 
     { }

  ngOnInit() {
    this.nacteniSerialu();
  }

   async nacteniSerialu(event?: InfiniteScrollCustomEvent){

      const loading = await this.loadingCtrl.create({
        message: 'Načítám další seriály...',
        spinner: 'bubbles',

      } );

      await loading.present();

 this.SerialinfoService.getNejlepeHodnoceneSerialy(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.serialy.push(...res.results);

        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
 
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
   this.nacteniSerialu(event);
  }
}
