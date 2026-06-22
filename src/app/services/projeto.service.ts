import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjetoModel } from '../models/projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private readonly http = inject(HttpClient);

  listar(): Observable<ProjetoModel[]> {

    const url =
      'https://api.franciscosensaulas.com/api/v1/trabalho/projetos';

    return this.http.get<ProjetoModel[]>(url);
  }

  cadastrar(projeto: ProjetoModel): Observable<ProjetoModel> {

    const url =
      'https://api.franciscosensaulas.com/api/v1/trabalho/projetos';

    return this.http.post<ProjetoModel>(url, projeto);
  }
}