import { Result } from '../../types/result';

export interface DataPopulator {
  populate(): Promise<Result<void>>;
}
