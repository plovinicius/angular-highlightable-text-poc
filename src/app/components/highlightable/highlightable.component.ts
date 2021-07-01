import {Component, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef, Input} from '@angular/core';

declare var document: any;

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
  selectedText = '';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseup () {
    const selection = window.getSelection();
    const startNode = selection.getRangeAt(0).startContainer.parentNode;
    const endNode = selection.getRangeAt(0).endContainer.parentNode;

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
    this.selectedText = this.getSelectionHtml();
  }

  getSelectionHtml() {
    let html = "";

    if (typeof window.getSelection != "undefined") {
      const sel = window.getSelection();

      if (sel.rangeCount) {
        const container = document.createElement("div");

        for (let i = 0, len = sel.rangeCount; i < len; ++i) {
          container.appendChild(sel.getRangeAt(i).cloneContents());
        }

        html = container.innerHTML;
      }
    } else if (typeof document.selection != "undefined") {
      if (document.selection.type == "Text") {
        html = document.selection.createRange().htmlText;
      }
    }

    return html;
  }

  doShare() {
    this.share.emit(this.selectedText);
  }

  doHighlight() {
    this.highlight.emit(this.selectedText);
  }

}
