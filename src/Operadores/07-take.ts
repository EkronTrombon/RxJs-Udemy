import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5).pipe(tap(console.log));

numeros$.pipe(
    take(3)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Completed')
});