import {makeAutoObservable} from 'mobx';
import {v1 as uuidv1} from 'uuid';

class NoteModel {
  private _id: string;

  private _title: string;

  private _link?: string;

  private _main?: string;

  constructor(title = 'No Title', link?: string, main?: string) {
    this._id = uuidv1();
    this._title = title;
    this._link = link;
    this._main = main;
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
}

export default NoteModel;
