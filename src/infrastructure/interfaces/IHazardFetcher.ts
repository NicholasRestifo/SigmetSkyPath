import { IDataFetcher } from './IDataFetcher';
import { HazardQuery, Hazard } from '../../types/data';

export interface IHazardFetcher extends IDataFetcher<HazardQuery, Hazard> {}
