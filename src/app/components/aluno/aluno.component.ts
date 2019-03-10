import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { MsgService } from 'src/app/services/msg.service';
import { DateConstants } from 'src/app/util/date-constants';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  listaAlunos: any[] = [];
  aluno: Aluno = new Aluno();
  page: number;
  size: number;
  ptBr = DateConstants.getCalendar();

  constructor(
    private alunoService: AlunoService,
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
    this.alunoService.buscarTodosAlunos(page, size).subscribe(result => {
      this.listaAlunos = result;
    });
  }

  salvarAluno() {
    if (this.validarCpf()) {
      this.alunoService.salvarAluno(this.aluno).subscribe(
        res => {
          this.alunoService.buscarTodosAlunos(this.page, this.size).subscribe(
            lista => {
              this.listaAlunos = lista;
              this.limparForm();
              this.msgService.msgSucesso('Registro salvo');
            }
          );
        },
        error => {
          this.msgService.msgErro(error.error.message);
        }
      );
    }else{
      this.msgService.msgErro('CPF não preenchido');
    }
  }

  limparForm() {
    this.aluno = new Aluno();
  }

  editar(alunoSelecionado) {
    this.aluno = JSON.parse(JSON.stringify(alunoSelecionado));
    this.aluno.dataNascimento = new Date(this.aluno.dataNascimento);
  }

  excluir(alunoSelecionado) {
    this.alunoService.excluir(alunoSelecionado.id).subscribe(
      res => {
        this.alunoService.buscarTodosAlunos(this.page, this.size).subscribe(
          lista => {
            this.listaAlunos = lista;
            this.msgService.msgSucesso('Registro excluido');
          }
        );
      }
    );
  }

  validarCpf(): boolean {
    return this.aluno.cpf ? true : false;
  }


}
