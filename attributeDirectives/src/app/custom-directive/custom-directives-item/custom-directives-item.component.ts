import { Component, OnInit } from '@angular/core';
import { customAnimation } from 'src/app/customanimation';

interface Countries {
  id: number;
  title: string;
  visible: string;
}

@Component({
  selector: 'app-custom-directives-item',
  templateUrl: './custom-directives-item.component.html',
  styleUrls: ['./custom-directives-item.component.css'],
  animations: [customAnimation],
})
export class CustomDirectivesItemComponent implements OnInit {
  countries: Countries[] = [
    { id: 1, title: 'Bulgary', visible: 'isVisible' },
    { id: 2, title: 'Canada', visible: 'isVisible' },
    { id: 3, title: 'China', visible: 'isVisible' },
    { id: 4, title: 'India', visible: 'isVisible' },
    { id: 5, title: 'Angola', visible: 'isVisible' },
    { id: 6, title: 'Chile', visible: 'isVisible' },
    { id: 7, title: 'Greece', visible: 'isVisible' },
  ];
  constructor() {}

  ngOnInit(): void {}

  isVisible(id: number) {
    const newCountries = this.countries.map((country) => {
      if (country.id === id) {
        country.visible = 'isNotVisible';
        console.log(country);
        return country;
      }
      return country;
    });

    this.countries = newCountries;
  }
}
