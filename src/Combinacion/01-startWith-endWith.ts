import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5).pipe(
    startWith('Start'),
    endWith('End')
);

numeros$.subscribe(console.log);