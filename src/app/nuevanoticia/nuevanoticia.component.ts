import { Component, OnInit } from '@angular/core';
import { NotiDBService } from '../services/notidb.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevanoticia',
  templateUrl: './nuevanoticia.component.html',
  styleUrls: ['./nuevanoticia.component.css']
})
export class NuevanoticiaComponent implements OnInit {
  forma: FormGroup;

  noticia: Object = {
    title: null,
    subtitle: null,
    notimg: null,
    autor: null,
    fecha: null,
    nottext: null
  };

  constructor(public _noticia: NotiDBService, private router: Router) {
    this.forma = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'subtitle': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'notimg': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'autor': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'fecha': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      'nottext': new FormControl('', [Validators.required, Validators.minLength(5)])
    });
   }

  ngOnInit() {
  }

  alta() {
    this._noticia.addNoticia(this.noticia).subscribe(res => { console.log('subscribe'); this.router.navigate(['admin']); });
  }

  cancelar() {
    this.router.navigate(['/admin']);
  }

}
