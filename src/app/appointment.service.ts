import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = 'http://localhost:8082/api/v1/appointment/fetch';
  private postbaseUrl = 'http://localhost:8082/api/v1/appointment/add';
  private deletebaseUrl = 'http://localhost:8082/api/v1/appointment/delete';
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(
      `${this.postbaseUrl}`,
      appointment
    );
  }

  deleteAppointment(id: number): Observable<object> {
    return this.httpClient.delete(`${this.deletebaseUrl}/${id}`);
  }
}
