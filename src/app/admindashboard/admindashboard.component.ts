import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindashboard',
  standalone: false,

  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css',
})
export class AdmindashboardComponent {
  patients: Patient[] = [];
  constructor(private patientService: PatientService) {}
  ngOnInit(): void {
    this.getPatient();
  }
  getPatient() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patients = data;
    });
  }

  delete(id: number) {
    this.patientService.delete(id).subscribe((data) => {
      this.getPatient();
    });
  }
}
