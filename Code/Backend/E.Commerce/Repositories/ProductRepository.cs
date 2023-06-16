using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using E.Commerce.Entities;
using E.Commerce.Data;
using Microsoft.EntityFrameworkCore;

namespace E.Commerce.Repositories
{

    public class ProductRepository : IProductRepository
    {
        protected readonly CatalogueContext _dbContext;

        public ProductRepository(CatalogueContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            return await _dbContext.Set<Product>().ToListAsync();
        }


        public async Task CreateProduct(Product product)
        {
            try {
                product.ProductId = Guid.NewGuid().ToString();
                _dbContext.Set<Product>().Add(product);
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex) { }
            }

        public async Task<bool> UpdateProduct(Product product)
        {
            try
            {
                _dbContext.Entry(product).State = EntityState.Modified;
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> DeleteProduct(string productId)
        {
            try
            {
               var ProductToDelete = _dbContext.Set<Product>().Find(productId);
                _dbContext.Set<Product>().Remove(ProductToDelete);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}
