import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotiDBService {

    noticias: any[] = [];
    noticia: any = {};

    noticiasUrl = 'http://localhost:3000/';

    constructor(public http: HttpClient) { }

    getNoticias() {
        return this.http.get(this.noticiasUrl + 'noticias')
            .map((resp: any) => {
                this.noticias = resp;
                return this.noticias;
            });
    }


    addNoticia(noticia) {
        return this.http.post(this.noticiasUrl + 'noticia', noticia)
            .map((resp: any) => {
                this.noticia = resp;
                return this.noticia;
            });
    }


    delNoticia(noticiaid: string) {
        return this.http.delete(this.noticiasUrl + 'noticia/' + noticiaid);
    }


    getNoticia(idx: string) {
        return this.noticias[idx];
    }

    updateNoticia(noticia) {
        return this.http.put(this.noticiasUrl + 'noticias/' + noticia._id, noticia);
    }
}
