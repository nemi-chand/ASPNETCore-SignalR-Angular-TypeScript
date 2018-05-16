using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETCore_SignalR_Angular_TypeScript.Models
{
    public class ChatMessage
    {
		public string user { get; set; }

		public string message { get; set; }

		public string room { get; set; }
	}
}
