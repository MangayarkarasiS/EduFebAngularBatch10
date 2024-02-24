import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {

  transform(value: number,...args: number[]): number {
    //implementing custom pipe
    //return value*value;
 
    //adding attribute to custom pipe
    let ans=1;
    for(let i=0;i<args[0];i++)
    {
      ans=ans*value;
    }
    return ans;
  }

}
