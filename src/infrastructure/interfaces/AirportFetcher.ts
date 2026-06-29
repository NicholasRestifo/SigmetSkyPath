import { DataFetcher } from './DataFetcher';
import { AirportQuery, Airport } from '../../types/data';

export interface AirportFetcher extends DataFetcher<AirportQuery, Airport> {}
