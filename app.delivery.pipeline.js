//BuildPipeline
window.divArrow = '<div class="arrow delivery">&#8594;</div>';
//Punching duck 
//Delivery pipeline
window._refreshPipelines = window.refreshPipelines;
window.refreshPipelines = function(data, divNames, errorDiv, view, showAvatars, showChanges) {
    _refreshPipelines(data, divNames, errorDiv, view, showAvatars, showChanges);
    window.cleanArrow();
};
window.cleanArrow = function(){
    var svgs = jQuery('.pipeline-main .pipeline-cell svg');
    if (svgs.length > 0) {
        svgs.each(function(){
            jQuery(this).parent().append(window.divArrow);
            jQuery(this).remove();
        });
    }
};