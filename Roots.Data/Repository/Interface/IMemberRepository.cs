using Roots.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Roots.Data.Repository.Interface
{
    public interface IMemberRepository
    {
        Task<Member> GetMember(string userName);
    }
}
