package com.example.autopark.repos;

import com.example.autopark.classes.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface BusRepository extends CrudRepository<Bus,Integer> {
    @Query("select b from buses b where b.number=:number")
    Bus getByNumber(
            @Param("number") String number


    );
    @Query("select e from buses e")
    Bus[] getAll();
}
