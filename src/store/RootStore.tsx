import {createContext, useContext} from 'react';
import NoteStore from './NoteStore';

export interface RootStoreInterface {
  noteStore: NoteStore;
}

class RootStore {
  noteStore: NoteStore;

  constructor() {
    this.noteStore = new NoteStore();
  }
}
export const store: RootStoreInterface = new RootStore();

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
