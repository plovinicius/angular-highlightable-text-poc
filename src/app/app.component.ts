import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showTools = false;
  title = 'angular-highlightable-text-poc';
  // @ViewChild('highlightableContent') highlightableContent: ElementRef;

  onShare (text: any) {
    this.showTools = false;
    console.log('share:', text);
  }

  onHighlight (text: any) {
    this.showTools = false;
    console.log('highlight:', text);
  }

  // checkTools(event: any) {
  //   console.log(event.target, this.highlightableContent.nativeElement);
  // }
}
