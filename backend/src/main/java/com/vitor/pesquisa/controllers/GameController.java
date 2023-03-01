package com.vitor.pesquisa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitor.pesquisa.entities.Game;
import com.vitor.pesquisa.repositories.GameRepository;

@RestController
@RequestMapping(value = "/games")
public class GameController {

	@Autowired
	private GameRepository gameRepository;
	
	
	public ResponseEntity<List<Game>> findAll(){
		List<Game> list = gameRepository.findAll();
		return ResponseEntity.ok().body(list);
	}
}
