import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/mensajeria.service';
import { PokeapiService } from '../services/pokeapi.service';
import { NotiDBService } from '../services/notidb.service';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { NoticiasComponent } from '../noticias/noticias.component';
const swal: SweetAlert = _swal as any;

function getRandomId() {
  return Math.floor((Math.random() * 120) + 1);
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  pokemons: any[] = [];
  numero: number;
  noticias: any[] = [];

  constructor(public _pokedex: PokeapiService, private router: Router, public _Mensajeria: MessageService,
    public _NotiService: NotiDBService) {
  }

  ngOnInit() {
    this._pokedex.getPokemons().subscribe(data => {
      console.log(data);
      this.pokemons = data;
    });
    this.numero = getRandomId();
    this._NotiService.getNoticias().subscribe(info => {
      console.log(info);
      this.noticias = info;
    });
  }

  contactForm(form) {
    this._Mensajeria.sendMessage(form).subscribe(() => {
      swal('Newsletter', 'Mensaje enviado correctamente', 'success');
    });
  }

}
