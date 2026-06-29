import { IDataFetcher } from '../../interfaces/IDataFetcher';
import { Result, success } from '../../../types/result';

export class CannedDataFetcher implements IDataFetcher {
  async fetch(query: string): Promise<Result<unknown>> {
    // For now, return a dummy canned response
    return success({ canned: true, query });
  }
}
