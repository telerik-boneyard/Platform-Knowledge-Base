function expandNavigation(url) {
    return function(data) {
        if (!data.node) {
            var segments = url.split("/");
            var page = segments[segments.length - 1];
            var treeview = this;        
            var dataSource = this.dataSource;
            var node;
            for (var idx = 0; idx < segments.length; idx++) {
                node = dataSource.get(segments[idx]);
                dataSource = node.children;
            }
            node.set("selected", true);
            this.unbind("dataBound", arguments.callee);
        }
    }
}

function navigationTemplate(root) {
    return function(data) {
        var item = data.item;
        var text = item.text;

        if (item.hasChildren) {
            return text;
        }

        var url = item.path;

        if (location.pathname.indexOf(".html") < 0) {
            url = url.replace(".html", "");
        }

        while (item = item.parentNode()) {
            url = item.path + "/" + url;
        }

        return '<a href="' + root + url + '">' + text + "</a>";
    }
}

function preventParentSelection(e) {
    if (this.dataItem(e.node).hasChildren) {
        e.preventDefault();
        this.toggle(e.node);
    }
}

function onSplitResizeV(e) {
  if (!this.appliesSizes) {
    this.appliesSizes = true;

    var splitter = this.element,
        splitterObject = splitter.data("kendoSplitter");

    if(splitter.width() < 992) {
      splitterObject.size(".pane--top", '96px');
    } else {
      splitterObject.size(".pane--top", '48px');
    }

    this.appliesSizes = false;
  }
}

function onSplitResizeH(e) {
  if (!this.appliesSizes) {
    this.appliesSizes = true;

    var splitter = this.element,
        splitterObject = splitter.data("kendoSplitter"),
        leftPane, leftPaneWidth;

    leftPane = splitter.find('.pane--left');
    if(leftPane) {
      leftPaneWidth = leftPane.width() > 0 ? leftPane.width() : '307px';
    }

    if(splitter.width() < 992) {
      splitterObject.options.panes[0].collapsible = true;

      splitterObject.collapse(".pane--left");
    } else {
      splitterObject.options.panes[0].collapsible = false;

      splitterObject.expand(".pane--left");
    }

    localStorage.setItem("leftPaneWidth", leftPaneWidth);
    this.appliesSizes = false;
  }
}

$(function () {
  var minWidth = '307px',
      maxWidth = '33%',
      width = '307px';

  if (localStorage && localStorage.getItem("leftPaneWidth")) {
    width = localStorage.getItem("leftPaneWidth");
  }

  $("#split-v").kendoSplitter({
    orientation: "vertical",
    panes: [
      { collapsible: false, size: '48px', min: '48px' },
      { collapsible: false }
    ],
    resize: onSplitResizeV
  });

  $("#split-h").kendoSplitter({
    panes: [
      { collapsible: false, resizable: true, size: width, min: minWidth, max: maxWidth },
      { collapsible: false, resizable: true }
    ],
    resize: onSplitResizeH
  });

    // show/hide footer
    $('.pane--center').on('scroll', function() {
      var offsetTop = $(this).scrollTop() + $(this).innerHeight(),
          innerHeight = $(this)[0].scrollHeight,
          buffer = 0;

      if( offsetTop >= innerHeight - buffer) {
        $(".foot").addClass("foot--show");
      } else {
        $(".foot").removeClass("foot--show");
      }
    });

    // toggle themes
    $('.switch').click(function() {
        var title = getActiveStyleSheet();

        title = (title === 'dark') ? 'light' : 'dark';

        setActiveStyleSheet(title);

        return false;
    });

    // expand nav on mobile
    $(".crumb__item--drawer").click(function(){
        $(".nav").toggleClass("nav--show");
    });

    $("pre[lang]").each(function() {
       if (this.parentNode.className.indexOf("k-content") >= 0) {
           return;
       }

       var langs = $(this).nextUntil(":not(pre)", "pre").add(this);

       var tabs = $.map(langs, function(item) {
          return $("<li>").text($(item).attr("lang"));
       });

       tabs[0].addClass("k-state-active");

       var tabstrip = $("<div>")
                       .insertBefore(this)
                       .append($("<ul>").append(tabs))
                       .append(langs);

       langs.wrap("<div>");

       tabstrip.kendoTabStrip({
           animation: false
       });
    });

    var codeSampleMapper = {
        'C#': 'cs',
        'VB.NET' : 'vb',
        'AppBuilder' : 'js',
        'JavaScript' : 'js',
        'C++' : 'cpp',
        'C' : 'c',
        'Objective-C' : 'm',
        'Java' : 'java',
    }

    // Enable prettyprint support. We need to map lang="JavaScript" to class="lang-js" in order to start proper pretty print lexer.
    $("pre").each(function(index){
        var langExtension = codeSampleMapper[$(this).attr('lang')];
        $(this).addClass('lang-' + langExtension).addClass("prettyprint");
    });

    prettyPrint();

    $("#markdown-toc").each(function() {
        var ul = $("<ul>");

        $("#page-article h2").each(function() {
            var h2 = $(this);

            if (!/fields|configuration|properties|events|methods/i.test(h2.text())) {
                return;
            }

            $("<li>")
                .addClass("section")
                .append(h2.children().clone())
                .appendTo(ul)
                .mouseenter(function() {
                    var children = $(this).children("ul");

                    if (!children.length) {
                        children = $("<ul>");

                        h2.nextUntil("h2").filter("h3").each(function(){
                            $("<li>").append($(this).children().clone()).appendTo(children);
                        });

                        if (children.children().length) {
                            children.appendTo(this);
                        }
                    }

                    children.show();
                })
                .mouseleave(function() {
                    $(this).children("ul").hide();
                });
        });

        ul.appendTo(this);
    });
});
