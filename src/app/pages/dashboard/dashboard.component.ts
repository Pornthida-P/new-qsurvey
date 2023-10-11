import { Component } from '@angular/core';
import {
  faMeh,
  faSadCry,
  faSadTear,
  faSmile,
  faSmileWink,
} from '@fortawesome/free-regular-svg-icons';

import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  faUsers = faUsers;
  smiley = [
    {
      name: 'Excellent',
      percent: 47,
      bgColor: '#1791f4',
      icon: faSmileWink,
    },
    {
      name: 'Good',
      percent: 46,
      bgColor: '#00bdb4',
      icon: faSmile,
    },
    {
      name: 'Average',
      percent: 5,
      bgColor: '#ffb443',
      icon: faMeh,
    },
    {
      name: 'Poor',
      percent: 0,
      bgColor: 'tomato',
      icon: faSadTear,
    },
    {
      name: 'Very Poor',
      percent: 0,
      bgColor: 'crimson',
      icon: faSadCry,
    },
  ];
}
