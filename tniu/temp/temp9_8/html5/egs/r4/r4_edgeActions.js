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
   
   //Edge symbol: 'lo1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("lo1");
   //Edge symbol end:'lo1'

   //=========================================================
   
   //Edge symbol: 'rt22'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(1);

      });
      //Edge binding end

   })("rt22");
   //Edge symbol end:'rt22'

   //=========================================================
   
   //Edge symbol: 'gy67'
   (function(symbolName) {   
   
   })("gy67");
   //Edge symbol end:'gy67'

   //=========================================================
   
   //Edge symbol: 'niudax'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // 在此处插入代码
         // 从标签或特定时间开始播放时间轴。例如：
         // sym.play(500); 或 sym.play("myLabel");
         sym.play(15001);

      });
      //Edge binding end

   })("niudax");
   //Edge symbol end:'niudax'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-8114070");