const { v4 } = require('uuid')

import {Sound} from '../entities/Sound'

export const sounds: Sound[] = [
    {
      id: v4(),
      name: 'Benfica',
      icon: 'benfica.jpeg',
      price: 0,
    }
  ]
  