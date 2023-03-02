package com.vitor.pesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



import com.vitor.pesquisa.dto.RecordDTO;
import com.vitor.pesquisa.dto.RecordInsertDTO;
import com.vitor.pesquisa.entities.Game;
import com.vitor.pesquisa.entities.Record;
import com.vitor.pesquisa.repositories.GameRepository;
import com.vitor.pesquisa.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	public RecordRepository repository;
	
	@Autowired
	public GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		@SuppressWarnings("deprecation")
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		repository.save(entity);
		return new RecordDTO(entity);
	}	
}
