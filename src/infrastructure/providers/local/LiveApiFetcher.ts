import { IDataFetcher } from '../../interfaces/IDataFetcher';
import { Result, success, failure } from '../../../types/result';
import axios from 'axios';

export class LiveApiFetcher<TQuery, TResult> implements IDataFetcher<TQuery, TResult> {
  async fetch(query: TQuery): Promise<Result<TResult>> {
    try {
      // In a real implementation, we'd use the query object to build the URL
      const response = await axios.get('/api/data', { params: query });
      return success(response.data as TResult);
    } catch (e) {
      return failure(e as Error);
    }
  }
}
