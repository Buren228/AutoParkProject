package com.example.autopark.repos;

import com.example.autopark.classes.BusesNRoutes;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface BusesNRoutesRepository extends CrudRepository<BusesNRoutes,Integer> {
    @Query("select br from buses_routes br")
    BusesNRoutes[] getAll(
    );

}
