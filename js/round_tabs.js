/*
 * REGEX
 *
 * https:\/\/www\.speedrun\.com\/.+
 */

const tabs = $("ul.nav.nav-tabs").children("a");
const ypos = tabs.first().offset().top;
const misc = $("#miscellaneous");

tabs.first().addClass("first");

/* Hack to deal with the "Misc." tab when its on the first row */
if (misc[0] && misc.offset().top === ypos) {
	misc.addClass("last");
} else {
	let i = 0;
	/* Loop every category until you get to the last on the first row */
	while (i < tabs.length && tabs.eq(i++).offset().top === ypos) {}
	tabs.eq(--i).addClass("last");
}