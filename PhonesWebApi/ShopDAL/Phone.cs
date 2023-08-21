using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace ShopDAL
{
    public class Phone
    {
        public int PhoneId { get; set; }
        [MaxLength(30)]
        public string Model { get; set; }
        public string? ImageData { get; set; }

        [Range(1, 10000)]
        public decimal Price { get; set; }
        public string Color { get; set; }
        [MaxLength(200)]
        public string Details { get; set; }

        public ICollection<ProductOrder>? PhonesOrders { get; set; }

        
    }

}