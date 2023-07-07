package com.github.lazarofonseca.contato.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.lazarofonseca.contato.model.Contato;
import com.github.lazarofonseca.contato.service.ContatoService;

@RestController
@RequestMapping("/contatos")
public class ContatoController {
	
	@Autowired
	private ContatoService contatoService;
	
	@GetMapping
	public ResponseEntity<List<Contato>> findAll(){
		List<Contato> list = contatoService.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{codigo}")
	public ResponseEntity<Contato> findById(@PathVariable Long codigo){
		Contato contato = contatoService.findById(codigo);
		return ResponseEntity.ok().body(contato);
	}
	
	@PostMapping
	public ResponseEntity<Contato> save(@RequestBody Contato contato){
		Contato obj = contatoService.save(contato);
		return ResponseEntity.ok().body(obj);
	}
	
 
}
