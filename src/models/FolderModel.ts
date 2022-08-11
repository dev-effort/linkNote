import 'react-native-get-random-values';
import NoteModel from './NoteModel';
import {makeAutoObservable} from 'mobx';
import {v1 as uuidv1} from 'uuid';

class FolderModel {
  private _id: string;

  private _name: string;

  private _notes: Map<string, NoteModel>;

  constructor(name: string, id?: string, notes?: [string, any][]) {
    this._name = name;
    if (id) {
      this._id = id;
    } else {
      this._id = uuidv1();
    }
    if (notes?.length !== 0) {
      this._notes = new Map<string, NoteModel>();
      notes?.forEach(note => {
        const noteModel = new NoteModel(
          note[1]._title,
          note[1]._link,
          note[1]._main,
          note[1]._id,
        );
        this._notes.set(note[0], noteModel);
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
