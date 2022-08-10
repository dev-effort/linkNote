import {makeAutoObservable, runInAction} from 'mobx';
import FolderModel from '../models/FolderModel';
import AsyncStorageRepository from '../repositories/AsyncStorageRepository';
import {Repository} from '../repositories/Repository';

class NoteStore {
  private _folders: Map<string, FolderModel>;

  private repository: Repository;

  constructor() {
    this._folders = new Map<string, FolderModel>();
    this.repository = new AsyncStorageRepository();
    makeAutoObservable<NoteStore>(this);
  }

  async init() {
    const defaultFolderKey = await this.repository.getFolder(
      '00000000-0000-0000-0000-000000000000',
    );
    if (defaultFolderKey === null) {
      const defaultFolder = new FolderModel(
        'default',
        '00000000-0000-0000-0000-000000000000',
      );
      await this.repository.setFolder(defaultFolder);
    }

    const AllFolderKeys = await this.repository.getFolderIds();
    const folders = await this.repository.getFolders(AllFolderKeys);
    runInAction(() => {
      folders.forEach(folder => {
        this._folders.set(folder[0], folder[1]);
      });
    });
  }

  async addFolder(name: string) {
    const folder = new FolderModel(name);
    await this.repository.setFolder(folder);
    runInAction(() => {
      this._folders.set(folder.id, folder);
    });
  }

  get folders(): FolderModel[] {
    return [...this._folders.values()];
  }

  async deleteAllFolders(): Promise<void> {
    const result = await this.repository.clearStorage();
    runInAction(() => {
      this._folders.clear();
    });
    return result;
  }
}

export default NoteStore;
