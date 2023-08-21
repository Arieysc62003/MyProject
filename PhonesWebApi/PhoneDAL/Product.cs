using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhoneDAL
{
    internal class Product
    {
        public int ProductID { get; set; }
        public string Model { get; set; } = null!;
        public decimal Price { get; set; }
        public string? Image { get; set; }
        public string Color { get; set; }
        public string Details { get; set; }
        public ICollection<ProductOrder> productsOrders { get; set; }
       
    }
}
