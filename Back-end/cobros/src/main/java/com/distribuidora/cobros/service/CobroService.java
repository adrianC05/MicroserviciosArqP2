package com.distribuidora.cobros.service;

import com.distribuidora.cobros.messaging.EventPublisher;
import org.springframework.stereotype.Service;

@Service
public class CobroService {

    private final EventPublisher publisher;

    public CobroService(EventPublisher publisher) {
        this.publisher = publisher;
    }

    public void procesarCobro(String ordenId) {
        System.out.println("💳 Procesando cobro para orden: " + ordenId);

        // Simulación simple: siempre OK
        boolean aprobado = true;

        publisher.publicarResultadoCobro(ordenId, aprobado);
        System.out.println(aprobado ? "✅ COBRO_OK" : "❌ COBRO_FALLIDO");
    }
}
