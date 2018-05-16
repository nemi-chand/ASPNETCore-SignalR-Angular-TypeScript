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
  allMessages: ChatMessage[];
  canSendMessage: boolean;
  tabs: Tab[];

  constructor(
    private signalrService: SignalRService,
    private _ngZone: NgZone
  )
  {
    this.subscribeToEvents();
    this.chatMessage = new ChatMessage();
    this.allMessages = [];
    this.tabs = [];
    this.tabs.push(new Tab('Lobby', 'Welcome to lobby'));
  }

  sendMessage() {
    if (this.canSendMessage) {
      this.signalrService.sendChatMessage(this.chatMessage);
    }
  }

  private subscribeToEvents(): void {
    this.signalrService.connectionEstablished.subscribe(() => {
      this.canSendMessage = true;
    });

    this.signalrService.messageReceived.subscribe((message: ChatMessage) => {
      this._ngZone.run(() => {
        this.chatMessage = new ChatMessage();
        this.allMessages.push(
          new ChatMessage(message.user, message.text)
        );
        let room = this.tabs.find(t => t.heading == message.room);
        room.messageHistory.push(new ChatMessage(message.user, message.text, message.room));
      });
    });
  }
}
