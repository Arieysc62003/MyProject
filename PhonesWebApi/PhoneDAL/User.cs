namespace PhoneDAL
{
    public class User
    {
        public int UserID { get; set; }
        public string Login { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? ProfilePicture { get; set; }
        public int RoleID { get; set; }
        public ICollection<UserOrder> UsersOrders { get; set; }
    }
}