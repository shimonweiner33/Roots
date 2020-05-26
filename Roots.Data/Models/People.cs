using System;
using System.Collections.Generic;
using System.Text;

namespace Roots.Data.Models
{
    public class People : ModelBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneArea { get; set; }
        public string PhoneNumber { get; set; }
    }
}
