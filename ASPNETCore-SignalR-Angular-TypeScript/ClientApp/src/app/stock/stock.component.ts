import { Component } from "@angular/core";

import { stockSignalRService } from "../services/stock.signalR.service";
import { forEach } from "@angular/router/src/utils/collection";


@Component({
  templateUrl: './stock.component.html',
  selector:"app-stock"
})

export class StockComponent {

  stocks = [];
  marketStatus: string;

  constructor(private stockService: stockSignalRService) {
    this.stocks = [];
    this.marketStatus = 'closed';
    //subscribe for connection eastablish
    //fetch the stocks details
    stockService.connectionEstablished.subscribe(() => {
      stockService.getAllStocks().then((data) => {
        this.stocks = data;
      });
    });

    //subscribe for market open
    stockService.marketOpened.subscribe(() => {
      this.marketStatus = 'open';
      this.startStrearming();
    });

    //subscribe for market close
    stockService.marketClosed.subscribe(() => {
      this.marketStatus = 'closed';
    });
    
  }

  openMarketClicked() {
    this.stockService.openMarket();
  }

  startStrearming() {
    this.stockService.startStreaming().subscribe({
      next: (data) => {
        this.displayStock(data);
      },
      error: function (err) {
        console.log('Error:' + err);
      },
      complete: function () {
        console.log('completed');
      }
    });
  }

  closeMarketClicked() {
    this.stockService.CloseMarket();
  }

  resetClicked() {
    this.stockService.ResetMarket();
  }

  displayStock(stock) {
    console.log("stock updated:" + stock.symbol);
    for (let i in this.stocks) {
      //console.log(i);
      if (this.stocks[i].symbol == stock.symbol) {
        this.stocks[i] = stock;
      }
    }
  }

}
