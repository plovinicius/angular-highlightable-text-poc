import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showTools = false;
  title = 'angular-highlightable-text-poc';
  text = `<p>
      Lorem ipsum dolor sit amet, <strong>testando</strong> consectetur adipisicing elit. Eveniet at debitis deserunt,
      optio rem eaque obcaecatinon <a href="#">link aqui</a> possimus nisi assumenda architecto exercitationem dolore
      quo praesentium, deleniti reiciendis sed ab nihil!
    </p>
    <p>
      Lorem ipsum dolor sit amet, <strong>testando</strong> consectetur adipisicing elit. Eveniet at debitis deserunt,
      optio rem eaque obcaecatinon <a href="#">link aqui</a> possimus nisi assumenda architecto exercitationem dolore
      quo praesentium, deleniti reiciendis sed ab nihil!
    </p>
    <p>
      Lorem ipsum dolor sit amet, <strong>testando</strong> consectetur adipisicing elit. Eveniet at debitis deserunt,
      optio rem eaque obcaecatinon <a href="#">link aqui</a> possimus nisi assumenda architecto exercitationem dolore
      quo praesentium, deleniti reiciendis sed ab nihil!
    </p>`;

  onShare (text: any) {
    this.showTools = false;
    console.log('share:', text);
  }

  onHighlight (selectedText: any) {
    this.showTools = false;
    const toReplace = "<mark>"+ selectedText +"</mark>";

    this.text = this.text.replace(new RegExp(selectedText, 'g'), toReplace);

    console.log('highlight:', selectedText);
  }
}
