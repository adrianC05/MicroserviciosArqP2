package com.distribuidora.inventario.controller;

import com.distribuidora.inventario.entity.Producto;
import com.distribuidora.inventario.repository.ProductoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    private final ProductoRepository repo;

    public ProductoController(ProductoRepository repo) {
        this.repo = repo;
    }

    // 🔍 Obtener todos los productos
    @GetMapping
    public List<Producto> listarTodos() {
        return repo.findAll();
    }

    // 🔍 Obtener producto por SKU
    @GetMapping("/{sku}")
    public Producto obtenerUno(@PathVariable String sku) {
        return repo.findById(sku).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }
    @PostMapping
    public Producto crearProducto(@RequestBody Producto producto) {
        return repo.save(producto);
    }

}
