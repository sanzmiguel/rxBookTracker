import { Observable } from 'rxjs';
import { allBooks } from './data';

let allBooksObservable$ = new Observable(subscriber => {
  
  if (document.title !== 'RxBookTracker') {
    subscriber.error('Incorrect page title');
  }

  for (let book of allBooks) {
    subscriber.next(book);
  }

  setTimeout(() => {
    subscriber.complete();
  }, 2000);

  return () => console.log('Executing teardown code');

});

allBooksObservable$.subscribe((book: any) => console.log(book.title));