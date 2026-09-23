import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  standalone: false,
  template: `
    <section class="page-section">
      <div class="page-heading">
        <p>Offers</p>
        <h1>Exclusive deals for you</h1>
      </div>
      <div class="offers-grid">
        <article class="offer-card" *ngFor="let offer of offers">
          <span class="tag">{{ offer.tag }}</span>
          <h3>{{ offer.title }}</h3>
          <p>{{ offer.text }}</p>
          <button>Claim Offer</button>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .page-section { padding: 48px 20px 80px; }
      .page-heading { margin-bottom: 28px; }
      .page-heading p { margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.18em; color: #5d5d5d; font-size: 0.72rem; font-weight: 700; }
      .page-heading h1 { margin: 0; font-size: clamp(2.4rem, 4vw, 4rem); letter-spacing: -0.06em; }
      .offers-grid { display: grid; grid-template-columns: repeat(3, minmax(220px, 1fr)); gap: 22px; }
      .offer-card { background: rgba(255,255,255,0.7); border: 1px solid rgba(0,0,0,0.05); border-radius: 26px; padding: 22px 20px; box-shadow: 0 12px 20px rgba(0,0,0,0.04); }
      .tag { display: inline-block; background: #f9e2e5; color: #55d14a; padding: 7px 12px; border-radius: 999px; font-size: 0.72rem; font-weight: 700; }
      .offer-card h3 { margin: 16px 0 10px; font-size: 1.8rem; letter-spacing: -0.05em; }
      .offer-card p { margin: 0; color: #555; line-height: 1.7; }
      .offer-card button { margin-top: 18px; border: none; background: #111; color: #fff; border-radius: 999px; padding: 10px 16px; cursor: pointer; }
      @media (max-width: 800px){ .offers-grid { grid-template-columns: 1fr; } }
    `,
  ],
})
export class OffersComponent {
  offers = [
    { tag: 'NEW', title: 'Free Delivery', text: 'Get complimentary delivery on orders above ₹499.', },
    { tag: 'HOT', title: '50% OFF', text: 'Enjoy a 50% discount on your favorite combo meals.', },
    { tag: 'LIMITED', title: 'Weekend Special', text: 'Save big on pizza, burgers, and biryani this weekend.', },
  ];
}
