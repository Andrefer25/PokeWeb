import { Component, OnInit } from '@angular/core';
import { NotiDBService } from '../services/notidb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: any[] = [];

  constructor(private router: Router, public _NotiService: NotiDBService) { }

  ngOnInit() {
    this._NotiService.getNoticias().subscribe(info => {
      console.log(info);
      this.noticias = info;
    });
  }

}
