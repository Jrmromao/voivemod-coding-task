import { uuid } from 'uuidv4'
import {Sound} from '../entities/Sound'

export const sounds: Sound[] = [
    {
      id: uuid(),
      name: 'Punching',
      icon: 'punching.jpeg',
    },
    {
      id: uuid(),
      name: 'Stop',
      icon: 'stop.jpeg',
    },
    {
      id: uuid(),
      name: 'Thunder',
      icon: 'thunder.jpeg',
    },
    {
      id: uuid(),
      name: 'Viking',
      icon: 'viking.jpeg',
    },
  ]
  