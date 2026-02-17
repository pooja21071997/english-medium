import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-facilities',
  imports: [],
  templateUrl: './sports-facilities.html',
  styleUrl: './sports-facilities.css',
})
export class SportsFacilities {
  ngAfterViewInit(): void {
    setTimeout((): void => {
      document
        .querySelectorAll('.appear-left, .appear-right')
        .forEach((el: Element) => {
          el.classList.add('active');
        });
    }, 200);
  }
}
