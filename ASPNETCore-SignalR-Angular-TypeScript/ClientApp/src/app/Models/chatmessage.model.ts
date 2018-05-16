

export class ChatMessage {

  user: string;
  text: string;
  room: string;

  constructor(user: string = '', text: string='',room:string='') {
    this.user = user;
    this.text = text;
    this.room = room;
  }
}
