# CircuitOnline 项目介绍

CircuitOnline 的目标是搭建一个基于的数字电路仿真平台。

[CircuitVerse](https://github.com/CircuitVerse/CircuitVerse) 是一个使用了 [Webpacker](https://edgeguides.rubyonrails.org/webpacker.html) 的 [Ruby on Rails](https://rubyonrails.org/) 项目，其中包括纯 JavaScript 的数电仿真器，代码在 [simulator/src](https://github.com/CircuitVerse/CircuitVerse/tree/master/simulator/src) 目录下。电路的展示有两种页面，一种是[编辑页面](https://circuitverse.org/simulator)，对应的模板文件是 [app/views/simulator/edit.html.erb](https://github.com/CircuitVerse/CircuitVerse/blob/master/app/views/simulator/edit.html.erb) ；另一种将电路[嵌入在页面中](https://learn.circuitverse.org/docs/seq-ssi/latches.html)，对应的模板文件是 [app/views/simulator/embed.html.erb](https://github.com/CircuitVerse/CircuitVerse/blob/master/app/views/simulator/embed.html.erb) 。

编写 [webpack.config.js](./webpack.config.js) ，以及在模板的基础上进行修改得到 [index.html](./public/index.html) ，便可将 CircuitVerse 中的关键部分分解出来，独立于其后端运行。
