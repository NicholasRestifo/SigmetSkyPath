import { DataFetcher } from '../../interfaces/DataFetcher';
import { Result, failure } from '../../../types/result';
import { NotImplementedError } from '../../../errors/NotImplementedError';

export class DeployedDataFetcher<TQuery, TResult> implements DataFetcher<TQuery, TResult> {
  async fetch(query: TQuery): Promise<Result<TResult>> {
    return failure(new NotImplementedError());
  }
}
