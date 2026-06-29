import { IDataFetcher } from '../../interfaces/IDataFetcher';
import { Result, failure } from '../../../types/result';
import { NotImplementedError } from '../../../errors/NotImplementedError';

export class DeployedDataFetcher implements IDataFetcher {
  async fetch(query: string): Promise<Result<unknown>> {
    return failure(new NotImplementedError());
  }
}
