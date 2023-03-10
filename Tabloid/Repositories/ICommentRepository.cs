using Tabloid.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace Tabloid.Repositories
{
    public interface ICommentRepository
    {
        public List<Comment> GetAllComments();

        public Comment GetCommentById(int id);

        void AddComment(Comment comment);

        void DeleteComment(int commentId);

    }
}

