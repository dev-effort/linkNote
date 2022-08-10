import {Repository} from './Repository';
import AsStorage from './storage/AsStorage';
import FolderModel from '../models/FolderModel';
import FolderModelMapper from './storage/mapper/FolderModelMapper';

class AsyncStorageRepository implements Repository {
  async setFolder(folders: FolderModel): Promise<void> {
    try {
      return await AsStorage.set<FolderModel>(folders.id, folders);
    } catch {
      throw Error('Fail save Folders to asyncStorage');
    }
  }

  async getFolder(key: string): Promise<FolderModel | null> {
    try {
      return (await AsStorage.get<FolderModel>(
        key,
        FolderModelMapper,
      )) as FolderModel | null;
    } catch {
      throw Error('Fail get Folder from asyncStorage');
    }
  }

  async getFolders(keys: string[]): Promise<[string, FolderModel][]> {
    try {
      return (await AsStorage.multiGet<FolderModel>(
        keys,
        FolderModelMapper,
      )) as [string, FolderModel][];
    } catch {
      throw Error('Fail get Folders from asyncStorage');
    }
  }

  async getFolderIds(): Promise<string[]> {
    try {
      return await AsStorage.getAllKeys();
    } catch {
      throw Error('Fail get FolderIds from asyncStorage');
    }
  }

  async clearStorage(): Promise<void> {
    try {
      return await AsStorage.clear();
    } catch {
      throw Error('Fail delete all Folders');
    }
  }
}

export default AsyncStorageRepository;
