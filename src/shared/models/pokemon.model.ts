export class Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;

  constructor (id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
