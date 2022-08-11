import 'react-native-get-random-values';
import NoteModel from './NoteModel';
import {makeAutoObservable} from 'mobx';
import {v1 as uuidv1} from 'uuid';

class FolderModel {
  private _id: string;

  private _name: string;

  private _notes: Map<string, NoteModel>;

  constructor(name: string, id?: string, notes?: [string, NoteModel][]) {
    this._name = name;
    if (id) {
      this._id = id;
    } else {
      this._id = uuidv1();
    }
    if (notes?.length !== 0) {
      this._notes = new Map<string, NoteModel>();
      notes?.forEach(note => {
        this._notes.set(note[0], note[1]);
      });
    } else {
      this._notes = new Map<string, NoteModel>();
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

  addNote(note: NoteModel) {
    this._notes.set(note.id, note);
  }
}

export default FolderModel;
