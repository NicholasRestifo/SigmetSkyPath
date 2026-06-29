import { Result } from '../../types/result';

export interface IDataPopulator {
  populate(): Promise<Result<void>>;
}
