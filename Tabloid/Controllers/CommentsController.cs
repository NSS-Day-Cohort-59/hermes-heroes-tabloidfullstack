using System;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;
using Tabloid.Models;
using Microsoft.AspNetCore.Authorization;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet]
        public IActionResult GetComments()
        {
            return Ok(_commentRepository.GetAllComments());
        }

        [HttpGet("{id}")]
        public IActionResult GetCommentById(int id)
        {
            var comment = _commentRepository.GetCommentById(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }

        [HttpPost] // adding new comment
        public IActionResult PostComment(Comment comment)
        {
            _commentRepository.AddComment(comment);
            return CreatedAtAction("Get", new { id = comment.Id }, comment);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteComment(int id)
        {
            _commentRepository.DeleteComment(id);
            return NoContent();
        }

    }
}
