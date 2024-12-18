package com.marketplace.backend.controller;

import com.marketplace.backend.model.Product;
import com.marketplace.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")  // Base URL for product endpoints
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Endpoint to fetch all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Endpoint to add a new product
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
}
