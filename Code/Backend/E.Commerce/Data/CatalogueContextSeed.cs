using E.Commerce.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E.Commerce.Data
{
    public class CatalogueContextSeed
    {
        public static async Task SeedAsync(CatalogueContext catalogueContext, ILogger<CatalogueContextSeed> logger)
        {
            if (!catalogueContext.Products.Any())
            {
                catalogueContext.Products.AddRange(GetPreconfiguredProducts());
                await catalogueContext.SaveChangesAsync();
                logger.LogInformation("Seed database associated with context {DbContextName}", typeof(CatalogueContext).Name);
            }
            if (!catalogueContext.Categories.Any())
            {
                catalogueContext.Categories.AddRange(GetPreconfiguredCategories());
                await catalogueContext.SaveChangesAsync();
                logger.LogInformation("Seed database associated with context {DbContextName}", typeof(CatalogueContext).Name);
            }
        }
        private static IEnumerable<Category> GetPreconfiguredCategories()
        {
            return new List<Category>()
            {
                new Category()
                {
                    CatagoryId = "1",
                     CategoryName= "Smart Phone"

                }, new Category()
                {
                    CatagoryId = "2",
                     CategoryName= "White Appliances"

                } };
    }
    private static IEnumerable<Product> GetPreconfiguredProducts()
    {
        return new List<Product>()
            {
                new Product()
                {
                    ProductId = Guid.NewGuid().ToString(),
                    ProductName = "IPhone X",
                    Summary = "This phone is the company's biggest change to its flagship smartphone in years. It includes a borderless.",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.",
                    Image = "product-1.png",
                    ProductPrice = 950.00M,
                    ArabicProductName= "اى فون اكس",
                    ProductCatagoryId = "Smart Phone"
                    
                },
                new Product()
                {
                    ProductId =  Guid.NewGuid().ToString(),
                    ProductName = "Samsung 10",
                    Summary = "This phone is the company's biggest change to its flagship smartphone in years. It includes a borderless.",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.",
                    Image = "product-2.png",
                    ProductPrice = 840.00M,
                    ArabicProductName = "سامسونج 10",
                    ProductCatagoryId = "Smart Phone"
                },
                new Product()
                {
                    ProductId =  Guid.NewGuid().ToString(),
                    ProductName = "Huawei Plus",
                    Summary = "This phone is the company's biggest change to its flagship smartphone in years. It includes a borderless.",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.",
                    Image = "product-3.png",
                    ProductPrice = 650.00M,
                    ArabicProductName ="هاواوى بلس",
                    ProductCatagoryId = "White Appliances"
                },
                new Product()
                {
                    ProductId =  Guid.NewGuid().ToString(),
                    ProductName = "Xiaomi Mi 9",
                    Summary = "This phone is the company's biggest change to its flagship smartphone in years. It includes a borderless.",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.",
                    Image = "product-4.png",
                    ArabicProductName = "شاومى ماى 9",
                    ProductPrice = 470.00M,
                    ProductCatagoryId = "White Appliances"
                },
                new Product()
                {
                    ProductId =  Guid.NewGuid().ToString(),
                    ProductName = "HTC U11+ Plus",
                    Summary = "This phone is the company's biggest change to its flagship smartphone in years. It includes a borderless.",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.",
                    Image = "product-5.png",
                    ProductPrice = 380.00M,
                    ArabicProductName = "اتش تى سى يو 11 بلس",
                    ProductCatagoryId = "Smart Phone"
                },
                new Product()
                {
                    ProductId =  Guid.NewGuid().ToString(),
                    ProductName = "LG G7 ThinQ",
                    Summary = "This phone is the company's biggest change to its flagship smartphone in years. It includes a borderless.",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.",
                    Image = "product-6.png",
                    ProductPrice = 240.00M, 
                    ArabicProductName="ال جى جى 7",
                    ProductCatagoryId = "Home Kitchen"
                }
            };
    }
}
}
