<?php  
/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.title.php
 * Type:     function
 * Name:     title
 * Purpose:  outputs page title
 * -------------------------------------------------------------
 */
function smarty_function_theme_info($params, &$template)
{
	$name = isset($params['name']) ? $params['name'] : false;

	if(!$name) {
		$msg = 'The name parameter is required';
		return $msg;
	}
	//$root_path = dirname(dirname(dirname(__FILE__))).$name;
	$theme_url = '';
	$template->assign('theme_url',$theme_url);
	$template->assign('theme_path', $theme_path);
}
?>