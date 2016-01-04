define(["jquery","jquery-ui","color-picker"],function(a){function b(){a(this).dialog("close")}function c(c,d){require(["css!charts/indicators/smma/smma.css"]),require(["text!charts/indicators/smma/smma.html"],function(e){e=a(e),e.appendTo("body"),e.find("#smma_stroke_color").each(function(){a(this).colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})}),e.dialog({autoOpen:!1,resizable:!1,width:350,modal:!0,my:"center",at:"center",of:window,buttons:[{text:"OK",click:function(){return isNumericBetween(e.find(".smma_input_width_for_period").val(),parseInt(e.find(".smma_input_width_for_period").attr("min")),parseInt(e.find(".smma_input_width_for_period").attr("max")))?(require(["charts/indicators/highcharts_custom/smma"],function(b){b.init();var c={period:parseInt(a("#smma_period").val()),strokeColor:a("#smma_stroke_color").css("background-color"),strokeWidth:parseInt(a("#smma_stroke_width").val()),dashStyle:a("#smma_dash_style").val(),appliedTo:parseInt(e.find("#smma_appliedTo").val())};a(a(".smma").data("refererChartID")).highcharts().series[0].addSMMA(c)}),void b.call(e)):void require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+e.find(".smma_input_width_for_period").attr("min")+" to "+e.find(".smma_input_width_for_period").attr("max")+" is allowed for "+e.find(".smma_input_width_for_period").closest("tr").find("td:first").text()+"!"})})}},{text:"Cancel",click:function(){b.call(this)}}]}),a.isFunction(d)&&d(c)})}return{open:function(b){return 0===a(".smma").length?void c(b,this.open):void a(".smma").data("refererChartID",b).dialog("open")}}});