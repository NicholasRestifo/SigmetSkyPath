import { IDataFetcher } from '../../interfaces/IDataFetcher';
import { Result, failure } from '../../../types/result';
import { NotImplementedError } from '../../../errors/NotImplementedError';

export class DeployedDataFetcher<TQuery, TResult> implements IDataFetcher<TQuery, TResult> {
  async fetch(query: TQuery): Promise<Result<TResult>> {
    return failure(new NotImplementedError());
  }
}
