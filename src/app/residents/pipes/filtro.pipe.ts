import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(residents: string[], page: number = 0): string[] {

    return residents.slice(page,page + 10);

  }

}
