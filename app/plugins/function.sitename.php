<?php  
/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.sitename.php
 * Type:     function
 * Name:     title
 * Purpose:  outputs sitename
 * -------------------------------------------------------------
 */
function smarty_function_sitename($params, $template)
{
	$config = cmsms()->GetConfig();
	$sitename = $config['sitename'];
	return $sitename;
}
?>