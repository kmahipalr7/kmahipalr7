import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  standalone: false,
  template: `
    <section class="page-section">
      <div class="page-heading">
        <p>Restaurants</p>
        <h1>Popular spots near you</h1>
      </div>
      <div class="card-grid">
        <article class="info-card" *ngFor="let place of places">
          <div class="image" [style.background-image]="'url(' + place.image + ')'" aria-label="restaurant image"></div>
          <div class="content">
            <h3>{{ place.name }}</h3>
            <p>{{ place.cuisine }}</p>
            <p class="locality">{{ place.locality }}</p>
            <div class="meta">
              <span>{{ place.rating }}</span>
              <span>{{ place.time }}</span>
            </div>
          </div>
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
      .card-grid { display: grid; grid-template-columns: repeat(3, minmax(220px, 1fr)); gap: 22px; }
      .info-card { background: rgba(255,255,255,0.7); border: 1px solid rgba(0,0,0,0.05); border-radius: 26px; overflow: hidden; box-shadow: 0 12px 20px rgba(0,0,0,0.04); }
      .image { height: 200px; background-size: cover; background-position: center; }
      .content { padding: 20px; }
      .content h3 { margin: 0 0 10px; font-size: 1.6rem; letter-spacing: -0.05em; }
      .content p { margin: 0; color: #555; }
      .content .locality { margin-top: 7px; color: #777; font-size: 0.92rem; }
      .meta { display: flex; justify-content: space-between; margin-top: 18px; font-weight: 700; }
      @media (max-width: 800px){ .card-grid { grid-template-columns: 1fr; } }
    `,
  ],
})
export class RestaurantsComponent {
  places = [
    { name: 'Basil & Bean', cuisine: 'Italian • Pizza', locality: 'Indiranagar, Bengaluru', rating: '4.8 ★', time: '20 min', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80' },
    { name: 'Spice Route', cuisine: 'Indian • Grill', locality: 'Koramangala, Bengaluru', rating: '4.9 ★', time: '25 min', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80' },
    { name: 'Green Bowl', cuisine: 'Healthy • Salad', locality: 'HSR Layout, Bengaluru', rating: '4.7 ★', time: '18 min', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
    { name: 'Meghana Biryani', cuisine: 'Andhra • Biryani', locality: 'Indiranagar, Bengaluru', rating: '4.8 ★', time: '30 min', image: 'https://images.unsplash.com/photo-1633945274408-9a72a4f757d5?auto=format&fit=crop&w=900&q=80' },
    { name: 'The Rameshwaram Cafe', cuisine: 'South Indian • Breakfast', locality: 'JP Nagar, Bengaluru', rating: '4.7 ★', time: '25 min', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80' },
  ];
}
