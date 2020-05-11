using System;
using System.Collections.Generic;
using System.Text;
using Roots.Data.Repository.Interface;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace Roots.Data.Repository
{
    public abstract class BaseRepository
    {
        private readonly IConfiguration _configuration;
        private readonly string connectionName;

        public BaseRepository(IConfiguration configuration, string connectionName = "DefaultConnection")
        {
            _configuration = configuration;
            this.connectionName = connectionName;
        }

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(_configuration.GetConnectionString(connectionName));
            }
        }
    }
}
