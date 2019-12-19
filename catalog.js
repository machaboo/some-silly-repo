
/*
scraped with:

(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
arr = []
$('.mh-posts-list-item').each((ij, el) => {
	const url = $(el).find('figure a.mh-thumb-icon').attr('href')
	const poster = $(el).find('figure a.mh-thumb-icon img').attr('src')
	const name = $(el).find('.mh-posts-list-title').text().trim()
	const tag = capitalizeFirstLetter($(el).find('.mh-image-caption.mh-posts-list-caption').text().trim())
	arr.push({
		id: 'ustv:' + btoa(url),
		name,
		poster,
		tag
	})
})
console.log(JSON.stringify(arr))


from: http://ustvgo.tv/
*/
module.exports = [
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9tc25iYy1saXZlLXN0cmVhbWluZy1mcmVlLw==",
      "name":"MSNBC",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/msnbc_logo-269x151.jpg",
      "tag":"News"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9mb3gtbmV3cy1saXZlLXN0cmVhbWluZy1mcmVlLw==",
      "name":"Fox News",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_287,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/foxnews.jpg",
      "tag":"News"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9jbm4tbGl2ZS1zdHJlYW1pbmctZnJlZS8=",
      "name":"CNN",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/CNN-1.png",
      "tag":"News"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di93d2UtbmV0d29yay8=",
      "name":"WWE Network",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/09/wwe-269x151.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9zY2llbmNlLw==",
      "name":"Science",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/Science.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9lLw==",
      "name":"E!",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/E.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9ib29tZXJhbmcv",
      "name":"Boomerang",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/Boomerang.png",
      "tag":"Kids"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9nc24v",
      "name":"GSN",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/GSN.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9obG4v",
      "name":"HLN",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/HLN.jpg",
      "tag":"News"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9kaXNuZXlqci8=",
      "name":"DisneyJr",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/disney-jr-768x432-1.png",
      "tag":"Kids"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9kZXN0aW5hdGlvbi1hbWVyaWNhLw==",
      "name":"Destination America",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/Destination_America.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9meHgv",
      "name":"FXX",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/FXX.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uaWNrdG9vbnMv",
      "name":"Nicktoons",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/nicktoons.png",
      "tag":"Kids"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9jbXQv",
      "name":"CMT",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/cmt-1.png",
      "tag":"Entertainment"
   },
   {
      "id": "ustv:aHR0cHM6Ly91c3R2Z28udHYvcGxheWVyLnBocD9zdHJlYW09TGlmZXRpbWVN",
//      "id":"ustv:aHR0cDovL3VzdHZnby50di9saWZldGltZS1tb3ZpZXMv",
      "name":"Lifetime Movies",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/lifetimeM.jpeg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9iZXQv",
      "name":"BET",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/bet-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9kaXkv",
      "name":"DIY",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/diy.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di92aDEv",
      "name":"VH1",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/vh1.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9tdHYv",
      "name":"MTV",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/mtv.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di93ZS10di8=",
      "name":"We TV",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/wetv.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9lc3BuMi8=",
      "name":"ESPN2",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/espn2-269x151.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9meG0v",
      "name":"FXM",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/FXM.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9wYXJhbW91bnQtbmV0d29yay8=",
      "name":"Paramount Network",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/paramount.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9zdW5kYW5jZS10di8=",
      "name":"Sundance TV",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/sundance-tv.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9vd24v",
      "name":"OWN",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/own.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di91bml2aXNpb24v",
      "name":"Univision",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/univisionlogo.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90ZWxlbXVuZG8v",
      "name":"Telemundo",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/Telemundo.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9tb3RvcnRyZW5kLw==",
      "name":"MotorTrend",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/Motortrend-1.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9wb3Av",
      "name":"POP",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/Pop_Network-1.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9veHlnZW4v",
      "name":"Oxygen",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/Oxygen-1.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9mb3gtc3BvcnRzLTIv",
      "name":"Fox Sports 2",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/fs2-269x151.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9mb3gtc3BvcnRzLTEv",
      "name":"Fox Sports 1",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/fs1-269x151.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9kaXNuZXl4ZC8=",
      "name":"DisneyXD",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/disney-xd-768x432-1.png",
      "tag":"Kids"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90cnV0di8=",
      "name":"TruTV",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/08/TruTV-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uYmMtc3BvcnRzLw==",
      "name":"NBC Sports",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/nbcsn-269x151.jpg",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uYmEtdHYv",
      "name":"NBA TV",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/nbatv-269x151.jpg",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9oYm8v",
      "name":"HBO",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/hbo-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9zaG93dGltZS8=",
      "name":"Showtime",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/Showtime-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9lc3BuLWxpdmUv",
      "name":"ESPN",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/espn-269x151.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90bnQv",
      "name":"TNT",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/TNT.jpg",
      "tag":"Uncategorized"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90Y20v",
      "name":"TCM",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/05/TCM.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9tbGItbmV0d29yay8=",
      "name":"MLB Network",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/05/MLB.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9zdGFyei1jaGFubmVsLWxpdmUv",
      "name":"Starz",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/StarZ-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9meC1jaGFubmVsLWxpdmUv",
      "name":"FX",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/fx-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di91c2EtbmV0d29yay1saXZlLw==",
      "name":"USA Network",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/USA-Network-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9zeWZ5LWNoYW5uZWwtbGl2ZS8=",
      "name":"Syfy",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/syfy-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9iYmMtYW1lcmljYS1saXZlLw==",
      "name":"BBC America",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/BBC.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9wYnMtbGl2ZS8=",
      "name":"PBS",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_152/http://ustvgo.tv/wp-content/uploads/2019/01/PBS.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uYXRpb25hbC1nZW9ncmFwaGljLWxpdmUv",
      "name":"National Geographic",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/National-Geographic-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uYXQtZ2VvLXdpbGQtbGl2ZS8=",
      "name":"NAT GEO WILD",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/NatGeoWild.jpeg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9hbmltYWwtcGxhbmV0LWxpdmUv",
      "name":"Animal Planet",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/animal-planet.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9jb21lZHktY2VudHJhbC1saXZlLWZyZWUv",
      "name":"Comedy Central",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/comedy-central-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9mcmVlZm9ybS1jaGFubmVsLWxpdmUtZnJlZS8=",
      "name":"Freeform",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/freeform-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9saWZldGltZS1jaGFubmVsLWxpdmUv",
      "name":"Lifetime",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/Lifetime-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9mb29kLW5ldHdvcmstbGl2ZS1mcmVlLw==",
      "name":"Food Network",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/food-network-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90bGMtbGl2ZS1mcmVlLw==",
      "name":"TLC",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/tlc-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90cmF2ZWwtY2hhbm5lbC1saXZlLWZyZWUv",
      "name":"Travel",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/Travel-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9icmF2by1jaGFubmVsLWxpdmUtZnJlZS8=",
      "name":"Bravo",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/bravo-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90di1sYW5kLWxpdmUtZnJlZS8=",
      "name":"TV Land",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/TVLand-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90YnMtY2hhbm5lbC1saXZlLWZyZWUv",
      "name":"TBS",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/tbs-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90ZW5uaXMtY2hhbm5lbC1saXZlLWZyZWUv",
      "name":"Tennis Channel",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/TennisChannel.whiteBg.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9nb2xmLWNoYW5uZWwtbGl2ZS1mcmVlLw==",
      "name":"Golf Channel",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/golf-269x151.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uZmwtbmV0d29yay1saXZlLWZyZWUv",
      "name":"NFL Network",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/nfln-logo-dark.png",
      "tag":"Sports"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9hZS1uZXR3b3Jrcy1saXZlLXN0cmVhbWluZy1mcmVlLw==",
      "name":"A&E",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/AE.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9oYWxsbWFyay1tb3ZpZXMtbXlzdGVyaWVzLWxpdmUtc3RyZWFtaW5nLWZyZWUv",
      "name":"Hallmark Movies & Mysteries",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/HMM_logo_black-700x245.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9oYWxsbWFyay1jaGFubmVsLWxpdmUtc3RyZWFtaW5nLWZyZWUv",
      "name":"Hallmark Channel",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_268,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/hallmark-chanel-logo.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9kaXNuZXktY2hhbm5lbC1saXZlLXN0cmVhbWluZy1mcmVlLw==",
      "name":"Disney Channel",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/disney-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9pbnZlc3RpZ2F0aW9uLWRpc2NvdmVyeS1saXZlLXN0cmVhbWluZy1mcmVlLw==",
      "name":"Investigation Discovery",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/id-269x151.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uaWNrZWxvZGVvbi1saXZlLXN0cmVhbWluZy1mcmVlLw==",
      "name":"Nickelodeon",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/Nickelodeon_2009.png",
      "tag":"Kids"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9jYXJ0b29uLW5ldHdvcmstbGl2ZS1zdHJlYW1pbmctZnJlZS8=",
      "name":"Cartoon Network",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_268,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/cartoon-network.jpg",
      "tag":"Kids"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90aGUtY3ctbGl2ZS1zdHJlYW1pbmctZnJlZS8=",
      "name":"The CW",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/cw-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9oZ3R2LWxpdmUtc3RyZWFtaW5nLWZyZWUv",
      "name":"HGTV",
      "poster":"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/HGTV-269x151.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9hbWMtbGl2ZS8=",
      "name":"AMC",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/AMC-1.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9kaXNjb3ZlcnktY2hhbm5lbC1saXZlLw==",
      "name":"Discovery Channel",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/Discovery.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9oaXN0b3J5LWNoYW5uZWwtbGl2ZS8=",
      "name":"History Channel",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2019/01/History.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di90aGUtd2VhdGhlci1jaGFubmVsLWxpdmUtc3RyZWFtaW5nLWZyZWUv",
      "name":"The Weather Channel",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/Weather-Channel-269x151.png",
      "tag":"News"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9jYnMtbGl2ZS1zdHJlYW1pbmctZnJlZS8=",
      "name":"CBS",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/CBS-1.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9hYmMtbGl2ZS1zdHJlYW1pbmctZnJlZS8=",
      "name":"ABC",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/abc-269x151.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9uYmMv",
      "name":"NBC",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/nbc-logo.jpg",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9mb3gtaGQtbGl2ZS1zdHJlYW1pbmcv",
      "name":"FOX",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/FOX-1.png",
      "tag":"Entertainment"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9mb3gtYnVzaW5lc3MtbGl2ZS1zdHJlYW1pbmctZnJlZS8=",
      "name":"Fox Business",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_269,h_150/http://ustvgo.tv/wp-content/uploads/2018/10/foxbusiness.jpg",
      "tag":"News"
   },
   {
      "id":"ustv:aHR0cDovL3VzdHZnby50di9jbmJjLWxpdmUtc3RyZWFtaW5nLWZyZWUv",
      "name":"CNBC",
      "poster":"https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_255,h_151/http://ustvgo.tv/wp-content/uploads/2018/10/cnbc-1.jpg",
      "tag":"News"
   }
]

