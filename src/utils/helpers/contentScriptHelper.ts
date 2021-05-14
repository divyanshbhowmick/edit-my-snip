import { DOM_CONTAINER_ID } from "./constants";

export const getParentElement = (): HTMLElement => {
	let parentEl: HTMLElement = null,
		sel: Selection;
	if (window.getSelection) {
		sel = window.getSelection();
		if (sel.rangeCount) {
			parentEl = <HTMLElement>sel.getRangeAt(0).commonAncestorContainer;
			if (parentEl.nodeType != 1) {
				parentEl = <HTMLElement>parentEl.parentNode;
			}
		}
	}
	return parentEl;
};

export const createContainerToRender = (parentElement: HTMLElement) => {
	// Remove the container if it exists!
	removeContainer(document.body);

	const containerElement: HTMLElement = document.createElement("div");
	const top = parentElement.getBoundingClientRect().top;
	const left = parentElement.getBoundingClientRect().left;
	containerElement.id = DOM_CONTAINER_ID;
	containerElement.style.position = `fixed`;

	containerElement.style.top = `${top}px`;
	containerElement.style.left = `${left}px`;
	containerElement.style.zIndex = `100000000`;

	document.body.appendChild(containerElement);

	// parentElement.insertAdjacentElement("afterbegin", containerElement);
};

export const removeContainer = (parentElement: HTMLElement) => {
	if (parentElement.contains(document.getElementById(DOM_CONTAINER_ID))) {
		parentElement.removeChild(document.getElementById(DOM_CONTAINER_ID));
	}
};
