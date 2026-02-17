import { Component } from '@angular/core';

@Component({
  selector: 'app-educational-facilities',
  imports: [],
  templateUrl: './educational-facilities.html',
  styleUrl: './educational-facilities.css',
})
export class EducationalFacilities {
ngAfterViewInit() {
  setTimeout(() => {
    const el = document.querySelector('.appear-up');
    el?.classList.add('active');
  }, 200);

  setTimeout(() => {
    document.querySelectorAll('.appear-left, .appear-right')
      .forEach(el => el.classList.add('active'));
  }, 200);
  setTimeout(() => {
    document.querySelectorAll('.appear-sci-left, .appear-sci-right')
      .forEach(el => el.classList.add('active'));
  }, 200);
   setTimeout(() => {
    document.querySelectorAll('.appear-math-left, .appear-math-right')
      .forEach(el => el.classList.add('active'));
  }, 200);
   setTimeout(() => {
    document.querySelectorAll('.appear-comp-left, .appear-comp-right')
      .forEach(el => el.classList.add('active'));
  }, 200);
  setTimeout(() => {
    document.querySelectorAll('.appear-lib-left, .appear-lib-right')
      .forEach(el => el.classList.add('active'));
  }, 200);
}

}
