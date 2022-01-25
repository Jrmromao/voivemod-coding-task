import { Request, Response } from "express";
import { SoundUseCase } from "./SoundUseCase";

export class SoundController {
  constructor(private soundUseCase: SoundUseCase) {}

  async handleSubmitSounds(
    request: Request,
    response: Response
  ): Promise<Response> {

    try {
      await this.soundUseCase.excuteSubmitSounds(request.body);

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "[SubmitSounds]: Unexpected error.",
      });
    }
  }
  async handleGetSounds(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const sounds = await this.soundUseCase.execureGetSounds();
      if (sounds.length > 0) return response.status(201).send(sounds);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "[GetSounds]: Unexpected error.",
      });
    }
  }
  async handleGetSingleSound(
    soundId: string,
    response: Response
  ): Promise<Response> {
    try {

      const sound = await this.soundUseCase.execureGetSingleSound(soundId);
      console.log(sound);
      if (sound) return response.status(201).send(sound);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "[GetSingleSound]: Unexpected error.",
      });
    }
  }
  async handlePlaySound(
    soundId: string,
    response: Response
  ): Promise<Response> {
    try {
      await this.soundUseCase.execurePlaySound(soundId);
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "[Play Sound]: Unexpected error.",
      });
    }
  }
}
