import {StorageMapper} from './StorageMapper';
import AsyncStorage from '@react-native-community/async-storage';

class AsStorage {
  private readonly storage: typeof AsyncStorage;

  constructor() {
    this.storage = AsyncStorage;
  }

  async set<T>(key: string, value: T): Promise<void> {
    if (typeof value === 'string') {
      return await this.storage.setItem(key, value);
    } else if (typeof value === 'object') {
      return await this.storage.setItem(key, JSON.stringify(value));
    } else {
      throw Error('value is not string or object');
    }
  }

  async get<T>(
    key: string,
    mapper?: StorageMapper<T>,
  ): Promise<T | string | null> {
    const item = await this.storage.getItem(key);
    if (item && mapper) {
      return mapper.fromJson(item);
    }
    return item;
  }

  async getAllKeys(): Promise<string[]> {
    return await this.storage.getAllKeys();
  }

  async multiGet<T>(
    keys: string[],
    mapper?: StorageMapper<T>,
  ): Promise<[string, T | string | null][]> {
    const items = await this.storage.multiGet(keys);
    if (mapper && items.length != 0) {
      const result = items.map(
        item => [item[0], mapper.fromJson(item[1])] as [string, T],
      );
      return result;
    }
    return items;
  }

  async clear(): Promise<void> {
    return await this.storage.clear();
  }
}

export default new AsStorage();
