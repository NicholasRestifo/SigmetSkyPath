import { IDataPopulator } from '../../interfaces/IDataPopulator';
import { Result, failure } from '../../../types/result';
import { NotImplementedError } from '../../../errors/NotImplementedError';

export class DeployedDataPopulator implements IDataPopulator {
  async populate(): Promise<Result<void>> {
    return failure(new NotImplementedError());
  }
}
