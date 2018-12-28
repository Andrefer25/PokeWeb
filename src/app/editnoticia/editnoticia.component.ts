import { Component, OnInit } from '@angular/core';
import { NotiDBService } from '../services/notidb.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-editnoticia',
  templateUrl: './editnoticia.component.html',
  styleUrls: ['./editnoticia.component.css']
})
export class EditnoticiaComponent implements OnInit {

  noticia: Object = {
    title: null,
    subtitle: null,
    notimg: null,
    autor: null,
    fecha: null,
    nottext: null
  };

  editForm: FormGroup;

  constructor(public _noticia: NotiDBService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    const idnoti = localStorage.getItem('noticiaid');
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      notimg: ['', Validators.required],
      autor: ['', Validators.required],
      fecha: ['', Validators.required],
      nottext: ['', Validators.required]
    });
    this.noticia = this._noticia.getNoticia(idnoti);
    this.editForm.setValue(this.noticia);
  }

  updateNoticia() {
    /*console.log(this.noticia);
    this._noticia.updateNoticia(this.noticia).subscribe(res => { console.log('subscribe'); this.router.navigate(['/admin']); });*/
    alert('no funca jaja saludos. Suerte');
    this.router.navigate(['/admin']);
  }

  cancelar() {
    this.router.navigate(['/admin']);
  }
}
