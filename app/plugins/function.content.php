<?php  
/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     function.process_pagedata.php
 * Type:     function
 * Name:     title
 * Purpose:  just a stub plugin for cms ms content tag
 * -------------------------------------------------------------
 */
function smarty_function_content($params,$smarty)
{
	$name = isset($params['name']) ? $params['name'] : 'default';
	$page_info = $smarty->tpl_vars['page_info']->value;
	$config = cmsms()->GetConfig();
	$template_path = $config['root_path'].DS.'themes'.DS.
		$page_info['theme'].DS.'_pages'.DS.$page_info['page'].DS.'content';
	$content = $page_info['content'];
	if(array_key_exists($name, $content))
	{
		$template = $content[$name];
		$template = $template_path.DS.$template;

		if($smarty->TemplateExists($template))
		{
			$str = $smarty->fetch($template);
		}

	} else {
		$str = "Can't find content for: ".$name;
	}

	if(isset($params['assign']))
	{
		$smarty->assign(trim($params['assign']),$str);
		return;
	}

	return $str;

}
?>