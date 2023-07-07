package com.github.lazarofonseca.contato.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.lazarofonseca.contato.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long>{

}
