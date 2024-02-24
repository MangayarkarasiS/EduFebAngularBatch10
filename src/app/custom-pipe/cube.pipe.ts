import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let ans=1;
    for(let i=0;i<args[0];i++)
    {
      ans=ans*value;
    }
    return ans;
  }

}
