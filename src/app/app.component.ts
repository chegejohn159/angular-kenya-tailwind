import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-kenya-tailwind';

  projects: any[] = [
    {
      name: 'angular-kenya-tailwind',
      language: 'typescript',
      visibility: 'public',
    },
    {
      name: 'Mpesa Integration',
      language: 'Python',
      visibility: 'public',
    },
    {
      name: 'KRA System',
      language: 'Java',
      visibility: 'public',
    },
    {
      name: 'Tuko News',
      language: 'Kotlin',
      visibility: 'public',
    },
    {
      name: 'School Management System',
      language: 'PHP',
      visibility: 'private',
    },
    {
      name: 'Dating Site',
      language: 'Ruby',
      visibility: 'private',
    }
  ]

}
