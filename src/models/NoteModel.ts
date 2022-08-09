import {makeAutoObservable} from 'mobx';

class NoteModel {
  private _id: symbol;

  private _title: string;

  private _link?: string;

  private _main?: string;

  constructor(title = 'No Title', link?: string, main?: string) {
    this._id = Symbol(title);
    this._title = title;
    this._link = link;
    this._main = main;
    makeAutoObservable<NoteModel>(this);
  }

  get id(): symbol {
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
