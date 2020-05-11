using System;
using System.Collections.Generic;
using System.Text;

namespace Roots.Data.Models
{
    public class Leaf : ModelBase
    {
        public People people { get; set; }
        public int Level { get; set; }
    }
}
