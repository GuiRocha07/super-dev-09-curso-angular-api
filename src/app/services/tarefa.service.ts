import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaModel } from '../models/tarefa.model';

// Service é responsável pela comunicação com a API.
// Centraliza todas as requisições relacionadas às tarefas.
@Injectable({
  providedIn: 'root',
})
export class TarefaService {

  // Cliente HTTP responsável por fazer requisições para o backend (API)
  private readonly http = inject(HttpClient);

  // Método responsável por listar todas as tarefas
  listar(): Observable<TarefaModel[]> {

  }
    // URL da API que retorna a lista de tarefas
   
   cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {
    const url = 'https://api.franciscosensaulas.com/api/v1/trabalho/tarefas';

    // Realiza uma requisição POST para criar uma nova tarefa
    // Observable<TarefaModel> significa que será retornada
    // uma única tarefa de forma assíncrona
    return this.http.post<TarefaModel>(url, tarefa);
}
}