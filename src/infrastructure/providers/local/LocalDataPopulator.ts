import { DataPopulator } from '../../interfaces/DataPopulator';
import { Result, success } from '../../../types/result';

export class LocalDataPopulator implements DataPopulator {
  async populate(): Promise<Result<void>> {
    console.log('Populating local data...');
    // Implementation for populating local data
    return success(undefined);
  }
}
