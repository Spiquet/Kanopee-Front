export class Workshop {
    public id: number;
    public title: string;
    public description: string;
    public duration: string;
    public userSupport: File;
    public kulteurSupport: File;
    public link1: string;
    public link2: string;
    public link3: string;
    public link4: string;
    public link5: string;
    public link6: string;

    constructor(input?: Workshop) {
        Object.assign(this, input);
    }
}
