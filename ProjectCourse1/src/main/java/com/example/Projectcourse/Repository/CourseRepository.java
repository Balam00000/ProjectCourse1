package com.example.Projectcourse.Repository;

import com.example.Projectcourse.Model.CourseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Integer> {

//    @Query("SELECT c FROM CourseModel c WHERE c.courseFee < :amount")
//    List<CourseModel> findByFeeLessThan( @Param("amount") double amount);
}
