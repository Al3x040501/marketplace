package com.marketplace.backend.repository;

import com.marketplace.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// Repository to handle Product database operations
public interface ProductRepository extends JpaRepository<Product, Long> {
}
