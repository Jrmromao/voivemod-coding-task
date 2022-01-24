import { Request, Response } from "express";
import { SoundUseCase } from "./SoundUseCase";

export class SoundController {
  constructor(private soundUseCase: SoundUseCase) {}

  async handleSubmitSounds(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, icon } = request.body;

    console.log(request.body);

    try {
      await this.soundUseCase.excuteSubmitSounds([]);

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
}
