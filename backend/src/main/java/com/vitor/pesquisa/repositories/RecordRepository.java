package com.vitor.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vitor.pesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
