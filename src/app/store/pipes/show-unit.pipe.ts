import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showUnit'
})
export class ShowUnitPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    let valueWithUnit = "";
    const units = {
      giga: "GB",
      tera: "TB"
    }
    if (value < 1000) {
      valueWithUnit = value+' '+units.giga;
    } else {
      valueWithUnit = value/1000+' '+units.tera;
    }
     return valueWithUnit;
  }

}
