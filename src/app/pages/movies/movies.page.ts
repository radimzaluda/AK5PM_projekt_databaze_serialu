import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = [] as any;
  currentPage = 1;
  imageBaseUrl = environment.images;
  searchterm: string | undefined;
 
  constructor(
    private movieService: MovieService,
    private loadingCtrl: LoadingController
  ) {}
 
  ngOnInit() {
    this.nactiFilmy();
  }
 
  async nactiFilmy(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Načítám další filmy...',
      spinner: 'bubbles',
    });
    await loading.present();
 
    this.movieService.getNejlepeHodnoceFilmy(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        this.movies.push(...res.results);
 
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
    this.nactiFilmy(event);
  }
}