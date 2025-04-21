package com.example.ProjectCourse1.Repository;

import com.example.ProjectCourse1.Model.CourseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Integer> {

//    @Query("SELECT c FROM CourseModel c WHERE c.courseFee < :amount")
//    List<CourseModel> findByFeeLessThan( @Param("amount") double amount);
}
