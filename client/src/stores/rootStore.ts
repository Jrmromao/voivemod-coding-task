import { createContext, useContext } from 'react'
import SoundStore from './soundStore'

interface IStore {
  soundStore: SoundStore
}

export const stores: IStore = {
  soundStore: new SoundStore(),
}

export const StoreContext = createContext(stores)

export function useStore() {
  return useContext(StoreContext)
}
