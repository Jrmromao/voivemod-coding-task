import { Router } from "express";
import { soundController } from "./useCases/SoundUseCase";

const router = Router();
router.post("/api/sound", (req, res) => {
  return soundController.handleSubmitSounds(req, res);
  //return res.status(201).send();
});
router.post("/api/sounds/submit-sounds", (req, res) => {

  return res.status(201).send();
});

router.get("/api/sounds", (req, res) => {
  return soundController.handleGetSounds(req, res);
});

router.put("/api/sounds/:id/play", (req, res) => {
  return res.status(201).send();
});

router.delete("/api/sounds/:id", (req, res) => {
  return res.status(201).send();
});

export { router };
