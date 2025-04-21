package com.example.ProjectCourse1.Model;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

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
