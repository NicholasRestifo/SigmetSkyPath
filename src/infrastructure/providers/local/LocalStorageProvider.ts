import { IStorageProvider } from '../../interfaces/IStorageProvider';
import { Result, success } from '../../../types/result';
import * as fs from 'fs/promises';
import * as path from 'path';

export class LocalStorageProvider implements IStorageProvider {
  private baseDir: string;

  constructor(baseDir: string = './data') {
    this.baseDir = baseDir;
  }

  async save(key: string, data: string): Promise<Result<void>> {
    const filePath = path.join(this.baseDir, key);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, data);
    return success(undefined);
  }

  async load(key: string): Promise<Result<string>> {
    const filePath = path.join(this.baseDir, key);
    const data = await fs.readFile(filePath, 'utf-8');
    return success(data);
  }
}
