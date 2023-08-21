using System.ComponentModel.DataAnnotations;

namespace ShopDAL
{
    public class User
    {
        public int UserId { get; set; }
        [MaxLength(30)]
        [MinLength(3)]
        public string Login { get; set; }
        [Range(6,15)]
        public string Password { get; set; }
        [Range(9,13)]
        public string PhoneNumber { get; set; }
        [MaxLength(30)]
        [MinLength(6)]
        public string Email { get; set; }
        public int RoleID { get; set; }

        public ICollection<UserOrder> UserOrders { get; set; }
    }
}