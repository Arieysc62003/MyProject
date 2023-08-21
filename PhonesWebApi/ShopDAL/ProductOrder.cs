using System.ComponentModel.DataAnnotations;

namespace ShopDAL
{
    public class ProductOrder
    {
        public int OrderId { get; set; }
        public UserOrder UserOrder { get; set; }

        public int ProductId { get; set; }
        public virtual Phone Product { get; set; }
        [MaxLength(100)]
        public int Quantity { get; set; }
    }
}