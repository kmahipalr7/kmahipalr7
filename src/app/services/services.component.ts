import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  template: `
    <section class="page-section">
      <div class="page-heading">
        <p>Our Services</p>
        <h1>Everything you need in one place</h1>
      </div>
      <div class="services-grid">
        <article class="service-card" *ngFor="let service of services">
          <span>{{ service.icon }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .page-section {
        padding: 48px 20px 80px;
      }
      .page-heading {
        margin-bottom: 28px;
      }
      .page-heading p {
        margin: 0 0 8px;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #5d5d5d;
        font-size: 0.72rem;
        font-weight: 700;
      }
      .page-heading h1 {
        margin: 0;
        font-size: clamp(2.4rem, 4vw, 4rem);
        letter-spacing: -0.06em;
      }
      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 22px;
      }
      .service-card {
        background: rgba(255,255,255,0.7);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 26px;
        padding: 28px 22px;
        box-shadow: 0 12px 20px rgba(0,0,0,0.04);
      }
      .service-card span {
        font-size: 2.2rem;
      }
      .service-card h3 {
        margin: 12px 0 8px;
        font-size: 1.7rem;
        letter-spacing: -0.05em;
      }
      .service-card p {
        margin: 0;
        color: #555;
        line-height: 1.7;
      }
      @media (max-width: 800px) {
        .services-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ServicesComponent {
  services = [
    {
      icon: '🍽️',
      title: 'Restaurant Booking',
      description: 'Reserve tables smoothly and enjoy memorable meals without waiting in line.',
    },
    {
      icon: '🚚',
      title: 'Home Delivery',
      description: 'Fast delivery with easy order tracking and hot, fresh food at your doorstep.',
    },
    {
      icon: '🎁',
      title: 'Daily Offers',
      description: 'Save more with curated deals, combo packages, and first-order discounts.',
    },
  ];
}
