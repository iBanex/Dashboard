$(function() {
	$(".navigate ul li").click(function() {
		if (!$(this).hasClass("active")) {
			$(".navigate > span").css("left",(parseFloat($(".navigate > span").css("width")) * $(this).index())+"px");
			$(".navigate ul li.active").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".profile > img").mousemove(function( e ) {
		$(".profile > span").offset({left:e.clientX+10,top:e.clientY+10});
		$(".profile > span").fadeIn();
	});
	$(".profile > img").mouseleave(function() {
		$(".profile > span").fadeOut();
	});
	$(".avatarSection > .next").click(function() {
		$(".avatarSection img:nth-child(1)").attr("src", $(".avatarSection > img.current").attr("src"));
		$(".avatarSection > img.current").attr("src", $(".avatarSection img:nth-child(3)").attr("src"));
		var nextAvatar = Number($(".avatarSection img:nth-child(3)").attr("src").replace(/^.*[\\\/]/, "").slice(0, -4));
		nextAvatar += 1;
		if (nextAvatar > 30) {
			nextAvatar = 1;
		}
		$(".avatarSection img:nth-child(3)").attr("src", "gfx/avatars/"+nextAvatar+".png");
	})
	$(".avatarSection > .previous").click(function() {
		$(".avatarSection img:nth-child(3)").attr("src", $(".avatarSection > img.current").attr("src"));
		$(".avatarSection > img.current").attr("src", $(".avatarSection img:nth-child(1)").attr("src"));
		var nextAvatar = Number($(".avatarSection img:nth-child(1)").attr("src").replace(/^.*[\\\/]/, "").slice(0, -4));
		nextAvatar -= 1;
		if (nextAvatar < 1) {
			nextAvatar = 30;
		}
		$(".avatarSection img:nth-child(1)").attr("src", "gfx/avatars/"+nextAvatar+".png");
	})
	$(".avatarSection > .select").click(function() {
		$(".profile > img").fadeOut(1000,function() {
			$(".profile > img").delay("fast").attr("src", $(".avatarSection > img.current").attr("src"))
			$(".profile > img").fadeIn()
		});
	})
	$(".profile > img").click(function() {
		if ($(".avatarSection").is(":hidden")) {
			if ($(".inventory").is(":visible")) {
				var e = "inventory";
			} else {
				var e = "userConfig";
			}
			$("."+e).fadeOut(400,function() {
				$(".avatarSection").fadeIn(500);
			})
		}
	})
	$(".profile > button").click(function() {
		if ($(".userConfig").is(":hidden")) {
			if ($(".inventory").is(":visible")) {
				var e = "inventory";
			} else {
				var e = "avatarSection";
			}
			$("."+e).fadeOut(400,function() {
				$(".userConfig").fadeIn(500);
			})
		}
	})
	$(".avatarSection > .close").click(function() {
		$(".avatarSection").fadeOut(400,function() {
			$(".inventory").fadeIn(500);
		})
	})
	$(".userConfig > .close").click(function() {
		$(".userConfig").fadeOut(400,function() {
			$(".inventory").fadeIn(500);
		})
	})
	$(".inventory > .slots > div").click(function() {
		if (!$(this).hasClass("active")) {
			$(".inventory > .slots > div").removeClass("active");
			$(this).addClass("active");
			$(".inventory > .list > div").fadeOut(400,function() {
				$(".inventory > .list").empty()
				$(".inventory > .list > div").fadeIn()
			});
		}
	})
	$(".Mods .tableContent > li > div > button").click(function() {
		if ($(this).css("background-color") == "rgb(99, 205, 99)") {
			$(this).css("background-color","#d3414b");
			$(this).text("Desativar");
		} else {
			$(this).css("background-color","#63cd63");
			$(this).text("Ativar");
		}
	})
	$(".PROPERTIES .tableContent > li > div > button").click(function() {
		if ($(this).css("background-color") == "rgb(99, 205, 99)") {
			$(this).css("background-color","#d3414b");
			$(this).text("Vender");
		} else {
			$(this).css("background-color","#63cd63");
			$(this).text("Comprar");
		}
	})
});

function hex(rgb) {
    var parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = "0" + parts[i];
    }
    return "#" + parts.join("");
}
