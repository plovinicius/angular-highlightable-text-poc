import {Component, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-highlightable',
  templateUrl: './highlightable.component.html',
  styleUrls: ['./highlightable.component.scss']
})
export class HighlightableComponent implements OnInit {
  @Input() showTools = false;
  @Output() share = new EventEmitter<any>();
  @Output() highlight = new EventEmitter<any>();
  @ViewChild('contentWrapper') content: ElementRef;

  x = 0;
  y = 0;
  // showTools = false;
  selectedText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseup () {
    const selection = window.getSelection();
    const startNode = selection.getRangeAt(0).startContainer.parentNode;
    const endNode = selection.getRangeAt(0).endContainer.parentNode;

    // if (!startNode.isSameNode(this.content.nativeElement) || !startNode.isSameNode(endNode)) {
    //   this.showTools = false;
    //   return;
    // }

    if (!selection || (selection.anchorOffset === selection.focusOffset)) {
      this.showTools = false;
      return;
    }

    const { x, y, width } = selection.getRangeAt(0).getBoundingClientRect();

    if (!width) {
      this.showTools = false;
      return;
    }

    this.x = x + (width / 2);
    this.y = y + window.scrollY - 10;
    this.showTools = true;
    this.selectedText = selection.toString();
  }

  doShare() {
    this.share.emit(this.selectedText);
  }

  doHighlight() {
    this.highlight.emit(this.selectedText);
  }

}
