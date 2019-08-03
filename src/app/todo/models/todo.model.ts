export class Todo {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(
        text: string
    ) {
        this.id = Math.random();
        this.text = `${text.charAt(0).toLocaleUpperCase()}${text.substr(1)}`;
        this.completed = false;
    }

}
