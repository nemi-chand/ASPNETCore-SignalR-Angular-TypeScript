using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETCore_SignalR_Angular_TypeScript.Models
{
	public class Stock
	{
		private decimal _price;

		public string Symbol { get; set; }

		public decimal DayOpen { get; private set; }

		public decimal DayLow { get; private set; }

		public decimal DayHigh { get; private set; }

		public decimal LastChange { get; private set; }

		public decimal Change
		{
			get
			{
				return Price - DayOpen;
			}
		}

		public double PercentChange
		{
			get
			{
				return (double)Math.Round(Change / Price, 4);
			}
		}

		public decimal Price
		{
			get
			{
				return _price;
			}
			set
			{
				if (_price == value)
				{
					return;
				}

				LastChange = value - _price;
				_price = value;

				if (DayOpen == 0)
				{
					DayOpen = _price;
				}
				if (_price < DayLow || DayLow == 0)
				{
					DayLow = _price;
				}
				if (_price > DayHigh)
				{
					DayHigh = _price;
				}
			}
		}
	}
}
