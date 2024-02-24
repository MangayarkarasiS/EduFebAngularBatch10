import { Pipe, PipeTransform } from '@angular/core';
import { student } from '../student/student.model';

@Pipe({
  name: 'filterList',
  pure:false
})
export class FilterListPipe implements PipeTransform {

  transform(value: student[], ...args: string[]): student[] {
    if((value.length==0) || args[0]=='') return value;
    return value.filter((eachStudent)=>eachStudent.studGender.toLowerCase()==args[0].toLowerCase());
  }

}
