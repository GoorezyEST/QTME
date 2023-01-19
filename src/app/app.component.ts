import { Component, OnInit } from '@angular/core';

interface Data {
  blue: { value_avg: number; value_sell: number; value_buy: number };
  oficial: { value_avg: number; value_sell: number; value_buy: number };
  blue_euro: { value_avg: number; value_sell: number; value_buy: number };
  oficial_euro: { value_avg: number; value_sell: number; value_buy: number };
  last_update: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: Data = {
    blue: { value_avg: 0, value_sell: 0, value_buy: 0 },
    oficial: { value_avg: 0, value_sell: 0, value_buy: 0 },
    blue_euro: { value_avg: 0, value_sell: 0, value_buy: 0 },
    oficial_euro: { value_avg: 0, value_sell: 0, value_buy: 0 },
    last_update: '',
  };

  showData: boolean = false;
  currentSpan = 0;

  ngOnInit(): void {
    this.retrieveData();
  }

  async retrieveData() {
    this.data = await fetch('https://api.bluelytics.com.ar/v2/latest').then(
      (res) => res.json()
    );
  }

  theJoke() {
    this.currentSpan++;
    if (this.currentSpan > 3) {
      this.showData = true;
      return;
    }
  }
}
