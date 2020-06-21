import {EventEmitter, Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScmDomain } from './scm-shared-util';

@Injectable({
  providedIn: 'root'
})
export class NoCounterService {

  constructor(private db: AngularFireDatabase) { }

  get(domain: ScmDomain): Observable<number> {
    return this._getNumber$(domain).valueChanges().pipe(map(o => o.$value || 0));
  }

  incAndGet(domain: ScmDomain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, committed, dataSnapshot) => {
      if (err) { throw new Error(`fail to increase number`); }

      if (committed) {
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    this._getNumber$(domain).$ref.transaction(num => (num || 0) + 1, onComplete);

    return id$;
  }

  private _getNumber$(domain: ScmDomain) {
    return this.db.object(`/numbers/${domain}`);
  }
}
