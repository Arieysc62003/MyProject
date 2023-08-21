using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopDAL;
namespace PhonesWebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        ShopDbContext PhonesDbContext;
        public UsersController(ShopDbContext _PhonesDbContext)
        {
            PhonesDbContext = _PhonesDbContext;
        }
        [HttpGet]
        public ActionResult GetUsers()
        {
            var users = PhonesDbContext.Users.ToList();
            return Ok(users);
        }
        [HttpGet("{id}")]
        public ActionResult GetUserById(int id)
        {
            var user = PhonesDbContext.Users.FirstOrDefault(u => u.UserId == id);
            return Ok(user);
        }
        [HttpPut("{id}")]
        public ActionResult UpdateUser(int id, User UUser)
        {
            var user = PhonesDbContext.Users.FirstOrDefault(uu => uu.UserId == id);
            if (user == null) return BadRequest();
            user.UserId = id;
            user.Login = UUser.Login;
            user.Password = UUser.Password;
            user.PhoneNumber = UUser.PhoneNumber;
            user.Email = UUser.Email;
            user.RoleID = UUser.RoleID;
            PhonesDbContext.SaveChanges();
            return NoContent();
        }
        [HttpPost]
        public ActionResult CreatePhone(User NewUser)
        {
            var CheckExsits = PhonesDbContext.Users.FirstOrDefault(ce => ce.Login == NewUser.Login);
            if (CheckExsits != null) return BadRequest();
            PhonesDbContext.Users.Add(NewUser);
            PhonesDbContext.SaveChanges();
            return NoContent();
        }
        [HttpDelete("{id}")]
        public ActionResult DeletePhone(int id)
        {
            var DUser = PhonesDbContext.Users.FirstOrDefault(ce => id == ce.UserId);
            if (DUser == null) return BadRequest();
            PhonesDbContext.Users.Remove(DUser);
            PhonesDbContext.SaveChanges();
            return NoContent();
        }
    }
}
