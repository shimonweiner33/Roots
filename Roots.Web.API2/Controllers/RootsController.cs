using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Roots.Data.Models;
using Roots.Services;

namespace Roots.Web.API.Controllers
{
    //[Authorize]
    [ApiController, Route("api/[controller]")]
    public class RootsController : ControllerBase
    {


        private IPeopleService peopleService;
        public RootsController(IPeopleService peopleService)
        {
            this.peopleService = peopleService;
        }

        // GET api/values
        [HttpGet]
        public Task<People> GetPeopleById()
        {
            return peopleService.GetPeopleById("1");
        }

    }
}
