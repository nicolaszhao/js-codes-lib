/**
			dd.each(function(i){
				html[i] = $(this).find(".banner").html();
			});
				if (o.replaceHTML) {
					dd.each(function(i){
						$(this).find(".banner").html(f ? $(o.replaceHTML).html() : html[i]);
					});
				}