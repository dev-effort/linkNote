import 'react-native-get-random-values';
import NoteModel from './NoteModel';
import {makeAutoObservable} from 'mobx';
import {v1 as uuidv1} from 'uuid';

class FolderModel {
  private _id: string;

  private _name: string;

  private _notes: Map<symbol, NoteModel>;

  constructor(name: string, id?: string, notes?: Map<symbol, NoteModel>) {
    this._name = name;
    if (id) {
      this._id = id;
    } else {
      this._id = uuidv1();
    }
    if (notes) {
      this._notes = notes;
    } else {
      this._notes = new Map<symbol, NoteModel>();
    }
    makeAutoObservable<FolderModel>(this);
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get notes(): NoteModel[] {
    return [...this._notes.values()];
  }
}

export default FolderModel;
