import { DataPopulator } from '../../interfaces/DataPopulator';
import { Result, failure } from '../../../types/result';
import { NotImplementedError } from '../../../errors/NotImplementedError';

export class DeployedDataPopulator implements DataPopulator {
  async populate(): Promise<Result<void>> {
    return failure(new NotImplementedError());
  }
}
