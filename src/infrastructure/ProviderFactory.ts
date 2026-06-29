import { IStorageProvider } from './interfaces/IStorageProvider';
import { ICacheProvider } from './interfaces/ICacheProvider';
import { IAirportFetcher } from './interfaces/IAirportFetcher';
import { IWeatherFetcher } from './interfaces/IWeatherFetcher';
import { IHazardFetcher } from './interfaces/IHazardFetcher';
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
import { AirportQuery, Airport, WeatherQuery, Weather, HazardQuery, Hazard } from '../types/data';

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

  static getAirportFetcher(): IAirportFetcher {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedDataFetcher<AirportQuery, Airport>();
    }
    if (process.env.DATA_MODE === 'canned') {
      return new CannedDataFetcher<AirportQuery, Airport>();
    }
    return new LiveApiFetcher<AirportQuery, Airport>();
  }

  static getWeatherFetcher(): IWeatherFetcher {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedDataFetcher<WeatherQuery, Weather>();
    }
    if (process.env.DATA_MODE === 'canned') {
      return new CannedDataFetcher<WeatherQuery, Weather>();
    }
    return new LiveApiFetcher<WeatherQuery, Weather>();
  }

  static getHazardFetcher(): IHazardFetcher {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedDataFetcher<HazardQuery, Hazard>();
    }
    if (process.env.DATA_MODE === 'canned') {
      return new CannedDataFetcher<HazardQuery, Hazard>();
    }
    return new LiveApiFetcher<HazardQuery, Hazard>();
  }

  static getDataPopulator(): IDataPopulator {
    if (process.env.APP_ENV === 'prod') {
      return new DeployedDataPopulator();
    }
    return new LocalDataPopulator();
  }
}
