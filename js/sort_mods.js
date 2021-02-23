/*
 * REGEX
 *
 * https:\/\/www\.speedrun\.com\/.+
 */

function disp_mods(obj, mods)
{
	if (mods.length > 0)
		obj.append("<br>");

	for (let i = 0, len = mods.length; i < len; i++) {
		obj.append(mods[i]);
		obj.append("  ");
	}
}

/* Some pages don't have any mods */
const modbox = $("div#sidebar.col-auto div.panel p.center small.text-muted");
if (modbox.text().includes("Moderated by:")) {
	let supermods = [];
	let mods = [];
	let verifiers = [];

	/* Loop over every mod/verifier */
	const modsobj = $(
		"div#sidebar.col-auto div.panel p.center small.text-muted .link-username.nobr.nounderline");
	modsobj.each(function(i, obj) {
		switch (obj.childNodes[0].getAttribute("data-original-title")) {
		case "Super Mod":
			supermods.push(obj);
			break;
		case "Mod":
			mods.push(obj);
			break;
		case "Verifier":
			verifiers.push(obj);
			break;
		}
	});

	modsobj.remove();

	modbox.text("Moderated by:");
	disp_mods(modbox, supermods);
	disp_mods(modbox, mods);
	disp_mods(modbox, verifiers);
}
