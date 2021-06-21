import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import * as Navigation from '../Utils/HelperNav';
import Toast from 'react-native-simple-toast';
import {setListData, setLoading, setDetailPoke,setListItem,setDetailItem} from './Action';
function* GetPokemon() {
  try {
    yield put(setLoading(true));
    const config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/?limit=1150',
      headers: {},
      validateStatus: status => status < 500,
    };
    const respond = yield call(axios, config);
    if (respond.status === 200) {
      yield put(setListData(respond.data.results));
    } else {
      Toast.show('Server Error', 4000);
    }
  } catch (error) {
    console.log('error data', error);
  } finally {
    yield put(setLoading(false));
  }
}
function* GetDetailPokemon(payload) {
  try {
    yield put(setLoading(true));
    const config = {
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${payload.name}/`,
      headers: {},
      validateStatus: status => status < 500,
    };
    const response = yield call(axios, config);

    if (response.status === 200) {
      yield put(setDetailPoke(response.data));
      yield Navigation.navigate({
        name: 'Detail Pokemon',
        params: {},
      });
    } else {
      Toast.show('Something Wrong', 4000);
    }
  } catch (error) {
    console.log('error data', error);
  } finally {
    yield put(setLoading(false));
  }
}
function* GetItem() {
  try {
    yield put(setLoading(true));
    const config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/item/?limit=1000',
      headers: {},
      validateStatus: status => status < 500,
    };
    const respon = yield call(axios, config);
    if (respon.status === 200) {
      yield put(setListItem(respon.data.results));
    } else {
      Toast.show('Server Error', 4000);
    }
  } catch (error) {
    console.log('error data', error);
  } finally {
    yield put(setLoading(false));
  }
}
function* GetDetailItem(payload) {
  try {
    yield put(setLoading(true));
    const config = {
      method: 'get',
      url: `https://pokeapi.co/api/v2/item/${payload.name}/`,
      headers: {},
      validateStatus: status => status < 500,
    };
    const response = yield call(axios, config);

    if (response.status === 200) {
      yield put(setDetailItem(response.data));
      yield Navigation.navigate({
        name: 'Detail Item',
        params: {},
      });
    } else {
      Toast.show('Something Wrong', 4000);
    }
  } catch (error) {
    console.log('error data', error);
  } finally {
    yield put(setLoading(false));
  }
}
function* GetDetailItem2(payload) {
  try {
    yield put(setLoading(true));
    const config = {
      method: 'get',
      url: `https://pokeapi.co/api/v2/item/${payload.lowerItem}/`,
      headers: {},
      validateStatus: status => status < 500,
    };
    const response = yield call(axios, config);

    if (response.status === 200) {
      yield put(setDetailItem(response.data));
      yield Navigation.navigate({
        name: 'Detail Item',
        params: {},
      });
    } else {
      Toast.show('Something Wrong', 4000);
    }
  } catch (error) {
    console.log('error data', error);
  } finally {
    yield put(setLoading(false));
  }
}
export const PokemonSaga = function* () {
  yield all([
    takeLatest('GETALLPOKE', GetPokemon),
    takeLatest('DETAILPOKE', GetDetailPokemon),
    takeLatest('POKE', GetDetailPokemon),
    takeLatest('GETALLITEM', GetItem),
    takeLatest('DETAILITEM', GetDetailItem),
    takeLatest('ITEM', GetDetailItem2)
  ]);
};
