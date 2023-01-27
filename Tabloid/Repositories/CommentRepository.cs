using Tabloid.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System;
using Microsoft.Extensions.Configuration;

namespace Tabloid.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }
       
  



        public List<Comment> GetAllComments()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, PostId, UserProfileId, Subject, Content, CreateDateTime
                        FROM Comment";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<Comment> comments = new List<Comment>();
                        while (reader.Read())
                        {

                            Comment comment = new Comment
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                PostId = reader.GetInt32(reader.GetOrdinal("PostId")),
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                Subject = reader.GetString(reader.GetOrdinal("Subject")),
                                Content = reader.GetString(reader.GetOrdinal("Content")),
                                CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
                            };
                            comments.Add(comment);

                        }
                        return comments;
                    }
                }

            }
        }

        public Comment GetCommentById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, PostId, UserProfileId, Subject, Content, CreateDateTime
                        FROM Comment
                        WHERE Id = @Id
                        ";

                    cmd.Parameters.AddWithValue("@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        if (reader.Read())
                        {

                            Comment comment = new Comment
                            {

                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                PostId = reader.GetInt32(reader.GetOrdinal("PostId")),
                                UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                                Subject = reader.GetString(reader.GetOrdinal("Subject")),
                                Content = reader.GetString(reader.GetOrdinal("Content")),
                                CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),
                            };



                            return comment;
                        }
                        else
                        {
                            return null;
                        }

                    }
                }
            }
        }

        public void AddComment(Comment comment)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Comment (PostId, UserProfileId, Subject, Content, CreateDateTime)
                    OUTPUT INSERTED.ID
                    
                    VALUES (@postId, @userProfileId, @subject, @content, @createDateTime)
                ";

                    cmd.Parameters.AddWithValue("@postId", comment.PostId);
                    cmd.Parameters.AddWithValue("@userProfileId", comment.UserProfileId);
                    cmd.Parameters.AddWithValue("@subject", comment.Subject);
                    cmd.Parameters.AddWithValue("@content", comment.Content);
                    cmd.Parameters.AddWithValue("@CreateDateTime", comment.CreateDateTime);

                    int id = (int)cmd.ExecuteScalar();

                    comment.Id = id;

                }
            }
        }

        public void DeleteComment(int commentId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM Comment  
                        WHERE Id = @id
                        ";

                    cmd.Parameters.AddWithValue("@id", commentId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }


}

