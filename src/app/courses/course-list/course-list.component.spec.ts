import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarComponent } from 'src/app/shared/star.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseService } from '../course.service';
import { of, from, Observable, throwError } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getCourses']);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule,
        HttpClientTestingModule
      ],
      declarations: [ CourseListComponent, StarComponent ],
      providers: [CourseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get the courses at the initialization', ()=> {    
    let courseService = TestBed.get(CourseService);    
    let courses = from([[
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
  ]]);
    spyOn(courseService,'getCourses').and.returnValue(courses);    
    fixture.detectChanges();

    component.ngOnInit();    
    expect(component.courses.length).toBe(1);
  });

  it('Should throw an error if problem in service call', ()=> {
    let courseService = TestBed.get(CourseService);
    spyOn(courseService, 'getCourses').and.returnValue(throwError({status: 404}));

    component.ngOnInit();
    expect(component.errorMessage).toContain('Unknown error');

  });

  it('Image should be visible only if click on Show Image button', ()=> {
    let element = fixture.nativeElement;

    let button = element.querySelector('#showImageButton');    
    button.click();
    expect(component.imageVisible).toBe(true);
  })

  it('Should set the filter and add course to filtered course', ()=> {    
    let courseService = TestBed.get(CourseService);    
    let courses = from([[
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
  ]]);
    spyOn(courseService,'getCourses').and.returnValue(courses);
    component._listFilter = "Angular";        
    fixture.detectChanges();
    component.ngOnInit();    
    expect(component.filteredCourses.length).toBe(1);
  });

  it('Should set the filter on typing', ()=> {
      let element = fixture.nativeElement;
      let courseService = TestBed.get(CourseService);    
      let courses = from([[
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
    ]]);
      spyOn(courseService,'getCourses').and.returnValue(courses);

      // let control = element.querySelector('input');
      // control.value = "Angular";      
      fixture.detectChanges();      
      component.ngOnInit();

      component.listFilter = "Angular"      

      console.log('courses', component.courses);
      expect(component.listFilter).toBe('Angular');
  });

  it('should set the response recieved as courses if not filtered', ()=> {
    let element = fixture.nativeElement;
      let courseService = TestBed.get(CourseService);    
      let courses = from([[
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
    ]]);
      spyOn(courseService,'getCourses').and.returnValue(courses);            
      fixture.detectChanges();      
      component.ngOnInit();
      component.listFilter = ""        
      expect(component.filteredCourses.length).toBe(1);
  })

  it('Should set the title of the table on click of star', ()=> {
    component.onRatingClicked({rating: 5}); 
    expect(component.pageTitle).toContain('5');
  })
  
});
