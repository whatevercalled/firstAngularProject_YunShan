import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

interface Patient{
  id:number,
  name:string,
  age:number,
  sickness:Sickness,
}
enum Sickness{
  ANSOMENIA="ansomenia",
  FLU="flu",
  FEVER="fever"
}
@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  data={
    patients:[
      { id: 1234, name: 'Andrew Owen', age: 26, sickness:Sickness.ANSOMENIA },
      { id: 1235, name: 'Susan Que', age: 45, sickness:Sickness.FLU },
      { id: 1236, name: 'John Doe', age: 53, sickness:Sickness.FEVER },
    ]
  }
  constructor(private http:HttpClient) { }

  getPatients (): Observable<Array<Patient>> {
    return of(this.data.patients)
    // of is for making an array into an observable stream
  }
}
