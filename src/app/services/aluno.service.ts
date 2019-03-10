import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.prod';
import { Aluno } from '../model/aluno';
@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  urlAlunos = environment.apiUrl + '/alunos/';

  constructor(private http: HttpClient) { }

  buscarTodosAlunos(_page, _size): Observable<any> {
    if (_page != null && _size != null) {
      return this.http.get(this.urlAlunos, {
        params: {
          page: _page,
          size: _size
        }
      });
    } else {
      return this.http.get(this.urlAlunos);
    }
  }

  salvarAluno(aluno: Aluno): Observable<any> {
    return this.http.post(this.urlAlunos, aluno);
  }

  excluir(idAluno: number) {
    return this.http.delete(this.urlAlunos + idAluno);
  }

}
