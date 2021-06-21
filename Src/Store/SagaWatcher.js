import {all} from 'redux-saga/effects';
import { PokemonSaga } from '../Components/Saga';
export function* SagaWatcher() {
  yield all([PokemonSaga()]);
}
