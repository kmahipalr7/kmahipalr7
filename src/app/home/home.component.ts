import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'zomato';

  slides = [
    {
      label: 'Trending',
      title: 'Cheesy Midweek Combo',
      text: 'Enjoy crispy pizza, signature fries, and a cold drink for a perfect deal.',
      time: '20-30 min',
      rating: '4.8 ★',
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    },
    {
      label: 'Hot Pick',
      title: 'Biryani Night Special',
      text: 'Aromatic rice, tender meat, and your favorite side dish delivered fresh.',
      time: '30-40 min',
      rating: '4.9 ★',
      image:
        'https://images.unsplash.com/photo-1633945274408-9a72a4f757d5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      label: 'New',
      title: 'Healthy Bowl Feast',
      text: 'Light, colorful, and packed with flavor from fresh greens and grains.',
      time: '15-20 min',
      rating: '4.7 ★',
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  menuItems = [
    { name: 'Margherita Pizza', price: '$14.99', tag: 'Popular', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80' },
    { name: 'Butter Chicken', price: '$18.50', tag: 'Chef Pick', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80' },
    { name: 'Veg Burger', price: '$11.20', tag: 'Healthy', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
    { name: 'Paneer Wrap', price: '$9.80', tag: 'Fresh', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
    { name: 'Masala Dosa', price: '$8.50', tag: 'South Indian', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80' },
    { name: 'Idli Sambar', price: '$7.25', tag: 'South Indian', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80' },
  ];

  currentSlide = 0;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
