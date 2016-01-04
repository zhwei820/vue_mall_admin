(function(){

    Date.prototype.dateFormat = function(fmt)
    { //author: meizz
      var o = {
        "M+" : this.getMonth() + 1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度
        "S"  : this.getMilliseconds()             //毫秒
      };
      if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for(var k in o)
        if(new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }


	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	// The languages map is built automatically with gulp
	var Languages = /*languages_placeholder[*/{"css":"CSS","clike":"C-like","javascript":"JavaScript","abap":"ABAP","actionscript":"ActionScript","apacheconf":"Apache Configuration","apl":"APL","applescript":"AppleScript","aspnet":"ASP.NET (C#)","autoit":"AutoIt","autohotkey":"AutoHotkey","basic":"BASIC","csharp":"C#","cpp":"C++","coffeescript":"CoffeeScript","css-extras":"CSS Extras","fsharp":"F#","glsl":"GLSL","http":"HTTP","inform7":"Inform 7","latex":"LaTeX","lolcode":"LOLCODE","matlab":"MATLAB","mel":"MEL","nasm":"NASM","nginx":"nginx","nsis":"NSIS","objectivec":"Objective-C","ocaml":"OCaml","php":"PHP","php-extras":"PHP Extras","powershell":"PowerShell","jsx":"React JSX","rest":"reST (reStructuredText)","sas":"SAS","sass":"Sass (Sass)","scss":"Sass (Scss)","sql":"SQL","typescript":"TypeScript","vhdl":"VHDL","vim":"vim","wiki":"Wiki markup","yaml":"YAML"}/*]*/;
	Prism.hooks.add('before-highlight', function(env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}
		var language = Languages[env.language] || (env.language.substring(0, 1).toUpperCase() + env.language.substring(1));
		pre.setAttribute('data-language', language);
	});


})();
