import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';

import { PokeapiService } from './services/pokeapi.service';
import { NavService } from './services/nav.service';
import { FooterService } from './services/footer.service';
import { NotiDBService } from './services/notidb.service';
import { MessageService } from './services/mensajeria.service';

import { ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoticiasComponent } from './noticias/noticias.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { BattleSimulatorComponent } from './battle-simulator/battle-simulator.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { EditnoticiaComponent } from './editnoticia/editnoticia.component';
import { BorrarComponent } from './borrar/borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PokedexComponent,
    BattleSimulatorComponent,
    LoginadminComponent,
    NuevanoticiaComponent,
    EditnoticiaComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PokeapiService,
    NavService,
    FooterService,
    NotiDBService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
