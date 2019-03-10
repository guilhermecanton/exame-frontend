import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Disciplina } from 'src/app/model/disciplina';
import { Matricula } from 'src/app/model/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';
import { CursoService } from 'src/app/services/curso.service';
import { AlunoService } from 'src/app/services/aluno.service';
import { MsgService } from 'src/app/services/msg.service';
import { CustomUtils } from 'src/app/util/custom-util';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  listaMatriculas: any[] = [];
  listaCursos: SelectItem[];
  listaAlunos: SelectItem[];
  matricula: Matricula = new Matricula();
  page: number;
  size: number;

  constructor(
    private matriculaService: MatriculaService,
    private cursoService: CursoService,
    private alunoService: AlunoService,
    private msgService: MsgService
  ) { }

  ngOnInit() {
    this.buscarCursos();
    this.buscarAlunos();
  }

  lazyLoad(event) {
    if (event) {
      this.buscarTodos(event.first, event.rows);
      this.page = event.first;
      this.size = event.rows;
    }
  }

  buscarTodos(page, size) {
    this.matriculaService.buscarTodasMatriculas(page, size).subscribe(result => {
      this.listaMatriculas = result;
    });
  }

  salvarMatricula() {
    this.matriculaService.salvarMatricula(this.matricula).subscribe(
      res => {
        this.matriculaService.buscarTodasMatriculas(this.page, this.size).subscribe(
          lista => {
            this.listaMatriculas = lista;
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
    this.matricula = new Matricula();
  }

  editar(matriculaSelecionada) {
    this.matricula = JSON.parse(JSON.stringify(matriculaSelecionada));
  }

  excluir(matriculaSelecionada) {
    this.matriculaService.excluir(matriculaSelecionada.id).subscribe(
      res => {
        this.matriculaService.buscarTodasMatriculas(this.page, this.size).subscribe(
          lista => {
            this.listaMatriculas = lista;
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

  buscarAlunos(){
    this.alunoService.buscarTodosAlunos(null,null).subscribe(
      res => this.listaAlunos = CustomUtils.entityToDropDown(res.content, CustomUtils.CAMPO_LABEL_PADRAO, CustomUtils.CAMPO_VALOR_PADRAO)
    );
  }

}
