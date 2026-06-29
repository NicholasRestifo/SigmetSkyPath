import { StorageProvider } from '../../interfaces/StorageProvider';
import { Result, failure } from '../../../types/result';
import { NotImplementedError } from '../../../errors/NotImplementedError';

export class DeployedStorageProvider implements StorageProvider {
  async save(key: string, data: string): Promise<Result<void>> {
    return failure(new NotImplementedError());
  }
  async load(key: string): Promise<Result<string>> {
    return failure(new NotImplementedError());
  }
}
