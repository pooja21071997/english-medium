import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
ngAfterViewInit(): void {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // optional (prevents re-trigger)
      }
    });
  }, { threshold: 0.2 });

  const elements = document.querySelectorAll('.animate') as NodeListOf<Element>;

  elements.forEach((el: Element) => {
    observer.observe(el);
  });

}

}
