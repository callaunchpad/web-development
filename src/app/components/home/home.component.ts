import { Component } from '@angular/core';
export class Content {
  greeting: string;
  action: string;
  prompt: string;
}

export class User {
  name: string;
}

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  title = 'EMW';

  content: Content = {
    greeting: "Hello. Welcome to Web Dev 101.",
    action: "Learn More",
    prompt: "What is your name?"
  }

  user: User = {
    name: null
  }
}
