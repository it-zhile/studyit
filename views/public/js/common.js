
// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
	location.href = '/login';
};

// var htmlStr = template('tpl_aside_profile',JSON.parse($.cookie('tcinfo')));
// $('.aside>.profile').html(htmlStr);

if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
    //需要渲染模板
    var htmlStr = template('tpl_aside_profile',JSON.parse($.cookie('tcinfo')));
     $('.aside>.profile').html(htmlStr);
}