import { Message } from './message';
import { User } from './user';

export class Response {
    public id: number;
    public content: string;
    public imgUrl: string;
    public createdAt: Date;
    public updatedAt: Date;
    public user: User;
    public message: Message;

    constructor(input?: Response) {
        if (input != null) {
            Object.assign(this, input);
            this.createdAt = new Date(input.createdAt);
            this.updatedAt = new Date(input.updatedAt);
        }
    }
}
