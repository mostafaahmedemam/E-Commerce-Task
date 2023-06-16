using E.Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using System;
using Microsoft.EntityFrameworkCore;

namespace E.Commerce.Data
{
    public class CatalogueContext : DbContext
    {
        public CatalogueContext(DbContextOptions<CatalogueContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
