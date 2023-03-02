package com.vitor.pesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vitor.pesquisa.dto.GameDTO;
import com.vitor.pesquisa.entities.Game;
import com.vitor.pesquisa.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	public GameRepository repository;
	
	@Transactional(readOnly = true)
	public List<GameDTO> findAll() {
		List<Game> list = repository.findAll();
		return list.stream().map(x -> new GameDTO(x)).collect(Collectors.toList());
	}
}
