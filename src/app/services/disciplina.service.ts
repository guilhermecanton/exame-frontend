import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Disciplina } from '../model/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  urlDisciplinas = environment.apiUrl + '/disciplinas/';

  constructor(private http: HttpClient) { }

  buscarTodasDisciplinas(_page,_size): Observable<any> {
    return this.http.get(this.urlDisciplinas, {
      params: {
        page: _page,
        size: _size
      }
    });
  }

  salvarDisciplina(disciplina: Disciplina): Observable<any>{
    return this.http.post(this.urlDisciplinas, disciplina);
  }

  excluir(idDisciplina: number){
    return this.http.delete(this.urlDisciplinas + idDisciplina);
  }
}
