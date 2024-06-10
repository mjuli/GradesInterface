import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentGradesApiService } from './student-grades-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  students = [];

  constructor(private studentService: StudentGradesApiService) { }

  ngOnInit(): void {
    this.loadStudentGrades();
  }

  loadStudentGrades(): void {
    this.studentService.getStudents().subscribe((data: any) => {
      this.students = data;
    });
  }

  onStudentAdded(): void {
    this.loadStudentGrades();
  }
}
