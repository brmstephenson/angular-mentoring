export class Pokemon {
  private _id: number;
  private _name: string;
  private _type: string;
  private _baseExperience: string;
  private _isDefault: string;
  private _order: number;
  private _weight: number;
  private _height: number;

  constructor(id: number, name: string, type: string) {
    this._id = id;
    this._name = name;
    this._type = type;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get baseExperience(): string {
    return this._baseExperience;
  }

  set baseExperience(value: string) {
    this._baseExperience = value;
  }

  get isDefault(): string {
    return this._isDefault;
  }

  set isDefault(value: string) {
    this._isDefault = value;
  }

  get order(): number {
    return this._order;
  }

  set order(value: number) {
    this._order = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }
}
