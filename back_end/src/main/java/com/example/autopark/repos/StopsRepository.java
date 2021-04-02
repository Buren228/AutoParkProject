package com.example.autopark.repos;

import com.example.autopark.classes.Stops;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface StopsRepository extends CrudRepository<Stops,Integer> {
    @Query("select s from stops s where s.route_number=:route_number order by s.show_order")
    Stops[] getRouteByNumber(
            @Param("route_number") Integer route_number


    );
    @Query("select s from stops s  order by s.route_number,s.show_order")
    Stops[] getAllRoutes(



    );
}
