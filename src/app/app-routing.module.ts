import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAcercaDeComponent } from './componentes/Acerca-de/lista-acerca-de.component';
import { NuevoAcercadeComponent } from './componentes/Acerca-de/nuevo-acerca-de.component';
import { EditarAcercaDeComponent} from './componentes/Acerca-de/editar-acerca-de.component';
import { AppComponent } from './app.component';
import { NuevaPresentacionComponent } from './componentes/presentacion/nueva-presentacion.component';



const routes: Routes = [
  {path: '', component: AppComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'nuevoacercade', component: NuevoAcercadeComponent},
  {path: 'editaracercade/:id', component: EditarAcercaDeComponent},
  {path: 'nuevapresentacion', component: NuevaPresentacionComponent},
  {path: 'editarpresentacion/:id', component: EditarAcercaDeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
