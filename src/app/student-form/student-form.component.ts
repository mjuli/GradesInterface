import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentGradesApiService } from '../student-grades-api.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  studentForm: FormGroup;

  @Output() studentAdded = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private studentService: StudentGradesApiService) {
    this.studentForm = this.fb.group({
      studentName: ['', Validators.required],
      subjectName: ['', Validators.required],
      grade1: ['', Validators.required],
      grade2: ['', Validators.required],
      grade3: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentService.saveStudantGrades(this.studentForm.value).subscribe(() => {
        console.log('Deu certo!');
        this.studentForm.reset();
        this.studentAdded.emit();
      });
    }
  }
}
