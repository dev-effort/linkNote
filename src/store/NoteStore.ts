import {makeAutoObservable} from 'mobx';
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
    const AllFolderKeys = await this.repository.getFolderIds();

    const folders = await this.repository.getFolders(AllFolderKeys);
    folders.forEach(folder => {
      this._folders.set(folder[0], folder[1]);
    });
  }

  async addFolder(name: string) {
    const folder = new FolderModel(name);
    await this.repository.setFolder(folder);
    this._folders.set(folder.id, folder);
  }

  get folders(): FolderModel[] {
    return [...this._folders.values()];
  }
}

export default NoteStore;
