import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(eventList: any[], searchTerm: string): any {
    console.log("Transforming...");
    // Vérifie si eventList existe et si searchTerm n'est pas vide
    return eventList ? eventList.filter(event =>
      event.nomEvenement.toLowerCase().includes(searchTerm.toLowerCase())) : [];
  }
}
