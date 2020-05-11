using Roots.Data.Models;
using System;
using System.Threading.Tasks;

namespace Roots.Services
{
    public interface IPeopleService
    {
        Task<People> GetPeopleById(string id);
    }
}
