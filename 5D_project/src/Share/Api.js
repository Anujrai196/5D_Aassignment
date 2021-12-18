import axios from 'axios';
import { CharactorsData } from '../actions/actionCreator';

const axiosInstance = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  });


  // export const getCharactorsFromApi = () => async dispatch => {
  //   try {
  //     let responseJson = await axiosInstance.get('/characters');
  //     let response = responseJson.data;
  //     let data = JSON.parse(response);
  //     dispatch(CharactorsData(data));
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  export const getCharactorsFromApi = async () => {
    try {
      const response = await fetch(
        'https://www.breakingbadapi.com/api/characters'
      );
      const json = await response.json();
      let data = json
      return data;
    } catch (error) {
      console.error(error);
    }
  };
