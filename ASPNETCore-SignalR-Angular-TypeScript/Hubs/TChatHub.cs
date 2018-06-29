using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETCore_SignalR_Angular_TypeScript.Hubs
{
    public class TChatHub : Hub<IChatClient>
    {

		public Task Send(string message)
		{
			return Clients.All.Send(message);
		}

    }

	public interface IChatClient
	{
		Task Send(string message);
	}
}
