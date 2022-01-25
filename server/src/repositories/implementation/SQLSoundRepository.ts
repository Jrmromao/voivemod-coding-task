import { Sound } from "../../entities/Sound";
import { ISoundsRepository } from "../ISoundRepository";
import { sounds } from "../../data/database";
export class SQLSoundsRepositiry implements ISoundsRepository {
  constructor() {
    this.sounds = sounds;
  }

  private sounds: Sound[] = [];

  async save(soundList: Sound[]): Promise<void> {
    try {
      if (soundList) {
        this.sounds.length = 0;
        this.sounds = soundList;
        return;
      }
    } catch (error) {
      throw error;
    }
  }
  async play(soundId: string): Promise<void> {
    try {
      const index = this.sounds.findIndex((s) => s.id === soundId);
      this.sounds[index].price += 0.01;
      return;
    } catch (error) {
      throw error;
    }
  }
  async findById(id: string): Promise<Sound> {
    try {

      const sound = this.sounds.find((sound) => sound.id === id);
      console.log(sound);
      return sound;
    } catch (error) {
      throw error;
    }
  }
  async findByName(name: string): Promise<Sound> {
    try {
      const sound = this.sounds.find((sound) => sound.name === name);
      return sound;
    } catch (error) {
      throw error;
    }
  }
  async getAll(): Promise<Sound[]> {
    try {
      if (this.sounds.length > 0) return this.sounds;
      else
        throw new Error("Message: There are no sounds acailable in the list!");
    } catch (error) {
      throw error;
    }
  }
}
