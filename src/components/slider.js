
import {createElement} from "./utils/utils";

export default class Slider {
  constructor(images = []) {
    this._images = images;
    console.log(this._images);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
		return `<div class="big-images">
		<div class="image">
			<img src="${this._images[0]}" />
		</div>
		</div><div class="small-images-wrapper">
			<div class="small-images">
			${this._images
				.map(img => {
					return `<div class="preview"><img src="${img}" /></div>`;
				})
				.join(``)}
			</div>
		</div>`;
  }

}