import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { CursoComponent } from './components/curso/curso.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { AlunoService } from './services/aluno.service';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { HttpClientModule } from '@angular/common/http';
import { MsgService } from './services/msg.service';
import {ToastModule} from 'ng6-toastr/ng2-toastr';
import {DropdownModule} from 'primeng/dropdown';
import { MatriculaService } from './services/matricula.service';
import { CursoService } from './services/curso.service';
import { DisciplinaService } from './services/disciplina.service';
import { TurnoPipe } from './pipes/turno.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlunoComponent,
    DisciplinaComponent,
    CursoComponent,
    MatriculaComponent,
    TurnoPipe
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    MenubarModule,
    DataTableModule,
    CalendarModule,
    ToastModule.forRoot(),
    DropdownModule,
    InputMaskModule
  ],
  providers: [
    AlunoService,
    MsgService,
    MatriculaService,
    CursoService,
    DisciplinaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
