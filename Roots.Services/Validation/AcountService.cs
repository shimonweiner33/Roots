﻿using System;
using System.Threading.Tasks;
using Roots.Common.Extensions;
using Roots.Data.Models;
using Roots.Data.Repository.Interface;

namespace Roots.Services
{
    public class AcountService : IAcountService
    {

        private IAcountRepository acountRepository;

        public AcountService(IAcountRepository acountRepository)
        {
            this.acountRepository = acountRepository;
        }

        public async Task<bool> Register(Login login)
        {
            //isValid
            login.Password = login.Password.ToHashHMACSHA1();
            return await acountRepository.Register(login);
        }

        public async Task<bool> IsValidUser(Login login)
        {
            login.Password = login.Password.ToHashHMACSHA1();
            return await acountRepository.IsValidUser(login);
        }
    }
}
