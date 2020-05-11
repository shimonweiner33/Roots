﻿using System;
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
    public class AcountRepository : BaseRepository, IAcountRepository
    {
        public AcountRepository(IConfiguration configuration) : base(configuration)
        {

        }

        public async Task<bool> Register(Login loginModel)
        {
            try
            {
                using (IDbConnection conn = Connection)
                {
                    var sQuery = @"INSERT INTO Acount(UserName, PasswordHash, CreatedOn, CreatedBy, UpdatedOn, UpdatedBy)
                                   VALUES (@UserName, @PasswordHash, @createdOn, @createdBy, @updatedOn, @updatedBy)";
                    conn.Open();
                    var result = conn.ExecuteAsync(sQuery, 
                        new {
                            loginModel.UserName,
                            PasswordHash = loginModel.Password,
                            createdOn = DateTime.Now,
                            createdBy = "manager",
                            updatedOn = DateTime.Now,
                            updatedBy = "manager",
                        });

                    return true;
                }
            }
            catch (Exception ex)
            {
                //siteLogger.InsertAsync(LogLevel.Error, 0, $"AccountRepository-IsValidUser, TZ:{loginModel.UserName}, Exception: {ex.ToString()}");
                throw;
            }
        }
        public async Task<bool> IsValidUser(Login loginModel)
        {
            try
            {
                using (IDbConnection conn = Connection)
                {
                    var sQuery = @"SELECT * FROM Acount WHERE UserName = @UserName AND PasswordHash = @PasswordHash";
                    conn.Open();
                    var result = await conn.QueryFirstOrDefaultAsync(sQuery, new { loginModel.UserName, PasswordHash = loginModel.Password });

                    return result != null;
                }
            }
            catch (Exception ex)
            {
                //siteLogger.InsertAsync(LogLevel.Error, 0, $"AccountRepository-IsValidUser, TZ:{loginModel.UserName}, Exception: {ex.ToString()}");
                throw;
            }
        }

        public async Task<bool> IsValidUserAsync(Login loginModel)
        {
            try
            {
                using (IDbConnection conn = Connection)
                {
                    var sQuery = @"SELECT * FROM Acount WHERE UserName = @UserName AND PasswordHash = @Password";
                    conn.Open();
                    var result = await conn.QueryFirstOrDefaultAsync(sQuery, new { UserName = loginModel.UserName, loginModel.Password });

                    return result != null;
                }
            }
            catch (Exception ex)
            {
                //siteLogger.InsertAsync(LogLevel.Error, 0, $"AccountRepository-IsValidUserAsync, TZ:{loginModel.UserName}, Exception: {ex.ToString()}");
                throw;
            }
        }


    }
}
