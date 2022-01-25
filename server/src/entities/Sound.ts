import { uuid } from 'uuidv4'

export class Sound {
   
  public id: string;
  public name: string;
  public icon: string;
  public price: number;
 
  constructor(props: Omit<Sound, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }


 
}