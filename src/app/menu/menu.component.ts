import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  template: `
    <section class="page-section">
      <div class="page-heading">
        <p>Our Menu</p>
        <h1>Popular picks for every craving</h1>
      </div>
      <div class="menu-grid">
        <article class="menu-card" *ngFor="let item of items">
          <div class="menu-image" [style.background-image]="'url(' + item.image + ')'" aria-label="food item"></div>
          <div class="menu-content">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <div class="menu-meta">
              <span>{{ item.price }}</span>
              <button>Add</button>
            </div>
          </div>
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
      .menu-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(220px, 1fr));
        gap: 22px;
      }
      .menu-card {
        background: rgba(255,255,255,0.7);
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 26px;
        overflow: hidden;
        box-shadow: 0 12px 20px rgba(0,0,0,0.05);
      }
      .menu-image {
        height: 210px;
        background-size: cover;
        background-position: center;
      }
      .menu-content {
        padding: 20px;
      }
      .menu-content h3 {
        margin: 0 0 10px;
        font-size: 1.8rem;
        letter-spacing: -0.05em;
      }
      .menu-content p {
        margin: 0;
        color: #555;
        line-height: 1.6;
      }
      .menu-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 18px;
      }
      .menu-meta span {
        font-size: 1.4rem;
        font-weight: 800;
      }
      .menu-meta button {
        border: none;
        border-radius: 999px;
        background: #111;
        color: #fff;
        padding: 10px 16px;
        cursor: pointer;
      }
      @media (max-width: 800px) {
        .menu-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class MenuComponent {
  items = [
    {
      name: 'Margherita Pizza',
      description: 'Fresh basil, melted mozzarella, rich tomato sauce, baked to perfection.',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Butter Chicken',
      description: 'Creamy tomato gravy with tender chicken and a hint of spice.',
      price: '$18.50',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Veg Burger',
      description: 'Grilled patty, crispy lettuce, onion, and signature house sauce.',
      price: '$11.20',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Paneer Wrap',
      description: 'Loaded with grilled paneer, veggies, and a smoky flavor wrap.',
      price: '$9.80',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Biryani Bowl',
      description: 'Aromatic rice, slow-cooked spices, and tender pieces of marinated meat.',
      price: '$16.40',
      image: 'https://images.unsplash.com/photo-1633945274408-9a72a4f757d5?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Healthy Salad',
      description: 'Crisp greens, fresh vegetables, and a light flavorful dressing.',
      price: '$10.00',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Masala Dosa',
      description: 'Crispy rice crepe filled with spiced potato, served with chutney and sambar.',
      price: '$8.50',
      image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Idli Sambar',
      description: 'Soft steamed idlis with warm lentil sambar and fresh coconut chutney.',
      price: '$7.25',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Medu Vada',
      description: 'Golden, crispy lentil fritters served with sambar and creamy chutney.',
      price: '$6.75',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Uttapam',
      description: 'Thick savory rice pancake topped with onion, tomato, herbs, and spices.',
      price: '$8.00',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=900&q=80',
    },
  ];
}
