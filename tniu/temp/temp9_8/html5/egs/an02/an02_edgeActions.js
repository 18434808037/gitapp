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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Pasted11}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         
         
         sym.getSymbol("Symbol_22").play();
         
         sym.getSymbol("nvsd1").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted11}", "mouseout", function(sym, e) {
         sym.getSymbol("Symbol_22").playReverse(500);
         
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getSymbol("nvsd1").play(1001);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted13}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getSymbol("nvsd3").play();
         
         
         sym.getSymbol("Symbol_22Copy3").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted13}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getSymbol("nvsd3").play(1001);
         
         
         // 从标签或特定的时间反向播放时间轴。例如：
         // sym.playReverse(500); 或 sym.playReverse(「myLabel」);
         sym.getSymbol("Symbol_22Copy3").playReverse(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted12}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getSymbol("nvsd2").play();
         
         sym.getSymbol("Symbol_22Copy2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted12}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.getSymbol("nvsd2").play(1001);
         
         // 从标签或特定的时间反向播放时间轴。例如：
         // sym.playReverse(500); 或 sym.playReverse(「myLabel」);
         sym.getSymbol("Symbol_22Copy2").playReverse(500);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'xunh'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("xunh");
   //Edge symbol end:'xunh'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(501);

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 109993, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(10250);

      });
      //Edge binding end

   })("Symbol_1_1");
   //Edge symbol end:'Symbol_1_1'

   //=========================================================
   
   //Edge symbol: 'bw'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(12750);

      });
      //Edge binding end

   })("bw");
   //Edge symbol end:'bw'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'nvsd1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("nvsd1");
   //Edge symbol end:'nvsd1'

   //=========================================================
   
   //Edge symbol: 'nvsd2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

   })("nvsd2");
   //Edge symbol end:'nvsd2'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-16971160");