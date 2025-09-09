package com.example.Projectcourse.Model;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Course")
public class CourseModel {
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int courseId;
    private String studentName;
    private String courseName;
    private String studentEmail;






}
