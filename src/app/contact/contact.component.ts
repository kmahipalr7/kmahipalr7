import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  template: `
    <section class="page-section">
      <div class="page-heading">
        <p>Contact</p>
        <h1>We’d love to hear from you</h1>
      </div>
      <div class="contact-box">
        <div>
          <h3>Email</h3>
          <p>hello@zomatoapp.com</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+1 (555) 234-6789</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>45 Market Street, Downtown</p>
        </div>
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
      .contact-box {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 22px;
        background: rgba(255,255,255,0.7);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 26px;
        padding: 26px 22px;
        box-shadow: 0 12px 20px rgba(0,0,0,0.04);
      }
      .contact-box h3 {
        margin: 0 0 8px;
        font-size: 1.5rem;
      }
      .contact-box p {
        margin: 0;
        color: #555;
        line-height: 1.7;
      }
      @media (max-width: 800px) {
        .contact-box {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ContactComponent {}
