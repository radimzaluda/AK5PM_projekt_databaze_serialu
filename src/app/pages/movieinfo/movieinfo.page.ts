import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Preferences } from '@capacitor/Preferences';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.page.html',
  styleUrls: ['./movieinfo.page.scss'],
})
export class MovieinfoPage implements OnInit {

movie=null as any;
imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getFilmInfo(id).subscribe((res) =>
     {console.log(res);
    this.movie=res;
    });


  }
  ulozFilm ()
  {
    
  }
}
