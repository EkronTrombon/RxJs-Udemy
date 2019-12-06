import { from, of } from 'rxjs';

/**
 * of = Toma argumentos y genera una secuencia de valores
 * from = array, promise, iterable, observable
 */

 const observer = {
     next: val => console.log('next:', val),
     complete: () => console.log('Completed')
 };

 const miGenerador = function*() {
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 };

 const miIterable = miGenerador();

//  for (const id of miIterable) {
//      console.log(id);
//  }

 from(miIterable).subscribe(observer);

// const src$ = from([1,2,3,4,5]);
// const src$ = of(...[1,2,3,4,5]);
// const src$ = from('Ekron');
const src$ = from(fetch('https://api.github.com/users/Ekron'));

// src$.subscribe(observer);
// src$.subscribe(async(resp) => {
//     const data = await resp.json();
//     console.log(data);
// });