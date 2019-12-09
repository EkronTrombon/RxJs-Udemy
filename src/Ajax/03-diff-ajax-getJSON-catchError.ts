import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbxxxin.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('Error:', resp.message);
    return of({
        ok: false,
        users: []
    });
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$.subscribe(data => console.log('getJSON:', data));
// obs2$.subscribe(data => console.log('ajax:', data));

obs$.pipe(
    catchError(manejaError)
).subscribe({
    next: val => console.log('next:', val),
    error: err => console.log('error:', err),
    complete: () => console.log('Completed')
});