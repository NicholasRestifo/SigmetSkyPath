import { Result } from '../../types/result';

export interface IDataFetcher<TQuery, TResult> {
  fetch(query: TQuery): Promise<Result<TResult>>;
}
