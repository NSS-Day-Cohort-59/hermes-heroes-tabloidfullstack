using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CategoryController : ControllerBase
    {
            private readonly ICategoryRepository _categoryRepository;
            public CategoryController(ICategoryRepository categoryRepository)
            {
                _categoryRepository = categoryRepository;
            }

            [HttpGet]
            public IActionResult Get()
            {
                return Ok(_categoryRepository.GetAll());
            }
    }
}
