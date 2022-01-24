import { makeAutoObservable } from 'mobx'
import agent from '../API/agents'
import { ISound } from '../app/models/models'
import { sounds } from '../data/database'

export default class PatientStore {
  title = 'Mobx store!'

  soundList: ISound[] = []
  constructor() {
    makeAutoObservable(this)
  }

  submit = async () => {
    try {
      await agent.sound.submitSounds(sounds)
    } catch (error) {
      throw error
    }
  }

  play = async (soundId: string) => {
    try {
      const sound = await agent.sound.play(soundId)
    } catch (error) {
      throw error
    }
  }

  getAll = async () => {
    try {
      const sounds = await agent.sound.getAll()
    console.log('get sonds!');
    
      if (sounds) 
      this.soundList = sounds
    } catch (error) {
      throw error || new Error('Error fetching the sounds!')
    }
  }

  setTitle = () => {
    this.title = 'new'
  }
}
