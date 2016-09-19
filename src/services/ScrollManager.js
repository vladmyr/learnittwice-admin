'use strict';

/**
 * DocumentDimensionsService
 * gets dimensions of a document
 */
class DocumentDimensionsService {
  constructor() {
    this.width = 0;
    this.height = 0;

    if (typeof window.innerWidth != 'undefined') {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    } else if (typeof document != 'undefined'
      && typeof document.documentElement.clientWidth != 'undefined'
      && document.documentElement.clientWidth != 0
    ) {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    } else {
      this.width = document.getElementsByTagName('body')[0].clientWidth;
      this.height = document.getElementsByTagName('body')[0].clientHeight;
    }
  }
}


/**
 * ScrollManager
 * handles browser's viewport position for a specific element
 */
class ScrollManager {
  constructor(element) {
    this.element = element;
  }

  getWidth() {
    return this.element.clientWidth;
  }

  getScrollWidth() {
    return this.element.scrollWidth;
  }

  getHeight() {
    return this.element.clientHeight;
  }

  getScrollHeight() {
    return this.element.scrollHeight;
  }

  scrollRight(rightOffset = 0) {
    const scrollLeft = Math.min(
      Math.max(
        this.getScrollWidth() - this.getWidth() - rightOffset
        , 0
      ), this.getScrollWidth() - this.getWidth()
    );
    this.element.scrollLeft = scrollLeft;
  }
}

ScrollManager.dimensions = new DocumentDimensionsService();

export default ScrollManager;