import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarComponent } from './star.component';

@Component({
    template: '<app-star [rating]="rating" (ratingClicked)="onRatingClicked($event)"></app-star>'
})

class TestStarComponent{
    rating: number;
    title: string;

    onRatingClicked(title) {
        this.title = title;
    }
}

describe('Test Star component', ()=> {
    let component: TestStarComponent;
    let fixture : ComponentFixture<TestStarComponent>;
    let element;

    beforeEach(async()=> {
        TestBed.configureTestingModule({
            declarations: [TestStarComponent, StarComponent]
        })
        .compileComponents();
    });

    beforeEach(()=> {
        fixture = TestBed.createComponent(TestStarComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();        
    });

    it('should set the width of the parent element of stars after passing rating', ()=> {        
        component.rating = 5;
        fixture.detectChanges();
        expect(element.querySelector('div.crop').style.width).toBe(`${component.rating*75/5}px`);
    });

    it('should set the title on click of stars', ()=> {
        component.rating = 4;
        fixture.detectChanges();
        element.querySelector('div.crop').click();        
        expect(component.title).toContain(component.rating.toString());
    });

    
})