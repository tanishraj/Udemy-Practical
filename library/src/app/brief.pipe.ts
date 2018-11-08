import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'brief'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: number){
        if(!value){
            return null;
        } else{
            let actualLimit = (limit) ? limit : 50;
            return value.substr(0, actualLimit) + '...';
        }
    }
}