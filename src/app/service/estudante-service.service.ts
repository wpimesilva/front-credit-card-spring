import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, tap, Observable, retry, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudante } from '../model/Estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteServiceService {

  baseURL = environment.baseURL + '/students';

  constructor(private http: HttpClient) { }



  findStudents(nome: string) : Observable<any> {
    var estudantes = this.http.get<any[]>(this.baseURL +'?name=' + nome)
    return estudantes
  }

  public findStudentsAll(){
    return this.http.get<any>('http://localhost:8080/students/4544',this.ObterHeaderJson())
    .pipe(
      retry(2),
      catchError(this.handleError)
    )

  }


  createStudents(estudante: any) : Observable<any> {
    var result = this.http.post<any>(this.baseURL,estudante);
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
