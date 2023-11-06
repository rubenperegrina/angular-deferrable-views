import { Component, signal } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ContactComponent, NewsletterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  isCheckedDefer = signal(false);
}
