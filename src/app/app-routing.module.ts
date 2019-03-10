import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './components/aluno/aluno.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { CursoComponent } from './components/curso/curso.component';
import { MatriculaComponent } from './components/matricula/matricula.component';

const routes: Routes = [
  {
    path: '', component: AlunoComponent
  },
  {
    path: 'aluno', component: AlunoComponent,
  },
  {
    path: 'disciplina', component: DisciplinaComponent,
  },
  {
    path: 'curso', component: CursoComponent,
  },
  {
    path: 'matricula', component: MatriculaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
