import { IDataPopulator } from '../../interfaces/IDataPopulator';
import { Result, success } from '../../../types/result';

export class LocalDataPopulator implements IDataPopulator {
  async populate(): Promise<Result<void>> {
    console.log('Populating local data...');
    // Implementation for populating local data
    return success(undefined);
  }
}
