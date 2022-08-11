import FolderModel from '../models/FolderModel';

export interface Repository {
  setFolder(folder: FolderModel): Promise<void>;

  getFolder(key: string): Promise<FolderModel | null>;

  putFolder(folder: FolderModel): Promise<void>;

  getFolders(keys: string[]): Promise<[string, FolderModel][]>;

  getFolderIds(): Promise<string[]>;

  clearStorage(): Promise<void>;
}
