using System;
using System.Threading.Tasks;
using Roots.Data.Models;
using Roots.Data.Repository.Interface;

namespace Roots.Services
{
    public class PeopleService : IPeopleService
    {
        private IPeopleRepository peopleRepository;
        public PeopleService(IPeopleRepository peopleRepository)
        {
            this.peopleRepository = peopleRepository;
        }

        public async Task<People> GetPeopleById(string id)
        {
            var people = await peopleRepository.GetPeopleById(id);
            return people;
        }
    }
}
