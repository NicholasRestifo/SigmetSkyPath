import { IDataFetcher } from '../../interfaces/IDataFetcher';
import { Result, success } from '../../../types/result';

export class CannedDataFetcher<TQuery, TResult> implements IDataFetcher<TQuery, TResult> {
  async fetch(query: TQuery): Promise<Result<TResult>> {
    // For now, return a dummy canned response
    return success({ canned: true, query } as unknown as TResult);
  }
}
