package com.example.autopark.repos;

import com.example.autopark.classes.Routes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface RoutesRepository extends CrudRepository<Routes,Integer> {
    @Query("select r from routes r")
    Routes[] getAll(
    );

}
