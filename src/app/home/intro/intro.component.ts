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
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  content: Content = {
    greeting: "Hello. Welcome to Web Dev 101.",
    action: "Learn More",
    prompt: "What is your name?"
  }

  user: User = {
    name: null
  }
}
