import { EventEmitter, Injectable } from '@angular/core';
import { HubConnection,HubConnectionBuilder, IStreamResult } from '@aspnet/signalr'


@Injectable()
export class stockSignalRService {
  connectionEstablished = new EventEmitter<Boolean>();
  marketOpened = new EventEmitter<Boolean>();
  marketClosed = new EventEmitter<Boolean>();

  private connectionIsEstablished = false;
  private _stockHubConnection: HubConnection;


  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  private createConnection() {
    this._stockHubConnection = new HubConnectionBuilder()
      .withUrl('/stock')
      .build();
  }

  private startConnection(): void {
    this._stockHubConnection
      .start()
      .then(() => {
        this.connectionIsEstablished = true;
        console.log('stock connection started');
        this.connectionEstablished.emit(true);
      }).catch(err => {
        setTimeout(this.startConnection(), 5000);
      });
  }

  private registerOnServerEvents(): void {
    this._stockHubConnection.on("marketOpened", () => {
      console.log("marketOpened");
      this.marketOpened.emit(true);
    });

    this._stockHubConnection.on("marketClosed",() => {
      console.log("marketClosed");
      this.marketClosed.emit(true);
    });
  }

  public startStreaming(): IStreamResult<any> {
    return this._stockHubConnection.stream("StreamStocks");
  }

  public getAllStocks(): Promise<any> {
    return this._stockHubConnection.invoke("getAllStocks");
  }

  public openMarket() {
    this._stockHubConnection.invoke("OpenMarket");
  }

  public CloseMarket() {
    this._stockHubConnection.invoke("CloseMarket");
  }

  public ResetMarket() {
    this._stockHubConnection.invoke("Reset");
  }
  
}
