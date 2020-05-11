using Roots.Data.Models;
using System;
using System.Threading.Tasks;

namespace Roots.Services
{
    public interface IMemberService
    {
        Task<Member> GetMember(Login login);
    }
}
