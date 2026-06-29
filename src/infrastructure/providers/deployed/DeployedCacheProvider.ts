import { ICacheProvider } from '../../interfaces/ICacheProvider';
import { Result, failure } from '../../../types/result';
import { NotImplementedError } from '../../../errors/NotImplementedError';

export class DeployedCacheProvider implements ICacheProvider {
  async get(key: string): Promise<Result<string | null>> {
    return failure(new NotImplementedError());
  }
  async set(key: string, value: string, ttlSeconds: number): Promise<Result<void>> {
    return failure(new NotImplementedError());
  }
}
