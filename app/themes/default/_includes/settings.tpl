{strip}{* page title *}
{if !isset($get_title)}
	{title assign="get_title"}
{/if}

{* page description *}
{if !isset($get_page_desc)}
	{capture assign="get_page_desc"}{$main_content|strip_tags|truncate:'200'|strip}{/capture}
{/if}

{* meta date *}
{if !isset($get_date)}
	{capture assign=get_date}{$smarty.now|date_format:"%a, %d %b %Y %H:%M:%S"}{/capture}
{/if}

{* canonical *}
{if !isset($canonical)}
	{capture assign="canonical"}{* $content_obj->GetURL() *}{/capture}
{/if}{/strip}