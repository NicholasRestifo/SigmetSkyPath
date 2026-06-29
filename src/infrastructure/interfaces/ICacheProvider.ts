import { Result } from '../../types/result';

export interface ICacheProvider {
  get(key: string): Promise<Result<string | null>>;
  set(key: string, value: string, ttlSeconds: number): Promise<Result<void>>;
}
