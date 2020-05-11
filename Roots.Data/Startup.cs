using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Roots.Data.Repository;
using Roots.Data.Repository.Interface;

namespace Roots.Data
{
    public static class Startup
    {

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddSingleton<IPeopleRepository, PeopleRepository>();
            services.AddSingleton<IMemberRepository, MemberRepository>();
            services.AddSingleton<IAcountRepository, AcountRepository>();
            

            return services;
        }
    }
}
