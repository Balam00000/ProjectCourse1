package com.example.ProjectCourse1.Controller;

import com.example.ProjectCourse1.Model.CourseModel;
import com.example.ProjectCourse1.Repository.CourseRepository;
import com.example.ProjectCourse1.Service.CourseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/Course")
@CrossOrigin(origins = "http://localhost:2000")
public class CourseController {
    @Autowired
    CourseService courseService;

    @Autowired
    CourseRepository courseRepository;

    @PostMapping("/Create")
    public CourseModel enrolledStudent(@RequestBody CourseModel course)
    {

        return courseService.create(course);

    }

    @GetMapping("/GetById/{id}")
    public CourseModel Get(@PathVariable int id) {
        return courseService.getid(id);
    }

    @PostMapping("/CreateAll")
    public List<CourseModel> createAll(@RequestBody List<CourseModel> coursemodel) {
        return courseService.createAll(coursemodel);
    }

    @GetMapping("/GetAll")
    public List<CourseModel> getAll() {
        return courseService.getAll();
    }

    @DeleteMapping("/Delete/{id}")
    public void delete(@PathVariable int id) {
        courseService.delete(id);
    }

    @DeleteMapping("/DeleteAll")
    public void deleteAll() {
        courseService.deleteAll();
    }
    @PutMapping("Put/{id}")
    public CourseModel update(@RequestBody CourseModel courseModel, @PathVariable int id)
    {
        return courseService.update(courseModel,id);
    }
//    @GetMapping("/findByFeeLessThan/{amount}")
//    public List<CourseModel> Fee(@PathVariable double amount)
//    {
//        return courseService.Fee(amount);
//    }


}