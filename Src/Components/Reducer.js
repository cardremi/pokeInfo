const initialState = {
  ListData: [],
  ListItem: [],
  ListDetailPoke: [],
  ListDetailItem: [],
  isLoading: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIST_DATA':
      return {
        ...state,
        ListData: action.payload,
      };
    case 'SET_LIST_ITEM':
      return {
        ...state,
        ListItem: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_DETAIL_POKE':
      return {
        ...state,
        ListDetailPoke: action.payload,
      };
    case 'SET_DETAIL_ITEM':
      return {
        ...state,
        ListDetailItem: action.payload,
      };
    default:
      return state;
  }
};
