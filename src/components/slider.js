
import {createElement} from "./utils/utils";

export default class Slider {
  constructor({images}) {
    this._images = images;
  }

	getElement() {
		if (!this._element) {
			this._element = createElement(this.getTemplate());
		}

		return this._element;
	}

	_setHandlerSlides() {
		const bigImage = this.getElement().querySelector(`.big-images .image img`);
		const smallImages = this.getElement().querySelector(`.small-images`);
		const previewList = this.getElement().querySelectorAll(`.small-images .preview`);
		
		smallImages.addEventListener(`click`, (evt) => {
			if(evt.target.tagName === `IMG`) {
				const img = evt.target;
				const imgParent = img.parentNode;
				
				[...previewList].forEach((el) => el.classList.remove(`active`));
				imgParent.classList.add(`active`);

				bigImage.src = img.src;
			}
		});
	}

	getTemplate() {
		return `<div class="slider"><div class="big-images">
			<div class="image"><img src="${this._images[0]}" /></div>
		</div>
			<div class="small-images-wrapper">
				<div class="small-images">
					${this._images.map((img, idx) => {
						if(idx == 0) {
							return `<div class="preview active"><img src="${img}" /></div>`;
						} else {
							return `<div class="preview"><img src="${img}" /></div>`;
						}
					})}
				</div>
			</div>
		</div>
		`;
	}

	init() {
		this._setHandlerSlides();
	}

}
