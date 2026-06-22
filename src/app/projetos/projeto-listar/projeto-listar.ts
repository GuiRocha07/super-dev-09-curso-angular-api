import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjetoModel } from '../../models/projeto.model';
import { ProjetoService } from '../../services/projeto.service';

@Component({
  selector: 'app-projeto-listar',
  imports: [RouterLink],
  templateUrl: './projeto-listar.html',
  styleUrl: './projeto-listar.scss',
})
export class ProjetoListar {

  private readonly projetoService = inject(ProjetoService);

  projetos = signal<ProjetoModel[]>([]);

  ngOnInit() {
    this.carregarProjetos();
  }

  carregarProjetos(): void {
    this.projetoService.listar().subscribe({
      next: (projetos) => {
        const projetosOrdenados = projetos.sort((x, y) =>
          x.nome.localeCompare(y.nome)
        );

        this.projetos.set(projetosOrdenados);
      },
      error: (erro) => {
        console.error(erro);
      }
    });
  }
}