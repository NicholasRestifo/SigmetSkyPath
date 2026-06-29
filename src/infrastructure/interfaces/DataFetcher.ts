import { Result } from '../../types/result';

export interface DataFetcher<TQuery, TResult> {
  fetch(query: TQuery): Promise<Result<TResult>>;
}
