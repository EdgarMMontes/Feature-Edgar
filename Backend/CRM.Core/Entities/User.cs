﻿//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

namespace CRM.Core.Entities
{
    public class User
    {
        public int id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Token { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int GroupId { get; set; }
        public string Phone { get; set; } = string.Empty;
        public bool TokenActive { get; set; } = true;

    }
}
