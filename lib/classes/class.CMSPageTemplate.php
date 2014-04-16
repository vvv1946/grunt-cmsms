<?php  
// cms made simple stub for {extends file="template:template_name"}
// In an actual php site {extends file="template:template_name"}
// will make a call to the database but this is just a placeholder
// so that  no changes are required to your smarty templates
class CMSPageTemplate extends Smarty_Resource_Custom {
	public function __construct($theme) {

		$this->theme = $theme;
	}

	protected function fetch($name,&$source,&$mtime) {
		$file = './themes/'.$this->theme.'/_layouts/'.$name.'.tpl';
		if(file_exists($file)) {
			$source = file_get_contents($file);	
		} else {
			$source = 'no such template: '.$file;
		}
		
	}
}
?>