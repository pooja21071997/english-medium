import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

ngAfterViewInit(): void {


  const statsSection = document.querySelector('.stats-section');
  const counters = document.querySelectorAll('.counter');

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target')!;
          let count = 0;
          const increment = target / 100;

          const updateCount = () => {
            if (count < target) {
              count += increment;
              counter.textContent = Math.ceil(count) + '+';
              requestAnimationFrame(updateCount);
            } else {
              counter.textContent = target + '+';
            }
          };

          updateCount();
        });

        // Stop observing after animation runs once
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  if (statsSection) {
    counterObserver.observe(statsSection);
  }


  const inspirationSection = document.querySelector('.inspiration-section');

  const inspirationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inspirationSection?.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  if (inspirationSection) {
    inspirationObserver.observe(inspirationSection);
  }

}


}
