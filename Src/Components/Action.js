export const actionPoke = name => {
  return {
    type: 'POKE',
    name,
  };
};
export const actionItem = lowerItem => {
  return {
    type: 'ITEM',
    lowerItem,
  };
};
export const getPokemon = payload => {
  return {
    type: 'GETALLPOKE',
    payload,
  };
};
export const getItem = payload => {
  return {
    type: 'GETALLITEM',
    payload,
  };
};
export const setListData = payload => {
  return {
    type: 'SET_LIST_DATA',
    payload,
  };
};
export const setListItem = payload => {
  return {
    type: 'SET_LIST_ITEM',
    payload,
  };
};
export const setDetailPoke = payload => {
  return {
    type: 'SET_DETAIL_POKE',
    payload,
  };
};
export const setDetailItem = payload => {
  return {
    type: 'SET_DETAIL_ITEM',
    payload,
  };
};
export const setLoading = payload => {
  return {
    type: 'SET_LOADING',
    payload,
  };
};
export const actionDetailPoke = name => {
  return {
    type: 'DETAILPOKE',
    name,
  };
};
export const actionDetailItem = name => {
  return {
    type: 'DETAILITEM',
    name,
  };
};
