import { Sound } from "../entities/Sound";

export interface ISoundsRepository {
  save(sound: Sound[]): Promise<void>;
  findById(soundId: string): Promise<Sound>;
  play(soundId: string): Promise<void>;
  getAll(): Promise<Sound[]>;
}
