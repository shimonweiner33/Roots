using System;
using System.Threading.Tasks;
using Roots.Common.Extensions;
using Roots.Data.Models;
using Roots.Data.Repository.Interface;

namespace Roots.Services
{
    public interface IAcountService
    {
        Task<bool> IsValidUser(Login login);
        Task<bool> Register(Login login);
    }
}
