import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  items: MenuItem[];


  ngOnInit() {

    this.items = [
      { label: 'Aluno' },
      { label: 'Curso' },
      { label: 'Disciplina' },
      { label: 'Matrícula' }
    ];
  }

  navegar(event) {
    /*
    * a expressão regular abaixo
    * é utilizada para remover 
    * os acentos
    */
    const link = event.srcElement.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    this.router.navigateByUrl(link);
  }
}

