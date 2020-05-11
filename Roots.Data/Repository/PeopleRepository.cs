using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Dapper;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Roots.Data.Models;
using Roots.Data.Repository.Interface;
using System.Linq;

namespace Roots.Data.Repository
{
    public class PeopleRepository : BaseRepository, IPeopleRepository
    {
        public PeopleRepository(IConfiguration configuration) : base(configuration)
        {

        }


        public async Task<People> GetPeopleById(string id)
        {
            try
            {
                using (IDbConnection conn = Connection)
                {
                    var sQuery = @"SELECT Id, FirstName, LastName, PhoneArea, PhoneNamber FROM People WHERE Id = @ID";

                    conn.Open();
                    return (await conn.QueryAsync<People>(sQuery, new
                    {
                        ID = id
                    })).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                //siteLogger.InsertAsync(LogLevel.Error, 0, $"NotificationTypeRepository-GetNotificationTypeByID, Exception: {ex.ToString()}");
                throw;
            }

        }



        //public People GetPeopleById(string id)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
