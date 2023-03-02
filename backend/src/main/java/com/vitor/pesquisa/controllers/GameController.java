package com.vitor.pesquisa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitor.pesquisa.dto.GameDTO;
import com.vitor.pesquisa.services.GameService;

@RestController
@RequestMapping(value = "/games")
public class GameController {

	@Autowired
	public GameService service;

	@GetMapping
	public ResponseEntity<List<GameDTO>> findAll(){
		List<GameDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
