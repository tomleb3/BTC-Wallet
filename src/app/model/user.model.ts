export class UserModel {
  constructor(
    public _id?: string,
    public name: string = '',
    public coins: number = 0,
    public moves: Array<void> = []
  ) { }
}
