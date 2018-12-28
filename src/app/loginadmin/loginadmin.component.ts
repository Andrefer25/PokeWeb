import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NotiDBService } from '../services/notidb.service';
import { Router } from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})

export class LoginadminComponent implements OnInit {

  noticias: any[];
  dataTable: any;
  constructor(public _noticia: NotiDBService, private router: Router, private chRef: ChangeDetectorRef) { }

  ngOnInit() {
    this._noticia.getNoticias().subscribe(data => {
      this.noticias = data;
      this.chRef.detectChanges();
      const table: any = $('table');
      this.dataTable = table.DataTable();

    });
  }

  addNoticia(): void {
    this.router.navigate(['/admin', 'nuevo']);
  }

  delNoticia(id: string) {
    localStorage.removeItem('noticiaid');
    localStorage.setItem('noticiaid', id);
    this.router.navigate(['/admin', 'del', id]);
  }

  editNoticia(id: string): void {
    localStorage.removeItem('noticiaid');
    localStorage.setItem('noticiaid', id);
    this.router.navigate(['/admin', 'edit', id]);
  }

}
