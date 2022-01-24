import { Sound } from "../entities/Sound";

export interface ISoundsRepository {
    findById(name: string): Promise<Sound>;
    save(sound: Sound[]): Promise<void>;
  }