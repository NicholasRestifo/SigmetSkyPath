import { IDataFetcher } from '../../interfaces/IDataFetcher';
import { Result, success, failure } from '../../../types/result';
import axios from 'axios';

export class LiveApiFetcher implements IDataFetcher {
  async fetch(query: string): Promise<Result<unknown>> {
    try {
      const response = await axios.get(query);
      return success(response.data);
    } catch (e) {
      return failure(e as Error);
    }
  }
}
