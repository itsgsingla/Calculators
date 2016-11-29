using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProductManagement.Models;
namespace ProductManagement.Api
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class CharactersController : Controller
    {
        DataAccess _db;
        public CharactersController()
        {
            _db = new DataAccess();

        }

        [HttpGet]
        [Produces(typeof(IEnumerable<charactersModel>))]
        public IActionResult Get()
        {
            return Ok( _db.GetCharacters());
        }
    }
}
