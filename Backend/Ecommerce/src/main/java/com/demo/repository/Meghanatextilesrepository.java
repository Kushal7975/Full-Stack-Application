package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Meghanatextiles;

@Repository
public interface Meghanatextilesrepository extends JpaRepository<Meghanatextiles,Integer>{

}
