import { Component } from '@angular/core';
import { Student } from '../student';
import { student } from '../studentresponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studentcomponent',
  standalone: false,
  templateUrl: './studentcomponent.html',
  styleUrl: './studentcomponent.css',
})
export class Studentcomponent {


  student = {
    name: '',
    phoneNo: '',
    subject: ''
  };

    students$!: Observable<student[]>;

  constructor(private service: Student) {}

  ngOnInit() {
    this.service.loadStudents().subscribe();
    this.students$ = this.service.getStudents();

  }

  // save data
  save() {
    this.service.saveStudent(this.student).subscribe(() => {
      alert("Saved!");
      this.service.loadStudents().subscribe();
    });
  }

  // load data
  // loadStudents() {
  //   this.service.getStudents().subscribe((data: any) => {
  //     this.students$ = data;
  //   });
  // }
}

