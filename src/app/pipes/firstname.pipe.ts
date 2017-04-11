import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstName'})
export class FirstNamePipe implements PipeTransform {
  transform(fullName: string) {
    var firstName = fullName.split(" ")[0];
    return firstName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}
