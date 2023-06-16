using System;
using System.ComponentModel.DataAnnotations;

namespace E.Commerce.Entities
{
    public class Product 
    {
        [Key]
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string ArabicProductName { get; set; }
        public string Summary { get; set; }
        public string Description { get; set; }
        public string ProductCatagoryId { get; set; }
        public decimal ProductPrice { get; set; }
        public string Image { get; set; }
        public bool IsAvailableInStock { get; set; }
    }
}