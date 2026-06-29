import { Result } from '../../types/result';

export interface IDataFetcher {
  fetch(query: string): Promise<Result<unknown>>;
}
