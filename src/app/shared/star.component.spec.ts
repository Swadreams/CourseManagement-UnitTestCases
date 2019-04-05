import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';
import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set star width if rating is  passed', ()=> {
    component.rating = 5;
    component.ngOnChanges();
    expect(component.starWidth).toBe(component.rating * 75 / 5);
  });

  it('Should raise an event on click of rating', ()=> {
    let result;
    component.rating = 5;
    component.ratingClicked.subscribe(
      response => result = response
    );
    component.starClick();
    expect(result).toBe('The rating 5 was clicked');
  })

}); 