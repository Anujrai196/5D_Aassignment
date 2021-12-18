import {
GET_CHARACTORS, ADD_FAVRUEST,
} from './types';

export const CharactorsData = data => {
  return {
    type: GET_CHARACTORS,
    payload: data,
  };
};

export const FavrestData = arr => {
  return {
    type: ADD_FAVRUEST,
    payload: arr,
  };
};
