import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { MoradorModel } from '../model/MoradorModel';
import { MoradorService } from '../morador.service';

@Component({
  selector: 'morador-edit',
  templateUrl: './morador-edit.component.html',
  styleUrls: ['./morador-edit.component.scss']
})
export class MoradorEditComponent implements OnInit {

  constructor(private toastr: NbToastrService, private service: MoradorService, private router: Router,
    private route: ActivatedRoute) { }

  morador: MoradorModel = {
  }
  isNew = true;

  familias: any[];

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let moradorId = Number.parseInt(id);
    this.isNew = isNaN(moradorId);

    if (!this.isNew) {
      this.morador = await this.service.GetMorador(moradorId);
    }

    this.familias = await this.service.GetFamilias();
  }

  async OnSubmit(f: any) {
    var message = this.validateMorador(this.morador);
    if (message != null) {
      this.toastr.warning(message, "Atenção");
      return;
    }

    if (this.isNew) {
      try {
        let result = await this.service.AddMorador(this.morador);
        this.toastr.success("Morador criado com sucesso", "Sucesso");
        this.router.navigate(['/pages/morador']);
      } catch (e) {
        console.log(e);
        this.toastr.danger("Falha ao criar morador", "Erro");
      }
    } else {
      try {
        let result = await this.service.EditMorador(this.morador.id, this.morador);
        this.toastr.success("Morador atualizado com sucesso", "Sucesso");
        this.router.navigate(['/pages/morador']);
      } catch (e) {
        console.log(e);
        this.toastr.danger("Falha ao atualizar morador", "Erro");
      }
    }
  }

  validateMorador(e: MoradorModel) {
    if (e.nome == null || e.nome.trim().length < 1) {
      return "Nome inválido";
    }
    if (e.nome.length > 50) {
      return "Nome muito longo";
    }

    if (e.id_Familia == null || isNaN(e.id_Familia)) {
      return "Família inválida";
    }

    if (isNaN(e.quantidadeBichosEstimacao) || e.quantidadeBichosEstimacao < 0) {
      return "Quantidade de bichos de estimação inválida";
    }

    return null;
  }

}
