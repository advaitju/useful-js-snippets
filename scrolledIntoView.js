function isScrolledIntoView(el) {
	// Check if element is completely in view.
	var rect = el.getBoundingClientRect();
	var elemTop = rect.top;
	var elemBottom = rect.bottom;

	var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	return isVisible;
}
