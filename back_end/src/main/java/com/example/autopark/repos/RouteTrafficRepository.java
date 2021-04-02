package com.example.autopark.repos;

import com.example.autopark.classes.RouteTraffic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface RouteTrafficRepository extends CrudRepository<RouteTraffic,Integer> {
    @Query("select r from passenger_traffic_hour r")
    RouteTraffic[] getAll(
    );
}
