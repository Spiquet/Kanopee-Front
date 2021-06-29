import { Site } from './site';
import { User } from './user';

export class Message {
    public id: number;
    public content: string;
    public createdAt: Date;
    public updatedAt: Date;
    public role: string;
    public user: User;
    public site: Site;

    constructor(input?: Message) {
        if (input != null) {
            Object.assign(this, input);
            this.createdAt = new Date(input.createdAt);
            this.updatedAt = new Date(input.updatedAt);
        }
    }
}
