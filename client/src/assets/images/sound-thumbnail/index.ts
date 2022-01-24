import cat from "./cat.jpeg";
import dog from "./dog.jpeg";
import punching from "./punching.jpeg";
import stop from "./stop.jpeg";
import viking from "./viking.jpeg";
import thunder from "./thunder.jpeg";
import horse from "./horse.jpeg";
import car from "./car.jpeg";
import { IImage } from "../../../app/models/models";

let images: IImage[] = [];

images.push({ source: cat, name: "Cat" });
images.push({ source: dog, name: "Dog" });
images.push({ source: stop, name: "Stop" });
images.push({ source: punching, name: "Punching" });
images.push({ source: viking, name: "Viking" });
images.push({ source: thunder, name: "Thunder" });
images.push({ source: car, name: "Car" });
images.push({ source: horse, name: "Horse" });
export default images;
