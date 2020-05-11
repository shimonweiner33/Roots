using System;
using System.Collections.Generic;
using System.Text;

namespace Roots.Data.Models
{
    public class Tree : ModelBase
    {
        public List<Leaf> Items { get; set; }
    }
}
