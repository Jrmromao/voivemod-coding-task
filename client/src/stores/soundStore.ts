import { makeAutoObservable } from 'mobx'
import agent from '../API/agents'
import { ISound } from '../app/models/models'
import { sounds } from '../data/database'


// store to handle pastients operationns
export default class PatientStore {
  title = 'Mobx store!'

  soundList: ISound[] = []
  constructor() {
    makeAutoObservable(this)
  }

  submitSounds = async () => {
    try {
      await agent.sound.submitSounds(sounds)
      this.getAll()
    } catch (error) {
      throw error
    }
  }

  play = async (soundId: string) => {
    try {
      const sound = await agent.sound.play(soundId)
      this.getAll()
    } catch (error) {
      throw error
    }
  }

  getAll = async () => {
    try {
      const sounds = await agent.sound.getAll()
      if (sounds) this.soundList = sounds
    } catch (error) {
      throw error || new Error('Error fetching the sounds!')
    }
  }

  setTitle = () => {
    this.title = 'new'
  }
}
