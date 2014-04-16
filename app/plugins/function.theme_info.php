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
function smarty_function_theme_info($params, $template)
{
	$config = cmsms()->GetConfig();
	$name = isset($params['name']) ? $params['name'] : false;

	if(!$name) {
		$msg = 'The name parameter is required';
		return $msg;
	}
	$theme_url = $config['root_url']."/themes/".$name;
	$theme_path = $config['root_path'].DS."themes".DS.$name;
	$template->assign('theme_url',$theme_url);
	$template->assign('theme_path', $theme_path);
}
?>