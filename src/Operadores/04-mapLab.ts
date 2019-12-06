import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum massa ac orci molestie, et fringilla diam condimentum. Nulla facilisi. Nam consequat aliquet egestas. Donec ex enim, egestas ac magna in, cursus sagittis ipsum. Integer tincidunt egestas quam, at ultrices quam dignissim at. Sed egestas, nibh aliquet euismod placerat, enim turpis eleifend lacus, ac molestie neque ligula id felis. Quisque maximus nibh sed porttitor sollicitudin. Curabitur vestibulum dolor in erat suscipit, vel bibendum lectus dapibus. Etiam eget fermentum tortor. Fusce feugiat et eros et vestibulum. Quisque sapien lectus, elementum et condimentum sed, lobortis sed ante. Proin id eleifend ligula. Duis felis tellus, vulputate at sodales vitae, mollis et diam. Phasellus ultrices leo nec mauris congue rutrum.
<br/><br/>
Praesent sed dolor ut felis tristique suscipit. Maecenas vulputate gravida ipsum quis tincidunt. Proin et velit felis. Nullam eu scelerisque ex. Aliquam malesuada justo vitae mi elementum ultricies. Cras viverra lacus sed purus molestie sollicitudin. Aliquam ut augue tempus, tincidunt dui eget, cursus eros. Nam elit nulla, consequat non nisl eget, tempus varius sem.
<br/><br/>
Nulla ultrices sapien at ornare auctor. Proin pretium fringilla nulla ac porttitor. Suspendisse potenti. Donec tincidunt turpis eu turpis faucibus rhoncus. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget fermentum dui, ac sodales lorem. Praesent et blandit lorem, eu maximus eros. Donec vitae tortor non tortor pellentesque ultrices accumsan eget nunc.
<br/><br/>
Donec posuere lorem at lectus sagittis, vel pretium risus eleifend. Nunc in massa ac dui vestibulum vulputate sit amet nec augue. Integer iaculis semper metus, scelerisque euismod risus posuere in. Duis commodo turpis vel felis volutpat fermentum. Pellentesque sagittis nisi eu leo venenatis, rutrum vehicula nunc malesuada. Quisque efficitur orci sed risus iaculis, non accumsan arcu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus laoreet pulvinar dolor vitae tristique. Nunc commodo est eget mattis tempor. Sed vestibulum, arcu ac rutrum malesuada, lectus elit sollicitudin nisi, eu sollicitudin est ex ac ex.
<br/><br/>
Duis id velit ante. Proin vel lacus non libero efficitur consectetur. Pellentesque odio purus, sollicitudin sed leo at, lobortis posuere odio. Proin molestie faucibus libero ut imperdiet. Morbi semper non magna sit amet consequat. Fusce vulputate metus nec ligula condimentum, dictum fermentum nisi fringilla. Nam blandit ligula sed mi euismod, non vestibulum magna sollicitudin. Duis rutrum, felis quis feugiat congue, velit ligula fringilla mi, eu mattis urna orci eu arcu.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum massa ac orci molestie, et fringilla diam condimentum. Nulla facilisi. Nam consequat aliquet egestas. Donec ex enim, egestas ac magna in, cursus sagittis ipsum. Integer tincidunt egestas quam, at ultrices quam dignissim at. Sed egestas, nibh aliquet euismod placerat, enim turpis eleifend lacus, ac molestie neque ligula id felis. Quisque maximus nibh sed porttitor sollicitudin. Curabitur vestibulum dolor in erat suscipit, vel bibendum lectus dapibus. Etiam eget fermentum tortor. Fusce feugiat et eros et vestibulum. Quisque sapien lectus, elementum et condimentum sed, lobortis sed ante. Proin id eleifend ligula. Duis felis tellus, vulputate at sodales vitae, mollis et diam. Phasellus ultrices leo nec mauris congue rutrum.
<br/><br/>
Praesent sed dolor ut felis tristique suscipit. Maecenas vulputate gravida ipsum quis tincidunt. Proin et velit felis. Nullam eu scelerisque ex. Aliquam malesuada justo vitae mi elementum ultricies. Cras viverra lacus sed purus molestie sollicitudin. Aliquam ut augue tempus, tincidunt dui eget, cursus eros. Nam elit nulla, consequat non nisl eget, tempus varius sem.
<br/><br/>
Nulla ultrices sapien at ornare auctor. Proin pretium fringilla nulla ac porttitor. Suspendisse potenti. Donec tincidunt turpis eu turpis faucibus rhoncus. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget fermentum dui, ac sodales lorem. Praesent et blandit lorem, eu maximus eros. Donec vitae tortor non tortor pellentesque ultrices accumsan eget nunc.
<br/><br/>
Donec posuere lorem at lectus sagittis, vel pretium risus eleifend. Nunc in massa ac dui vestibulum vulputate sit amet nec augue. Integer iaculis semper metus, scelerisque euismod risus posuere in. Duis commodo turpis vel felis volutpat fermentum. Pellentesque sagittis nisi eu leo venenatis, rutrum vehicula nunc malesuada. Quisque efficitur orci sed risus iaculis, non accumsan arcu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus laoreet pulvinar dolor vitae tristique. Nunc commodo est eget mattis tempor. Sed vestibulum, arcu ac rutrum malesuada, lectus elit sollicitudin nisi, eu sollicitudin est ex ac ex.
<br/><br/>
Duis id velit ante. Proin vel lacus non libero efficitur consectetur. Pellentesque odio purus, sollicitudin sed leo at, lobortis posuere odio. Proin molestie faucibus libero ut imperdiet. Morbi semper non magna sit amet consequat. Fusce vulputate metus nec ligula condimentum, dictum fermentum nisi fringilla. Nam blandit ligula sed mi euismod, non vestibulum magna sollicitudin. Duis rutrum, felis quis feugiat congue, velit ligula fringilla mi, eu mattis urna orci eu arcu.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum massa ac orci molestie, et fringilla diam condimentum. Nulla facilisi. Nam consequat aliquet egestas. Donec ex enim, egestas ac magna in, cursus sagittis ipsum. Integer tincidunt egestas quam, at ultrices quam dignissim at. Sed egestas, nibh aliquet euismod placerat, enim turpis eleifend lacus, ac molestie neque ligula id felis. Quisque maximus nibh sed porttitor sollicitudin. Curabitur vestibulum dolor in erat suscipit, vel bibendum lectus dapibus. Etiam eget fermentum tortor. Fusce feugiat et eros et vestibulum. Quisque sapien lectus, elementum et condimentum sed, lobortis sed ante. Proin id eleifend ligula. Duis felis tellus, vulputate at sodales vitae, mollis et diam. Phasellus ultrices leo nec mauris congue rutrum.
<br/><br/>
Praesent sed dolor ut felis tristique suscipit. Maecenas vulputate gravida ipsum quis tincidunt. Proin et velit felis. Nullam eu scelerisque ex. Aliquam malesuada justo vitae mi elementum ultricies. Cras viverra lacus sed purus molestie sollicitudin. Aliquam ut augue tempus, tincidunt dui eget, cursus eros. Nam elit nulla, consequat non nisl eget, tempus varius sem.
<br/><br/>
Nulla ultrices sapien at ornare auctor. Proin pretium fringilla nulla ac porttitor. Suspendisse potenti. Donec tincidunt turpis eu turpis faucibus rhoncus. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget fermentum dui, ac sodales lorem. Praesent et blandit lorem, eu maximus eros. Donec vitae tortor non tortor pellentesque ultrices accumsan eget nunc.
<br/><br/>
Donec posuere lorem at lectus sagittis, vel pretium risus eleifend. Nunc in massa ac dui vestibulum vulputate sit amet nec augue. Integer iaculis semper metus, scelerisque euismod risus posuere in. Duis commodo turpis vel felis volutpat fermentum. Pellentesque sagittis nisi eu leo venenatis, rutrum vehicula nunc malesuada. Quisque efficitur orci sed risus iaculis, non accumsan arcu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus laoreet pulvinar dolor vitae tristique. Nunc commodo est eget mattis tempor. Sed vestibulum, arcu ac rutrum malesuada, lectus elit sollicitudin nisi, eu sollicitudin est ex ac ex.
<br/><br/>
Duis id velit ante. Proin vel lacus non libero efficitur consectetur. Pellentesque odio purus, sollicitudin sed leo at, lobortis posuere odio. Proin molestie faucibus libero ut imperdiet. Morbi semper non magna sit amet consequat. Fusce vulputate metus nec ligula condimentum, dictum fermentum nisi fringilla. Nam blandit ligula sed mi euismod, non vestibulum magna sollicitudin. Duis rutrum, felis quis feugiat congue, velit ligula fringilla mi, eu mattis urna orci eu arcu.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum massa ac orci molestie, et fringilla diam condimentum. Nulla facilisi. Nam consequat aliquet egestas. Donec ex enim, egestas ac magna in, cursus sagittis ipsum. Integer tincidunt egestas quam, at ultrices quam dignissim at. Sed egestas, nibh aliquet euismod placerat, enim turpis eleifend lacus, ac molestie neque ligula id felis. Quisque maximus nibh sed porttitor sollicitudin. Curabitur vestibulum dolor in erat suscipit, vel bibendum lectus dapibus. Etiam eget fermentum tortor. Fusce feugiat et eros et vestibulum. Quisque sapien lectus, elementum et condimentum sed, lobortis sed ante. Proin id eleifend ligula. Duis felis tellus, vulputate at sodales vitae, mollis et diam. Phasellus ultrices leo nec mauris congue rutrum.
<br/><br/>
Praesent sed dolor ut felis tristique suscipit. Maecenas vulputate gravida ipsum quis tincidunt. Proin et velit felis. Nullam eu scelerisque ex. Aliquam malesuada justo vitae mi elementum ultricies. Cras viverra lacus sed purus molestie sollicitudin. Aliquam ut augue tempus, tincidunt dui eget, cursus eros. Nam elit nulla, consequat non nisl eget, tempus varius sem.
<br/><br/>
Nulla ultrices sapien at ornare auctor. Proin pretium fringilla nulla ac porttitor. Suspendisse potenti. Donec tincidunt turpis eu turpis faucibus rhoncus. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget fermentum dui, ac sodales lorem. Praesent et blandit lorem, eu maximus eros. Donec vitae tortor non tortor pellentesque ultrices accumsan eget nunc.
<br/><br/>
Donec posuere lorem at lectus sagittis, vel pretium risus eleifend. Nunc in massa ac dui vestibulum vulputate sit amet nec augue. Integer iaculis semper metus, scelerisque euismod risus posuere in. Duis commodo turpis vel felis volutpat fermentum. Pellentesque sagittis nisi eu leo venenatis, rutrum vehicula nunc malesuada. Quisque efficitur orci sed risus iaculis, non accumsan arcu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus laoreet pulvinar dolor vitae tristique. Nunc commodo est eget mattis tempor. Sed vestibulum, arcu ac rutrum malesuada, lectus elit sollicitudin nisi, eu sollicitudin est ex ac ex.
<br/><br/>
Duis id velit ante. Proin vel lacus non libero efficitur consectetur. Pellentesque odio purus, sollicitudin sed leo at, lobortis posuere odio. Proin molestie faucibus libero ut imperdiet. Morbi semper non magna sit amet consequat. Fusce vulputate metus nec ligula condimentum, dictum fermentum nisi fringilla. Nam blandit ligula sed mi euismod, non vestibulum magna sollicitudin. Duis rutrum, felis quis feugiat congue, velit ligula fringilla mi, eu mattis urna orci eu arcu.`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// Función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);
const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});