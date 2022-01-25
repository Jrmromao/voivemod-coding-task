import { Router } from "express";
import { soundController } from "./useCases/SoundUseCase";

const router = Router();
router.post("/api/sounds/submit-sounds", async (req, res) => {
  return await soundController.handleSubmitSounds(req, res);
  //return res.status(201).send();
});
router.get("/api/sounds", async (req, res) => {
  return await soundController.handleGetSounds(req, res);
});

router.put("/api/sounds/:id/play",async  (req, res) => {
  return await soundController.handlePlaySound(req.params.id.split(':')[1], res)
});

router.get("/api/sound/:id",async  (req, res) => {
  console.log(req.params.id);
  
  return await soundController.handleGetSingleSound(req.params.id, res)
});


export { router };
