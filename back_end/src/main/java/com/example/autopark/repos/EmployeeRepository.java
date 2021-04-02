package com.example.autopark.repos;

import com.example.autopark.classes.Employee;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface EmployeeRepository extends CrudRepository<Employee,Integer> {
    @Query("select e from employee e where e.first_name=:first_name AND e.last_name=:last_name")
    Employee getByName(
            @Param("first_name") String first_name,
            @Param("last_name") String last_name


    );
    @Query("select e from employee e")
    Employee[] getAll();




}
