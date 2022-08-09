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

  async getFolder(): Promise<FolderModel> {
    try {
      return (await AsStorage.get<FolderModel>(
        'Folders',
        FolderModelMapper,
      )) as FolderModel;
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
}

export default AsyncStorageRepository;
