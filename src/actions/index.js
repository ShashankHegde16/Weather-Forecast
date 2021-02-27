
import forecast from '../apis/forecast';
import { FETCH_WEATHER } from './ActionType';


const KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = (SearchText) => {
    const response = forecast.get('forecast', {
        params: {
            q: SearchText,
            appid: KEY
        }
    });
    return {
        type: FETCH_WEATHER,
        payload: response
    }

}