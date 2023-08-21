using Microsoft.EntityFrameworkCore;
using ShopDAL;

namespace PhonesWebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var cs = builder.Configuration.GetConnectionString("shop");

            // Add services to the container.

            builder.Services.AddDbContext<ShopDbContext>(op=> op.UseSqlServer(cs));
            builder.Services.AddControllers();
            //חייב למבין מה זה זה 
            builder.Services.AddCors(sa =>
            {
                sa.AddDefaultPolicy(pol =>
                {
                    pol.AllowAnyHeader();
                    pol.AllowAnyMethod();
                    pol.AllowAnyOrigin();
                    //pol.WithMethods("POST", "PUT", "DELETE", "GET");
                    //pol.WithOrigins("https://localhost:44474/");
                });
            });

            var app = builder.Build();
             
            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();
            app.UseCors();

            app.Run();
        }
    }
}