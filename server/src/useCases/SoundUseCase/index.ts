import { SQLSoundsRepositiry } from "../../repositories/implementation/SQLSoundRepository";
import { SoundController } from "./SoundController";
import { SoundUseCase } from "./SoundUseCase";

const sQLUserRepositiry = new SQLSoundsRepositiry();

const soundUseCase = new SoundUseCase(sQLUserRepositiry);
const soundController = new SoundController(soundUseCase);

export { soundUseCase, soundController };
