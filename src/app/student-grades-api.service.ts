import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Request {
  studentName: string;
  subjectName: string;
  grade1: number;
  grade2: number;
  grade3: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentGradesApiService {
  url = 'http://localhost:5045/api/notas';

  constructor(private http: HttpClient) { }

  saveStudantGrades(request: Request): Observable<any> {
    return this.http.post(this.url, request);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
