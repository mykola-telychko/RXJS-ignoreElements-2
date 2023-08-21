import { interval, throwError, of } from 'rxjs';
import { mergeMap, ignoreElements } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/ignoreelements
// Example 2: Only displaying error

//emit value every 100ms
const source = interval(100);
//ignore everything but error
const error = source.pipe(
  mergeMap((val) => {
    if (val === 4) {
      return throwError(`ERROR AT ${val}`);
    }
    return of(val);
  }),
  ignoreElements()
);
const subscribe = error.subscribe(
  (val) => console.log(`NEXT: ${val}`),
  (val) => console.log(`ERROR: ${val}`),
  () => console.log('SECOND COMPLETE!')
);
//output: "ERROR: ERROR AT 4"
