import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaModel } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-listar',
  imports: [RouterLink],
  templateUrl: './tarefa-listar.html',
  styleUrl: './tarefa-listar.scss',
})
export class TarefaListar {

  private readonly tarefaService = inject(TarefaService);

  tarefas = signal<TarefaModel[]>([]);

  ngOnInit() {
    this.carregarTarefas();
  }

  readonly totalMinutos = computed(() => {
    let total = 0;

    this.tarefas().forEach((tarefa) => {
      total += tarefa.horasEstimadas ?? 0;
    });

    return total;
  });

  carregarTarefas(): void {
    this.tarefaService.listar().subscribe({
      next: (tarefas) => {
        const tarefasOrdenadas = tarefas.sort((x, y) =>
          x.descricao.localeCompare(y.descricao)
        );

        this.tarefas.set(tarefasOrdenadas);
      },

      error: (error) => {
        console.error(error);
        alert('Erro ao carregar tarefas');
      }
    });
  }
}