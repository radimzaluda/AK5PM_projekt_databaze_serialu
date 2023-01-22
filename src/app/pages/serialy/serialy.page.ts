import { Component, OnInit } from '@angular/core';
import { SerialinfoService } from 'src/app/services/serialinfo.service';

@Component({
  selector: 'app-serialy',
  templateUrl: './serialy.page.html',
  styleUrls: ['./serialy.page.scss'],
})
export class SerialyPage implements OnInit {

  constructor(private SerialinfoService: SerialinfoService) { }

  ngOnInit() {
  }

}
