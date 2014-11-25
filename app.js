/**
 * Canon for Jenkins Javascript Overrides
 *
 * Leverages Jenkins-included Prototype.js
 *
 * @author Rackspace Web Team
 * update by Unicornio8
 */
document.observe("dom:loaded", function () {
    // Auto Refresh
    var autoRefreshSelector = $$('#right-top-nav #right-top-nav div.smallfont');
    if (autoRefreshSelector.length > 0) {
        var autoRefreshLink = new Element('span').update(autoRefreshSelector[0].innerHTML);
        $$('span.jenkins_ver')[0].insert({before:autoRefreshLink});
    }
    // Click logo, go home.
    $$('div.logo')[0].on('click', function(){ location = '/'; });
	//BuildPipeline
	var divArrow = '<div class="arrow">&#8594;</div>';
	var pipeline = jQuery('#build-pipeline-plugin-content');
	if (pipeline.length > 0) {
        jQuery('#main-panel').addClass('full');
	}
    var arrow = jQuery('#build-pipeline-plugin-content td.next');
	if (arrow.length > 0) {
        arrow.append(divArrow);
	}
	if (jQuery('script[src$="pipe.js"]').length > 0) {
	    var scriptDP = document.createElement('script');
	    scriptDP.src = "/userContent/app.delivery.pipeline.min.js";
	    jQuery('script[src$="pipe.js"]').after(scriptDP);
	}
});