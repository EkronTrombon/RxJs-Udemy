import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Helper
const peticionHttpLogin = (userPass) => {
    return ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
        pluck('response', 'token'),
        catchError(err => of('XXX'))
    );
};

// Creamos un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const btnSubmit = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

btnSubmit.innerHTML = 'Submit';

form.append(inputEmail, inputPass, btnSubmit);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    exhaustMap(peticionHttpLogin)
);
submitForm$.subscribe(token => {
    console.log(token);
});