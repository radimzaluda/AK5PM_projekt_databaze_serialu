import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SerialinfoService } from 'src/app/services/serialinfo.service';

@Component({
  selector: 'app-serialinfo',
  templateUrl: './serialinfo.page.html',
  styleUrls: ['./serialinfo.page.scss'],
})
export class SerialinfoPage implements OnInit {

  
  serial=null as any;
  imageBaseUrl = environment.images;
  
    constructor(private route: ActivatedRoute, private serialinfoService: SerialinfoService) { }
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.serialinfoService.getSerialInfo(id).subscribe((res) =>
       {console.log(res);
      this.serial=res;
      });
    }

}
