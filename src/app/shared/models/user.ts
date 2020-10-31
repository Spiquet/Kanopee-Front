import { Site } from './site';
import { UserRole } from './../../shared/enum/user-role.enum';

export class User {
public id: number;
public firstName: string;
public lastName: string;
public birth_date: string;
public home: string;
public password: string;
public tel: string;
public email: string;
public role: UserRole;
public avatar: string;
public createdAt: Date;
public site: Site;
public isActive: boolean;
public token?: string;

	constructor(input?: User) {
		Object.assign(this, input);
		this.createdAt = new Date(input.createdAt);
	}
}
