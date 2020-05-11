using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;


namespace Roots.Services
{
    public static class Startup
    {

        public static IServiceCollection AddCommonServices(this IServiceCollection services)
        {
            services.AddSingleton<IPeopleService, PeopleService>();
            services.AddSingleton<IMemberService, MemberService>();
            services.AddSingleton<IAcountService, AcountService>();

            return services;
        }
    }
}
