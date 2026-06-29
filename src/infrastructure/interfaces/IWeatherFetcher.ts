import { IDataFetcher } from './IDataFetcher';
import { WeatherQuery, Weather } from '../../types/data';

export interface IWeatherFetcher extends IDataFetcher<WeatherQuery, Weather> {}
