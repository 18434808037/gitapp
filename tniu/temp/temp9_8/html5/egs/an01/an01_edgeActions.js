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
      
      
      Symbol.bindElementAction(compId, symbolName, "${i}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getSymbol("zxb2").play();
         
         sym.getSymbol("ttd1").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${i}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         sym.getSymbol("ttd1").playReverse();
         
         
         sym.getSymbol("zxb2").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a}", "mouseover", function(sym, e) {
         // 当鼠标光标划在对象上（悬停）时插入的代码将运行
         sym.getSymbol("zxb2").play();
         
         sym.getSymbol("ttd2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a}", "mouseout", function(sym, e) {
         // 当鼠标光标划出对象时（不再悬停）插入的代码将运行
         sym.getSymbol("zxb2").playReverse();
         
         sym.getSymbol("ttd2").playReverse();
         

      });
      //Edge binding end

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ttd'
   (function(symbolName) {   
   
   })("ttd");
   //Edge symbol end:'ttd'

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(3001);

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(3001);

      });
      //Edge binding end

      

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
   
   //Edge symbol: 'Symbol_8'
   (function(symbolName) {   
   
   })("Symbol_8");
   //Edge symbol end:'Symbol_8'

   //=========================================================
   
   //Edge symbol: 'zxb'
   (function(symbolName) {   
   
   })("zxb");
   //Edge symbol end:'zxb'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11195565");