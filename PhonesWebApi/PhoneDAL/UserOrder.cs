namespace PhoneDAL
{
    public class UserOrder
    {
        public int OrderID { get; set; }
        public int UserID { get; set; }
        public User User;

        public DateTime Created { get; set; }

    }
}