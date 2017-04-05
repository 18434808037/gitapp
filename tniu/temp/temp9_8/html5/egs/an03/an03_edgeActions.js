/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'zzz'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22250, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(2250);

      });
      //Edge binding end

   })("zzz");
   //Edge symbol end:'zzz'

   //=========================================================
   
   //Edge symbol: 'guaz'
   (function(symbolName) {   
   
   })("guaz");
   //Edge symbol end:'guaz'

   //=========================================================
   
   //Edge symbol: 'sd1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("sd1");
   //Edge symbol end:'sd1'

   //=========================================================
   
   //Edge symbol: 'sd2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("sd2");
   //Edge symbol end:'sd2'

   //=========================================================
   
   //Edge symbol: 'sd3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("sd3");
   //Edge symbol end:'sd3'

   //=========================================================
   
   //Edge symbol: 'sd4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("sd4");
   //Edge symbol end:'sd4'

   //=========================================================
   
   //Edge symbol: 'sd5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("sd5");
   //Edge symbol end:'sd5'

   //=========================================================
   
   //Edge symbol: 'sd6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("sd6");
   //Edge symbol end:'sd6'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'Symbol_5'
   (function(symbolName) {   
   
   })("Symbol_5");
   //Edge symbol end:'Symbol_5'

   //=========================================================
   
   //Edge symbol: 'Symbol_6'
   (function(symbolName) {   
   
   })("Symbol_6");
   //Edge symbol end:'Symbol_6'

   //=========================================================
   
   //Edge symbol: 'Symbol_7'
   (function(symbolName) {   
   
   })("Symbol_7");
   //Edge symbol end:'Symbol_7'

   //=========================================================
   
   //Edge symbol: 'tu01'
   (function(symbolName) {   
   
   })("tu01");
   //Edge symbol end:'tu01'

   //=========================================================
   
   //Edge symbol: 'tu02'
   (function(symbolName) {   
   
   })("tu02");
   //Edge symbol end:'tu02'

   //=========================================================
   
   //Edge symbol: 'tu03'
   (function(symbolName) {   
   
   })("tu03");
   //Edge symbol end:'tu03'

   //=========================================================
   
   //Edge symbol: 'tu04'
   (function(symbolName) {   
   
   })("tu04");
   //Edge symbol end:'tu04'

   //=========================================================
   
   //Edge symbol: 'tu05'
   (function(symbolName) {   
   
   })("tu05");
   //Edge symbol end:'tu05'

   //=========================================================
   
   //Edge symbol: 'tu06'
   (function(symbolName) {   
   
   })("tu06");
   //Edge symbol end:'tu06'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'B1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${TC}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         
         sym.play();
         
         sym.getComposition().getStage().getSymbol("Symbol_8").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TC}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         
         // 从标签或特定的时间反向播放时间轴。例如：
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Symbol_8").play(1250);
         
         // sym.playReverse(500); 或 sym.playReverse(「myLabel」);
         sym.playReverse(2500);

      });
      //Edge binding end

   })("B1");
   //Edge symbol end:'B1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'B2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${TC2}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.play();
         
         
         sym.getComposition().getStage().getSymbol("Symbol_9").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TC2}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         // 从标签或特定的时间反向播放时间轴。例如：
         // sym.playReverse(500); 或 sym.playReverse(「myLabel」);
         sym.playReverse(2000);
         
         
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Symbol_9").play(1250);

      });
      //Edge binding end

   })("B2");
   //Edge symbol end:'B2'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'B3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${TC3}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getComposition().getStage().getSymbol("Symbol_10").play();
         
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TC3}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Symbol_10").play(1250);
         
         // 从标签或特定的时间反向播放时间轴。例如：
         // sym.playReverse(500); 或 sym.playReverse(「myLabel」);
         sym.playReverse(3000);
         

      });
      //Edge binding end

   })("B3");
   //Edge symbol end:'B3'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'B4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${TC4}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getComposition().getStage().getSymbol("Symbol_11").play();
         
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TC4}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Symbol_11").play(1250);
         
         // 从标签或特定的时间反向播放时间轴。例如：
         // sym.playReverse(500); 或 sym.playReverse(「myLabel」);
         sym.playReverse(3500);
         

      });
      //Edge binding end

   })("B4");
   //Edge symbol end:'B4'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'B5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${TC}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getComposition().getStage().getSymbol("Symbol_12").play();
         
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TC}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Symbol_12").play(1250);
         
         sym.playReverse();
         

      });
      //Edge binding end

   })("B5");
   //Edge symbol end:'B5'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'B6'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${TC2}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getComposition().getStage().getSymbol("Symbol_13").play();
         
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${TC2}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Symbol_13").play(1250);
         
         
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(4000);

      });
      //Edge binding end

   })("B6");
   //Edge symbol end:'B6'

   //=========================================================
   
   //Edge symbol: 'Symbol_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_8");
   //Edge symbol end:'Symbol_8'

   //=========================================================
   
   //Edge symbol: 'Symbol_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_9");
   //Edge symbol end:'Symbol_9'

   //=========================================================
   
   //Edge symbol: 'Symbol_10'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_10");
   //Edge symbol end:'Symbol_10'

   //=========================================================
   
   //Edge symbol: 'Symbol_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_11");
   //Edge symbol end:'Symbol_11'

   //=========================================================
   
   //Edge symbol: 'Symbol_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_12");
   //Edge symbol end:'Symbol_12'

   //=========================================================
   
   //Edge symbol: 'Symbol_13'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_13");
   //Edge symbol end:'Symbol_13'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3200493");