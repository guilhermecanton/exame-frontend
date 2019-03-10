import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { DateConstants } from 'src/app/util/date-constants';
import { MsgService } from 'src/app/services/msg.service';
import { SelectItem } from 'primeng/api';
import { CursoService } from 'src/app/services/curso.service';
import { CustomUtils } from 'src/app/util/custom-util';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  listaDisciplinas: any[] = [];
  listaCursos: SelectItem[];
  disciplina: Disciplina = new Disciplina();
  page: number;
  size: number;
  ptBr = DateConstants.getCalendar();

  constructor(
    private disciplinaService: DisciplinaService,
    private cursoService: CursoService,
    private msgService: MsgService
  ) { }

  ngOnInit() {
    this.buscarCursos();
  }

  lazyLoad(event) {
    if (event) {
      this.buscarTodos(event.first, event.rows);
      this.page = event.first;
      this.size = event.rows;
    }
  }

  buscarTodos(page, size) {
    this.disciplinaService.buscarTodasDisciplinas(page, size).subscribe(result => {
      this.listaDisciplinas = result;
    });
  }

  salvarDisciplina() {
    this.disciplinaService.salvarDisciplina(this.disciplina).subscribe(
      res => {
        this.disciplinaService.buscarTodasDisciplinas(this.page, this.size).subscribe(
          lista => {
            this.listaDisciplinas = lista;
            this.limparForm();
            this.msgService.msgSucesso('Registro salvo');
          }
        );
      },
      error => {
        this.msgService.msgSucesso(error);
      }
    );
  }

  limparForm() {
    this.disciplina = new Disciplina();
  }

  editar(disciplinaSelecionada) {
    this.disciplina = JSON.parse(JSON.stringify(disciplinaSelecionada));
  }

  excluir(disciplinaSelecionada) {
    this.disciplinaService.excluir(disciplinaSelecionada.id).subscribe(
      res => {
        this.disciplinaService.buscarTodasDisciplinas(this.page, this.size).subscribe(
          lista => {
            this.listaDisciplinas = lista;
            this.msgService.msgSucesso('Registro excluido');
          }
        );
      },
      error => {
        this.msgService.msgErro(error.error.message);
      }
    );
  }

  buscarCursos(){
    this.cursoService.buscarTodosCursos(null,null).subscribe(
      res => this.listaCursos = CustomUtils.entityToDropDown(res.content, CustomUtils.CAMPO_LABEL_PADRAO, CustomUtils.CAMPO_VALOR_PADRAO)
    );
  }



}
