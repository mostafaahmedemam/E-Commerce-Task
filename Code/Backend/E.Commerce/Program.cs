using E.Commerce.Data;
using E.Commerce.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E.Commerce
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build()

                 .MigrateDatabase<CatalogueContext>((context, services) =>
                 {
                     var logger = services.GetService<ILogger<CatalogueContextSeed>>();
                     CatalogueContextSeed.SeedAsync(context, logger)
                         .Wait();
                 })
                 .Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
