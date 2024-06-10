import { Component, OnInit, Input } from '@angular/core';
import { Observable  } from 'rxjs';
import { StudentGradesApiService } from '../student-grades-api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students$: Observable<any[]>;
  @Input() students: any[] = [];

  constructor(private studentService: StudentGradesApiService) { }

  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
  }
}
