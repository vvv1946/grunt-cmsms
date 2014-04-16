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
function smarty_function_title($params,$template)
{
	$title = $template->tpl_vars['page_info']->value['title'];
	if(isset($params['assign'])) {
		$template->assign(trim($params['assign']),$title);
		return;
	}
	return $title;
}
?>