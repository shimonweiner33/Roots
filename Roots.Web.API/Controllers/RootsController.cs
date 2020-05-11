using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Roots.Web.API.Controllers
{
    //[Authorize]
    [ApiController, Route("api/[controller]")]
    public class RootsController : ControllerBase
    {


        private Data.Repository.Interface.IPeopleRepository peopleRepository;
        public RootsController(Data.Repository.Interface.IPeopleRepository peopleRepository)
        {
            this.peopleRepository = peopleRepository;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

    }
}
