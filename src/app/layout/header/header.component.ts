import { Component} from '@angular/core';
import { BzLayoutService } from 'fascinating';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

constructor( private layoutService: BzLayoutService) {}

public toggleSidebar() : void {
   this.layoutService.setToggleMenu();
}

}
