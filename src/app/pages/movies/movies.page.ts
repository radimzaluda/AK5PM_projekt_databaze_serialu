import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies = [];
  currentPage = 1;

  constructor(private movieService:MovieService, private loadingController:LoadingController) { }

  ngOnInit() {
  
    this.nactiFilmy();
  }

  async nactiFilmy(){
    const loading = await this.loadingController.create({
      message: 'Načítám...',
      spinner: 'bubbles',
    });
    await loading.present();


    this.movieService.getNejlepeHodnoceneFilmy(this.currentPage).subscribe(res => {
      loading.dismiss();
      this.movies = [...res.results];

      console.log(res);
  });
  }
}
