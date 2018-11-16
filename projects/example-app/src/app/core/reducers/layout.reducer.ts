import {
  LayoutActions
} from '@example-app/core/actions';
import { ReducerBuilder } from '@lib/ngx-tools';

export interface State {
  showSidenav: boolean;
}

const reducer = new ReducerBuilder<State>()
  .handle(CloseSidenav, (state, action) => 
    ({ ...state, showSidenav: false })
  )
  .handle(OpenSidenav, (state, action) => 
    ({ ...state, showSidenav: true })
  )
  .build({
    showSidenav: false,
  }
);

export function reducer(state: State, action: Action): State {
    return reducer(state, action);
}

export const getShowSidenav = (state: State) => state.showSidenav;
