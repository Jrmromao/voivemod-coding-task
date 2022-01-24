import { Sound } from "../../entities/Sound";
import { ISoundsRepository } from "../../repositories/ISoundRepository";
import { ISoundRequestDTO } from "./ISoundDTO";
import { sounds } from "../../data/database";

export class SoundUseCase {
  constructor(private soundRepository: ISoundsRepository) {
    this.soundsList = sounds;
  }

  private soundsList: Sound[];

  async excuteSubmitSounds(data: ISoundRequestDTO[]) {
    const sound: Sound[] = [];
    data.forEach(async (e) => {
      const userExists = await this.soundRepository.findById(e.name);
      if (userExists) {
        throw new Error("Sound already exists!");
      }
    });

    Object.assign(sound, []);
    this.soundRepository.save(sound);
  }

  async execureGetSounds() {
    try {
      return this.soundsList;
    } catch (error) {
      throw new Error("Error in retruning sounds!");
    }
  }
}
