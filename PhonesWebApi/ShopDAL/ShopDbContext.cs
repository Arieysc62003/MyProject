using Microsoft.EntityFrameworkCore;

namespace ShopDAL
{
    public class ShopDbContext :DbContext
    {
        public ShopDbContext()
        {
        }

        public ShopDbContext(DbContextOptions<ShopDbContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<UserOrder> UsersOrders { get; set; }
        public DbSet<Phone> Phones { get; set; }
        public DbSet<ProductOrder> ProductsOrders { get; set; }
        /*
        public DbSet<Charger> Chargers { get; set; }
        public DbSet<PhoneCase> PhoneCases { get; set; }
        public DbSet<ScreenProtector> ScreenProtectors { get; set; }
        public DbSet<Headphones> Headphones { get; set; }
         */


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            if(!optionsBuilder.IsConfigured)
            {
            optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=PhoneShop;Integrated Security=True;trustservercertificate=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().HasIndex("Login").IsUnique();
            modelBuilder.Entity<ProductOrder>().HasKey(po => new { po.OrderId, po.ProductId });
            modelBuilder.Entity<UserOrder>().HasKey("OrderId");
            modelBuilder.Entity<UserOrder>().Property(uo=> uo.Created).HasColumnType("datetime");
            modelBuilder.Entity<Phone>().Property(x => x.Price).HasColumnType("decimal");

            SeedData(modelBuilder);
           
        }

        public void SeedData(ModelBuilder modelBuilder)
        {
            var FirstPhones = new Phone[]
            {
                new Phone() { PhoneId = 1, Model = "iPhone 14 Pro 512GB",ImageData = "https://d3m9l0v76dty0.cloudfront.net/system/photos/10934083/large/0bbb2892562c4e179d80c68b328f60ee.jpg",Color = "Gold", Price = 6000, Details = "x" },
                new Phone() { PhoneId = 2, Model = "iPhone 14 Pro Max 512GB",ImageData = "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083611/large/9b814085bdafb47be8da7b14c31ad983.png",Color = "Black", Price = 6500, Details = "x" },
                new Phone() { PhoneId = 3, Model = "iPhone 13 128GB",ImageData = "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083610/large/0edebdde77cd1f4f48397a3471bedcce.png",Color = "Purple", Price = 3100, Details = "x" },
                new Phone() { PhoneId = 4, Model = "iPhone 14 Pro 256GB",ImageData = "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083609/large/3efcbab52ccaefaacc94441dd01c62c3.png",Color = "Silver" , Price = 5070, Details = "x" }
            };

            var FirstUsers = new User[]
            {
              new User(){UserId = 1,Login= "Adam",Password= "A111", PhoneNumber= "0558748747", Email= "Adam@gmail.com", RoleID= 1},
              new User(){UserId = 2,Login= "Moshe",Password= "M1111", PhoneNumber= "0548983634", Email= "Moshe@gmail.com", RoleID= 2},
              new User(){UserId = 3,Login= "Lidan",Password= "L1111", PhoneNumber= "0539856321", Email= "Lidan@gmail.com", RoleID= 2},
            };

            var FirstUsersOrders = new UserOrder[] { 
                new UserOrder(){OrderId= 1, UserId= 2, Created =DateTime.Now},
                new UserOrder(){OrderId= 2, UserId= 3, Created =DateTime.Now},
            };
            
            var FirstProductsOrders = new ProductOrder[]
            {
                new ProductOrder(){OrderId= 1,ProductId= 3,Quantity= 1  },
                new ProductOrder(){OrderId= 1,ProductId= 4,Quantity= 2  },
                new ProductOrder(){OrderId= 2,ProductId= 1,Quantity= 1  },
            };

            modelBuilder.Entity<Phone>().HasData(FirstPhones);
            modelBuilder.Entity<User>().HasData(FirstUsers);
            modelBuilder.Entity<UserOrder>().HasData(FirstUsersOrders);
            modelBuilder.Entity<ProductOrder>().HasData(FirstProductsOrders);

        }
    }
}