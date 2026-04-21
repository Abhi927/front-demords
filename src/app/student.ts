import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { student } from './studentresponse';

@Injectable({
  providedIn: 'root',
})
export class Student {
 private apiUrl = 'http://172.31.28.57:8081/api/student';
private skillList$ = new BehaviorSubject<student[] >([]);
  constructor(private http: HttpClient) {}

  // save student
  saveStudent(student: any) {
    return this.http.post(this.apiUrl, student);
  }

  // get all students


  loadStudents()
  {
   return this.http.get<student[]>(`${this.apiUrl}`).pipe(
      tap(students => {
        this.skillList$.next(students);
      }),
      catchError(error => {
        console.error('Error loading skills:', error);
        return throwError(error);
      }) 
    ) ;
  }
   getStudents() {
    return this.skillList$.asObservable();
  }

}
