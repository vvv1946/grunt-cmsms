<?php  
// stub for cmsms app
function cmsms() {
	return new cmsms();
}

function cms_join_path()
{
	$args = func_get_args();
        return implode(DIRECTORY_SEPARATOR,$args);
}

function endswith( $str, $sub )
{
	return ( substr( $str, strlen( $str ) - strlen( $sub ) ) == $sub );
}

function getTitle($params,$smarty,$title)
{
	$str = $title;
	if(isset($params['assign']))
	{
		$smarty->assign(trim($params['assign']), $str);
	}
	return $str;
}
?>