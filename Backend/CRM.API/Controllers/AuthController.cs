using CRM.Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CRM.API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : Controller
    {

        [HttpGet]
        public IActionResult login(string username, string password)
        {
            User usuario = new User
            {
                Email = "hola",
                id = 2,
                Token = "",
                TokenActive = true,
                GroupId = 1,
                Password = password,
                Phone = "4491786730",
                Username = username

            };

            return Ok( new ResponseC<User>( usuario ) );
        }
    }
}
