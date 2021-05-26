package com.example.autopark.repos;

import com.example.autopark.classes.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface RoleRepository extends CrudRepository<Role,Integer> {
}
