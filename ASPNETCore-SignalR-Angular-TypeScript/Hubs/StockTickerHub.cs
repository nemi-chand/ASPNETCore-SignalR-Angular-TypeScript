using ASPNETCore_SignalR_Angular_TypeScript.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Channels;
using System.Threading.Tasks;

namespace ASPNETCore_SignalR_Angular_TypeScript.Hubs
{

	/// <summary>
	/// stock ticker hub 
	/// </summary>
    public class StockTickerHub : Hub
    {
		private StockTicker _stockTicker;

		public StockTickerHub(StockTicker stockTicker)
		{
			this._stockTicker = stockTicker;
		}

		public IEnumerable<Stock> GetAllStocks()
		{
			return _stockTicker.GetAllStocks();
		}

		public ChannelReader<Stock> StreamStocks()
		{
			return _stockTicker.StreamStocks().AsChannelReader(10);
		}

		public string GetMarketState()
		{
			return _stockTicker.MarketState.ToString();
		}

		public async Task OpenMarket()
		{
			await _stockTicker.OpenMarket();
		}

		public async Task CloseMarket()
		{
			await _stockTicker.CloseMarket();
		}

		public async Task Reset()
		{
			await _stockTicker.Reset();
		}
	}
}
