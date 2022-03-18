import  './app2.css';
import $ from "jquery";
const $tabBar = $("#app2 .tab-bar");
const $tabZone =$("#app2 .tab-zone")
$tabBar.on("click","li",e=>{
const $li =$(e.currentTarget);
    $li.addClass('selected')
        .siblings()
        .removeClass('selected')

    const index= $li.index();
    $tabZone.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBar.children().eq(1).trigger("click")