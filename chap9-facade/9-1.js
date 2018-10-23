/* facade pattern */
function bindEvent(el, type, selctor, fn) {
	if (fn === null) {
		fn = selctor
		selctor = null
	}
}

bindEvent(el, 'click', '#div1', fn)
bindEvent(el, 'click', fn)
