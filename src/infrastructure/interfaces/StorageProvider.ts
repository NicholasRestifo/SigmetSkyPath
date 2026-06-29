import { Result } from '../../types/result';

export interface StorageProvider {
  save(key: string, data: string): Promise<Result<void>>;
  load(key: string): Promise<Result<string>>;
}
