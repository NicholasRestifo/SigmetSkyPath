import { DataFetcher } from './DataFetcher';
import { HazardQuery, Hazard } from '../../types/data';

export interface HazardFetcher extends DataFetcher<HazardQuery, Hazard> {}
