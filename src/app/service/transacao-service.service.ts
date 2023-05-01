import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, tap, Observable, retry, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transacao} from '../model/Transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoServiceService {

  baseURL = environment.baseURL + '/transactions';

  constructor(private http: HttpClient) { }






  createTransactions(transaction: any) : Observable<any> {
    var result = this.http.post<any>(this.baseURL,transaction,this.ObterHeaderJson());
    return result
  }

  ObterHeaderJson() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json;charset=utf-8',
            'Accept':'application/json;charset=utf-8',
        })
    };
}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
