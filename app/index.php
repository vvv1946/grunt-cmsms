<?php  
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);
define('DS', DIRECTORY_SEPARATOR);
// check for pretty urls
if(!empty($params[0])) {
	$theme = $params[0];
	$page = $params[1];
} else {
	$page = isset($_GET['page']) ? $_GET['page'] : 'home';
	$theme = isset($_GET['theme']) ? $_GET['theme'] : false;
}


//$template = DS.'themes'.DS.$theme.DS.'_pages'.DS.$page.'.tpl';

// import classes and libs
require_once 'include.php';
$config = cmsms()->GetConfig();

// Check if theme is false
if($theme === false) {
	 $theme = $config['theme_dir'];
}

$manifest = $config['root_path'].DS.'themes'.DS.$theme.DS.'_pages'.DS.$page.DS.'page.php';

$page_config = array();
if(file_exists($manifest)) {
	require_once $manifest;
}


$title = isset($page_config['title']) ? $page_config['title'] : 'Page Title';
$template_name = isset($page_config['template']) ? $page_config['template'] : 'default';
$template = $config['root_path'].DS.'themes'.DS.$theme.DS.'_layouts'.DS.$template_name.'.tpl';

$page_content = $page_config['content'];

$smarty = new Smarty;
$page_config['theme'] = $theme;
$page_config['page'] = $page;
$smarty->assign('page_info',$page_config);
$smarty->debugging = false;
$smarty->caching = false;

// add custom plugins directory
$smarty->addPluginsDir('./plugins');
$smarty->setCompileDir('./tmp/templates_c');
$smarty->setCacheDir('./tmp/cache');



$smarty->registerResource('template', new CMSPageTemplate($theme));



if(!file_exists($template)) {
	$template = 'themes/404.tpl';
}

$smarty->display($template);

?>