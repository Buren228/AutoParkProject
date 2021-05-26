package com.example.autopark.repos;

import com.example.autopark.classes.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface UserRepository extends CrudRepository<User,Integer> {
    @Query("select u from user u where u.first_name=:first_name AND u.last_name=:last_name")
    User getByName(
            @Param("first_name") String first_name,
            @Param("last_name") String last_name
    );

    @Query("select u from user u where u.id=:id")
    User getById(
            @Param("id") int id

    );

    @Query("select u from user u")
    User[] getAll();

    @Query("select u from user u where u.username=:username")
    User getByUsername(
            @Param("username") String username
    );


}
