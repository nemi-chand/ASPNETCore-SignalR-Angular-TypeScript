using ASPNETCore_SignalR_Angular_TypeScript.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETCore_SignalR_Angular_TypeScript.Hubs
{
    public class DynamicChatHub : DynamicHub
    {
		public async Task SendMessage(ChatMessage message)
		{
			await Clients.All.Send(message);
		}
	}
}
