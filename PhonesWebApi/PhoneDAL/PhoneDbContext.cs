using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PhoneDAL
{
    internal class PhoneDbContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductOrder> ProductsOrders { get; set; }
        public DbSet<UserOrder> UsersOrders { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=PhoneShop;Integrated Security=True;trustservercertificate=true");

        }
    }
}
                                                  