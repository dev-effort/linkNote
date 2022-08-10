import {makeAutoObservable} from 'mobx';

class UiStore {
  private _isVisibleNewFolderModal: boolean;

  constructor() {
    this._isVisibleNewFolderModal = false;
    makeAutoObservable<UiStore>(this);
  }

  get isVisibleNewFolderModal(): boolean {
    return this._isVisibleNewFolderModal;
  }

  openNewFolderModal(): void {
    this._isVisibleNewFolderModal = true;
  }

  closeNewFolderModal(): void {
    this._isVisibleNewFolderModal = false;
  }
}

export default UiStore;
