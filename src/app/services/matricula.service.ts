import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Matricula } from '../model/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  urlMatriculas = environment.apiUrl + '/matriculas/';

  constructor(private http: HttpClient) { }

  buscarTodasMatriculas(_page,_size): Observable<any> {
    return this.http.get(this.urlMatriculas, {
      params: {
        page: _page,
        size: _size
      }
    });
  }

  salvarMatricula(matricula: Matricula): Observable<any>{
    return this.http.post(this.urlMatriculas, matricula);
  }

  excluir(idMatricula: number){
    return this.http.delete(this.urlMatriculas + idMatricula);
  }
}
