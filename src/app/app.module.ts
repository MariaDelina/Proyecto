import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarAcercaDeComponent} from './componentes/Acerca-de/editar-acerca-de.component';
import { ListaAcercaDeComponent } from './componentes/Acerca-de/lista-acerca-de.component';
import { NuevoAcercadeComponent } from './componentes/Acerca-de/nuevo-acerca-de.component'
import { EditarPresentacionComponent } from './componentes/presentacion/editar-presentacion.component';
import { ListaPresentacionComponent } from './componentes/presentacion/lista-de-presentacion.component'
import { NuevaPresentacionComponent } from './componentes/presentacion/nueva-presentacion.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditarAcercaDeComponent,
    ListaAcercaDeComponent,
    NuevoAcercadeComponent,
    NuevaPresentacionComponent,
    ListaPresentacionComponent,
    EditarPresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
