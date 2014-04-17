<?php  
class config {
	function __construct(){
	}
	static function load_config () {
		
		$config = array();
		$parts = parse_url($_SERVER['PHP_SELF']);
		$path = '';
		if( !empty($parts['path']) ) {
			$path = dirname($parts['path']);
			
			while(endswith($path, DS)) {
				$path = substr($path,0,strlen($path)-1);
			}
			if(($pos = strpos($path,'/index.php')) !== FALSE ) {
				$path = substr($path,0,$pos);
			}
		}
		$str = 'http://'.$_SERVER['HTTP_HOST'].$path;
		$root_url = $str;
		$config['root_url'] = $root_url;
		$config['root_path'] = $_SERVER['DOCUMENT_ROOT']; 
		$dirname = $dirname = dirname(dirname(dirname(__FILE__)));
		$config_file_path = $dirname.DS.'theme-config.json';
		
		$config_file = array();
		if(file_exists($config_file_path)) {
			$json = file_get_contents($config_file_path);
			$json = json_decode($json, true);
			$config_file = $json['cmsms'];
		}
		return array_merge($config_file,$config);
	}
}
?>