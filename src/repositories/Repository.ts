import FolderModel from '../models/FolderModel';

export interface Repository {
  setFolder(folders: FolderModel): Promise<void>;

  getFolder(): Promise<FolderModel>;

  getFolders(keys: string[]): Promise<[string, FolderModel][]>;

  getFolderIds(): Promise<string[]>;
}
