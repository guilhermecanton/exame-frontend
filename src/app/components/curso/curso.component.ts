import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/services/curso.service';
import { MsgService } from 'src/app/services/msg.service';
import { DateConstants } from 'src/app/util/date-constants';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  listaCursos: any[] = [];
  curso: Curso = new Curso();
  page: number;
  size: number;
  ptBr = DateConstants.getCalendar();

  constructor(
    private cursoService: CursoService,
    private msgService: MsgService
  ) { }

  ngOnInit() {
  }

  lazyLoad(event) {
    if (event) {
      this.buscarTodos(event.first, event.rows);
      this.page = event.first;
      this.size = event.rows;
    }
  }

  buscarTodos(page, size) {
    this.cursoService.buscarTodosCursos(page, size).subscribe(result => {
      this.listaCursos = result;
    });
  }

  salvarCurso() {
    this.cursoService.salvarCurso(this.curso).subscribe(
      res => {
        this.cursoService.buscarTodosCursos(this.page, this.size).subscribe(
          lista => {
            this.listaCursos = lista;
            this.limparForm();
            this.msgService.msgSucesso('Registro salvo');
          }
        );
      },
      error => {
        console.log(error);
        this.msgService.msgSucesso(error);
      }
    );
  }

  limparForm() {
    this.curso = new Curso();
  }

  editar(cursoSelecionado) {
    this.curso = JSON.parse(JSON.stringify(cursoSelecionado));
    this.curso.dataInicio = new Date(this.curso.dataInicio);
    this.curso.dataFim = new Date(this.curso.dataFim);
  }

  excluir(cursoSelecionado) {
    this.cursoService.excluir(cursoSelecionado.id).subscribe(
      res => {
        this.cursoService.buscarTodosCursos(this.page, this.size).subscribe(
          lista => {
            this.listaCursos = lista;
            this.msgService.msgSucesso('Registro excluido');
          }
        );
      },
      error => {
        this.msgService.msgErro(error.error.message);
      }
    );
  }

}
