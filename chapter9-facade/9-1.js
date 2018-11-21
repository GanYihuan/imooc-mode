/* facade pattern */
/* 为子系统中的一组接口提供一个高层接口，使用者使用这个高层接口 */

function bindEvent(el, type, selctor, fn) {
	if (fn === null) {
		fn = selctor
		selctor = null
	}
}

bindEvent(el, 'click', '#div1', fn)
bindEvent(el, 'click', fn)
