import { Component, ElementRef, Inject } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common'
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LoginApp';

  constructor(private el: ElementRef, private router: Router, private location: Location, @Inject(DOCUMENT) private document: Document){
  }
  
  ngAfterViewInit(){
    setTimeout(()=>{
      (this.el.nativeElement.children[2] as Element).classList.add("right-card")
    })
  }

  routeback(){
    this.location.back();
  }
}
