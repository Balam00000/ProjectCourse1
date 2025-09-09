package com.example.Projectcourse.Service;

import com.example.Projectcourse.Model.CourseModel;
import com.example.Projectcourse.Repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;

    public CourseModel create(CourseModel courseModel)
    {
       return  courseRepository.save(courseModel);
    }

    public CourseModel getid(int id) {
        return courseRepository.findById(id).orElse(null);
    }

    public List<CourseModel> createAll(List<CourseModel> coursemodel) {
        return courseRepository.saveAll(coursemodel);
    }

    public List<CourseModel> getAll() {
        return courseRepository.findAll();
    }

    public void delete(int id) {
        courseRepository.deleteById(id);
    }

    public void deleteAll() {
        courseRepository.deleteAll();
    }
    public CourseModel update(CourseModel courseModel,int id)
    {
        CourseModel old=null;
        old=courseRepository.findById(id).orElse(null);
        old.setCourseName(courseModel.getStudentName());
        old.setCourseName(courseModel.getCourseName());
        old.setStudentEmail(courseModel.getStudentEmail());

        return courseRepository.save(old);

    }
//    public List<CourseModel> Fee(double amount)
//    {
//        return courseRepository.findByFeeLessThan(amount);
//
//
//    }

}
