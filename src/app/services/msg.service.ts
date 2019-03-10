import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class MsgService {

  constructor(public toastr: ToastsManager) { }

  msgSucesso(msg: string) {
    this.toastr.success(msg,'Sucesso');
  }

  msgErro(msg: string) {
    this.toastr.error(msg,'Erro');
  }

  msgAdvertencia(msg: string) {
    this.toastr.warning(msg,'Notificação');
  }




}
