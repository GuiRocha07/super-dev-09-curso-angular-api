import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaModel } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {

  private readonly http = inject(HttpClient);

  listar(): Observable<TarefaModel[]> {
    const url = 'https://api.franciscosensaulas.com/api/v1/trabalho/tarefas';

    return this.http.get<TarefaModel[]>(url);
  }

  cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {
    const url = 'https://api.franciscosensaulas.com/api/v1/trabalho/tarefas';

    return this.http.post<TarefaModel>(url, tarefa);
  }
}