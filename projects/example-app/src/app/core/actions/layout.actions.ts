import { Action } from '@ngrx/store';

export class OpenSidenav {
  readonly type = '[Layout] Open Sidenav';
}

export class CloseSidenav {
  readonly type = '[Layout] Close Sidenav';
}
