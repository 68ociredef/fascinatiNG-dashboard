import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import it from '@angular/common/locales/it';
import { BzLocaleService } from 'fascinating';
registerLocaleData(it);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 
}



