import { Curso } from './curso';

export class Disciplina {
  id: number;
  nome: string;
  curso: Curso = new Curso();
}