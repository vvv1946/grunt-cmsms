A Grunt template for creating CMS Made Simple themes

## Usage ##
All of the theme files are in `/app/themes/default/` If you decide to rename the theme folder from  "default" to `app/themes/YOUR-THEME-NAME`, you will need to change the settings and paths in the following files:

- ./theme-config.json
- ./.bowerrc
- ./bower.json
- app/themes/YOUR-THEME-NAME/_includes/js.tpl
- app/themes/YOUR-THEME-NAME/_includes/js.tpl
- app/themes/YOUR-THEME-NAME/_layouts/default.tpl

After you have changed all directory name settings and file paths, open up the terminal or command prompt and  `cd` into the project folder example: `cd grunt-cmsms`. Once you are in the project folder run `npm install`. This will download all the required node packages. Next you will need to download all the bower packages by running the following command `bower install`.

Once all the npm and bower packages have been installed run `grunt serve` and start coding.