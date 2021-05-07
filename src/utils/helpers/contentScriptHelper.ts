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
	const containerElement: HTMLElement = document.createElement("div");
	containerElement.id = DOM_CONTAINER_ID;
	containerElement.style.position = `absolute`;
	containerElement.style.top = `${parentElement.offsetTop}px`;
	containerElement.style.left = `${
		parentElement.offsetWidth + parentElement.offsetLeft
	}px`;
	console.log("offsetLeft", parentElement.offsetLeft);
	console.log("offsetTop", parentElement.offsetTop);
	console.log("offsetWidth", parentElement.offsetWidth);
	console.log("offsetHeight", parentElement.offsetHeight);
	console.log("ContainerTop", parentElement.offsetTop);
	console.log(
		"ContainerLeft",
		parentElement.offsetWidth + parentElement.offsetLeft
	);
	document.body.appendChild(containerElement);

	// parentElement.insertAdjacentElement("afterbegin", containerElement);
};

export const removeContainer = (parentElement: HTMLElement) => {
	parentElement.removeChild(document.getElementById(DOM_CONTAINER_ID));
};
