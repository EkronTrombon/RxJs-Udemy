import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log('Total arreglo:', total);

interval(500).pipe(
    take(4),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: val => {console.log('next:', val)},
    complete: () => {console.log('Completed');}
});