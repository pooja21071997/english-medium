import { Component } from '@angular/core';

@Component({
  selector: 'app-counselling-center',
  imports: [],
  templateUrl: './counselling-center.html',
  styleUrl: './counselling-center.css',
})
export class CounsellingCenter {
ngAfterViewInit() {
  setTimeout(() => {
    document.querySelectorAll('.appear-left, .appear-right')
      .forEach(el => el.classList.add('active'));
  }, 200);
}

}
