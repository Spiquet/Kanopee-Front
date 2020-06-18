export class Site {
  public id: number;
  public status: string;
  public code: string;
  public city: string;
  public address: string;
  public postcode: string;
  public name: string;

  constructor(input?: Site) {
    Object.assign(this, input);
  }
}
