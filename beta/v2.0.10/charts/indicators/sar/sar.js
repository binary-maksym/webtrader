define(["jquery","jquery-ui","color-picker"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/sar/sar.css"]),require(["text!charts/indicators/sar/sar.html"],function(e){var f="#cd0a0a";e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#sar_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#sar_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted},ok:function(b,c){a("#sar_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted}}),e.dialog({autoOpen:!1,resizable:!1,modal:!0,width:280,my:"center",at:"center",of:window,buttons:[{text:"OK",click:function(){var c=!0;a(".sar_input_width_for_period").each(function(){return a.isNumeric(a(this).val())?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numeric value allowed!"})}),c=!1)}),c&&(require(["charts/indicators/highcharts_custom/sar"],function(b){b.init();var c={acceleration:parseFloat(e.find("#sar_acceleration").val()),maximum:parseFloat(e.find("#sar_maximum").val()),stroke:f,strokeWidth:parseInt(e.find("#sar_strokeWidth").val()),dashStyle:"line"};a(a(".sar").data("refererChartID")).highcharts().series[0].addSAR(c)}),b.call(e))}},{text:"Cancel",click:function(){b.call(this)}}]}),a.isFunction(d)&&d(c)})}return{open:function(b){return 0==a(".sar").length?void c(b,this.open):void a(".sar").data("refererChartID",b).dialog("open")}}});