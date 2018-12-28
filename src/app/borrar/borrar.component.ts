import { Component, OnInit } from '@angular/core';
import { NotiDBService } from '../services/notidb.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})

export class BorrarComponent implements OnInit {

  constructor(public _noticia: NotiDBService, private activatedRoute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._noticia.delNoticia(params['id']).subscribe(res => { console.log('subscribe-del'); this.router.navigate(['/admin']); });
      this.router.navigate(['/admin']);
    });
    location.reload();
    this.router.navigate(['/admin']);
  }
}
