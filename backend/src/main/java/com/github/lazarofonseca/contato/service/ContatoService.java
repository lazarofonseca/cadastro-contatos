package com.github.lazarofonseca.contato.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.lazarofonseca.contato.model.Contato;
import com.github.lazarofonseca.contato.repository.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository contatoRepository;
	
	public List<Contato> findAll(){
		return contatoRepository.findAll();
	}

	public Contato findById(Long codigo) {
		Optional<Contato> obj = contatoRepository.findById(codigo);
		System.out.println(obj);
		return obj.get();
	}
	
	public Contato save(Contato contato) {
		return contatoRepository.save(contato);
	}
}
