import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = 'http://localhost:8082/api/v1/patients/fetch';
  private deleteUrl = 'http://localhost:8082/api/v1/patients/delete';

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.deleteUrl}/${id}`);
  }
}
