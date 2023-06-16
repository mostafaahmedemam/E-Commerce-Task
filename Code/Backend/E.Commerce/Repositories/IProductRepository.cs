using E.Commerce.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace E.Commerce.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProducts();
        Task CreateProduct(Product product);
        Task<bool> UpdateProduct(Product product);
        Task<bool> DeleteProduct(string productId);
    }
}
