import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  template: `
    <section class="page-section">
      <div class="page-heading">
        <p>About Us</p>
        <h1>Bringing delicious food closer to you</h1>
      </div>
      <div class="about-grid">
        <article class="about-card">
          <h3>Fast Delivery</h3>
          <p>Quick delivery across your city with real-time tracking and dependable service.</p>
        </article>
        <article class="about-card">
          <h3>Quality Food</h3>
          <p>Fresh ingredients, careful preparation, and kitchen standards you can trust.</p>
        </article>
        <article class="about-card">
          <h3>Easy Ordering</h3>
          <p>Simple menus, secure checkout, and flexible payments for every order.</p>
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
      .about-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 22px;
      }
      .about-card {
        background: rgba(255,255,255,0.7);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 26px;
        padding: 24px 20px;
        box-shadow: 0 12px 20px rgba(0,0,0,0.04);
      }
      .about-card h3 {
        margin: 0 0 12px;
        font-size: 1.7rem;
        letter-spacing: -0.05em;
      }
      .about-card p {
        margin: 0;
        color: #555;
        line-height: 1.7;
      }
      @media (max-width: 800px) {
        .about-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent {}
