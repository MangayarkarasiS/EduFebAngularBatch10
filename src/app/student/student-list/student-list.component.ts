import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  allStudents:student[]=[
    {
      id:1,
      studName:'Tamarai',
      studTotalMarks:90,
      studDob: new Date(2020,12,12),
      studGender:'Female'
    },
    {
      id:2,
      studName:'Vaish',
      studTotalMarks:20,
      studDob: new Date(1990,12,12),
      studGender:'Female'
    },
    {
      id:3,
      studName:'Sachin',
      studTotalMarks:90,
      studDob: new Date(1998,10,11),
      studGender:'Male'
    },
    {
      id:4,
      studName:'Victor',
      studTotalMarks:80,
      studDob: new Date(2021,11,12),
      studGender:'Male'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getMarkColor(TotalMarks:number){
    if(TotalMarks>=90)
    return 'green';
    else if(TotalMarks<=80 && TotalMarks>=60)
    return 'yellow';
    else
    return 'red';

  }
}
