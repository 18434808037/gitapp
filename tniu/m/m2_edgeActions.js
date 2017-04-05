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
   
   //Edge symbol: 'hj1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(2000);

      });
      //Edge binding end

   })("hj1");
   //Edge symbol end:'hj1'

   //=========================================================
   
   //Edge symbol: 'dc1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("dc1");
   //Edge symbol end:'dc1'

   //=========================================================
   
   //Edge symbol: 'o1'
   (function(symbolName) {   
   
   })("o1");
   //Edge symbol end:'o1'

   //=========================================================
   
   //Edge symbol: 'o2'
   (function(symbolName) {   
   
   })("o2");
   //Edge symbol end:'o2'

   //=========================================================
   
   //Edge symbol: 'o3'
   (function(symbolName) {   
   
   })("o3");
   //Edge symbol end:'o3'

   //=========================================================
   
   //Edge symbol: 'vf1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${s11}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(2501);
         sym.getComposition().getStage().getSymbol("vf2").playReverse();
         
         sym.getComposition().getStage().getSymbol("vf3").playReverse();
         

      });
      //Edge binding end

   })("vf1");
   //Edge symbol end:'vf1'

   //=========================================================
   
   //Edge symbol: 'vf2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // 在此处插入代码
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${s12}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(3001);
         sym.getComposition().getStage().getSymbol("vf1").playReverse();
         
         sym.getComposition().getStage().getSymbol("vf3").playReverse();
         
         

      });
      //Edge binding end

   })("vf2");
   //Edge symbol end:'vf2'

   //=========================================================
   
   //Edge symbol: 'vf3'
   (function(symbolName) {   
   
   })("vf3");
   //Edge symbol end:'vf3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-25115837");