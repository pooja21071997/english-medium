import { Component } from '@angular/core';

@Component({
  selector: 'app-transport-facilities',
  imports: [],
  templateUrl: './transport-facilities.html',
  styleUrl: './transport-facilities.css',
})
export class TransportFacilities {
ngAfterViewInit(): void {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.appear-up, .appear-up-delay')
    .forEach(el => observer.observe(el));
}

}
