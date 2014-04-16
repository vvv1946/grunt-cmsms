{literal}<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
	<script>
		(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
		function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
		e=o.createElement(i);r=o.getElementsByTagName(i)[0];
		e.src='//www.google-analytics.com/analytics.js';
		r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
		ga('create','UA-XXXXX-X');ga('send','pageview');
	</script>

	<!-- Piwik Analytics: change PIWIK_ID and "piwik.com" to the proper credentials -->
	<script type="text/javascript">
		var _paq = _paq || [];
		_paq.push(["trackPageView"]);
		_paq.push(["enableLinkTracking"]);
  		(function() {
			var u=(("https:" == document.location.protocol) ? "https" : "http") + "://piwik.com/";
			_paq.push(["setTrackerUrl", u+"piwik.php"]);
			_paq.push(["setSiteId", "PIWIK_ID"]);
			var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
			g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
  		})();
	</script>{/literal}