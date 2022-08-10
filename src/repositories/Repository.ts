import FolderModel from '../models/FolderModel';

export interface Repository {
  setFolder(folders: FolderModel): Promise<void>;

  getFolder(key: string): Promise<FolderModel | null>;

  getFolders(keys: string[]): Promise<[string, FolderModel][]>;

  getFolderIds(): Promise<string[]>;

  clearStorage(): Promise<void>;
}
