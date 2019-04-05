import { CourseService } from './course.service';

describe('Course Service Tests: ', () => {
    let service : CourseService;

     beforeEach(()=> {
         service = new CourseService(null);
     });

     it('Should get courses from service', ()=> {
         let spy = spyOn(service, "getCourses").and.returnValue(()=>{
            return [
                {
                  "courseId": 0,
                  "courseName": "Angular",
                  "trainer": "Ellis Hester",
                  "courseCode": "ZIDOX-00",
                  "nextBatchDate": "08-01-2019",
                  "description": "Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n",
                  "price": 4679.76,
                  "starRating": 3.6,
                  "imageUrl": "https://angular.io/assets/images/logos/angular/angular.png"
                },
            ];
         });

         service.getCourses();
         expect(spy).toHaveBeenCalled();
     })
})