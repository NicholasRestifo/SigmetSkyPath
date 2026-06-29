import { DataFetcher } from './DataFetcher';
import { WeatherQuery, Weather } from '../../types/data';

export interface WeatherFetcher extends DataFetcher<WeatherQuery, Weather> {}
