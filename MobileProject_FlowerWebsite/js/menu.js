$(document).ready(function(){
    $(".ul_list").hide();
    $(".menu").click(function(){
        $(".ul_list").show();
    }).show();
    $(".X").click(function(){
        $(".ul_list").hide();
    });
});
