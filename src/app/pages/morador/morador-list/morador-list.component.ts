import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmDialogComponent } from '../../../@theme/components';
import { MoradorService } from '../morador.service';

@Component({
  selector: 'morador-list',
  templateUrl: './morador-list.component.html',
  styleUrls: ['./morador-list.component.scss']
})
export class MoradorListComponent implements OnInit {

  constructor(private service: MoradorService, private dialog: NbDialogService, private toastr: NbToastrService) { }

  moradores: any[];

  async ngOnInit() {
    await this.Update();
  }

  async Update() {
    this.moradores = await this.service.GetAll();
  }

  async Remover(id: number) {
    let ref = this.dialog.open(ConfirmDialogComponent, { context: { Title: "Remover Morador", Content: "Tem certeza de que deseja remover este morador?" } });
    ref.componentRef.instance.OnConfirm.subscribe(async e => {
      try {
        await this.service.DeleteMorador(id);
        this.toastr.success("Sucesso ao remover morador", "Sucesso");
        await this.Update();
      } catch (e) {
        this.toastr.danger("Falha ao remover morador", "Erro");
      }
    })
  }

}
