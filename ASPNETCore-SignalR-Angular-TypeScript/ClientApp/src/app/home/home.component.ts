import { Component, NgZone  } from '@angular/core';

import { SignalRService } from '../services/signalR.service';
import { ChatMessage } from '../Models/chatmessage.model';
import { Tab } from '../Models/tab.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  chatMessage: ChatMessage;
  canSendMessage: boolean;
  tabs: Tab[];
  currentRoom: string;

  constructor(
    private signalrService: SignalRService,
    private _ngZone: NgZone
  )
  {
    this.subscribeToEvents();
    this.chatMessage = new ChatMessage();
    this.tabs = [];
    this.tabs.push(new Tab('Lobby', 'Welcome to lobby'));
    this.tabs.push(new Tab('SignalR', 'Welcome to SignalR Room'));
    this.currentRoom = 'Lobby';
  }

  sendMessage() {
    if (this.canSendMessage) {
      this.chatMessage.room = this.currentRoom;
      this.signalrService.sendChatMessage(this.chatMessage);
    }
  }

  OnRoomChange(room) {
    this.currentRoom = room;
  }

  private subscribeToEvents(): void {
    this.signalrService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    this.signalrService.messageReceived.subscribe((message: ChatMessage) => {
      this._ngZone.run(() => {
        this.chatMessage = new ChatMessage();
        let room = this.tabs.find(t => t.heading == message.room);
        if (room) {
            room.messageHistory.push(new ChatMessage(message.user, message.message, message.room));
        }
      });
    });
  }
}
