import { User } from "../../entities/User";
import { Sound } from "../../entities/Sound";
import { ISoundsRepository } from "../ISoundRepository";

export class SQLSoundsRepositiry implements ISoundsRepository {
  private users: User[] = [];
  private sounds: Sound[] = [];

  async findById(name: string): Promise<Sound> {
    try {
      const sound = this.sounds.find((sound) => sound.name === name);
      return sound;
    } catch (error) {
      throw error;
    }
  }

  async save(sound: Sound): Promise<void> {
    try {
      this.sounds.push(sound);
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
