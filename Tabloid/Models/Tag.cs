﻿using System;
using System.ComponentModel.DataAnnotations;



namespace Tabloid.Models
{
    public class Tag
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
    }
}
