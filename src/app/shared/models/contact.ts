export class Contact {
  id: number;
  name: string;
  email: string;
  objet: string;
  phone?: string;
  message: string;

  constructor(input?: Contact) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

