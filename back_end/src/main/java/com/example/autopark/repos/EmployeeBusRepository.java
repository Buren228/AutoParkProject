//package com.example.autopark.repos;
//
//
//import com.AutoParkProject.AutoPark.clases.EmployeeBus;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import javax.transaction.Transactional;
//
//@Repository
//@Transactional
//public interface EmployeeBusRepository extends CrudRepository<EmployeeBus,Integer> {
//    @Query("select eb from driver_bus eb where eb.id=:id")
//    EmployeeBus getById(
//            @Param("id") Integer id
//
//
//    );
//
//}
