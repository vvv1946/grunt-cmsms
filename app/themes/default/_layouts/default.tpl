{strip}{theme_info name="default"}
{block name="load_content_blocks"}{content assign="main_content"}{/block}
{include file="$theme_path/_includes/settings.tpl" scope="parent"}
{process_pagedata}{block name="doctype"}<!doctype html>{/block}{/strip}
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="UTF-8">
	<title>{$get_title} - {sitename}</title>
	<base href="{root_url}" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	{strip}
	{* include meta *}
	{include file="$theme_path/_includes/meta/meta.tpl" scope="parent"}
	{* include twitter meta *}
	{include file="$theme_path/_includes/meta/meta_twitter.tpl" scope="parent"}
	{* include facebook meta *}
	{include file="$theme_path/_includes/meta/meta_facebook.tpl" scope="parent"}
	{* include apple icons *}
	{include file="$theme_path/_includes/meta/meta_icons_apple.tpl" scope="parent"}
	{* include ms icons *}
	{include file="$theme_path/_includes/meta/meta_icons_ms.tpl" scope="parent"}
	{/strip}
	
	{strip}
	{* css *}
	{include file="$theme_path/_includes/css.tpl"}
	{* template specific css *}
	{block name="css"}{/block}{/strip}

	{literal}<!-- build:js({app,tmp}) themes/default/js/vendor/modernizr.js -->
	<script src='themes/default/bower_components/modernizr/modernizr.js'></script>
	<!-- endbuild -->{/literal}
</head>
<body>

	<!-- HEADER -->
	<header id="header">
		{block name="header"}<div class="l-header"></div>{/block}
	</header>
	
	<!-- MAIN -->
	<section id="main">
		<div class="l-main l-container">
			{block name="content"}
			<div class="l-main-left-col">
				<div class="panel">
				<h2>Main Content</h2>
				{$main_content}		
				</div>
			</div>
			<div class="l-main-right-col">
				<div class="panel">
					<h2>Secondary Content</h2>
				</div>
			</div>
			{/block}
		</div>
	</section>
	
	<!-- FOOTER -->
	<footer id="footer">
		<div class="l-footer container">
			{block name="footer"}{/block}
		</div>
	</footer>

	<!-- tracking script -->
	{include file="$theme_path/_includes/tracking.tpl"}
	
	<!-- scripts -->
	{include file="$theme_path/_includes/js.tpl"}
	{* template specific js *}
	{block name="js"}{/block}
</body>
</html>