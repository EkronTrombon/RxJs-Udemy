import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (resp: Response) => {
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return resp;
};

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json()).then(data => console.log('data:', data))
//     .catch(err => console.warn('Error:', err));
    
// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('Error:', err));

ajax(url).pipe(
    // map(resp => resp.response)
    pluck('response'),
    catchError(atrapaError)
).subscribe(users => console.log('Users:', users));