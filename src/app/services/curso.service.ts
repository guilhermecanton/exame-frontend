import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.prod';
import { Curso } from '../model/curso';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  urlCursos = environment.apiUrl + '/cursos/';

  constructor(private http: HttpClient) { }

  buscarTodosCursos(_page, _size): Observable<any> {
    if (_page != null && _size != null) {
      return this.http.get(this.urlCursos, {
        params: {
          page: _page,
          size: _size
        }
      });
    } else {
      return this.http.get(this.urlCursos);
    }
  }

  salvarCurso(curso: Curso): Observable<any> {
    return this.http.post(this.urlCursos, curso);
  }

  excluir(idCurso: number) {
    return this.http.delete(this.urlCursos + idCurso);
  }
}
