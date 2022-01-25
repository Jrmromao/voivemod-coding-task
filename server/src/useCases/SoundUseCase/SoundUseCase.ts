import { Sound } from "../../entities/Sound";
import { ISoundsRepository } from "../../repositories/ISoundRepository";
import { ISoundRequestDTO } from "./ISoundDTO";
import { sounds } from "../../data/database";

export class SoundUseCase {
  constructor(private soundRepository: ISoundsRepository) {}

  async excuteSubmitSounds(data: ISoundRequestDTO[]) {
    const sound: Sound[] = [];
    Object.assign(sound, data);
    this.soundRepository.save(sound);
  }

  async execurePlaySound(soundId: string) {
    try {
      this.soundRepository.play(soundId);
    } catch (error) {
      throw new Error("Error in playing sound!: " + error);
    }
  }

  async execureGetSounds() {
    try {
      return this.soundRepository.getAll();
    } catch (error) {
      throw new Error("Error in retriving sounds!");
    }
  }

  async execureGetSingleSound(soundId: string) {
    try {
      return this.soundRepository.findById(soundId);
    } catch (error) {
      throw new Error("Error in retriving single sound!");
    }
  }
}
