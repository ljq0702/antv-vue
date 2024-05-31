window.__EC_DOC_option_aria = {
  "show": {
    "desc": "<p>是否开启无障碍访问。开启后将生成 <code class=\"codespan\">aria-label</code> 属性。</p>\n"
  },
  "description": {
    "desc": "<p>默认采用算法自动生成图表描述，如果用户需要完全自定义，可以将这个值设为描述。如将其设置为 <code class=\"codespan\">&#39;这是一个展示了价格走势的图表&#39;</code>，则 <code class=\"codespan\">aria-label</code> 属性的值即为该字符串。</p>\n<p>这一配置项常用于展示单个的数据并不能展示图表内容时，用户显示指定概括性描述图表的文字。例如图表是一个包含大量散点图的地图，默认的算法只能显示数据点的位置，不能从整体上传达作者的意图。这时候，可以将 <code class=\"codespan\">description</code> 指定为作者想表达的内容即可。</p>\n"
  },
  "general": {
    "desc": "<p>对于图表的整体性描述。</p>\n"
  },
  "general.withTitle": {
    "desc": "<p>如果图表存在 <a href=\"#title.text\">title.text</a>，则采用 <code class=\"codespan\">withTitle</code>。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{title}</code>：将被替换为图表的 <a href=\"#title.text\">title.text</a>。</li>\n</ul>\n"
  },
  "general.withoutTitle": {
    "desc": "<p>如果图表不存在 <a href=\"#title.text\">title.text</a>，则采用 <code class=\"codespan\">withoutTitle</code>。</p>\n"
  },
  "series": {
    "desc": "<p>系列相关的配置项。</p>\n"
  },
  "series.maxCount": {
    "desc": "<p>描述中最多出现的系列个数。</p>\n"
  },
  "series.single": {
    "desc": "<p>当图表只包含一个系列时，采用的描述。</p>\n"
  },
  "series.single.prefix": {
    "desc": "<p>对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesCount}</code>：将被替换为系列个数，这里始终为 1。</li>\n</ul>\n"
  },
  "series.single.withName": {
    "desc": "<p>如果系列有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesName}</code>：将被替换为系列的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "series.single.withoutName": {
    "desc": "<p>如果系列没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "series.multiple": {
    "desc": "<p>当图表只包含多个系列时，采用的描述。</p>\n"
  },
  "series.multiple.prefix": {
    "desc": "<p>对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesCount}</code>：将被替换为系列个数。</li>\n</ul>\n"
  },
  "series.multiple.withName": {
    "desc": "<p>如果系列有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesName}</code>：将被替换为系列的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "series.multiple.withoutName": {
    "desc": "<p>如果系列没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "series.multiple.separator": {
    "desc": "<p>系列与系列之间描述的分隔符。</p>\n"
  },
  "series.multiple.separator.middle": {
    "desc": "<p>除了最后一个系列后的分隔符。</p>\n"
  },
  "series.multiple.separator.end": {
    "desc": "<p>最后一个系列后的分隔符。</p>\n"
  },
  "data": {
    "desc": "<p>数据相关的配置项。</p>\n"
  },
  "data.maxCount": {
    "desc": "<p>描述中每个系列最多出现的数据个数。</p>\n"
  },
  "data.allData": {
    "desc": "<p>当数据全部显示时采用的描述。这一配置项<strong>不会</strong>使得数据全部显示，可以通过将 <a href=\"#aria.data.maxCount\">aria.data.maxCount</a> 设置为 <code class=\"codespan\">Number.MAX_VALUE</code> 实现全部显示的效果。</p>\n"
  },
  "data.partialData": {
    "desc": "<p>当只有部分数据显示时采用的描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{displayCnt}</code>：将被替换为显示的数据个数。</li>\n</ul>\n"
  },
  "data.withName": {
    "desc": "<p>如果数据有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{name}</code>：将被替换为数据的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{value}</code>：将被替换为数据的值。</li>\n</ul>\n"
  },
  "data.withoutName": {
    "desc": "<p>如果数据没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{value}</code>：将被替换为数据的值。</li>\n</ul>\n"
  },
  "data.separator": {
    "desc": "<p>数据与数据之间描述的分隔符。</p>\n"
  },
  "data.separator.middle": {
    "desc": "<p>除了最后一个数据后的分隔符。</p>\n"
  },
  "data.separator.end": {
    "desc": "<p>最后一个数据后的分隔符。</p>\n<p>需要注意的是，通常最后一个数据后是系列的 <code class=\"codespan\">separator.end</code>，所以 <code class=\"codespan\">data.separator.end</code> 在大多数情况下为空字符串。</p>\n"
  }
}
