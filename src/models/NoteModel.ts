import {makeAutoObservable} from 'mobx';
import {v1 as uuidv1} from 'uuid';

class NoteModel {
  private _id: string;

  private _title: string;

  private _link?: string;

  private _main?: string;

  private _folderId: string;

  constructor(
    title = 'No Title',
    folderId: string,
    link?: string,
    main?: string,
    id?: string,
  ) {
    if (id) {
      this._id = id;
    } else {
      this._id = uuidv1();
    }
    this._title = title;
    this._link = link;
    this._main = main;
    this._folderId = folderId;
    makeAutoObservable<NoteModel>(this);
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get link(): string {
    return this._link || '';
  }

  get main(): string {
    return this._main || '';
  }

  get folderId(): string {
    return this._folderId;
  }
}

export default NoteModel;
