using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Diagnostics;
using NuGet.Protocol.Plugins;
using ShopDAL;
using System.Linq;
 
namespace PhonesWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PhonesController : ControllerBase
    {
        ShopDbContext PhonesDbContext;
        public PhonesController(ShopDbContext _PhonesDbContext)
        {
            PhonesDbContext = _PhonesDbContext;
        }

        [HttpGet]
        public ActionResult GetPhones()
        {
            var phones = PhonesDbContext.Phones.ToList();
            return Ok(phones);
        }
        [HttpGet("{id}")]
        public ActionResult GetPhoneById(int id)
        {
            var phone = PhonesDbContext.Phones.FirstOrDefault(p=> p.PhoneId == id);
            return Ok(phone);
        }
        [HttpPut("{id}")]
        public ActionResult UpdatePhone(int id,Phone Uphone)
        {
            var phone = PhonesDbContext.Phones.FirstOrDefault(up=> up.PhoneId == id);
            if (phone == null) return BadRequest();
            phone.PhoneId = id;
            phone.Model = Uphone.Model;
            phone.Price = Uphone.Price;
            phone.Color = Uphone.Color;
            phone.Details = Uphone.Details;
            PhonesDbContext.SaveChanges();
            return NoContent();
        }
        [HttpPost]
        public ActionResult CreatePhone(Phone NewPhone)
        {
            var CheckExsits = PhonesDbContext.Phones.FirstOrDefault(ce => ce.Model == NewPhone.Model);
            if (CheckExsits != null) return BadRequest();
            PhonesDbContext.Phones.Add(NewPhone);
            PhonesDbContext.SaveChanges();
            return NoContent();
        }
        [HttpDelete("{id}")]
        public ActionResult DeletePhone(int id)
        {
            var DPhone = PhonesDbContext.Phones.FirstOrDefault(ce => id == ce.PhoneId);
            if (DPhone == null) return BadRequest();
            PhonesDbContext.Phones.Remove(DPhone);
            PhonesDbContext.SaveChanges();
            return NoContent();
        }
        [HttpGet("OrdersPhones")]
        public ActionResult detailsOrder()
        {
            
                var query = from u in PhonesDbContext.Users
                            join uo in PhonesDbContext.UsersOrders on u.UserId equals uo.UserId
                            join pr in PhonesDbContext.ProductsOrders on uo.OrderId equals pr.OrderId
                            join p in PhonesDbContext.Phones on pr.ProductId equals p.PhoneId
                            select new { u.Login, u.PhoneNumber, u.Email, p.Model, p.Color, p.Price , p.Details , pr.Quantity };
            return Ok(query);
        }

        

    }

}
