import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-layout>
             <router-outlet></router-outlet>
            </app-layout>`,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent  {


}
