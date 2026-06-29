import { IDataFetcher } from './IDataFetcher';
import { AirportQuery, Airport } from '../../types/data';

export interface IAirportFetcher extends IDataFetcher<AirportQuery, Airport> {}
