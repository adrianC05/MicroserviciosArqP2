package com.distribuidora.inventario.service;

import com.distribuidora.inventario.entity.Producto;
import com.distribuidora.inventario.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class InventarioService {

    private final ProductoRepository repo;

    public InventarioService(ProductoRepository repo) {
        this.repo = repo;
    }

    public boolean descontarStock(Map<String, Integer> productos) {
        for (Map.Entry<String, Integer> entry : productos.entrySet()) {
            String sku = entry.getKey();
            Integer cantidad = entry.getValue();

            Producto p = repo.findById(sku).orElse(null);
            if (p == null || p.getStock() < cantidad) return false;

            p.setStock(p.getStock() - cantidad);
            repo.save(p);
        }
        return true;
    }
}
