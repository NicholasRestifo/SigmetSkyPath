import { IStorageProvider } from './interfaces/IStorageProvider';
import { ICacheProvider } from './interfaces/ICacheProvider';
import { IDataFetcher } from './interfaces/IDataFetcher';
import { IDataPopulator } from './interfaces/IDataPopulator';
import { LocalStorageProvider } from './providers/local/LocalStorageProvider';
import { LocalCacheProvider } from './providers/local/LocalCacheProvider';
import { LiveApiFetcher } from './providers/local/LiveApiFetcher';
import { CannedDataFetcher } from './providers/local/CannedDataFetcher';
import { LocalDataPopulator } from './providers/local/LocalDataPopulator';
import { DeployedStorageProvider } from './providers/deployed/DeployedStorageProvider';
import { DeployedCacheProvider } from './providers/deployed/DeployedCacheProvider';
import { DeployedDataFetcher } from './providers/deployed/DeployedDataFetcher';
import { DeployedDataPopulator } from './providers/deployed/DeployedDataPopulator';

export class ProviderFactory {
  static getStorageProvider(): IStorageProvider {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedStorageProvider();
    }
    return new LocalStorageProvider();
  }

  static getCacheProvider(): ICacheProvider {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedCacheProvider();
    }
    return new LocalCacheProvider();
  }

  static getDataFetcher(): IDataFetcher {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedDataFetcher();
    }
    if (process.env.DATA_MODE === 'canned') {
      return new CannedDataFetcher();
    }
    return new LiveApiFetcher();
  }

  static getDataPopulator(): IDataPopulator {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedDataPopulator();
    }
    return new LocalDataPopulator();
  }
}
