using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAll();
        void Add(Tag tag);
        void Update(Tag tag);
        void Delete(int id);
    }
}