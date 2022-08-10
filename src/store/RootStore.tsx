import {createContext, useContext} from 'react';
import NoteStore from './NoteStore';
import UiStore from './UiStore';

export interface RootStoreInterface {
  noteStore: NoteStore;
  uiStore: UiStore;
}

class RootStore {
  noteStore: NoteStore;

  uiStore: UiStore;

  constructor() {
    this.noteStore = new NoteStore();
    this.uiStore = new UiStore();
  }
}
export const store: RootStoreInterface = new RootStore();

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
