package com.vitor.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vitor.pesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}
