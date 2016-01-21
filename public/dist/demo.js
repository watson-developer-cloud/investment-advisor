if (typeof templates === 'undefined') { var templates = {}; }; templates.matchpanel = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Math, otherUser, similar_celebs, traits, undefined, user) {
buf.push("<div class=\"your-personality\"><div class=\"description\"><p><span class=\"me\">" + (jade.escape(null == (jade_interp = user.name) ? "" : jade_interp)) + "</span>, your Twitter personality is...</p></div></div><div class=\"row avatars-row\"><div class=\"col-sm-4 col-xs-12 me\"><div class=\"avatar text-right img-circle\"><div class=\"second-border img-circle\"><div class=\"third-border img-circle\"><img" + (jade.attr("src", user.image.replace("_normal","_400x400"), true, false)) + " class=\"me\"/></div></div></div><div class=\"text-center\"><p class=\"avatar-name\"><a" + (jade.attr("href", "https://twitter.com/" + (user.username) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = '@' + user.username) ? "" : jade_interp)) + "</a></p></div></div><div class=\"col-sm-4 text-center col-xs-12\"><div class=\"similarity\"><div class=\"left-bar\"><div></div></div><div class=\"right-bar\"><div></div></div><div class=\"similarity-percentage\"><h1 class=\"cel_distance\"></h1></div></div><h4 class=\"similar-to\">similar to<br/><span class=\"cel_name\"></span></h4></div><div class=\"col-sm-4 col-xs-12 celebrity\"><div class=\"avatar text-right img-circle\"><div class=\"second-border img-circle\"><div class=\"third-border img-circle\"><img class=\"cel_image celebrity\"/></div></div></div><div class=\"text-center\"><p class=\"avatar-name\"><a class=\"cel_username\"></a>");
// iterate traits
;(function(){
  var $$obj = traits;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var trait = $$obj[i];

buf.push("<div class=\"row trait-row\"><div class=\"col-md-3\"><p class=\"text-right\">" + (jade.escape((jade_interp = trait.left) == null ? '' : jade_interp)) + "</p></div><div class=\"col-md-3 col-md-push-6\"><p class=\"text-left\">" + (jade.escape((jade_interp = trait[1]) == null ? '' : jade_interp)) + "</p></div><div class=\"col-md-6 col-md-pull-3\"><div class=\"measuring-bar\"><div" + (jade.attr("style", 'left:calc(' + (user.traits[i]) + ' * 100 }%)', true, false)) + " class=\"point mep\"></div><div" + (jade.attr("id", 'trait_' + (i) + '', true, false)) + (jade.attr("style", 'left:calc(' + (otherUser.traits[i]) + ' * 100 }%)', true, false)) + " class=\"point celebrityp\"></div></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var trait = $$obj[i];

buf.push("<div class=\"row trait-row\"><div class=\"col-md-3\"><p class=\"text-right\">" + (jade.escape((jade_interp = trait.left) == null ? '' : jade_interp)) + "</p></div><div class=\"col-md-3 col-md-push-6\"><p class=\"text-left\">" + (jade.escape((jade_interp = trait[1]) == null ? '' : jade_interp)) + "</p></div><div class=\"col-md-6 col-md-pull-3\"><div class=\"measuring-bar\"><div" + (jade.attr("style", 'left:calc(' + (user.traits[i]) + ' * 100 }%)', true, false)) + " class=\"point mep\"></div><div" + (jade.attr("id", 'trait_' + (i) + '', true, false)) + (jade.attr("style", 'left:calc(' + (otherUser.traits[i]) + ' * 100 }%)', true, false)) + " class=\"point celebrityp\"></div></div></div></div>");
    }

  }
}).call(this);

buf.push("<div class=\"more-info\"><a href=\"javascript:void(0);\" class=\"how-it-works-link\">How'd we get this?</a></div><div class=\"social-media\"><div class=\"social-media-buttons\"><h6>Share this result:</h6><div class=\"twitter\"><a href=\"https://twitter.com/share\"" + (jade.attr("data-text", "" + (user.name) + "'s personality is " + (Math.round(similar_celebs[0].distance * 100)) + "% similar to " + (similar_celebs[0].user.name) + "'s! #CelebMatch #IBMWatson", true, false)) + " data-hashtags=\"PersonalityInsights\" class=\"twitter-share-button\">Tweet<!--td(style='padding-right: 10px;')--><!--  div.fb-share-button(data-href=\"#\", data-layout=\"button_count\")--></a></div></div></div></p></div></div></div>");}.call(this,"Math" in locals_for_with?locals_for_with.Math:typeof Math!=="undefined"?Math:undefined,"otherUser" in locals_for_with?locals_for_with.otherUser:typeof otherUser!=="undefined"?otherUser:undefined,"similar_celebs" in locals_for_with?locals_for_with.similar_celebs:typeof similar_celebs!=="undefined"?similar_celebs:undefined,"traits" in locals_for_with?locals_for_with.traits:typeof traits!=="undefined"?traits:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
}
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Exports a module. This will be replaced by RequireJS or
 * other dependency manager.
 */
function exportModule(moduleName, moduleFunction) {
  'use strict';
  if (window[moduleName] === undefined) {
    window[moduleName] = moduleFunction();
  } else {
    throw new Error('Module "' + moduleName + '" already loaded');
  }
}

/**
 * Global variables for storing templates.
 */
var templates = {};

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * Builds JSON CSS style respresentations into a
 * HTML appendable <style> block.
 *
 * Definitions:
 *   - An StyleDicionary is a JavaScript dictionary
 *     where each key is an identifier and each value
 *    is an object representing a set of properties.
 *    E.g. building this StyleDicionary:
 *
 *    ".userInfo p" : {
 *      "height" : "80px",
 *      "width"  : "80px"
 *    }
 *
 *  will output:
 *
 *  <style>
 *    .userInfo p {
 *      height: 80px;
 *      width: 80px;
 *    }
 *  </style>
 */
exportModule("JSONCSS", function () {

  'use strict';

  var self = {};

  /**
   * Modifies a CSS identifier or a set of identifiers (string)
   * preppending the containerId in order to limit the scope where
   * styles will be applied.
   * @param selectors An string with the CSS selectors.
   * @param containerId The container id.
   * @return The selectors preppended with the containerId.
   */
  function buildIdentifier(selectors, containerId) {
    return selectors.split(",").map(function (i) {
      return containerId + " " + i;
    }).join(",");
  }

  /**
   * Builds JSON CSS style respresentations into a
   * HTML appendable <style> block.
   * @param styleDicionary An styleDicionary.
   * @param containerId The id or class used to isolate the styles.
   */
  function buildStyle(styleDictionary, containerId) {
    containerId = containerId || "body";

    var
      output = "",
      style = styleDictionary;

    Object.keys(style).forEach(function (elementIdentifier) {
      output += buildIdentifier(elementIdentifier, containerId) + " {";
      var attributeValues = style[elementIdentifier];
      Object.keys(attributeValues).forEach(function (attribute) {
        output += attribute + " : " + attributeValues[attribute] + ";";
      });
      output += "}";
    });

    return "<style>" + output + "</style>";
  }

  /* API */

  self.buildStyle = buildStyle;

  return self;
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


exportModule("MatchComparator", function () {
  'use strict';

  var
    themes = ["default"],
    themesDef = {
      "default" : {
        ".matchComparison .userScore, .matchComparison .traitName" : {
          "font-size" : "0.8em"
        },
        ".matchComparison .user" : {
          "padding-top" : "15px"
        },
        ".matchComparison .user img" : {
          "width" : "100%",
          "max-width" : "128px",
          "min-width" : "80px"

        }
      }
    },
    klass = function (containerId, limit, renameDictionary, themeName) {

      var self = {
        containerId : containerId,
        container   : $("#" + containerId),
        themeName : themeName || 'default',
        renameDictionary : renameDictionary || {},
        limit : limit
      };

      function getTheme(themeName) {
        return JSONCSS.buildStyle(themesDef[themeName], '#' + self.containerId);
      }

      function toPercentage(value) {
        return parseFloat((value * 100).toFixed(2));
      }

      function getTraitName(trait) {
        return self.renameDictionary[trait.name] ? self.renameDictionary[trait.name] : trait.name;
      }

      function buildComparison(comparedTraits, subject, scoredCandidate, includeHeader, classes) {
        includeHeader = includeHeader === undefined ? true : includeHeader;
        classes = classes || [];

        var
          parts = [],
          traitId,
          i;

        if (includeHeader) {
          parts.push('<h4 style="text-align:center">', toPercentage(scoredCandidate.score), '% match</h4>');
        }

        for (i = 0; i < comparedTraits.length; i = i + 1) {
          traitId = comparedTraits[i];
          parts = parts.concat([
            '<div class="row scores ' + classes.join(" ") + '">',
            '   <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="text-align:left">',
            '     <span class="userScore">', toPercentage(subject.fullTraits[traitId].percentage), '%</span>',
            '   </div>',
            '   <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" style="text-align:center">',
            '     <span class="traitName">', getTraitName(subject.fullTraits[traitId]), '</span>',
            '   </div>',
            '   <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="text-align:right">',
            '     <span class="userScore">', toPercentage(scoredCandidate.data.fullTraits[traitId].percentage), '%</span>',
            '   </div>',
            '</div>'
          ]);
        }
        return parts.join("");
      }

      function buildUser(user) {
        return [
          '<div><image src="', user.image, '"/></div>',
          '<h6 class="displayName">', user.name, '</h6>'
        ].join("");
      }

      function buildRow(comparedTraits, subject, scoredCandidate) {
        return [
          '<h4 class="hidden-lg hidden-md hidden-sm" style="text-align:center">', toPercentage(scoredCandidate.score), '% match</h4>',
          '<div class="row">',
          '   <div class="user col-lg-3 col-md-3 col-sm-3 col-xs-6" style="text-align: center">',
          buildUser(subject),
          '   </div>',
          '   <div class="col-lg-6 col-md-6 col-sm-6 hidden-xs">',
          buildComparison(comparedTraits, subject, scoredCandidate),
          '   </div>',
          '   <div class="user col-lg-3 col-md-3 col-sm-3 col-xs-6" style="text-align: center">',
          buildUser(scoredCandidate.data),
          '   </div>',
          '</div>',
          buildComparison(
            comparedTraits,
            subject,
            scoredCandidate,
            false,
            ["hidden-lg", "hidden-md", "hidden-sm"]
          )
        ].join("");
      }

      function buildRows(comparedTraits, subject, scoredCandidates) {
        var
          i,
          parts = [],
          rowLimit = self.limit ? Math.min(self.limit, scoredCandidates.length) : scoredCandidates.length;

        for (i = 0; i < rowLimit; i = i + 1) {
          parts.push(buildRow(comparedTraits, subject, scoredCandidates[i]));
        }

        return parts.join("");
      }

      function clean() {
        self.container.children().remove();
      }

      function show(comparedTraits, subject, matchResult) {
        var html = buildRows(comparedTraits, subject, matchResult.scores);
        clean();
        self.container.append(getTheme(self.themeName));
        self.container.append('<div class="matchComparison">' + html + '</div>');
      }

      self.clean = clean;
      self.show = show;

      return self;
    };

  klass.themes = themes;

  return klass;

});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Find matches for a given subject.
 *
 * Definitions:
 *   > Traits: Denotes a map String -> Value. Each key is a trait name, each value is
 *       the numeric score for the trait.
 *   > ObjectWithTraits: is an object that includes a field called 'traits' of type Traits
 *   > SimilarityFunction :: (ObjectWithTraits, ObjectWithTraits) -> float
 *   > BiasFunction :: (Traits, Traits) -> float
 *   > MatchResult :: { score : float, data: ObjectWithTraits }
 *
 * @param comparedTraits A list of trait names to be compared.
 * @param options, a dict with:
 *          -  similarityFunction (Optional) A SimilarityFunction.
 *          -  biasFunction (Optional) A BiasFunction.
 */
exportModule("MatchFinder", function () {
  'use strict';

  var klass = function (comparedTraits, options) {

    var self = {
      comparedTraits : comparedTraits,
      options : options || {}
    };

    self.resultSortFunction = function (a, b) {
      return b.score - a.score;
    };

    /**
     * The default similarity calculus.
     * @param subjectTraits
     * @param targetTraits
     * @return The similarity normalized percentage.
     */
    self.defaultSimilarity = function (subjectTraits, targetTraits) {
      var
        i,
        score = 0,
        count = 0,
        traitName;

      for (i = 0; i < self.comparedTraits.length; i = i + 1) {
        traitName = self.comparedTraits[i];
        if (targetTraits[traitName] !== undefined && subjectTraits[traitName] !== undefined) {
          score += Math.pow(targetTraits[traitName] - subjectTraits[traitName], 2);
          count = count + 1;
        } else {
          console.error("[ERROR] Trait " + traitName + " was not defined on both " +
                        "subject and target on similarity comparation: ignoring.",
                        {"Subject Traits" : subjectTraits,
                         "Target Traits" : targetTraits });
        }
      }

      if (self.options.biasFunction) {
        score += self.options.biasFunction(targetTraits, subjectTraits);
        count = count + 1;
      }

      score = 1 - Math.sqrt(score / count);

      if (isNaN(score)) {
        console.error("[ERROR] Could not calculate similarity. Returning '-1.00' as result.");
        score = -1.00;
      }
      return score;
    };

    /**
     * Calculates the similarity between two trait lists.
     * @param subjectTraits
     * @param targetTraits
     * @return The similarity normalized percentage
     */
    self.calculateSimilarity = self.options.similarityFunction || self.defaultSimilarity;

    /**
     * Calculate a match result.
     * @param subject An ObjectWithTraits
     * @param target An ObjectWithTraits
     * @return The MatchResult.
     */
    self.calculateMatch = function (subject, target) {
      return {
        score : self.calculateSimilarity(subject.traits, target.traits),
        data  : target
      };
    };


    /**
     * Finds the best match for a subject and a set of targets.
     * @param subject An ObjectWithTraits
     * @param target An ObjectWithTraits
     * @return The best result together with the list of matches:
     *         { match: matchResult, scores: [matchResult] }
     */
    self.findMatch = function (subject, targets) {
      var
        matchResult,
        bestMatch = self.calculateMatch(subject, targets[0]),
        matchResults = [bestMatch];
      targets = targets.slice(1);

      targets.forEach(function (target) {
        matchResult = self.calculateMatch(subject, target);
        matchResults.push(matchResult);
        if (matchResult.score > bestMatch.score) {
          bestMatch = matchResult;
        }
      });

      matchResults.sort(self.resultSortFunction);

      return {
        match   : bestMatch,
        scores  : matchResults
      };
    };

    return self;
  };

  return klass;
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Renders the sunburst visualization. The parameter is the tree as returned
 * from the Personality Insights JSON API.
 */
exportModule("PersonalitySunburstChart", function () {
  'use strict';

  var klass = function (containerId, width, height, visualizationWidth, visualizationHeight) {

    var self = {
      containerId : containerId,
      container   : $('#' + containerId),
      d3Container : d3.select('#' + containerId),

      width : width, dimW : width,
      height : height, dimH : height,

      visualizationWidth : visualizationWidth || "100%",
      visualizationHeight : visualizationHeight || "100%",
      d3vis : undefined,
      touchDiv : undefined,
      data : undefined,
      id : 'SystemUWidget',
      COLOR_PALLETTE: ['#1b6ba2', '#488436', '#d52829', '#F53B0C', '#972a6b', '#8c564b', '#dddddd'],
      loadingDiv: 'dummy',
    };

    /**
     * Renders the sunburst visualization. The parameter is the tree as returned
     * from the Personality Insights JSON API.
     * It uses the arguments widgetId, widgetWidth, widgetHeight and personImageUrl
     * declared on top of this script.
     */
    function showVizualization(theProfile, personImageUrl) {
      console.log('showVizualization()');

      var widgetId = self.containerId;

      $('#' + widgetId).empty();
      var d3vis = d3.select('#' + widgetId).append('svg:svg');
      var widget = {
        d3vis: d3vis,
        data: theProfile,
        loadingDiv: 'dummy',
        switchState: function() {
          console.log('[switchState]');
        },
        _layout: function() {
          console.log('[_layout]');
        },
        showTooltip: function() {
          console.log('[showTooltip]');
        },
        id: 'SystemUWidget',
        COLOR_PALLETTE: ['#1b6ba2', '#488436', '#d52829', '#F53B0C', '#972a6b', '#8c564b', '#dddddd'],
        expandAll: function() {
          this.vis.selectAll('g').each(function() {
            var g = d3.select(this);
            if (g.datum().parent && // Isn't the root g object.
              g.datum().parent.parent && // Isn't the feature trait.
              g.datum().parent.parent.parent) { // Isn't the feature dominant trait.
              g.attr('visibility', 'visible');
            }
          });
        },
        collapseAll: function() {
          this.vis.selectAll('g').each(function() {
            var g = d3.select(this);
            if (g.datum().parent !== null && // Isn't the root g object.
              g.datum().parent.parent !== null && // Isn't the feature trait.
              g.datum().parent.parent.parent !== null) { // Isn't the feature dominant trait.
              g.attr('visibility', 'hidden');
            }
          });
        },
        addPersonImage: function(url) {
          if (!this.vis || !url) {
            return;
          }
          var icon_defs = this.vis.append('defs');
          var width = this.dimW,
            height = this.dimH;

          // The flower had a radius of 640 / 1.9 = 336.84 in the original, now is 3.2.
          var radius = Math.min(width, height) / 16.58; // For 640 / 1.9 -> r = 65
          var scaled_w = radius * 2.46; // r = 65 -> w = 160

          var id = 'user_icon_' + this.id;
          icon_defs.append('pattern')
            .attr('id', id)
            .attr('height', 1)
            .attr('width', 1)
            .attr('patternUnits', 'objectBoundingBox')
            .append('image')
            .attr('width', scaled_w)
            .attr('height', scaled_w)
            .attr('x', radius - scaled_w / 2) // r = 65 -> x = -25
            .attr('y', radius - scaled_w / 2)
            .attr('xlink:href', url)
            .attr('opacity', 1.0)
            .on('dblclick.zoom', null);
          this.vis.append('circle')
            .attr('r', radius)
            .attr('stroke-width', 0)
            .attr('fill', 'url(#' + id + ')');
        }
      };

      widget.dimH = self.height;
      widget.dimW = self.width;
      widget.d3vis.attr('width', self.visualizationWidth).attr('height', self.visualizationHeight);
      widget.d3vis.attr('viewBox', '0 -30 ' + widget.dimW + ', ' + widget.dimH);
      renderChart.call(widget);
      widget.expandAll.call(widget);
      if (personImageUrl)
        widget.addPersonImage.call(widget, personImageUrl);
    }

    self.clean = function () {
      self.container.empty();
    };

    self.show = showVizualization;

    return self;
  };

  return klass;
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

d3.svg.singleArc = function() {
  var radius = d3_svg_singleArcRadius,
    startAngle = d3_svg_singleArcStartAngle,
    endAngle = d3_svg_singleArcEndAngle,
    d3_svg_arcOffset = -Math.PI / 2;

  function arc() {
    var r0 = radius.apply(this, arguments),
      a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset,
      a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset,
      da = (a1 < a0 && (da = a0, a0 = a1, a1 = da), a1 - a0),
      df = da < Math.PI ? '0' : '1',
      c0 = Math.cos(a0),
      s0 = Math.sin(a0),
      c1 = Math.cos(a1),
      s1 = Math.sin(a1);
    return 'M' + r0 * c0 + ',' + r0 * s0 + 'A' + r0 + ',' +
      r0 + ' 0 ' + df + ',1 ' + r0 * c1 + ',' + r0 * s1;
  }

  arc.radius = function(v) {
    if (!arguments.length) return radius;
    radius = d3.functor(v);
    return arc;
  };

  arc.startAngle = function(v) {
    if (!arguments.length) return startAngle;
    startAngle = d3.functor(v);
    return arc;
  };

  arc.endAngle = function(v) {
    if (!arguments.length) return endAngle;
    endAngle = d3.functor(v);
    return arc;
  };

  arc.centroid = function() {
    var r = radius.apply(this, arguments),
      a = (startAngle.apply(this, arguments) +
        endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
    return [Math.cos(a) * r, Math.sin(a) * r];
  };

  return arc;
};

function d3_svg_singleArcRadius(d) {
  return d.radius;
}

function d3_svg_singleArcStartAngle(d) {
  return d.startAngle;
}

function d3_svg_singleArcEndAngle(d) {
  return d.endAngle;
}

var visutil = {
  isLocatedBottom: function(d) {
    // Before fixing #128: return (d.x>Math.PI/2&&(d.x+d.dx)<Math.PI*5/3);
    var bottom = (d.x > Math.PI / 2 && (d.x + d.dx) < 5.0);
    return bottom;
  },

  arc: function(start, end, r0) {
    var c0 = Math.cos(start),
      s0 = Math.sin(start),
      c1 = Math.cos(end),
      s1 = Math.sin(end);
    return 'M' + r0 * c0 + ',' + r0 * s0 + 'A' + r0 + ',' + r0 + ' 0' + ' 0 , 0 ' + r0 * c1 + ',' + r0 * s1;
  }
};

var renderChart = function() {
  if (!this.data) {
    this.showError();
    return;
  }
  if (this.vis) {
    console.error('Cannot render: Already rendered (this.vis)');
    return;
  }

  var _this = this;
  var dummyData = false;
  var tree = this.data ? (this.data.tree ? this.data.tree : this.data) : null;
  if (!tree || !tree.children || !tree.children.length) {
    return;
  }

  var _widget = this;
  if (!this.loadingDiv) {
    alert('Widget is not fully initialized, cannot render BarsWidget');
    return;
  }

  this.switchState(1);
  this._layout();

  function stash(d) {
    d.x0 = d.x;
    d.dx0 = d.dx;
    if (!d.hasOwnProperty('size') && !d.hasOwnProperty('children')) d.size0 = 1;
    else d.size0 = d.size;
    if (d.depth === 0 || d.depth === 1) {
      d.expand = 1;
    } else {
      d.expand = 0;
    }
  }

  function expandOrFoldSector(d) {
    if (d.expand !== null && d.depth > 1) {
      //ignore root node and first level sectors
      if (d.expand === 0) {
        if (d.children) d3.select(this).attr('opacity', 1);
        g.filter(function(a) {
            if (a.parent)
              return a.parent.id === d.id;
          })
          .attr('visibility', 'visible');
        d.expand = 1;
      } else {
        //if the sector is expanded
        if (d.children)
          d3.select(this).attr('opacity', 1);
        hideSector(d);

      }
    }
  }

  function hideSector(d) {
    g.filter(function(a) {
        if (a.parent)
          return a.parent.id === d.id;
      })
      .attr('visibility', 'hidden')
      .attr('opacity', 1)
      .each(function(a) {
        if (a.children)
          hideSector(a);
      });
    d.expand = 0;
  }


  var sector_right_pad = dummyData ? 0.0001 : 0.04 * 2 * Math.PI,
    sector_bottom_pad = 5.0;
  //Render a sector with two adjcent arcs in a style of odometor
  function twoArcsRender(radius) {
    // For each small multiple
    function twoArcs(g) {
      g.each(function(d) {
        g = d3.select(this);
        g.selectAll('path').remove();
        g.selectAll('text').remove();

        var right_pad = d.depth > 0 ? sector_right_pad / (3 * d.depth) : sector_right_pad;

        var percentage = d.percentage,
          percentage2 = 1; //for percentage sentiment data. it is the percentage of positive+netural

        //if percentage is null, then give 1
        if (percentage === null) percentage = 1;
        if (d.percentage_lbl === null) d.percentage_lbl = '';
        var label, label_name = d.name,
          label_percentage = (d.percentage === null || isNaN(d.percentage) ? '' : ' (' + (d.percentage * 100).toFixed(0) + '%)');

        if (d.depth === 1) label = d.name;
        if (d.depth > 1) {
          if (d.id === 'sbh_dom' || d.id === 'sbh_parent'){
            label = d.name;
          } else if (d.category === 'values') {
            label = d.name + ((percentage * 100).toFixed(0) === 'NaN' || isNaN(percentage) ? '' : ' (' + (percentage * 100).toFixed(0) + '%)');
          } else {
            if (percentage >= 1) {
              percentage = 0.99;
              console.log('Percentage is over 1!' + d.name);
            } else if (percentage <= -1) {
              percentage = -0.99;
              console.log('Percentage is below -1!' + d.name);
            }
            label = d.name + ((percentage * 100).toFixed(0) === 'NaN' || isNaN(percentage) ? '' : ' (' + (percentage * 100).toFixed(0) + '%)');

            if ((Math.round(parseFloat(percentage) * 100) / 100) === 0) {
              label = d.name;
            }
          }
        }

        //for request without any result
        if (d.name === '') {
          percentage = 0;
          label = '';
        }

        //special render perception sector
        if (d.perc_neu !== null && ((d.percentage + d.perc_neu) * d.dx < d.dx - sector_right_pad / (3 * d.depth))) {
          percentage2 = d.percentage + d.perc_neu;

          d3.svg.arc()
            .startAngle(function(d) {
              return d.x + Math.abs(percentage2) * d.dx;
            }) //x:startangle,
            .endAngle(function(d) {
              return d.x + d.dx - sector_right_pad / (3 * d.depth);
            }) //dx: endangle,
            .innerRadius(function(d) {
              return sector_bottom_pad + d.y;
            })
            .outerRadius(function(d) {
              return d.y + d.dy;
            });

          right_pad = 0;
        }


        var arc1_extend = (Math.abs(percentage) * d.dx - right_pad) > 0 ? (Math.abs(percentage) * d.dx - right_pad) : 0;
        //Regular renders
        var arc1 = d3.svg.arc()
          .startAngle(function(d) {
            return d.x;
          }) //x:startangle,
          .endAngle(function(d) {
            return d.x + arc1_extend;
          }) //dx: endangle,
          .innerRadius(function(d) {
            return sector_bottom_pad + d.y;
          })
          .outerRadius(function(d) {
            return d.y + d.dy;
          });

        var arc2 = d3.svg.arc()
          .startAngle(function(d) {
            return d.x + arc1_extend;
          }) //x:startangle,
          .endAngle(function(d) {
            return d.x + Math.abs(percentage2) * d.dx - right_pad;
          }) //dx: endangle,
          .innerRadius(function(d) {
            return sector_bottom_pad + d.y;
          })
          .outerRadius(function(d) {
            return d.y + d.dy;
          });

        //used for label path
        var arc_for_label, arc_for_label_number;
        var arc_label_radius, arc_label_number_radius;
        if (d.depth === 1 && visutil.isLocatedBottom(d)) {
          arc_label_radius = d.y + d.dy - (d.y + d.dy - sector_bottom_pad - d.y) / 6;
          arc_label_number_radius = d.y + d.dy - (d.y + d.dy - sector_bottom_pad - d.y) / 8;
        } else {
          arc_label_radius = sector_bottom_pad + d.y + (d.y + d.dy - sector_bottom_pad - d.y) * 5 / 12;
          arc_label_number_radius = d.y + d.dy - (d.y + d.dy - sector_bottom_pad - d.y) / 7;
        }


        var bottom = visutil.isLocatedBottom(d);
        if (bottom) {
          //special reversed label for bottom data
          arc_for_label = visutil.arc(d.x + d.dx - right_pad - Math.PI / 2, d.x - Math.PI / 2, arc_label_radius);
          arc_for_label_number = visutil.arc(d.x + d.dx - right_pad - Math.PI / 2, d.x - Math.PI / 2, arc_label_number_radius);
        } else {

          arc_for_label = d3.svg.singleArc()
            .startAngle(function(d) {
              return d.x;
            })
            .endAngle(function(d) {
              return d.x + d.dx - right_pad;
            })
            .radius(function(d) {
              return d.depth === 1 ? d.y + d.dy - (d.y + d.dy - sector_bottom_pad - d.y) / 3 : sector_bottom_pad + d.y + (d.y + d.dy - sector_bottom_pad - d.y) * 3 / 5;
            });

          arc_for_label_number = d3.svg.singleArc()
            .startAngle(function(d) {
              return d.x;
            })
            .endAngle(function(d) {
              return d.x + d.dx - right_pad;
            })
            .radius(function(d) {
              return d.depth === 1 ? d.y + d.dy - (d.y + d.dy - sector_bottom_pad - d.y) / 3 : sector_bottom_pad + d.y + (d.y + d.dy - sector_bottom_pad - d.y) / 5;
            });

        }

        d.coloridx = 0;

        if (d.depth === 1 || d.depth === 0) {
          d.coloridx = d.id;
        } else {
          d.coloridx = d.parent.coloridx;
        }

        var arc1color;
        if (d.coloridx === 'personality') arc1color = _widget.COLOR_PALLETTE[0];
        if (d.coloridx === 'needs') arc1color = _widget.COLOR_PALLETTE[1];
        if (d.coloridx === 'values') arc1color = _widget.COLOR_PALLETTE[2];
        if (d.coloridx === 'sr') arc1color = _widget.COLOR_PALLETTE[3];
        if (d.coloridx === 'sbh') arc1color = _widget.COLOR_PALLETTE[4];
        if (d.coloridx === 'blank') arc1color = _widget.COLOR_PALLETTE[6];

        arc1color = d.depth < 2 ? arc1color : d3.rgb(arc1color).brighter(Math.pow(1.1, d.depth * 1.5));

        var strokecolor = d3.rgb(arc1color).darker(0.8);


        if (!d.children && d.id !== 'srasrt' && d.id !== 'srclo' && d.id !== 'srdom') {
          label = d.name;
          percentage = d.percentage;
          var bar_length_factor = 10 / (d.depth - 2);

          //different bar_length factors
          if (d.parent)
            if (d.parent.parent) {

              if (d.parent.parent.id === 'needs' || d.parent.parent.id === 'values') {
                bar_length_factor = 1;
              }

              if (d.parent.parent.id === 'sbh') {
                //alert(d.name);
                bar_length_factor = 0;
                if (percentage > 1) {
                  percentage = Math.random();
                  d.percentage = percentage;
                }
              }
              if (d.parent.parent.parent)
                if (d.parent.parent.parent.id === 'personality') bar_length_factor = 1;

            } else {
              console.log(d.name + ': Parent is null!');
            }



          var inner_r = sector_bottom_pad + d.y,
            out_r;


          out_r = sector_bottom_pad + d.y + bar_length_factor * Math.abs(percentage) * d.dy;

          if (d.percentage_lbl === 'Low') out_r = sector_bottom_pad + d.y + bar_length_factor * 0.2 * d.dy;


          var _bar = d3.svg.arc()
            .startAngle(d.x)
            .endAngle(d.x + d.dx)
            .innerRadius(inner_r)
            .outerRadius(out_r); // Draw leaf arcs


          g.append('path')
            .attr('class', '_bar')
            .attr('d', _bar)
            .style('stroke', '#EEE')
            .style('fill', function(d) {
              return d3.rgb(arc1color).darker(0.5);
            });



          //add label;

          var rotate = 0,
            lbl_anchor = 'start',
            dy_init = 0;

          label = d.name;

          if (d.x > Math.PI) {
            rotate = d.x * 180 / Math.PI + 90;
            lbl_anchor = 'end';
            dy_init = -d.dx * 20 * Math.PI;
          } else {
            rotate = d.x * 180 / Math.PI - 90;
            lbl_anchor = 'start';
            dy_init = 5 + d.dx * 20 * Math.PI;
          }

          var max_label_size = 13,
            lable_size = 10;

          if ((7.5 + 15 * Math.PI * d.dx) > max_label_size) {
            lable_size = max_label_size;
          }

          label = label + ((percentage * 100).toFixed(0) === 'NaN' || isNaN(percentage) ? '' : ' (' + (percentage * 100).toFixed(0) + '%)');


          g.append('text')
            .attr('dy', dy_init)
            .attr('class', 'sector_leaf_text')
            .attr('font-size', lable_size)
            .attr('text-anchor', lbl_anchor)
            .attr('transform', 'translate(' + (out_r + 5) * Math.sin(d.x) + ',' + (-(out_r + 5) * Math.cos(d.x)) + ') ' + 'rotate(' + rotate + ')')
            .text(label);

        } else {
          //non-bar/non-leaf sector
          g.append('path')
            .attr('class', 'arc1')
            .attr('d', arc1)
            .style('stroke', strokecolor) // was: arc1color
            .style('fill', arc1color);


          g.append('path')
            .attr('class', 'arc2')
            .attr('d', arc2)
            .style('stroke', strokecolor) // was: arc1color
            .style('fill', arc1color)
            .style('fill-opacity', 0.15);

          //draw label:
          //path used for label
          g.append('path')
            .attr('class', 'arc_for_label')
            // NOTE HB: adding widget.id so we to avoid name clashing
            .attr('id', function(d) {
              return _this.id + '_' + d.id + '.arc_for_label';
            })
            .attr('d', arc_for_label)
            .style('stroke-opacity', 0)
            .style('fill-opacity', 0);


          //add label
          g.append('text')
            .attr('class', 'sector_label')
            .attr('visibility', function(d) {
              return d.depth === 1 ? 'visible' : null;
            })
            .attr('class', 'sector_nonleaf_text')
            .append('textPath')
            .attr('class', 'sector_label_path')
            .attr('position-in-sector', d.depth <= 1 ? 'center' : (bottom ? 'inner' : 'outer')) // Since both text lines share the same 'd', this class annotation tells where is the text, helping to determine the real arc length
            .attr('font-size', function(d) {
              return 30 / Math.sqrt(d.depth + 1);
            })
            // NOTE HB: Why do we need this xlink:href? In any case, adding widget.id so we to avoid name clashing
            .attr('xlink:href', function(d) {
              return '#' + _this.id + '_' + d.id + '.arc_for_label';
            })
            .text(label_name);

          //draw label number
          //path used for label number
          if (d.depth > 1) {
            g.append('path')
              .attr('class', 'arc_for_label_number')
              // NOTE HB: adding widget.id so we to avoid name clashing
              .attr('id', function(d) {
                return _this.id + '_' + d.id + '.arc_for_label_number';
              })
              .attr('d', arc_for_label_number)
              .style('stroke-opacity', 0)
              .style('fill-opacity', 0);


            //add label
            g.append('text')
              .attr('class', 'sector_label_number ')
              .attr('visibility', function(d) {
                return d.depth === 1 ? 'visible' : null;
              })
              //.attr('font-family','sans-serif')
              .attr('class', 'sector_nonleaf_text')
              //.attr('fill', d3.rgb(arc1color).darker(2))
              .append('textPath')
              .attr('class', 'sector_label_number_path')
              .attr('position-in-sector', bottom ? 'outer' : 'inner') // Since both text lines share the same 'd', this class annotation tells where is the text, helping to determine the real arc length
              .attr('font-size', function(d) {
                return 10;
              })
              // NOTE HB: Why do we need this xlink:href? In any case, adding widget.id so we to avoid name clashing
              .attr('xlink:href', function(d) {
                return '#' + _this.id + '_' + d.id + '.arc_for_label_number';
              })
              .text(label_percentage);
          }


        }
      });

    }

    return twoArcs;
  }

  function updateLabelLayout() {
    updateLabelLayoutWithClass('.sector_label_path');
    updateLabelLayoutWithClass('.sector_label_number_path');
  }

  function updateLabelLayoutWithClass(_class) {
    var max_font_size_base = 16;

    _this.d3vis.selectAll(_class).each(function(d) {
      var d3this = d3.select(this);
      var curNd = d3this.node();
      var text = d3this.text();
      if (text && text.length > 0) {
        var position = d3.select(this).attr('position-in-sector'); // 'inner' or 'outer'
        var frac = position === 'center' ? 0.5 : position === 'outer' ? 2 / 3 : 1 / 3;
        var sector_length = (d.y + d.dy * frac) * d.dx;
        var text_length = curNd.getComputedTextLength(); //+margin;
        var cur_font_size = d3.select(this).attr('font-size');
        var new_font_size = cur_font_size * sector_length / text_length;

        if (new_font_size > max_font_size_base / (0.4 * d.depth + 0.6)) {
          new_font_size = max_font_size_base / (0.4 * d.depth + 0.6);
        }

        d3.select(this).attr('font-size', new_font_size);
        //set new offset:
        d3.select(this).attr('startOffset', (sector_length - curNd.getComputedTextLength()) / 2);
      }
    });
  }

  var width = this.dimW,
    height = this.dimH;
  // The flower had a radius of 640 / 1.9 = 336.84 in the original.
  var radius = Math.min(width, height) / 3.2;
  var sector = twoArcsRender(radius);

  // Center the graph of 'g'
  var vis = this.d3vis.append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + height / 2 + ')')
    .append('g');
  this.vis = vis;

  var partition = d3.layout.partition()
    .sort(null)
    .size([2 * Math.PI, radius])
    .value(function(d) {
      if (!d.hasOwnProperty('size') && !d.hasOwnProperty('children')) return 1;
      return d.size;
    });

  var profile = tree;

  var g = vis.data([profile]).selectAll('g')
    .data(partition.nodes)
    .enter().append('g')
    .attr('class', 'sector')
    .attr('visibility', function(d) {
      return d.depth === 2 || d.forceVisible ? 'visible' : 'hidden';
    }) // hide non-first level rings
    .call(sector)
    .each(stash)
    .on('click', expandOrFoldSector)
    .on('mouseover', function(d) {
      _this.showTooltip(d, this);
    })
    .on('mouseout', function() {
      _this.showTooltip();
    });

  // Shift the text pieces clockwise (to somewhat center them).
  updateLabelLayout();
};

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Anonymous function, to use as a wrapper
 */
exportModule("PostGallery", function () {
  'use strict';

  var
    themes = ["default"],
    themesDef = {
      "default" : {
        ".gallery-post" : {
          "padding" : "8px 12px 0px 12px",
          "height" : "88px"
        },
        ".gallery-post-content" : {
        },
        ".gallery-post:hover" : {
          "background" : "#e4e4e4"
        },
        ".text-content" : {
          "margin-left" : "60px"
        },
        ".displayName, .description" : {
          "margin-left" : "0px"
        },
        ".displayName" : {
          "font-weight" : "bold",
          "font-size": "0.8em"
        },
        ".description" : {
          "font-size": "0.675em",
          "font-weight" : "100"
        },
        ".userImage" : {
          "margin-top" : "4px",
          "width" : "55px",
          "height" : "55px",
          "float" : "left"
        }
      }
    },
    klass = function (containerId, themeName) {
      var self = {
          containerId : containerId,
          container   : $("#" + containerId),
          themeName   : themeName || "default"
        };

      self.galleryPostClasses = "col-lg-4 col-md-6 col-xs-12";

      self.getTheme = function (themeName) {
        return JSONCSS.buildStyle(themesDef[themeName], '#' + self.containerId);
      };

      function shrink(text, count) {
        var shrinked = text;
        if (text.length > count) {
          shrinked = text.substring(0, Math.min(count, text.length)).trim() + "...";
        }
        return shrinked;
      }


      self.buildGalleryPost = function (post, index) {
        return [
          '<div id="gallery-post-' + index + '" data-index="' + index + '" class="gallery-post ' + self.galleryPostClasses + '">',
          ' <div class="gallery-post-content" style="height: 100%; overflow: auto">',
          '   <img class="userImage" src="' + post.imageUrl + '"/>',
          '   <div class="text-content">',
          '     <div class="displayName">' + post.displayName + '</div>',
          '     <div class="description">' + shrink(post.description, 140) + '</div>',
          '   </div>',
          ' </div>',
          '</div>'
        ].join("");
      };

      self.clean = function () {
        self.container.children().remove();
      };

      self.show = function (posts) {
        self.clean();
        self.container.append(self.getTheme(self.themeName));
        posts.forEach(function (post, index) {
          self.container.append(self.buildGalleryPost(post, index));
        });
      };

      self.getSelectedPost = function () {
        return self.posts[self.container.find(".gallery-post.selected").attr("data-index")];
      };

      return self;
    };

  klass.themes = themes;

  return klass;
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


exportModule("ProfileUtils", function () {
  'use strict';

  var self = {};

  self.getTraitsArray = function (profile, traitNames) {
    return self.traitsDictionaryToArray(self.getTraits(profile), traitNames);
  };

  self.traitsDictionaryToArray = function (traitsDict, traitNames) {
    traitNames = traitNames || Object.keys(traitsDict);
    var traitsArray = [];

    traitNames.forEach(function (traitName) {
      traitsArray.push(traitsDict[traitName]);
    });

    return traitsArray;
  };

  self.getTraits = function (profile, fullTraitData) {
    var
      traits = {},
      fullTraitData = (typeof fullTraitData === 'undefined') ? false : fullTraitData, // Default: False
      addTrait = function (trait) {
        traits[trait.id] = fullTraitData ? trait : trait.percentage;
      };

    function flatten_level(level, tree) {
      if (level > 0 && (!tree.children || level !== 2)) {
        addTrait(tree);
      }

      if (tree.children && tree.id !== "sbh") {
        tree.children.forEach(flatten_level.bind(this, level + 1));
      }
    }

    flatten_level(0, profile.tree);

    return traits;
  };

  return self;
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Anonymous function, to use as a wrapper
 */
exportModule("TradeoffAnalyticsTable", function () {
  'use strict';

  return function (showLegend) {

    var self = {
      legend: showLegend
    };

    function createDom(elem, map, parent, classes) {
      classes = classes || [];
      var element = $('<' + elem + ' class="' + classes.join(" ") + '"></' + elem + '>');

      function applyOne(key, value) {
        if ($.isArray(value) && $.isArray(value[0])) {
          $.each(value, function (_, params) {
            element[key].apply(element, params);
          });
        } else if ($.isArray(value)) {
          element[key].apply(element, value);
        } else {
          element[key](value);
        }
      }

      $.each(map, applyOne);
      parent.append(element);
      return element;
    }

    function createTable(problem, parent) {
      parent.addClass("tradeoffAnalyticsTable");
      var
        table = createDom('table', {}, parent, ["table"]),
        thead = createDom('thead', {}, table),
        tbody = createDom('tbody', {}, table),
        tr, th, iconaddClass;

      // Setup header style
      //thead.css("user-select","none");
      //thead.css("pointer-events","none");

      tr = createDom('tr', {}, thead);

      createDom('th', {
        html: 'Id'
      }, tr);

      createDom('th', {
        html: 'Name'
      }, tr);

      problem.columns.forEach(function (c) {

        th = createDom('th', {
          addClass: c.is_objective ? c.goal === 'min' ? 'minimize' : 'maximize' : 'info'
        }, tr);

        iconaddClass = c.is_objective ? c.goal === 'min' ? 'legendIconMin' : 'legendIconMax' : 'legendIconNone';
        createDom('span', {
          addClass: 'legendIcon ' + iconaddClass
        }, th);

        createDom('span', {
          html: c.short_name || c.full_name,
          attr: ["title", c.full_name]
        }, th);

      });


      problem.options.forEach(function (op, i) {
        tr = createDom('tr', {
          attr: ['id', 'problem-' + op.key]
        }, tbody);
        createDom('td', {
          html: op.key,
          attr: ['data-label', 'Id']
        }, tr);
        createDom('td', {
          html: op.name,
          attr: [
            ['title', op.description_html],
            ['data-label', 'Name']
          ]
        }, tr);
        problem.columns.forEach(function (c) {
          createDom('td', {
            html: op.values[c.key] || 0,
            attr: ['data-label', c.full_name]
          }, tr);
        });
      });
      return table;
    }

    function getColumnIndexes(problem) {
      var columnIndexes = {
        "Id" : 0,
        "Name" : 1
      };
      $.each(problem.columns,  function (index, value) {
        columnIndexes[value.key] = index + 2;
      });
      return columnIndexes;
    }

    function getSortList(problem, sort) {
      var
        columnIndexes = getColumnIndexes(problem),
        sortList = [];

      $.each(sort, function (key, order) {
        sortList.push([columnIndexes[key], order === 'asc' ? 0 : 1]);
      });

      return sortList;
    }


    function makeSortable(problem, table, sort) {
      if (table.tablesorter) {
        if (!sort) {
          throw new Error("Sorting order needs to be defined.");
        }
        table.tablesorter({sortList: getSortList(problem, sort)});
      }
    }

    function buildLegend(table) {
      return $([
        '<div class="tradeoffAnalyticsLegend" style="margin: 10px">',
        ' <p>',
        '   <span class="legendIcon legendIconEmpty"></span>',
        '   <span>Pre-selected objectives that IBM Watson Tradeoff Analytics service will compare.</span>',
        ' </p>',
        ' <p>',
        '   <span class="legendIcon legendIconMax"></span>',
        '   <span>An objective that will be maximized.</span>',
        ' </p>',
        ' <p>',
        '   <span class="legendIcon legendIconMin"></span>',
        '   <span>An objective that will be minimized.</span>',
        ' </p>',
        '</div>'
      ].join(""));
    }

    /**
     * @param problem
     * @param parent
     * @param sort A map containing column names as keys and sort
     *        order as values. For example, { "Id" : "asc" }
     */
    self.buildTable = function (problem, parent, sort) {
      parent.children().remove();
      var table = createTable(problem, parent);
      makeSortable(problem, table, sort);
      parent.append(table);
      if (self.legend) {
        parent.append(buildLegend(table));
      }
    };

    return self;
  };

});

/**
 * Copyright 2014 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Anonymous function, to use as a wrapper
 * Dependencies:
 *  q library
 */
exportModule("TradeoffAnalyticsWrapper", function () {
  'use strict';

  var profiles = {
    advanced : {
      "favorites": true,
      "favoritesTab": true,
      "filters": true,
      "filterHistogram": true,
      "objectivesOnly": false,
      "zoomIn": true,
      "optimalsList": true,
      "autoExcludedList": true,
      "incompleteList": true,
      "tradeoffAnalyzer": true,
      "undoRedo": true,
      "exploreViz": "both",
      "questionEditor": "fullyEditable"
    },
    basic : {
      "favorites": true,
      "favoritesTab": false,
      "filters": true,
      "filterHistogram": false,
      "objectivesOnly": true,
      "zoomIn": false,
      "optimalsList": true,
      "autoExcludedList": true,
      "incompleteList": true,
      "tradeoffAnalyzer": true,
      "undoRedo": false,
      "exploreViz": "both",
      "questionEditor": "editableNoToggle"
    }
  };

  function assert(cond, message) {
    if (!cond) {
      throw message;
    }
  }

  return function (containerId, profile, themeName, errorCallback, dilemmaServiceUrl) {
    var self = {
      dilemmaServiceUrl : dilemmaServiceUrl || '/',
      themeName   : themeName,
      profile     : profiles[profile],
      containerId : containerId,
      errorCallback   : errorCallback,
      loaded : false
    };

    self.createClient = function () {
      self.client = new TradeoffAnalytics({
        dilemmaServiceUrl : self.dilemmaServiceUrl,
        customCssUrl: 'http://ta-cdn.mybluemix.net/v1/modmt/styles/' + self.themeName + '.css',        
        profile: self.profile,
        errCallback: self.errorCallback
      }, self.containerId);
    };

    self.load = function () {
      var deferred = Q.defer();
      self.createClient();
      self.client.start(function () {
        self.loaded = true;
        deferred.resolve();
      });
      return deferred.promise;
    };

    self.show = function (problem) {
      var deferred = Q.defer();
      self.checkProblem(problem);
      try {
        self.client.show(problem, deferred.resolve);
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    };

    self.destroy = function () {
      var deferred = Q.defer();
      self.destroy(deferred.resolve);
      return deferred;
    };

    self.checkProblem = function (problem) {
      assert(problem, 'Empty Problem');
      assert($.isArray(problem.columns), 'Invalid problem columns');
      assert($.isArray(problem.options), 'Invalid problem options');
    };

    return self;
  };

});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Anonymous function, to use as a wrapper
 */
exportModule("UserGallery", function () {
  'use strict';

  var
    themes = ["default"],
    themesDef = {
      "default" : {
        ".gallery-user" : {
          "padding" : "0px 8px 0px 8px"
        },
        ".gallery-user-content" : {
          "padding" : "5px",
          "max-height": "69px"
        },
        ".gallery-user:hover" : {
          "cursor" : "pointer"
        },
        ".gallery-user-content:hover, .gallery-user.selected .gallery-user-content" : {
          "background" : "#e4e4e4"
        },
        ".displayName, .description" : {
          "margin-left" : "60px",
          "font-size": "0.8em"
        },
        ".displayName" : {
        },
        ".description" : {
        }
      }
    },
    klass = function (containerId, themeName) {
      var self = {
          containerId : containerId,
          container : $('#' + containerId),
          themeName : themeName || 'default'
        };

      self.galleryUserClasses = 'col-lg-3 col-md-3 col-sm-4 col-xs-6';

      self.getTheme = function (themeName) {
        return JSONCSS.buildStyle(themesDef[themeName], '#' + self.containerId);
      };

      self.buildGalleryUser = function (user, index) {
        return [
          '<div id="gallery-user-' + index + '" data-index="' + index + '" class="gallery-user ' + self.galleryUserClasses + '">',
          ' <div class="gallery-user-content well" style="height: 100%; overflow: auto">',
          '   <div class="actions" style="float:right"/>',
          '   <img class="imageUrl" style="float:left; width: 55px; height: 55px" src="' + user.imageUrl + '"/>',
          '   <div class="displayName"><strong>' + user.displayName + '</strong></div>',
          '   <div class="description">' + user.description + '</div>',
          ' </div>',
          '</div>'
        ].join('');
      };

      self.clean = function () {
        self.container.children().remove();
      };

      function setClickListener() {
        self.container.find('.gallery-user').click(function (event) {
          var
            component = $(event.delegateTarget),
            user = self.users[component.attr('data-index')];

          if (self.clickListener) { self.clickListener(user.data); }
        });
      }

      self.show = function (users) {
        self.clean();
        self.users = users;
        self.container.append(self.getTheme(self.themeName));
        users.forEach(function (user, index) {
          self.container.append(self.buildGalleryUser(user, index));
        });

        setClickListener();
      };

      self.click = function (listener) {
        self.clickListener = listener;
        setClickListener();
        return self;
      };

      return self;
    };

  klass.themes = themes;

  return klass;
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Anonymous function, to use as a wrapper
 */
exportModule("UserInfo", function () {
  'use strict';

  var
    themes = ["default"],
    themesDef = {
      "default" : {
        ".user-info" : {
          "padding": "10px 0px 16px 0px"
        },
        ".userImage" : {
          "min-width"  : "80px",
          "min-height" : "80px",
          "width" : "100%",
          "height" : "100%",
          "max-width" : "128px",
          "max-height" : "128px",
          "margin-bottom" : "12px"
        },
        ".info" : {
          //"padding-left" : "5px",
          "font-size": "0.8em"
        },
        ".displayName" : {
        },
        ".identity, .description, .metadata" : {
          "margin-bottom" : "10px"
        }
      }
    },
    klass = function (containerId, themeName) {
      var self = {
          containerId : containerId,
          container   : $("#" + containerId),
          themeName   : themeName || "default"
        };

      self.userInfoClasses = "";

      self.getTheme = function (themeName) {
        return JSONCSS.buildStyle(themesDef[themeName], '#' + self.containerId);
      };

      self.buildUser = function (user) {
        return [
          '<div id="user-info-' + user.id + '" class="user-info ' + self.userInfoClasses + '">',
          ' <div class="row user-info-content">',
          '   <div class="col-lg-12 col-md-12 col-xs-3" style="text-align:center">',
          '     <img class="userImage" src="' + user.imageUrl + '"/>',
          '   </div>',
          '   <div class="info col-lg-12 col-md-12 col-xs-9">',
          '     <div class="row identity">',
          '       <div class="col-lg-12 col-md-12 col-xs-12">',
          '         <strong class="displayName">' + user.displayName + '</strong> ',
          '         <span class="username">' + user.username + '</span>',
          '       </div>',
          '     </div>',
          '     <div class="row description">',
          '       <div class="col-lg-12 col-md-12 col-xs-12">', user.description,
          '       </div>',
          '     </div>',
          '     <div class="row metadata">',
          '       <div class="col-lg-5 col-md-5 col-xs-5">',
          '         <strong>' + user.language + '</strong><br/><span style="font-size: 0.8em">language</span>',
          '       </div>',
          '       <div class="col-lg-7 col-md-7 col-xs-7" style="border-left: 1px">',
          '         <strong>' + user.postCount + '</strong><br/><span style="font-size: 0.8em">posts analyzed</span>',
          '       </div>',
          '     </div>',
          '   </div>',
          ' </div>',
          '</div>'
        ].join('');
      };

      self.clean = function () {
        self.container.children().remove();
      };

      self.show = function (user) {
        self.clean();
        self.container.append(self.getTheme(self.themeName));
        self.container.append(self.buildUser(user));
      };

      return self;
    };

  klass.themes = themes;

  return klass;
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


exportModule("HorseRacingMatch", function () {
  return function (containerId, polarizedTraits) {
    var self = {
        containerId : containerId,
        container   : $("#" + containerId),
        polarizedTraits : polarizedTraits
      };

    function clean () {
      self.container.children().remove();
    }

    function getHtml(traits, user1, user2, matchScore) {
      var html = [
        '<div class="panel-main">',
        '  <div class="row avatars-row">',
        '    <div class="col-sm-4 col-xs-12 me">',
        '      <div class="avatar text-right img-circle">',
        '        <div class="second-border img-circle">',
        '          <div class="third-border img-circle"><img src=',
        '          "' + user1.image + '"',
        '          class="me revealed" /></div>',
        '        </div>',
        '      </div>',

        '      <div class="text-center">',
        '        <p class="avatar-name">' + user1.name + '</p>',
        '      </div>',
        '    </div>',

        '    <div class="col-sm-4 text-center col-xs-12">',
        '      <div class="similarity">',
        '        <div class="left-bar"></div>',

        '        <div class="right-bar"></div>',

        '        <div class="similarity-percentage">',
        '          <h1 class="cel_distance">' + (matchScore*100).toFixed(0) + '%</h1>',
        '        </div>',
        '      </div>',
        '    </div>',

        '    <div class="col-sm-4 col-xs-12 celebrity">',
        '      <div class="avatar text-right img-circle">',
        '        <div class="second-border img-circle">',
        '          <div class="third-border img-circle"><img class=',
        '          "cel_image celebrity revealed" src=',
        '          "' + user2.image + '" /></div>',
        '        </div>',
        '      </div>',

        '      <div class="text-center">',
        '        <p class="avatar-name">' + user2.name + '</p>',
        '      </div>',
        '    </div>',
        '  </div>' ];

      Object.keys(traits).forEach(function (traitId) {

        html = html.concat( [
        '  <div class="row trait-row">',
        '    <div class="col-md-3">',
        '      <p class="text-right">' + traits[traitId].right +  '</p>',
        '    </div>',

        '    <div class="col-md-3 col-md-push-6">',
        '      <p class="text-left">' + traits[traitId].left +  '</p>',
        '    </div>',

        '    <div class="col-md-6 col-md-pull-3">',
        '      <div class="measuring-bar">',
        '        <div style="left:calc(' + user1.traits[traitId] * 100 + '%)" class="point mep"></div>',

        '        <div id="trait_' + traitId + '" class="point celebrityp" style="left: calc(' + user2.traits[traitId] * 100 + '%);"></div>',
        '      </div>',
        '    </div>',
        '  </div>' ]);

      });

      return html.join('');
    }

    function show(user1, user2, matchPercentage) {
      clean();
      self.container.append(getHtml(self.polarizedTraits, user1, user2, matchPercentage));//templates.matchpanel({ traits: self.polarizedTraits, user: user1, otherUser: user2 }));
    }

    self.show = show;

    return self;
  };
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


/**
 * Anonymous function, to use as a wrapper
 */
exportModule("SimilarityGallery", function () {
  'use strict';

  var
    themes = ["default"],
    themesDef = {
      "default" : {
        ".similarity-user-content" : {
          "padding" : "20px"
        },
        ".percentage" : {
          "color" : "#fff",
          "text-shadow" : "#333 0px 0px 6px",
          "font-size" : "18px",
          "font-weight" : "400",
          "top" : "36px"
        },
        ".displayName" : {
          "font-size" : "0.8em",
          "padding-top" : "8px"
        }
      }
    },
    klass = function (containerId, limit, themeName) {
      var self = {
          containerId : containerId,
          container : $('#' + containerId),
          limit : limit || 6,
          themeName : themeName || 'default'
        };

      self.similarityUserClasses = 'col-lg-3 col-sm-4 col-xs-6 text-center';

      self.getTheme = function (themeName) {
        return JSONCSS.buildStyle(themesDef[themeName], '#' + self.containerId);
      };

      self.buildSimilarityUser = function (user, index) {
        return [
          '<div id="similarity-user-' + index + '" data-index="' + index + '" class="similarity-user ' + self.similarityUserClasses + '">',
          ' <div class="similarity-user-content" style="height: 100%; overflow: auto">',
          '   <div class="avatar-small">',
          '     <div class="overlay-yellow">',
          '       <div class="percentage">' + (user.score*100).toFixed(0) + '%</div>',
          '     </div>',
          '     <img class="imageUrl revealed" src="' + user.data.image + '"',
          '          title="Compare with ' + user.data.name + '" alt="' + user.data.name + ' picture" />',
          '   </div>',
          '   <div class="displayName"><strong>' + user.data.name + '</strong></div>',
          ' </div>',
          '</div>'
        ].join('');
      };

      self.clean = function () {
        self.container.children().remove();
      };

      function setClickListener() {
        self.container.find('.similarity-user').click(function (event) {
          var
            component = $(event.delegateTarget),
            user = self.users[component.attr('data-index')];

          if (self.clickListener) { self.clickListener(user); }
        });
      }

      self.show = function (users) {
        self.clean();
        self.users = users;
        self.container.append(self.getTheme(self.themeName));

        for (var index = 0; index < Math.min(self.limit, users.length); index += 1) {
          var user = users[index];
          self.container.append(self.buildSimilarityUser(user, index));
        }

        setClickListener();
      };

      self.click = function (listener) {
        self.clickListener = listener;
        setClickListener();
        return self;
      };

      return self;
    };

  klass.themes = themes;

  return klass;
});

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.TextSummary=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

var format = _dereq_("./format"),
    i18n = _dereq_("./i18n");

/**
 * Provides a Text Summary for profiles.
 */
module.exports = function (lang) {

  var self = {},
      dictionary = i18n.getDictionary(lang),
      tphrase = i18n.translatorFactory.createTranslator(dictionary.phrases); // i18n for phrases

  // Download all static data.
  self.circumplexData = dictionary.traits;
  self.facetsData = dictionary.facets;
  self.valuesData = dictionary.values;
  self.needsData = dictionary.needs;

  function compareByRelevance(o1, o2) {
    var result = 0;

    if (Math.abs(0.5 - o1.percentage) > Math.abs(0.5 - o2.percentage)) {
      result = -1; // A trait with 1% is more interesting than one with 60%.
    }

    if (Math.abs(0.5 - o1.percentage) < Math.abs(0.5 - o2.percentage)) {
      result = 1;
    }

    return result;
  }

  function compareByValue(o1, o2) {
    var result = 0;

    if (Math.abs(o1.percentage) > Math.abs(o2.percentage)) {
      result = -1; // 100 % has precedence over 99%
    }

    if (Math.abs(o1.percentage) < Math.abs(o2.percentage)) {
      result = 1;
    }

    return result;
  }

  function getCircumplexAdjective(p1, p2, order) {
    // Sort the personality traits in the order the JSON file stored it.
    var ordered = [p1, p2].sort(function (o1, o2) {
      var i1 = "EANOC".indexOf(o1.id.charAt(0)),
          i2 = "EANOC".indexOf(o2.id.charAt(0));

      return i1 < i2 ? -1 : 1;
    }),

    // Assemble the identifier as the JSON file stored it.
    identifier = ordered[0].id.concat(ordered[0].percentage > 0.5 ? "_plus_" : "_minus_").concat(ordered[1].id).concat(ordered[1].percentage > 0.5 ? "_plus" : "_minus"),
        traitMult = self.circumplexData[identifier][0],
        sentence = "%s";

    if (traitMult.perceived_negatively) {
      switch (order) {
        case 0:
          sentence = tphrase("a bit %s");
          break;
        case 1:
          sentence = tphrase("somewhat %s");
          break;
        case 2:
          sentence = tphrase("can be perceived as %s");
          break;
      }
    }

    return format(sentence, traitMult.word);
  }

  function getFacetInfo(f) {
    var data = self.facetsData[f.id.replace("_", "-").replace(" ", "-")],
        t,
        d;

    if (f.percentage > 0.5) {
      t = data.HighTerm.toLowerCase();
      d = data.HighDescription.toLowerCase();
    } else {
      t = data.LowTerm.toLowerCase();
      d = data.LowDescription.toLowerCase();
    }

    return {
      name: f.id,
      term: t,
      description: d
    };
  }

  function intervalFor(p) {
    // The MIN handles the special case for 100%.
    return Math.min(Math.floor(p * 4), 3);
  }

  function getInfoForValue(v) {
    var data = self.valuesData[v.id.replace(/[_ ]/g, "-")][0],
        d = v.percentage > 0.5 ? data.HighDescription : data.LowDescription;

    return {
      name: v.id,
      term: data.Term.toLowerCase(),
      description: d
    };
  }

  function getWordsForNeed(n) {
    // Assemble the identifier as the JSON file stored it.
    var traitMult = self.needsData[n.id];
    return traitMult;
  }

  function assembleTraits(personalityTree) {
    var sentences = [],
        big5elements = [],
        relevantBig5,
        adj,
        adj1,
        adj2,
        adj3;

    // Sort the Big 5 based on how extreme the number is.
    personalityTree.children[0].children.forEach(function (p) {
      big5elements.push({
        id: p.id,
        percentage: p.percentage
      });
    });
    big5elements.sort(compareByRelevance);

    // Remove everything between 32% and 68%, as it's inside the common people.
    relevantBig5 = big5elements.filter(function (item) {
      return Math.abs(0.5 - item.percentage) > 0.18;
    });
    if (relevantBig5.length < 2) {
      // Even if no Big 5 attribute is interesting, you get 1 adjective.
      relevantBig5 = [big5elements[0], big5elements[1]];
    }

    switch (relevantBig5.length) {
      case 2:
        // Report 1 adjective.
        adj = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
        sentences.push(format(tphrase("You are %s"), adj) + ".");
        break;
      case 3:
        // Report 2 adjectives.
        adj1 = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
        adj2 = getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1);
        sentences.push(format(tphrase("You are %s and %s"), adj1, adj2) + ".");
        break;
      case 4:
      case 5:
        // Report 3 adjectives.
        adj1 = getCircumplexAdjective(relevantBig5[0], relevantBig5[1], 0);
        adj2 = getCircumplexAdjective(relevantBig5[1], relevantBig5[2], 1);
        adj3 = getCircumplexAdjective(relevantBig5[2], relevantBig5[3], 2);
        sentences.push(format(tphrase("You are %s, %s and %s"), adj1, adj2, adj3) + ".");
        break;
    }

    return sentences;
  }

  function assembleFacets(personalityTree) {
    var sentences = [],
        facetElements = [],
        info,
        i;

    // Assemble the full list of facets and sort them based on how extreme
    // is the number.
    personalityTree.children[0].children.forEach(function (p) {
      p.children.forEach(function (f) {
        facetElements.push({
          id: f.id,
          percentage: f.percentage,
          parent: p
        });
      });
    });
    facetElements.sort(compareByRelevance);

    // Assemble an adjective and description for the two most important facets.
    info = getFacetInfo(facetElements[0]);
    sentences.push(format(tphrase("You are %s"), info.term) + ": " + info.description + ".");
    info = getFacetInfo(facetElements[1]);
    sentences.push(format(tphrase("You are %s"), info.term) + ": " + info.description + ".");

    // If all the facets correspond to the same feature, continue until a
    // different parent feature is found.
    i = 2;
    if (facetElements[0].parent === facetElements[1].parent) {
      while (facetElements[0].parent === facetElements[i].parent) {
        i += 1;
      }
    }
    info = getFacetInfo(facetElements[i]);
    sentences.push(format(tphrase("And you are %s"), info.term) + ": " + info.description + ".");

    return sentences;
  }

  /**
   * Assemble the list of values and sort them based on relevance.
   */
  function assembleValues(valuesTree) {
    var sentences = [],
        valuesList = [],
        sameQI,
        info1,
        info2,
        sentence,
        valuesInfo,
        i,
        term1,
        term2;

    valuesTree.children[0].children.forEach(function (p) {
      valuesList.push({
        id: p.id,
        percentage: p.percentage
      });
    });
    valuesList.sort(compareByRelevance);

    // Are the two most relevant in the same quartile interval? (e.g. 0%-25%)
    sameQI = intervalFor(valuesList[0].percentage) === intervalFor(valuesList[1].percentage);

    // Get all the text and data required.
    info1 = getInfoForValue(valuesList[0]);
    info2 = getInfoForValue(valuesList[1]);

    if (sameQI) {
      // Assemble the first 'both' sentence.
      term1 = info1.term;
      term2 = info2.term;
      switch (intervalFor(valuesList[0].percentage)) {
        case 0:
          sentence = format(tphrase("You are relatively unconcerned with both %s and %s"), term1, term2) + ".";
          break;
        case 1:
          sentence = format(tphrase("You don't find either %s or %s to be particularly motivating for you"), term1, term2) + ".";
          break;
        case 2:
          sentence = format(tphrase("You value both %s and %s a bit"), term1, term2) + ".";
          break;
        case 3:
          sentence = format(tphrase("You consider both %s and %s to guide a large part of what you do"), term1, term2) + ".";
          break;
      }
      sentences.push(sentence);

      // Assemble the final strings in the correct format.
      sentences.push(info1.description + ".");
      sentences.push(format(tphrase("And %s"), info2.description.toLowerCase()) + ".");
    } else {
      valuesInfo = [info1, info2];
      for (i = 0; i < valuesInfo.length; i += 1) {
        // Process it this way because the code is the same.
        switch (intervalFor(valuesList[i].percentage)) {
          case 0:
            sentence = format(tphrase("You are relatively unconcerned with %s"), valuesInfo[i].term);
            break;
          case 1:
            sentence = format(tphrase("You don't find %s to be particularly motivating for you"), valuesInfo[i].term);
            break;
          case 2:
            sentence = format(tphrase("You value %s a bit more"), valuesInfo[i].term);
            break;
          case 3:
            sentence = format(tphrase("You consider %s to guide a large part of what you do"), valuesInfo[i].term);
            break;
        }
        sentence = sentence.concat(": ").concat(valuesInfo[i].description.toLowerCase()).concat(".");
        sentences.push(sentence);
      }
    }

    return sentences;
  }

  /**
   * Assemble the list of needs and sort them based on value.
   */
  function assembleNeeds(needsTree) {
    var sentences = [],
        needsList = [],
        word,
        sentence;

    needsTree.children[0].children.forEach(function (p) {
      needsList.push({
        id: p.id,
        percentage: p.percentage
      });
    });
    needsList.sort(compareByValue);

    // Get the words required.
    word = getWordsForNeed(needsList[0])[0];

    // Form the right sentence for the single need.
    switch (intervalFor(needsList[0].percentage)) {
      case 0:
        sentence = tphrase("Experiences that make you feel high %s are generally unappealing to you");
        break;
      case 1:
        sentence = tphrase("Experiences that give a sense of %s hold some appeal to you");
        break;
      case 2:
        sentence = tphrase("You are motivated to seek out experiences that provide a strong feeling of %s");
        break;
      case 3:
        sentence = tphrase("Your choices are driven by a desire for %s");
        break;
    }
    sentence = format(sentence, word).concat(".");
    sentences.push(sentence);

    return sentences;
  }

  /**
   * Given a TraitTree returns a text
   * summary describing the result.
   *
   * @param tree A TraitTree.
   * @return An array of strings representing the
   *         paragraphs of the text summary.
   */
  function assemble(tree) {
    return [assembleTraits(tree.children[0]), assembleFacets(tree.children[0]), assembleNeeds(tree.children[1]), assembleValues(tree.children[2])];
  }

  /**
   * Given a TraitTree returns a text
   * summary describing the result.
   *
   * @param tree A TraitTree.
   * @return A String containing the text summary.
   */
  function getSummary(profile) {
    return assemble(profile.tree).map(function (paragraph) {
      return paragraph.join(" ");
    }).join("\n");
  }

  /* Text-Summary API */
  self.assembleTraits = assembleTraits;
  self.assembleFacets = assembleFacets;
  self.assembleNeeds = assembleNeeds;
  self.assembleValues = assembleValues;
  self.assemble = assemble;
  self.getSummary = getSummary;

  return self;
};

},{"./format":2,"./i18n":3}],2:[function(_dereq_,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Given a template string to format and serveral strings
 * to fill the template, it returns the formatted string.
 * @param template This is a string containing zero, one or
 *                 more occurrences of "%s".
 * @param ...strings
 * @returns The formattted template.
 */
"use strict";

function format(subject) {
  "use strict";

  var replaces = Array.prototype.slice.apply(arguments, [1, arguments.length]),
      parts = null,
      output,
      i;

  if (subject.match(/%s/g) === null && replaces.length > 0 || replaces.length !== subject.match(/%s/g).length) {
    throw "Format error: The string count to replace do not matches the argument count. Subject: " + subject + ". Replaces: " + replaces;
  }

  output = subject;
  for (i = 1; i < arguments.length; i += 1) {
    parts = output.split("%s");
    output = parts[0] + arguments[i] + parts.slice(1, parts.length).join("%s");
  }

  return output;
}

module.exports = format;

},{}],3:[function(_dereq_,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

var format = _dereq_("./format");

/**
 * Creates translators
 *
 * @author Ary Pablo Batista <batarypa@ar.ibm.com>
 */
var translatorFactory = (function () {
  "use strict";

  var self = {

    /**
     * Get the value for the given key from the dictionary.
     *
     * @param dictionary A dictionary with String keys and String values.
     * @param key A key. Can contain '.' to indicate key's present in sub-dictionaries.
     *                   For example 'application.name' looks up for the 'application' key
     *                   in the dictionary and, with it's value, looks up for the 'name' key.
     * @param defaultValue A value to return if the key is not in the dictionary.
     * @returns The value from the dictionary.
     */
    getKey: function getKey(dictionary, key, defaultValue) {
      var i,
          parts = key.split("."),
          value = dictionary;

      for (i = 0; i < parts.length; i = i + 1) {
        value = value[parts[i]];
        if (!value) {
          value = defaultValue;
          break;
        }
      }
      return value;
    },

    /**
     * Creates a translation function given a dictionary of translations
     * and an optional backup dictionary if the key is no present in the
     * first one. The key is returned if not found in the dictionaries.
     * @param translations A translation dictionary.
     * @param defaults A translation dictionary.
     * @returns {Function} A translator.
     */
    createTranslator: function createTranslator(translations, defaults) {
      defaults = defaults || {};
      var _this = this;
      return function (key) {
        var value = self.getKey(translations, key, null);
        if (value === null) {
          console.log(format("Pending translation for: %s", key));
          value = _this.getKey(defaults, key, key);
        }
        return value;
      };
    }
  };

  return self;
})(),

/**
 * Provide files according to user's locale
 *
 * @author Ary Pablo Batista <batarypa@ar.ibm.com>
 */
i18nProvider = (function () {
  "use strict";

  var DEFAULT_LOCALE = "en",
      I18N_DIR = "./i18n",
      self = {
    dictionaries: {
      en: _dereq_("./i18n/en"),
      es: _dereq_("./i18n/es")
    }
  };

  /**
   * Returns all the locale options.
   * for 'es-AR'['traits_es-AR.json', 'traits_es.json', 'traits.json']
   *
   * @param locale A locale (format: ll-CC)
   * @returns {Array} An array of the possible names for dictionary file.
   */
  self.getLocaleOptions = function (locale) {
    var localeParts = locale.split("-"),
        options = [];

    options.push(locale.replace("-", "_"));
    if (localeParts.length === 2) {
      options.push(localeParts[0]);
    }

    options.push(DEFAULT_LOCALE);

    return options;
  };

  /**
   * Get the appropiate dictionary file for user's locale.
   */
  self.getDictionary = function (locale) {
    var locales = self.getLocaleOptions(locale),
        dict;

    for (var i = 0; i < locales.length; i++) {
      if (self.dictionaries[locales[i]]) {
        return self.dictionaries[locales[i]];
      }
    }

    throw new Error("Could not obtain any dictionary for locale \"" + locale + "\"");
  };

  return self;
})();

module.exports = {
  i18nProvider: i18nProvider,
  getDictionary: i18nProvider.getDictionary,
  translatorFactory: translatorFactory
};

},{"./format":2,"./i18n/en":4,"./i18n/es":5}],4:[function(_dereq_,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

module.exports = {
    facets: {
        Friendliness: {
            Big5: "Extraversion",
            LowTerm: "Reserved",
            HighTerm: "Outgoing",
            LowDescription: "You are a private person and don't let many people in",
            HighDescription: "You make friends easily and feel comfortable around other people"
        },
        Gregariousness: {
            Big5: "Extraversion",
            LowTerm: "Independent",
            HighTerm: "Sociable",
            LowDescription: "You have a strong desire to have time to yourself",
            HighDescription: "You enjoy being in the company of others"
        },
        Assertiveness: {
            Big5: "Extraversion",
            LowTerm: "Demure",
            HighTerm: "Assertive",
            LowDescription: "You prefer to listen than to talk, especially in group situations",
            HighDescription: "You tend to speak up and take charge of situations, and you are comfortable leading groups"
        },
        "Activity-level": {
            Big5: "Extraversion",
            LowTerm: "Laid-back",
            HighTerm: "Energetic",
            LowDescription: "You appreciate a relaxed pace in life",
            HighDescription: "You enjoy a fast-paced, busy schedule with many activities"
        },
        "Excitement-seeking": {
            Big5: "Extraversion",
            LowTerm: "Calm-seeking",
            HighTerm: "Excitement-seeking",
            LowDescription: "You prefer activities that are quiet, calm, and safe",
            HighDescription: "You are excited by taking risks and feel bored without lots of action going on"
        },
        Cheerfulness: {
            Big5: "Extraversion",
            LowTerm: "Solemn",
            HighTerm: "Cheerful",
            LowDescription: "You are generally serious and do not joke much",
            HighDescription: "You are a joyful person and share that joy with the world"
        },
        Trust: {
            Big5: "Agreeableness",
            LowTerm: "Cautious of others",
            HighTerm: "Trusting of others",
            LowDescription: "You are wary of other people's intentions and do not trust easily",
            HighDescription: "You believe the best in others and trust people easily"
        },
        Cooperation: {
            Big5: "Agreeableness",
            LowTerm: "Contrary",
            HighTerm: "Accommodating",
            LowDescription: "You do not shy away from contradicting others",
            HighDescription: "You are easy to please and try to avoid confrontation"
        },
        Altruism: {
            Big5: "Agreeableness",
            LowTerm: "Self-focused",
            HighTerm: "Altruistic",
            LowDescription: "You are more concerned with taking care of yourself than taking time for others",
            HighDescription: "You feel fulfilled when helping others, and will go out of your way to do so"
        },
        Morality: {
            Big5: "Agreeableness",
            LowTerm: "Compromising",
            HighTerm: "Uncompromising",
            LowDescription: "You are comfortable using every trick in the book to get what you want",
            HighDescription: "You think it is wrong to take advantage of others to get ahead"
        },
        Modesty: {
            Big5: "Agreeableness",
            LowTerm: "Proud",
            HighTerm: "Modest",
            LowDescription: "You hold yourself in high regard, satisfied with who you are",
            HighDescription: "You are uncomfortable being the center of attention"
        },
        Sympathy: {
            Big5: "Agreeableness",
            LowTerm: "Hardened",
            HighTerm: "Empathetic",
            LowDescription: "You think that people should generally rely more on themselves than on other people",
            HighDescription: "You feel what others feel and are compassionate towards them"
        },
        "Self-efficacy": {
            Big5: "Conscientiousness",
            LowTerm: "Self-doubting",
            HighTerm: "Self-assured",
            LowDescription: "You frequently doubt your ability to achieve your goals",
            HighDescription: "You feel you have the ability to succeed in the tasks you set out to do"
        },
        Orderliness: {
            Big5: "Conscientiousness",
            LowTerm: "Unstructured",
            HighTerm: "Organized",
            LowDescription: "You do not make a lot of time for organization in your daily life",
            HighDescription: "You feel a strong need for structure in your life"
        },
        Dutifulness: {
            Big5: "Conscientiousness",
            LowTerm: "Carefree",
            HighTerm: "Dutiful",
            LowDescription: "You do what you want, disregarding rules and obligations",
            HighDescription: "You take rules and obligations seriously, even when they're inconvenient"
        },
        "Achievement-striving": {
            Big5: "Conscientiousness",
            LowTerm: "Content",
            HighTerm: "Driven",
            LowDescription: "You are content with your level of accomplishment and do not feel the need to set ambitious goals",
            HighDescription: "You have high goals for yourself and work hard to achieve them"
        },
        "Self-discipline": {
            Big5: "Conscientiousness",
            LowTerm: "Intermittent",
            HighTerm: "Persistent",
            LowDescription: "You have a hard time sticking with difficult tasks for a long period of time",
            HighDescription: "You can tackle and stick with tough tasks"
        },
        Cautiousness: {
            Big5: "Conscientiousness",
            LowTerm: "Bold",
            HighTerm: "Deliberate",
            LowDescription: "You would rather take action immediately than spend time deliberating making a decision",
            HighDescription: "You carefully think through decisions before making them"
        },
        Anxiety: {
            Big5: "Neuroticism",
            LowTerm: "Self-assured",
            HighTerm: "Prone to worry",
            LowDescription: "You tend to feel calm and self-assured",
            HighDescription: "You tend to worry about things that might happen"
        },
        Anger: {
            Big5: "Neuroticism",
            LowTerm: "Mild-tempered",
            HighTerm: "Fiery",
            LowDescription: "It takes a lot to get you angry",
            HighDescription: "You have a fiery temper, especially when things do not go your way"
        },
        Depression: {
            Big5: "Neuroticism",
            LowTerm: "Content",
            HighTerm: "Melancholy",
            LowDescription: "You are generally comfortable with yourself as you are",
            HighDescription: "You think quite often about the things you are unhappy about"
        },
        "Self-consciousness": {
            Big5: "Neuroticism",
            LowTerm: "Confident",
            HighTerm: "Self-conscious",
            LowDescription: "You are hard to embarrass and are self-confident most of the time",
            HighDescription: "You are sensitive about what others might be thinking about you"
        },
        Immoderation: {
            Big5: "Neuroticism",
            LowTerm: "Self-controlled",
            HighTerm: "Hedonistic",
            LowDescription: "You have control over your desires, which are not particularly intense",
            HighDescription: "You feel your desires strongly and are easily tempted by them"
        },
        Vulnerability: {
            Big5: "Neuroticism",
            LowTerm: "Calm under pressure",
            HighTerm: "Susceptible to stress",
            LowDescription: "You handle unexpected events calmly and effectively",
            HighDescription: "You are easily overwhelmed in stressful situations"
        },
        Imagination: {
            Big5: "Openness",
            LowTerm: "Down-to-earth",
            HighTerm: "Imaginative",
            LowDescription: "You prefer facts over fantasy",
            HighDescription: "You have a wild imagination"
        },
        "Artistic-interests": {
            Big5: "Openness",
            LowTerm: "Unconcerned with art",
            HighTerm: "Appreciative of art",
            LowDescription: "You are less concerned with artistic or creative activities than most people who participated in our surveys",
            HighDescription: "You enjoy beauty and seek out creative experiences"
        },
        Emotionality: {
            Big5: "Openness",
            LowTerm: "Dispassionate",
            HighTerm: "Emotionally aware",
            LowDescription: "You do not frequently think about or openly express your emotions",
            HighDescription: "You are aware of your feelings and how to express them"
        },
        Adventurousness: {
            Big5: "Openness",
            LowTerm: "Consistent",
            HighTerm: "Adventurous",
            LowDescription: "You enjoy familiar routines and prefer not to deviate from them",
            HighDescription: "You are eager to experience new things"
        },
        Intellect: {
            Big5: "Openness",
            LowTerm: "Concrete",
            HighTerm: "Philosophical",
            LowDescription: "You prefer dealing with the world as it is, rarely considering abstract ideas",
            HighDescription: "You are open to and intrigued by new ideas and love to explore them"
        },
        Liberalism: {
            Big5: "Openness",
            LowTerm: "Respectful of authority",
            HighTerm: "Authority-challenging",
            LowDescription: "You prefer following with tradition in order to maintain a sense of stability",
            HighDescription: "You prefer to challenge authority and traditional values to help bring about positive changes"
        }
    },
    needs: {
        Challenge: ["prestige", "competition", "glory"],
        Closeness: ["belongingness", "nostalgia", "intimacy"],
        Curiosity: ["discovery", "mastery", "gaining knowledge"],
        Excitement: ["revelry", "anticipation", "exhiliration"],
        Harmony: ["well-being", "courtesy", "politeness"],
        Ideal: ["sophistication", "spirituality", "superiority", "fulfillment"],
        Liberty: ["modernity", "expanding possibility", "escape", "spontaneity", "novelty"],
        Love: ["connectedness", "affinity"],
        Practicality: ["efficiency", "practicality", "high value", "convenience"],
        "Self-expression": ["self-expression", "personal empowerment", "personal strength"],
        Stability: ["stability", "authenticity", "trustworthiness"],
        Structure: ["organization", "straightforwardness", "clarity", "reliability"]
    },
    phrases: {
        "You are %s": "You are %s",
        "You are %s and %s": "You are %s and %s",
        "You are %s, %s and %s": "You are %s, %s and %s",
        "And you are %s": "And you are %s",
        "You are relatively unconcerned with %s": "You are relatively unconcerned with %s",
        "You are relatively unconcerned with both %s and %s": "You are relatively unconcerned with both %s and %s",
        "You don't find %s to be particularly motivating for you": "You don't find %s to be particularly motivating for you",
        "You don't find either %s or %s to be particularly motivating for you": "You don't find either %s or %s to be particularly motivating for you",
        "You value both %s a bit": "You value both %s a bit",
        "You value both %s and %s a bit": "You value both %s and %s a bit",
        "You consider %s to guide a large part of what you do": "You consider %s to guide a large part of what you do",
        "You consider both %s and %s to guide a large part of what you do": "You consider both %s and %s to guide a large part of what you do",
        "And %s": "And %s",
        "You value %s a bit more": "You value %s a bit more",
        "Experiences that make you feel high %s are generally unappealing to you": "Experiences that make you feel high %s are generally unappealing to you",
        "Experiences that give a sense of %s hold some appeal to you": "Experiences that give a sense of %s hold some appeal to you",
        "You are motivated to seek out experiences that provide a strong feeling of %s": "You are motivated to seek out experiences that provide a strong feeling of %s",
        "Your choices are driven by a desire for %s": "Your choices are driven by a desire for %s",
        "a bit %s": "a bit %s",
        "somewhat %s": "somewhat %s",
        "can be perceived as %s": "can be perceived as %s"
    },
    traits: {
        Agreeableness_minus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "inconsiderate"
        }, {
            perceived_negatively: true,
            word: "impolite"
        }, {
            perceived_negatively: true,
            word: "distrustful"
        }, {
            perceived_negatively: true,
            word: "uncooperative"
        }, {
            perceived_negatively: true,
            word: "thoughtless"
        }],
        Agreeableness_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "strict"
        }, {
            perceived_negatively: false,
            word: "rigid"
        }, {
            perceived_negatively: true,
            word: "stern"
        }],
        Agreeableness_minus_Extraversion_minus: [{
            perceived_negatively: true,
            word: "cynical"
        }, {
            perceived_negatively: true,
            word: "wary of others"
        }, {
            perceived_negatively: true,
            word: "seclusive"
        }, {
            perceived_negatively: true,
            word: "detached"
        }, {
            perceived_negatively: true,
            word: "impersonal"
        }, {
            perceived_negatively: true,
            word: "glum"
        }],
        Agreeableness_minus_Extraversion_plus: [{
            perceived_negatively: true,
            word: "bullheaded"
        }, {
            perceived_negatively: true,
            word: "abrupt"
        }, {
            perceived_negatively: true,
            word: "crude"
        }, {
            perceived_negatively: true,
            word: "combative"
        }, {
            perceived_negatively: true,
            word: "rough"
        }, {
            perceived_negatively: false,
            word: "sly"
        }, {
            perceived_negatively: true,
            word: "manipulative"
        }, {
            perceived_negatively: true,
            word: "gruff"
        }, {
            perceived_negatively: true,
            word: "devious"
        }],
        Agreeableness_minus_Neuroticism_minus: [{
            perceived_negatively: true,
            word: "insensitive"
        }, {
            perceived_negatively: true,
            word: "unaffectionate"
        }, {
            perceived_negatively: true,
            word: "passionless"
        }, {
            perceived_negatively: true,
            word: "unemotional"
        }],
        Agreeableness_minus_Neuroticism_plus: [{
            perceived_negatively: true,
            word: "critical"
        }, {
            perceived_negatively: true,
            word: "selfish"
        }, {
            perceived_negatively: true,
            word: "ill-tempered"
        }, {
            perceived_negatively: true,
            word: "antagonistic"
        }, {
            perceived_negatively: true,
            word: "grumpy"
        }, {
            perceived_negatively: true,
            word: "bitter"
        }, {
            perceived_negatively: true,
            word: "disagreeable"
        }, {
            perceived_negatively: true,
            word: "demanding"
        }],
        Agreeableness_minus_Openness_minus: [{
            perceived_negatively: true,
            word: "coarse"
        }, {
            perceived_negatively: true,
            word: "tactless"
        }, {
            perceived_negatively: true,
            word: "curt"
        }, {
            perceived_negatively: true,
            word: "narrow-minded"
        }, {
            perceived_negatively: true,
            word: "callous"
        }, {
            perceived_negatively: true,
            word: "ruthless"
        }, {
            perceived_negatively: true,
            word: "uncharitable"
        }, {
            perceived_negatively: true,
            word: "vindictive"
        }],
        Agreeableness_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "shrewd"
        }, {
            perceived_negatively: false,
            word: "eccentric"
        }, {
            perceived_negatively: false,
            word: "individualistic"
        }],
        Agreeableness_plus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "unpretentious"
        }, {
            perceived_negatively: false,
            word: "self-effacing"
        }],
        Agreeableness_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "helpful"
        }, {
            perceived_negatively: false,
            word: "cooperative"
        }, {
            perceived_negatively: false,
            word: "considerate"
        }, {
            perceived_negatively: false,
            word: "respectful"
        }, {
            perceived_negatively: false,
            word: "polite"
        }, {
            perceived_negatively: false,
            word: "reasonable"
        }, {
            perceived_negatively: false,
            word: "courteous"
        }, {
            perceived_negatively: false,
            word: "thoughtful"
        }, {
            perceived_negatively: false,
            word: "loyal"
        }, {
            perceived_negatively: false,
            word: "moral"
        }],
        Agreeableness_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "soft-hearted"
        }, {
            perceived_negatively: false,
            word: "agreeable"
        }, {
            perceived_negatively: false,
            word: "obliging"
        }, {
            perceived_negatively: false,
            word: "humble"
        }, {
            perceived_negatively: true,
            word: "lenient"
        }],
        Agreeableness_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "effervescent"
        }, {
            perceived_negatively: false,
            word: "happy"
        }, {
            perceived_negatively: false,
            word: "friendly"
        }, {
            perceived_negatively: false,
            word: "merry"
        }, {
            perceived_negatively: false,
            word: "jovial"
        }, {
            perceived_negatively: false,
            word: "humorous"
        }],
        Agreeableness_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "generous"
        }, {
            perceived_negatively: false,
            word: "pleasant"
        }, {
            perceived_negatively: false,
            word: "tolerant"
        }, {
            perceived_negatively: false,
            word: "peaceful"
        }, {
            perceived_negatively: false,
            word: "flexible"
        }, {
            perceived_negatively: false,
            word: "easy-going"
        }, {
            perceived_negatively: false,
            word: "fair"
        }, {
            perceived_negatively: false,
            word: "charitable"
        }, {
            perceived_negatively: false,
            word: "trustful"
        }],
        Agreeableness_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "sentimental"
        }, {
            perceived_negatively: false,
            word: "affectionate"
        }, {
            perceived_negatively: false,
            word: "sensitive"
        }, {
            perceived_negatively: false,
            word: "soft"
        }, {
            perceived_negatively: false,
            word: "passionate"
        }, {
            perceived_negatively: false,
            word: "romantic"
        }],
        Agreeableness_plus_Openness_minus: [{
            perceived_negatively: true,
            word: "dependent"
        }, {
            perceived_negatively: true,
            word: "simple"
        }],
        Agreeableness_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "genial"
        }, {
            perceived_negatively: false,
            word: "tactful"
        }, {
            perceived_negatively: false,
            word: "diplomatic"
        }, {
            perceived_negatively: false,
            word: "deep"
        }, {
            perceived_negatively: false,
            word: "idealistic"
        }],
        Conscientiousness_minus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "rash"
        }, {
            perceived_negatively: true,
            word: "uncooperative"
        }, {
            perceived_negatively: true,
            word: "unreliable"
        }, {
            perceived_negatively: true,
            word: "distrustful"
        }, {
            perceived_negatively: true,
            word: "thoughtless"
        }],
        Conscientiousness_minus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "unpretentious"
        }, {
            perceived_negatively: false,
            word: "self-effacing"
        }],
        Conscientiousness_minus_Extraversion_minus: [{
            perceived_negatively: true,
            word: "indecisive"
        }, {
            perceived_negatively: true,
            word: "aimless"
        }, {
            perceived_negatively: false,
            word: "wishy-washy"
        }, {
            perceived_negatively: false,
            word: "noncommittal"
        }, {
            perceived_negatively: true,
            word: "unambitious"
        }],
        Conscientiousness_minus_Extraversion_plus: [{
            perceived_negatively: true,
            word: "unruly"
        }, {
            perceived_negatively: false,
            word: "boisterous"
        }, {
            perceived_negatively: true,
            word: "reckless"
        }, {
            perceived_negatively: true,
            word: "devil-may-care"
        }, {
            perceived_negatively: false,
            word: "demonstrative"
        }],
        Conscientiousness_minus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "informal"
        }, {
            perceived_negatively: false,
            word: "low-key"
        }],
        Conscientiousness_minus_Neuroticism_plus: [{
            perceived_negatively: true,
            word: "scatterbrained"
        }, {
            perceived_negatively: true,
            word: "inconsistent"
        }, {
            perceived_negatively: true,
            word: "erratic"
        }, {
            perceived_negatively: true,
            word: "forgetful"
        }, {
            perceived_negatively: true,
            word: "impulsive"
        }, {
            perceived_negatively: true,
            word: "frivolous"
        }],
        Conscientiousness_minus_Openness_minus: [{
            perceived_negatively: false,
            word: "foolhardy"
        }, {
            perceived_negatively: true,
            word: "illogical"
        }, {
            perceived_negatively: true,
            word: "immature"
        }, {
            perceived_negatively: true,
            word: "haphazard"
        }, {
            perceived_negatively: false,
            word: "lax"
        }, {
            perceived_negatively: true,
            word: "flippant"
        }],
        Conscientiousness_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "unconventional"
        }, {
            perceived_negatively: false,
            word: "quirky"
        }],
        Conscientiousness_plus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "stern"
        }, {
            perceived_negatively: false,
            word: "strict"
        }, {
            perceived_negatively: false,
            word: "rigid"
        }],
        Conscientiousness_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "dependable"
        }, {
            perceived_negatively: false,
            word: "responsible"
        }, {
            perceived_negatively: false,
            word: "reliable"
        }, {
            perceived_negatively: false,
            word: "mannerly"
        }, {
            perceived_negatively: false,
            word: "considerate"
        }],
        Conscientiousness_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "cautious"
        }, {
            perceived_negatively: false,
            word: "confident"
        }, {
            perceived_negatively: false,
            word: "punctual"
        }, {
            perceived_negatively: false,
            word: "formal"
        }, {
            perceived_negatively: false,
            word: "thrifty"
        }, {
            perceived_negatively: false,
            word: "principled"
        }],
        Conscientiousness_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "ambitious"
        }, {
            perceived_negatively: false,
            word: "alert"
        }, {
            perceived_negatively: false,
            word: "firm"
        }, {
            perceived_negatively: false,
            word: "purposeful"
        }, {
            perceived_negatively: false,
            word: "competitive"
        }],
        Conscientiousness_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "thorough"
        }, {
            perceived_negatively: false,
            word: "steady"
        }, {
            perceived_negatively: false,
            word: "consistent"
        }, {
            perceived_negatively: false,
            word: "self-disciplined"
        }, {
            perceived_negatively: false,
            word: "logical"
        }, {
            perceived_negatively: false,
            word: "decisive"
        }, {
            perceived_negatively: false,
            word: "controlled"
        }, {
            perceived_negatively: false,
            word: "concise"
        }],
        Conscientiousness_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "particular"
        }, {
            perceived_negatively: true,
            word: "high-strung"
        }],
        Conscientiousness_plus_Openness_minus: [{
            perceived_negatively: false,
            word: "traditional"
        }, {
            perceived_negatively: false,
            word: "conventional"
        }],
        Conscientiousness_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "sophisticated"
        }, {
            perceived_negatively: false,
            word: "perfectionistic"
        }, {
            perceived_negatively: false,
            word: "industrious"
        }, {
            perceived_negatively: false,
            word: "dignified"
        }, {
            perceived_negatively: false,
            word: "refined"
        }, {
            perceived_negatively: false,
            word: "cultured"
        }, {
            perceived_negatively: false,
            word: "foresighted"
        }],
        Extraversion_minus_Agreeableness_minus: [{
            perceived_negatively: false,
            word: "skeptical"
        }, {
            perceived_negatively: false,
            word: "wary of others"
        }, {
            perceived_negatively: true,
            word: "seclusive"
        }, {
            perceived_negatively: true,
            word: "uncommunicative"
        }, {
            perceived_negatively: true,
            word: "unsociable"
        }, {
            perceived_negatively: true,
            word: "glum"
        }, {
            perceived_negatively: true,
            word: "detached"
        }, {
            perceived_negatively: false,
            word: "aloof"
        }],
        Extraversion_minus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "unaggressive"
        }, {
            perceived_negatively: false,
            word: "humble"
        }, {
            perceived_negatively: false,
            word: "submissive"
        }, {
            perceived_negatively: false,
            word: "timid"
        }, {
            perceived_negatively: false,
            word: "compliant"
        }, {
            perceived_negatively: false,
            word: "naïve"
        }],
        Extraversion_minus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "indirect"
        }, {
            perceived_negatively: true,
            word: "unenergetic"
        }, {
            perceived_negatively: true,
            word: "sluggish"
        }, {
            perceived_negatively: true,
            word: "nonpersistent"
        }, {
            perceived_negatively: true,
            word: "vague"
        }],
        Extraversion_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "restrained"
        }, {
            perceived_negatively: false,
            word: "serious"
        }, {
            perceived_negatively: false,
            word: "discreet"
        }, {
            perceived_negatively: false,
            word: "cautious"
        }, {
            perceived_negatively: false,
            word: "principled"
        }],
        Extraversion_minus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "tranquil"
        }, {
            perceived_negatively: false,
            word: "sedate"
        }, {
            perceived_negatively: false,
            word: "placid"
        }, {
            perceived_negatively: false,
            word: "impartial"
        }, {
            perceived_negatively: false,
            word: "unassuming"
        }, {
            perceived_negatively: false,
            word: "acquiescent"
        }],
        Extraversion_minus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "guarded"
        }, {
            perceived_negatively: false,
            word: "pessimistic"
        }, {
            perceived_negatively: false,
            word: "secretive"
        }, {
            perceived_negatively: true,
            word: "cowardly"
        }, {
            perceived_negatively: false,
            word: "secretive"
        }],
        Extraversion_minus_Openness_minus: [{
            perceived_negatively: false,
            word: "somber"
        }, {
            perceived_negatively: true,
            word: "meek"
        }, {
            perceived_negatively: true,
            word: "unadventurous"
        }, {
            perceived_negatively: false,
            word: "passive"
        }, {
            perceived_negatively: true,
            word: "apathetic"
        }, {
            perceived_negatively: false,
            word: "docile"
        }],
        Extraversion_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "inner-directed"
        }, {
            perceived_negatively: false,
            word: "introspective"
        }, {
            perceived_negatively: false,
            word: "meditative"
        }, {
            perceived_negatively: false,
            word: "contemplating"
        }, {
            perceived_negatively: false,
            word: "self-examining"
        }],
        Extraversion_plus_Agreeableness_minus: [{
            perceived_negatively: false,
            word: "opinionated"
        }, {
            perceived_negatively: true,
            word: "forceful"
        }, {
            perceived_negatively: true,
            word: "domineering"
        }, {
            perceived_negatively: true,
            word: "boastful"
        }, {
            perceived_negatively: true,
            word: "bossy"
        }, {
            perceived_negatively: false,
            word: "dominant"
        }, {
            perceived_negatively: false,
            word: "cunning"
        }],
        Extraversion_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "social"
        }, {
            perceived_negatively: false,
            word: "energetic"
        }, {
            perceived_negatively: false,
            word: "enthusiastic"
        }, {
            perceived_negatively: false,
            word: "communicative"
        }, {
            perceived_negatively: false,
            word: "vibrant"
        }, {
            perceived_negatively: false,
            word: "spirited"
        }, {
            perceived_negatively: false,
            word: "magnetic"
        }, {
            perceived_negatively: false,
            word: "zestful"
        }],
        Extraversion_plus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "boisterous"
        }, {
            perceived_negatively: false,
            word: "mischievous"
        }, {
            perceived_negatively: false,
            word: "exhibitionistic"
        }, {
            perceived_negatively: false,
            word: "gregarious"
        }, {
            perceived_negatively: false,
            word: "demonstrative"
        }],
        Extraversion_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "active"
        }, {
            perceived_negatively: false,
            word: "competitive"
        }, {
            perceived_negatively: false,
            word: "persistent"
        }, {
            perceived_negatively: false,
            word: "ambitious"
        }, {
            perceived_negatively: false,
            word: "purposeful"
        }],
        Extraversion_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "confident"
        }, {
            perceived_negatively: false,
            word: "bold"
        }, {
            perceived_negatively: false,
            word: "assured"
        }, {
            perceived_negatively: false,
            word: "uninhibited"
        }, {
            perceived_negatively: false,
            word: "courageous"
        }, {
            perceived_negatively: false,
            word: "brave"
        }, {
            perceived_negatively: false,
            word: "self-satisfied"
        }, {
            perceived_negatively: false,
            word: "vigorous"
        }, {
            perceived_negatively: false,
            word: "strong"
        }],
        Extraversion_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "explosive"
        }, {
            perceived_negatively: true,
            word: "wordy"
        }, {
            perceived_negatively: false,
            word: "extravagant"
        }, {
            perceived_negatively: true,
            word: "volatile"
        }, {
            perceived_negatively: false,
            word: "flirtatious"
        }],
        Extraversion_plus_Openness_minus: [{
            perceived_negatively: true,
            word: "verbose"
        }, {
            perceived_negatively: true,
            word: "unscrupulous"
        }, {
            perceived_negatively: true,
            word: "pompous"
        }],
        Extraversion_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "expressive"
        }, {
            perceived_negatively: false,
            word: "candid"
        }, {
            perceived_negatively: false,
            word: "dramatic"
        }, {
            perceived_negatively: false,
            word: "spontaneous"
        }, {
            perceived_negatively: false,
            word: "witty"
        }, {
            perceived_negatively: false,
            word: "opportunistic"
        }, {
            perceived_negatively: false,
            word: "independent"
        }],
        Neuroticism_minus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "unemotional"
        }, {
            perceived_negatively: true,
            word: "insensitive"
        }, {
            perceived_negatively: true,
            word: "unaffectionate"
        }, {
            perceived_negatively: true,
            word: "passionless"
        }],
        Neuroticism_minus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "patient"
        }, {
            perceived_negatively: false,
            word: "relaxed"
        }, {
            perceived_negatively: false,
            word: "undemanding"
        }, {
            perceived_negatively: false,
            word: "down-to-earth"
        }, {
            perceived_negatively: false,
            word: "optimistic"
        }, {
            perceived_negatively: false,
            word: "conceitless"
        }, {
            perceived_negatively: false,
            word: "uncritical"
        }, {
            perceived_negatively: false,
            word: "unpretentious"
        }],
        Neuroticism_minus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "informal"
        }, {
            perceived_negatively: false,
            word: "low-key"
        }],
        Neuroticism_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "rational"
        }, {
            perceived_negatively: false,
            word: "objective"
        }, {
            perceived_negatively: false,
            word: "steady"
        }, {
            perceived_negatively: false,
            word: "logical"
        }, {
            perceived_negatively: false,
            word: "decisive"
        }, {
            perceived_negatively: false,
            word: "poised"
        }, {
            perceived_negatively: false,
            word: "concise"
        }, {
            perceived_negatively: false,
            word: "thorough"
        }, {
            perceived_negatively: false,
            word: "economical"
        }, {
            perceived_negatively: false,
            word: "self-disciplined"
        }],
        Neuroticism_minus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "unassuming"
        }, {
            perceived_negatively: true,
            word: "unexcitable"
        }, {
            perceived_negatively: false,
            word: "placid"
        }, {
            perceived_negatively: false,
            word: "tranquil"
        }],
        Neuroticism_minus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "unselfconscious"
        }, {
            perceived_negatively: false,
            word: "weariless"
        }, {
            perceived_negatively: false,
            word: "indefatigable"
        }],
        Neuroticism_minus_Openness_minus: [{
            perceived_negatively: false,
            word: "imperturbable"
        }, {
            perceived_negatively: true,
            word: "insensitive"
        }],
        Neuroticism_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "heartfelt"
        }, {
            perceived_negatively: false,
            word: "versatile"
        }, {
            perceived_negatively: false,
            word: "creative"
        }, {
            perceived_negatively: false,
            word: "intellectual"
        }, {
            perceived_negatively: false,
            word: "insightful"
        }],
        Neuroticism_plus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "temperamental"
        }, {
            perceived_negatively: true,
            word: "irritable"
        }, {
            perceived_negatively: true,
            word: "quarrelsome"
        }, {
            perceived_negatively: true,
            word: "impatient"
        }, {
            perceived_negatively: true,
            word: "grumpy"
        }, {
            perceived_negatively: true,
            word: "crabby"
        }, {
            perceived_negatively: true,
            word: "cranky"
        }],
        Neuroticism_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "emotional"
        }, {
            perceived_negatively: true,
            word: "gullible"
        }, {
            perceived_negatively: false,
            word: "affectionate"
        }, {
            perceived_negatively: false,
            word: "sensitive"
        }, {
            perceived_negatively: false,
            word: "soft"
        }],
        Neuroticism_plus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "compulsive"
        }, {
            perceived_negatively: true,
            word: "nosey"
        }, {
            perceived_negatively: true,
            word: "self-indulgent"
        }, {
            perceived_negatively: true,
            word: "forgetful"
        }, {
            perceived_negatively: true,
            word: "impulsive"
        }],
        Neuroticism_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "particular"
        }, {
            perceived_negatively: true,
            word: "high-strung"
        }],
        Neuroticism_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "guarded"
        }, {
            perceived_negatively: true,
            word: "fretful"
        }, {
            perceived_negatively: true,
            word: "insecure"
        }, {
            perceived_negatively: true,
            word: "pessimistic"
        }, {
            perceived_negatively: false,
            word: "secretive"
        }, {
            perceived_negatively: true,
            word: "fearful"
        }, {
            perceived_negatively: true,
            word: "negativistic"
        }, {
            perceived_negatively: false,
            word: "self-critical"
        }],
        Neuroticism_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "excitable"
        }, {
            perceived_negatively: true,
            word: "wordy"
        }, {
            perceived_negatively: false,
            word: "flirtatious"
        }, {
            perceived_negatively: true,
            word: "explosive"
        }, {
            perceived_negatively: false,
            word: "extravagant"
        }, {
            perceived_negatively: true,
            word: "volatile"
        }],
        Neuroticism_plus_Openness_minus: [{
            perceived_negatively: false,
            word: "easily rattled"
        }, {
            perceived_negatively: false,
            word: "easily irked"
        }, {
            perceived_negatively: false,
            word: "apprehensive"
        }],
        Neuroticism_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "excitable"
        }, {
            perceived_negatively: false,
            word: "passionate"
        }, {
            perceived_negatively: false,
            word: "sensual"
        }],
        Openness_minus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "coarse"
        }, {
            perceived_negatively: true,
            word: "tactless"
        }, {
            perceived_negatively: true,
            word: "curt"
        }, {
            perceived_negatively: true,
            word: "narrow-minded"
        }, {
            perceived_negatively: true,
            word: "callous"
        }],
        Openness_minus_Agreeableness_plus: [{
            perceived_negatively: true,
            word: "simple"
        }, {
            perceived_negatively: true,
            word: "dependent"
        }],
        Openness_minus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "shortsighted"
        }, {
            perceived_negatively: false,
            word: "foolhardy"
        }, {
            perceived_negatively: true,
            word: "illogical"
        }, {
            perceived_negatively: true,
            word: "immature"
        }, {
            perceived_negatively: true,
            word: "haphazard"
        }, {
            perceived_negatively: false,
            word: "lax"
        }, {
            perceived_negatively: true,
            word: "flippant"
        }],
        Openness_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "conventional"
        }, {
            perceived_negatively: false,
            word: "traditional"
        }],
        Openness_minus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "predictable"
        }, {
            perceived_negatively: true,
            word: "unimaginative"
        }, {
            perceived_negatively: false,
            word: "somber"
        }, {
            perceived_negatively: true,
            word: "apathetic"
        }, {
            perceived_negatively: true,
            word: "unadventurous"
        }],
        Openness_minus_Extraversion_plus: [{
            perceived_negatively: true,
            word: "verbose"
        }, {
            perceived_negatively: true,
            word: "unscrupulous"
        }, {
            perceived_negatively: true,
            word: "pompous"
        }],
        Openness_minus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "imperturbable"
        }, {
            perceived_negatively: true,
            word: "insensitive"
        }],
        Openness_minus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "easily rattled"
        }, {
            perceived_negatively: false,
            word: "easily irked"
        }, {
            perceived_negatively: false,
            word: "apprehensive"
        }],
        Openness_plus_Agreeableness_minus: [{
            perceived_negatively: false,
            word: "shrewd"
        }, {
            perceived_negatively: false,
            word: "eccentric"
        }, {
            perceived_negatively: false,
            word: "individualistic"
        }],
        Openness_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "idealistic"
        }, {
            perceived_negatively: false,
            word: "diplomatic"
        }, {
            perceived_negatively: false,
            word: "deep"
        }, {
            perceived_negatively: false,
            word: "tactful"
        }, {
            perceived_negatively: false,
            word: "genial"
        }],
        Openness_plus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "unconventional"
        }, {
            perceived_negatively: false,
            word: "quirky"
        }],
        Openness_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "analytical"
        }, {
            perceived_negatively: false,
            word: "perceptive"
        }, {
            perceived_negatively: false,
            word: "informative"
        }, {
            perceived_negatively: false,
            word: "articulate"
        }, {
            perceived_negatively: false,
            word: "dignified"
        }, {
            perceived_negatively: false,
            word: "cultured"
        }],
        Openness_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "introspective"
        }, {
            perceived_negatively: false,
            word: "meditative"
        }, {
            perceived_negatively: false,
            word: "contemplating"
        }, {
            perceived_negatively: false,
            word: "self-examining"
        }, {
            perceived_negatively: false,
            word: "inner-directed"
        }],
        Openness_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "worldly"
        }, {
            perceived_negatively: false,
            word: "theatrical"
        }, {
            perceived_negatively: false,
            word: "eloquent"
        }, {
            perceived_negatively: false,
            word: "inquisitive"
        }, {
            perceived_negatively: false,
            word: "intense"
        }],
        Openness_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "creative"
        }, {
            perceived_negatively: false,
            word: "intellectual"
        }, {
            perceived_negatively: false,
            word: "insightful"
        }, {
            perceived_negatively: false,
            word: "versatile"
        }, {
            perceived_negatively: false,
            word: "inventive"
        }],
        Openness_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "passionate"
        }, {
            perceived_negatively: false,
            word: "excitable"
        }, {
            perceived_negatively: false,
            word: "sensual"
        }]
    },
    values: {
        Hedonism: [{
            Term: "Taking pleasure in life",
            LowDescription: "You prefer activities with a purpose greater than just personal enjoyment",
            HighDescription: "You are highly motivated to enjoy life to its fullest"
        }],
        "Self-transcendence": [{
            Term: "Helping others",
            LowDescription: "You think people can handle their own business without interference",
            HighDescription: "You think it is important to take care of the people around you"
        }, {
            Term: "Fairness",
            LowDescription: "You believe that people create their own opportunities",
            HighDescription: "You believe in social justice and equality for all"
        }, {
            Term: "Social justice",
            LowDescription: "You believe that people create their own opportunities",
            HighDescription: "You believe in social justice and equality for all"
        }, {
            Term: "Equality",
            LowDescription: "You believe that people create their own opportunities",
            HighDescription: "You believe in social justice and equality for all"
        }, {
            Term: "Community service",
            LowDescription: "You think people can handle their own business without interference",
            HighDescription: "You think it is important to take care of the people around you"
        }],
        Conservation: [{
            Term: "Tradition",
            LowDescription: "You care more about making your own path than following what others have done",
            HighDescription: "You highly respect the groups you belong to and follow their guidance"
        }, {
            Term: "Harmony",
            LowDescription: "You decide what is right based on your beliefs, not what other people think",
            HighDescription: "You know rules are there for a reason, and you try never to break them"
        }, {
            Term: "Humility",
            LowDescription: "You decide what is right based on your beliefs, not what other people think",
            HighDescription: "You see worth in deferring to others"
        }, {
            Term: "Social norms",
            LowDescription: "You decide what is right based on your beliefs, not what other people think",
            HighDescription: "You know rules are there for a reason, and you try never to break them"
        }, {
            Term: "Security",
            LowDescription: "You believe that security is worth sacrificing to achieve other goals",
            HighDescription: "You believe that safety and security are important things to safeguard"
        }, {
            Term: "Safety",
            LowDescription: "You believe that safety is worth sacrificing to achieve other goals",
            HighDescription: "You believe that safety and security are important things to safeguard"
        }],
        "Openness-to-change": [{
            Term: "Independence",
            LowDescription: "You welcome when others direct your activities for you",
            HighDescription: "You like to set your own goals to decide how to best achieve them"
        }, {
            Term: "Excitement",
            LowDescription: "You would rather stick with things you already know you like than risk trying something new and risky",
            HighDescription: "You are eager to search out new and exciting experiences"
        }, {
            Term: "Creativity",
            LowDescription: "You would rather stick with things you already know you like than risk trying something new and risky",
            HighDescription: "You are eager to search out new and exciting experiences"
        }, {
            Term: "Curiosity",
            LowDescription: "You would rather stick with things you already know you like than risk trying something new and risky",
            HighDescription: "You are eager to search out new and exciting experiences"
        }, {
            Term: "Self-direction",
            LowDescription: "You welcome when others direct your activities for you",
            HighDescription: "You like to set your own goals to decide how to best achieve them"
        }, {
            Term: "Freedom",
            LowDescription: "You welcome when others direct your activities for you",
            HighDescription: "You like to set your own goals to decide how to best achieve them"
        }],
        "Self-enhancement": [{
            Term: "Achieving success",
            LowDescription: "You make decisions with little regard for how they show off your talents",
            HighDescription: "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
        }, {
            Term: "Gaining social status",
            LowDescription: "You are comfortable with your social status and don't feel a strong need to improve it",
            HighDescription: "You put substantial effort into improving your status and public image"
        }, {
            Term: "Ambition",
            LowDescription: "You are comfortable with your social status and don't feel a strong need to improve it",
            HighDescription: "You feel it is important to push forward towards goals"
        }, {
            Term: "High achievement",
            LowDescription: "You make decisions with little regard for how they show off your talents",
            HighDescription: "You seek out opportunities to improve yourself and demonstrate that you are a capable person"
        }]
    }
};

},{}],5:[function(_dereq_,module,exports){
/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

module.exports = {
    facets: {
        "Artistic-interests": {
            HighTerm: "Una persona que aprecia el arte",
            Big5: "Apertura a experiencias",
            HighDescription: "Disfruta de la belleza y busca experiencias creativas",
            LowDescription: "Le interesan menos las actividades artísticas o creativas que la mayoría de las personas que participaron de nuestras encuestas",
            LowTerm: "Una persona desinteresada por el arte"
        },
        Dutifulness: {
            HighTerm: "Una persona que cumple con su deber",
            Big5: "Responsabilidad",
            HighDescription: "Toma las reglas y las obligaciones seriamente, aún cuando son inconvenientes",
            LowDescription: "Hace lo que quiere sin importar las reglas y las obligaciones",
            LowTerm: "Despreocupado"
        },
        Cooperation: {
            HighTerm: "Acomodaticio",
            Big5: "Afabilidad",
            HighDescription: "Es fácil de complacer e intenta evitar posibles confrontaciones",
            LowDescription: "No te importa contradecir a los demás",
            LowTerm: "Contrario"
        },
        "Self-consciousness": {
            HighTerm: "Consciente de sí mismo",
            Big5: "Rango emocional",
            HighDescription: "Es sensible a lo que las demás personas podrían estar pensando acerca de usted",
            LowDescription: "Es difícil de avergonzar y confía en sí mismo la mayor parte del tiempo",
            LowTerm: "Confiado"
        },
        Orderliness: {
            HighTerm: "Organizado",
            Big5: "Responsabilidad",
            HighDescription: "Siente una fuerte necesidad de mantener una vida estructurada",
            LowDescription: "No le dedica mucho tiempo a organizarse en su vida diaria",
            LowTerm: "Desestructurado"
        },
        Sympathy: {
            HighTerm: "Empático",
            Big5: "Afabilidad",
            HighDescription: "Siente lo que otros sienten y es compasivo con ellos",
            LowDescription: "Cree que las personas deberían confiar más en sí mismos que en otras personas",
            LowTerm: "Una persona de gran fortaleza"
        },
        "Activity-level": {
            HighTerm: "Energético",
            Big5: "Extraversión",
            HighDescription: "Disfruta llevar un ritmo de vida acelerado, una agenda ocupada con muchas actividades",
            LowDescription: "Aprecia llevar un ritmo de vida relajado",
            LowTerm: "Relajado"
        },
        "Self-efficacy": {
            HighTerm: "Seguro de sí mismo",
            Big5: "Responsabilidad",
            HighDescription: "Siente que tiene la habilidad de triunfar en las tareas que se propone realizar",
            LowDescription: "Frecuentemente duda acerca de su habilidad para alcanzar sus metas",
            LowTerm: "Inseguro de sí misma"
        },
        "Self-discipline": {
            HighTerm: "Persistente",
            Big5: "Responsabilidad",
            HighDescription: "Puede hacer frente y llevar a cabo tareas difíciles",
            LowDescription: "Le da trabajo llevar adelante tareas difíciles por un largo periodo de tiempo",
            LowTerm: "Intermitente"
        },
        Altruism: {
            HighTerm: "Altruista",
            Big5: "Afabilidad",
            HighDescription: "Se siente realizado ayudando a otros y dejará sus cosas de lado para hacerlo",
            LowDescription: "Está más enfocado en cuidar de usted mismo que en dedicar tiempo a otras personas",
            LowTerm: "Individualista"
        },
        Cautiousness: {
            HighTerm: "Prudente",
            Big5: "Responsabilidad",
            HighDescription: "Piensa cuidadosamente acerca de sus decisiones antes de tomarlas",
            LowDescription: "Prefiere tomar acción inmediatamente antes que invertir tiempo deliberando qué decisión tomar",
            LowTerm: "Audaz"
        },
        Morality: {
            HighTerm: "Intransigente",
            Big5: "Afabilidad",
            HighDescription: "Piensa que está mal tomar ventaja de los demás para avanzar",
            LowDescription: "Utiliza cualquier medio posible para conseguir lo que quiere y está cómodo con ello",
            LowTerm: "Una persona comprometida"
        },
        Anxiety: {
            HighTerm: "Propenso a preocuparse",
            Big5: "Rango emocional",
            HighDescription: "Tiende a preocuparse acerca de las cosas que podrían pasar",
            LowDescription: "Tiende a sentirse tranquilo y a confiar en sí mismo",
            LowTerm: "Seguro de sí mismo"
        },
        Emotionality: {
            HighTerm: "Emocionalmente consciente",
            Big5: "Apertura a experiencias",
            HighDescription: "Es consciente de sus sentimientos y de cómo expresarlos",
            LowDescription: "No piensa frecuentemente acerca de sus emociones ni las expresa abiertamente",
            LowTerm: "Desapasionado"
        },
        Vulnerability: {
            HighTerm: "Susceptible al estrés",
            Big5: "Rango emocional",
            HighDescription: "Se abruma fácilmente en situaciones de estrés",
            LowDescription: "Maneja eventos inesperados con calma y efectivamente",
            LowTerm: "Una persona que mantiene la calma bajo presión"
        },
        Immoderation: {
            HighTerm: "Hedonista",
            Big5: "Rango emocional",
            HighDescription: "Siente fuertemente sus deseos y es fácilmente tentado por ellos",
            LowDescription: "Controla sus deseos, los cuales no son particularmente intensos",
            LowTerm: "Sereno"
        },
        Friendliness: {
            HighTerm: "Extrovertido",
            Big5: "Extraversión",
            HighDescription: "Hace amigos fácilmente y se siente cómodo estando con otras personas",
            LowDescription: "Es una persona reservada y no deja a muchas personas entrar",
            LowTerm: "Reservado"
        },
        "Achievement-striving": {
            HighTerm: "Una persona motivada",
            Big5: "Responsabilidad",
            HighDescription: "Se propone grandes metas y trabaja duro para alcanzarlas",
            LowDescription: "Está conforme con sus logros y no siente la necesidad de ponerse metas más ambiciosas",
            LowTerm: "Una persona satisfecha"
        },
        Modesty: {
            HighTerm: "Modesto",
            Big5: "Afabilidad",
            HighDescription: "Se siente cómodo siendo el centro de atención",
            LowDescription: "Se tiene una estima alta, se encuentra satisfecho con quién es",
            LowTerm: "Orgulloso"
        },
        "Excitement-seeking": {
            HighTerm: "Una persona que busca la emoción",
            Big5: "Extraversión",
            HighDescription: "Le emociona tomar riesgos y se aburre si no se ve envuelto en mucha acción",
            LowDescription: "Prefiere las actividades tranquilas, pacíficas y seguras",
            LowTerm: "Una persona que busca la calma"
        },
        Assertiveness: {
            HighTerm: "Asertivo",
            Big5: "Extraversión",
            HighDescription: "Tiende a expresarse y a hacerse cargo de las situaciones, y se encuentra cómodo liderando grupos",
            LowDescription: "Prefiere escuchar antes que hablar, especialmente en situaciones de grupo",
            LowTerm: "Callado"
        },
        Adventurousness: {
            HighTerm: "Audaz",
            Big5: "Apertura a experiencias",
            HighDescription: "Está deseoso de tener nuevas experiencias",
            LowDescription: "Disfruta de las rutinas familiares y prefiere no desviarse de ellas",
            LowTerm: "Consistente"
        },
        Gregariousness: {
            HighTerm: "Sociable",
            Big5: "Extraversión",
            HighDescription: "Disfruta estando en compañía de otros",
            LowDescription: "Tiene un fuerte deseo de tener tiempo para usted mismo",
            LowTerm: "Independiente"
        },
        Cheerfulness: {
            HighTerm: "Alegre",
            Big5: "Extraversión",
            HighDescription: "Es una persona alegre y comparte esa alegría con el mundo",
            LowDescription: "Generalmente es serio y no hace muchas bromas",
            LowTerm: "Solemne"
        },
        Imagination: {
            HighTerm: "Imaginativo",
            Big5: "Apertura a experiencias",
            HighDescription: "Su imaginación vuela libre",
            LowDescription: "Prefiere hechos antes que la fantasía",
            LowTerm: "Una persona con los pies en la tierra"
        },
        Depression: {
            HighTerm: "Melancólico",
            Big5: "Rango emocional",
            HighDescription: "Piensa bastante seguido en las cosas con las que está disconforme",
            LowDescription: "Generalmente se acepta a usted mismo tal cual es",
            LowTerm: "Una persona satisfecha"
        },
        Anger: {
            HighTerm: "Intenso",
            Big5: "Rango emocional",
            HighDescription: "Tiene un temperamento fuerte, especialmente cuando las cosas no funcionan como espera",
            LowDescription: "Es difícil hacerle enojar",
            LowTerm: "Apacible"
        },
        Trust: {
            HighTerm: "Una persona que confía en los demás",
            Big5: "Afabilidad",
            HighDescription: "Cree lo mejor de los demás y confía fácilmente en las personas",
            LowDescription: "Se cuida de las intenciones de los demás y no confía fácilmente",
            LowTerm: "Cuidadoso con los demás"
        },
        Intellect: {
            HighTerm: "Filosófico",
            Big5: "Apertura a experiencias",
            HighDescription: "Está abierto a nuevas ideas, le intrigan y ama explorarlas",
            LowDescription: "Prefiere lidiar con el mundo tal cual es, raramente considerando ideas abstractas",
            LowTerm: "Concreto"
        },
        Liberalism: {
            HighTerm: "Desafiante ante la autoridad",
            Big5: "Apertura a experiencias",
            HighDescription: "Prefiere desafiar a la autoridad y  a los valores tradicionales para lograr cambios positivos",
            LowDescription: "Prefiere seguir tradiciones para mantener una sensación de estabilidad",
            LowTerm: "Respetuoso de la autoridad"
        }
    },
    needs: {
        Stability: ["estabilidad", "autenticidad", "integridad"],
        Practicality: ["eficiencia", "practicidad", "valor agregado", "conveniencia"],
        Love: ["afinidad", "conexión"],
        "Self-expression": ["auto-expresión", "empoderamiento personal", "fortaleza personal"],
        Challenge: ["prestigio", "competencia", "gloria"],
        Closeness: ["pertenencia", "nostalgia", "intimidad"],
        Liberty: ["modernidad", "expansión de posibilidades", "poder escapar", "espontaneidad", "novedad"],
        Excitement: ["regocijo", "anticipación", "cebración"],
        Ideal: ["sofisticación", "espiritualidad", "superioridad", "realización"],
        Harmony: ["bienestar", "cortesía", "civilidad"],
        Curiosity: ["descubrimiento", "maestría", "adquisición de conocimiento"],
        Structure: ["organización", "franqueza", "claridad", "confiabilidad"]
    },
    phrases: {
        "You are %s": "Usted es %s",
        "You are %s and %s": "Usted es %s y %s",
        "You are %s, %s and %s": "Usted es %s, %s y %s",
        "And you are %s": "Y usted es %s",
        "You are relatively unconcerned with %s": "Usted es relativamente indiferente con %s",
        "You are relatively unconcerned with both %s and %s": "Usted es relativamente indiferente con %s y %s",
        "You don't find %s to be particularly motivating for you": "Usted no encuentra a %s particularmente motivante para usted",
        "You don't find either %s or %s to be particularly motivating for you": "Usted no encuentra a %s o %s particularmente motivantes para usted",
        "You value both %s a bit": "Usted valora a %s un poco",
        "You value both %s and %s a bit": "Usted valora a %s y %s un poco",
        "You consider %s to guide a large part of what you do": "Usted considera que %s lo guia en gran parte de lo que hace",
        "You consider both %s and %s to guide a large part of what you do": "Usted considera que %s y %s lo guian en gran parte de lo que hace",
        "And %s": "Y %s",
        "Experiences that make you feel high %s are generally unappealing to you": "No le agradan las experiencias que le dan una gran sensación de %s",
        "Experiences that give a sense of %s hold some appeal to you": "Le agradan las experiencias que le dan una sensación de %s",
        "You are motivated to seek out experiences that provide a strong feeling of %s": "Está motivado a buscar experiencias que lo provean de una fuerte sensación de %s",
        "Your choices are driven by a desire for %s": "Sus elecciones están determinadas por un deseo de %s",
        "a bit %s": "un poco %s",
        "somewhat %s": "algo %s",
        "can be perceived as %s": "puede ser percibido como %s"
    },
    traits: {
        Agreeableness_minus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "desconsiderado"
        }, {
            perceived_negatively: true,
            word: "descortés"
        }, {
            perceived_negatively: true,
            word: "desconfiado"
        }, {
            perceived_negatively: true,
            word: "poco cooperativo"
        }, {
            perceived_negatively: true,
            word: "irreflexivo"
        }],
        Agreeableness_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "estricto"
        }, {
            perceived_negatively: false,
            word: "rígido"
        }, {
            perceived_negatively: true,
            word: "duro"
        }],
        Agreeableness_minus_Extraversion_minus: [{
            perceived_negatively: true,
            word: "cínico"
        }, {
            perceived_negatively: true,
            word: "cauto con los demás"
        }, {
            perceived_negatively: true,
            word: "solitario"
        }, {
            perceived_negatively: true,
            word: "desapegado"
        }, {
            perceived_negatively: true,
            word: "impersonal"
        }, {
            perceived_negatively: true,
            word: "sombrío"
        }],
        Agreeableness_minus_Extraversion_plus: [{
            perceived_negatively: true,
            word: "obstinado"
        }, {
            perceived_negatively: true,
            word: "abrupto"
        }, {
            perceived_negatively: true,
            word: "crudo"
        }, {
            perceived_negatively: true,
            word: "combativo"
        }, {
            perceived_negatively: true,
            word: "duro"
        }, {
            perceived_negatively: false,
            word: "astuto"
        }, {
            perceived_negatively: true,
            word: "manipulador"
        }, {
            perceived_negatively: true,
            word: "hosco"
        }, {
            perceived_negatively: true,
            word: "taimado"
        }],
        Agreeableness_minus_Neuroticism_minus: [{
            perceived_negatively: true,
            word: "insensible"
        }, {
            perceived_negatively: true,
            word: "poco afectuoso"
        }, {
            perceived_negatively: true,
            word: "desapasionado"
        }, {
            perceived_negatively: true,
            word: "una persona sin emociones"
        }],
        Agreeableness_minus_Neuroticism_plus: [{
            perceived_negatively: true,
            word: "crítico"
        }, {
            perceived_negatively: true,
            word: "egoísta"
        }, {
            perceived_negatively: true,
            word: "de mal genio"
        }, {
            perceived_negatively: true,
            word: "antagonista"
        }, {
            perceived_negatively: true,
            word: "gruñón"
        }, {
            perceived_negatively: true,
            word: "amargado"
        }, {
            perceived_negatively: true,
            word: "desagradable"
        }, {
            perceived_negatively: true,
            word: "exigente"
        }],
        Agreeableness_minus_Openness_minus: [{
            perceived_negatively: true,
            word: "tosco"
        }, {
            perceived_negatively: true,
            word: "una persona sin tacto"
        }, {
            perceived_negatively: true,
            word: "brusco"
        }, {
            perceived_negatively: true,
            word: "cerrado"
        }, {
            perceived_negatively: true,
            word: "áspero"
        }, {
            perceived_negatively: true,
            word: "implacable"
        }, {
            perceived_negatively: true,
            word: "poco caritativo"
        }, {
            perceived_negatively: true,
            word: "vengativo"
        }],
        Agreeableness_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "perspicaz"
        }, {
            perceived_negatively: false,
            word: "excéntrico"
        }, {
            perceived_negatively: false,
            word: "individualista"
        }],
        Agreeableness_plus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "sobrio"
        }, {
            perceived_negatively: false,
            word: "modesto"
        }],
        Agreeableness_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "servicial"
        }, {
            perceived_negatively: false,
            word: "cooperativo"
        }, {
            perceived_negatively: false,
            word: "considerado"
        }, {
            perceived_negatively: false,
            word: "respetuoso"
        }, {
            perceived_negatively: false,
            word: "cortés"
        }, {
            perceived_negatively: false,
            word: "sensato"
        }, {
            perceived_negatively: false,
            word: "atento"
        }, {
            perceived_negatively: false,
            word: "considerado"
        }, {
            perceived_negatively: false,
            word: "leal"
        }, {
            perceived_negatively: false,
            word: "moral"
        }],
        Agreeableness_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "conmovible"
        }, {
            perceived_negatively: false,
            word: "agradable"
        }, {
            perceived_negatively: false,
            word: "servicial"
        }, {
            perceived_negatively: false,
            word: "humilde"
        }, {
            perceived_negatively: true,
            word: "indulgente"
        }],
        Agreeableness_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "efervescente"
        }, {
            perceived_negatively: false,
            word: "alegre"
        }, {
            perceived_negatively: false,
            word: "amistoso"
        }, {
            perceived_negatively: false,
            word: "alegre"
        }, {
            perceived_negatively: false,
            word: "jovial"
        }, {
            perceived_negatively: false,
            word: "jocoso"
        }],
        Agreeableness_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "generoso"
        }, {
            perceived_negatively: false,
            word: "agradable"
        }, {
            perceived_negatively: false,
            word: "tolerante"
        }, {
            perceived_negatively: false,
            word: "pacífico"
        }, {
            perceived_negatively: false,
            word: "flexible"
        }, {
            perceived_negatively: false,
            word: "fácil de tratar"
        }, {
            perceived_negatively: false,
            word: "justo"
        }, {
            perceived_negatively: false,
            word: "caritativo"
        }, {
            perceived_negatively: false,
            word: "confiable"
        }],
        Agreeableness_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "sentimental"
        }, {
            perceived_negatively: false,
            word: "cariñoso"
        }, {
            perceived_negatively: false,
            word: "sensible"
        }, {
            perceived_negatively: false,
            word: "tierno"
        }, {
            perceived_negatively: false,
            word: "apasionado"
        }, {
            perceived_negatively: false,
            word: "romántico"
        }],
        Agreeableness_plus_Openness_minus: [{
            perceived_negatively: true,
            word: "dependiente"
        }, {
            perceived_negatively: true,
            word: "simple"
        }],
        Agreeableness_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "amistoso"
        }, {
            perceived_negatively: false,
            word: "una persona con tacto"
        }, {
            perceived_negatively: false,
            word: "diplomático"
        }, {
            perceived_negatively: false,
            word: "profundo"
        }, {
            perceived_negatively: false,
            word: "idealista"
        }],
        Conscientiousness_minus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "arrebatado"
        }, {
            perceived_negatively: true,
            word: "poco cooperativo"
        }, {
            perceived_negatively: true,
            word: "poco fiable"
        }, {
            perceived_negatively: true,
            word: "desconfiado"
        }, {
            perceived_negatively: true,
            word: "irreflexivo"
        }],
        Conscientiousness_minus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "poco pretencioso"
        }, {
            perceived_negatively: false,
            word: "modesto"
        }],
        Conscientiousness_minus_Extraversion_minus: [{
            perceived_negatively: true,
            word: "indeciso"
        }, {
            perceived_negatively: true,
            word: "una persona sin propósito"
        }, {
            perceived_negatively: false,
            word: "una persona sin carácter"
        }, {
            perceived_negatively: false,
            word: "una persona sin compromiso"
        }, {
            perceived_negatively: true,
            word: "poco ambicioso"
        }],
        Conscientiousness_minus_Extraversion_plus: [{
            perceived_negatively: true,
            word: "revoltoso"
        }, {
            perceived_negatively: false,
            word: "bullicioso"
        }, {
            perceived_negatively: true,
            word: "temerario"
        }, {
            perceived_negatively: true,
            word: "tumultuoso"
        }, {
            perceived_negatively: false,
            word: "demostrativo"
        }],
        Conscientiousness_minus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "informal"
        }, {
            perceived_negatively: false,
            word: "de bajo perfil"
        }],
        Conscientiousness_minus_Neuroticism_plus: [{
            perceived_negatively: true,
            word: "atolondrado"
        }, {
            perceived_negatively: true,
            word: "inconsistente"
        }, {
            perceived_negatively: true,
            word: "errático"
        }, {
            perceived_negatively: true,
            word: "olvidadizo"
        }, {
            perceived_negatively: true,
            word: "impulsivo"
        }, {
            perceived_negatively: true,
            word: "frívolo"
        }],
        Conscientiousness_minus_Openness_minus: [{
            perceived_negatively: false,
            word: "temerario"
        }, {
            perceived_negatively: true,
            word: "ilógico"
        }, {
            perceived_negatively: true,
            word: "inmaduro"
        }, {
            perceived_negatively: true,
            word: "azaroso"
        }, {
            perceived_negatively: false,
            word: "laxo"
        }, {
            perceived_negatively: true,
            word: "indisciplinado"
        }],
        Conscientiousness_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "poco convencional"
        }, {
            perceived_negatively: false,
            word: "peculiar"
        }],
        Conscientiousness_plus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "inflexible"
        }, {
            perceived_negatively: false,
            word: "estricto"
        }, {
            perceived_negatively: false,
            word: "rígido"
        }],
        Conscientiousness_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "confiable"
        }, {
            perceived_negatively: false,
            word: "responsable"
        }, {
            perceived_negatively: false,
            word: "seguro"
        }, {
            perceived_negatively: false,
            word: "educado"
        }, {
            perceived_negatively: false,
            word: "considerado"
        }],
        Conscientiousness_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "cauto"
        }, {
            perceived_negatively: false,
            word: "seguro"
        }, {
            perceived_negatively: false,
            word: "exacto"
        }, {
            perceived_negatively: false,
            word: "formal"
        }, {
            perceived_negatively: false,
            word: "ahorrativo"
        }, {
            perceived_negatively: false,
            word: "principista"
        }],
        Conscientiousness_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "ambicioso"
        }, {
            perceived_negatively: false,
            word: "alerta"
        }, {
            perceived_negatively: false,
            word: "firme"
        }, {
            perceived_negatively: false,
            word: "decidido"
        }, {
            perceived_negatively: false,
            word: "competitivo"
        }],
        Conscientiousness_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "minucioso"
        }, {
            perceived_negatively: false,
            word: "estable"
        }, {
            perceived_negatively: false,
            word: "consistente"
        }, {
            perceived_negatively: false,
            word: "disciplinado"
        }, {
            perceived_negatively: false,
            word: "lógico"
        }, {
            perceived_negatively: false,
            word: "decidido"
        }, {
            perceived_negatively: false,
            word: "controlado"
        }, {
            perceived_negatively: false,
            word: "conciso"
        }],
        Conscientiousness_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "detallista"
        }, {
            perceived_negatively: true,
            word: "excitable"
        }],
        Conscientiousness_plus_Openness_minus: [{
            perceived_negatively: false,
            word: "tradicional"
        }, {
            perceived_negatively: false,
            word: "convencional"
        }],
        Conscientiousness_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "sofisticado"
        }, {
            perceived_negatively: false,
            word: "perfeccionista"
        }, {
            perceived_negatively: false,
            word: "industrioso"
        }, {
            perceived_negatively: false,
            word: "digno"
        }, {
            perceived_negatively: false,
            word: "refinado"
        }, {
            perceived_negatively: false,
            word: "culto"
        }, {
            perceived_negatively: false,
            word: "previsor"
        }],
        Extraversion_minus_Agreeableness_minus: [{
            perceived_negatively: false,
            word: "escéptico"
        }, {
            perceived_negatively: false,
            word: "cauto con los demás"
        }, {
            perceived_negatively: true,
            word: "solitario"
        }, {
            perceived_negatively: true,
            word: "poco comunicativo"
        }, {
            perceived_negatively: true,
            word: "antisocial"
        }, {
            perceived_negatively: true,
            word: "sombrío"
        }, {
            perceived_negatively: true,
            word: "desinteresado"
        }, {
            perceived_negatively: false,
            word: "apartado"
        }],
        Extraversion_minus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "pacífico"
        }, {
            perceived_negatively: false,
            word: "humilde"
        }, {
            perceived_negatively: false,
            word: "sumiso"
        }, {
            perceived_negatively: false,
            word: "tímido"
        }, {
            perceived_negatively: false,
            word: "obediente"
        }, {
            perceived_negatively: false,
            word: "ingenuo"
        }],
        Extraversion_minus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "indirecto"
        }, {
            perceived_negatively: true,
            word: "débil"
        }, {
            perceived_negatively: true,
            word: "perezoso"
        }, {
            perceived_negatively: true,
            word: "poco persistente"
        }, {
            perceived_negatively: true,
            word: "vago"
        }],
        Extraversion_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "moderado"
        }, {
            perceived_negatively: false,
            word: "serio"
        }, {
            perceived_negatively: false,
            word: "discreto"
        }, {
            perceived_negatively: false,
            word: "cauteloso"
        }, {
            perceived_negatively: false,
            word: "principista"
        }],
        Extraversion_minus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "tranquilo"
        }, {
            perceived_negatively: false,
            word: "sosegado"
        }, {
            perceived_negatively: false,
            word: "plácido"
        }, {
            perceived_negatively: false,
            word: "imparcial"
        }, {
            perceived_negatively: false,
            word: "modesto"
        }, {
            perceived_negatively: false,
            word: "condescendiente"
        }],
        Extraversion_minus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "desconfiado"
        }, {
            perceived_negatively: false,
            word: "pesimista"
        }, {
            perceived_negatively: false,
            word: "reservado"
        }, {
            perceived_negatively: true,
            word: "cobarde"
        }, {
            perceived_negatively: false,
            word: "callado"
        }],
        Extraversion_minus_Openness_minus: [{
            perceived_negatively: false,
            word: "sombrío"
        }, {
            perceived_negatively: true,
            word: "manso"
        }, {
            perceived_negatively: true,
            word: "poco aventurero"
        }, {
            perceived_negatively: false,
            word: "pasivo"
        }, {
            perceived_negatively: true,
            word: "apático"
        }, {
            perceived_negatively: false,
            word: "dócil"
        }],
        Extraversion_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "una persona guiada por su propia consciencia y valores"
        }, {
            perceived_negatively: false,
            word: "introspectivo"
        }, {
            perceived_negatively: false,
            word: "pensativo"
        }, {
            perceived_negatively: false,
            word: "contemplativo"
        }, {
            perceived_negatively: false,
            word: "introspectivo"
        }],
        Extraversion_plus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "terco"
        }, {
            perceived_negatively: true,
            word: "vigoroso"
        }, {
            perceived_negatively: true,
            word: "dominador"
        }, {
            perceived_negatively: true,
            word: "presumido"
        }, {
            perceived_negatively: true,
            word: "mandón"
        }, {
            perceived_negatively: false,
            word: "dominante"
        }, {
            perceived_negatively: false,
            word: "astuto"
        }],
        Extraversion_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "social"
        }, {
            perceived_negatively: false,
            word: "enérgico"
        }, {
            perceived_negatively: false,
            word: "entusiasta"
        }, {
            perceived_negatively: false,
            word: "comunicativo"
        }, {
            perceived_negatively: false,
            word: "vibrante"
        }, {
            perceived_negatively: false,
            word: "espirituoso"
        }, {
            perceived_negatively: false,
            word: "magnético"
        }, {
            perceived_negatively: false,
            word: "entusiasta"
        }],
        Extraversion_plus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "bullicioso"
        }, {
            perceived_negatively: false,
            word: "travieso"
        }, {
            perceived_negatively: false,
            word: "exhibicionista"
        }, {
            perceived_negatively: false,
            word: "gregario"
        }, {
            perceived_negatively: false,
            word: "demostrativo"
        }],
        Extraversion_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "activo"
        }, {
            perceived_negatively: false,
            word: "competitivo"
        }, {
            perceived_negatively: false,
            word: "persistente"
        }, {
            perceived_negatively: false,
            word: "ambicioso"
        }, {
            perceived_negatively: false,
            word: "decidido"
        }],
        Extraversion_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "confiado"
        }, {
            perceived_negatively: false,
            word: "audaz"
        }, {
            perceived_negatively: false,
            word: "seguro"
        }, {
            perceived_negatively: false,
            word: "desinhibido"
        }, {
            perceived_negatively: false,
            word: "valiente"
        }, {
            perceived_negatively: false,
            word: "valiente"
        }, {
            perceived_negatively: false,
            word: "una persona satisfecha de si misma"
        }, {
            perceived_negatively: false,
            word: "vigoroso"
        }, {
            perceived_negatively: false,
            word: "fuerte"
        }],
        Extraversion_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "explosivo"
        }, {
            perceived_negatively: true,
            word: "verborrágico"
        }, {
            perceived_negatively: false,
            word: "extravagante"
        }, {
            perceived_negatively: true,
            word: "volátil"
        }, {
            perceived_negatively: false,
            word: "coqueto"
        }],
        Extraversion_plus_Openness_minus: [{
            perceived_negatively: true,
            word: "verborrágico"
        }, {
            perceived_negatively: true,
            word: "inescrupuloso"
        }, {
            perceived_negatively: true,
            word: "pomposo"
        }],
        Extraversion_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "expresivo"
        }, {
            perceived_negatively: false,
            word: "cándido"
        }, {
            perceived_negatively: false,
            word: "dramático"
        }, {
            perceived_negatively: false,
            word: "espontáneo"
        }, {
            perceived_negatively: false,
            word: "ingenioso"
        }, {
            perceived_negatively: false,
            word: "oportunista"
        }, {
            perceived_negatively: false,
            word: "independiente"
        }],
        Neuroticism_minus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "poco emocional"
        }, {
            perceived_negatively: true,
            word: "insensible"
        }, {
            perceived_negatively: true,
            word: "poco cariñoso"
        }, {
            perceived_negatively: true,
            word: "desapasionado"
        }],
        Neuroticism_minus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "paciente"
        }, {
            perceived_negatively: false,
            word: "relajado"
        }, {
            perceived_negatively: false,
            word: "poco exigente"
        }, {
            perceived_negatively: false,
            word: "realista"
        }, {
            perceived_negatively: false,
            word: "optimista"
        }, {
            perceived_negatively: false,
            word: "modesto"
        }, {
            perceived_negatively: false,
            word: "poco crítico"
        }, {
            perceived_negatively: false,
            word: "poco pretencioso"
        }],
        Neuroticism_minus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "informal"
        }, {
            perceived_negatively: false,
            word: "de perfil bajo"
        }],
        Neuroticism_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "racional"
        }, {
            perceived_negatively: false,
            word: "objetivo"
        }, {
            perceived_negatively: false,
            word: "estable"
        }, {
            perceived_negatively: false,
            word: "lógico"
        }, {
            perceived_negatively: false,
            word: "decidido"
        }, {
            perceived_negatively: false,
            word: "preparado"
        }, {
            perceived_negatively: false,
            word: "conciso"
        }, {
            perceived_negatively: false,
            word: "exhaustivo"
        }, {
            perceived_negatively: false,
            word: "económico"
        }, {
            perceived_negatively: false,
            word: "disciplinado"
        }],
        Neuroticism_minus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "modesto"
        }, {
            perceived_negatively: true,
            word: "poco excitable"
        }, {
            perceived_negatively: false,
            word: "plácido"
        }, {
            perceived_negatively: false,
            word: "tranquilo"
        }],
        Neuroticism_minus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "inconsciente de si mismo"
        }, {
            perceived_negatively: false,
            word: "incansable"
        }, {
            perceived_negatively: false,
            word: "infatigable"
        }],
        Neuroticism_minus_Openness_minus: [{
            perceived_negatively: false,
            word: "imperturbable"
        }, {
            perceived_negatively: true,
            word: "insensible"
        }],
        Neuroticism_minus_Openness_plus: [{
            perceived_negatively: false,
            word: "sentido"
        }, {
            perceived_negatively: false,
            word: "versátil"
        }, {
            perceived_negatively: false,
            word: "creativo"
        }, {
            perceived_negatively: false,
            word: "intelectual"
        }, {
            perceived_negatively: false,
            word: "perspicaz"
        }],
        Neuroticism_plus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "temperamental"
        }, {
            perceived_negatively: true,
            word: "irritable"
        }, {
            perceived_negatively: true,
            word: "peleador"
        }, {
            perceived_negatively: true,
            word: "impaciente"
        }, {
            perceived_negatively: true,
            word: "gruñón"
        }, {
            perceived_negatively: true,
            word: "malhumorado"
        }, {
            perceived_negatively: true,
            word: "irritable"
        }],
        Neuroticism_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "emotivo"
        }, {
            perceived_negatively: true,
            word: "crédulo"
        }, {
            perceived_negatively: false,
            word: "cariñoso"
        }, {
            perceived_negatively: false,
            word: "sensible"
        }, {
            perceived_negatively: false,
            word: "blando"
        }],
        Neuroticism_plus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "compulsivo"
        }, {
            perceived_negatively: true,
            word: "inquisitivo"
        }, {
            perceived_negatively: true,
            word: "desenfrenado"
        }, {
            perceived_negatively: true,
            word: "olvidadizo"
        }, {
            perceived_negatively: true,
            word: "impulsivo"
        }],
        Neuroticism_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "detallista"
        }, {
            perceived_negatively: true,
            word: "excitable"
        }],
        Neuroticism_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "guardado"
        }, {
            perceived_negatively: true,
            word: "irritable"
        }, {
            perceived_negatively: true,
            word: "inseguro"
        }, {
            perceived_negatively: true,
            word: "pesimista"
        }, {
            perceived_negatively: false,
            word: "reservado"
        }, {
            perceived_negatively: true,
            word: "temeroso"
        }, {
            perceived_negatively: true,
            word: "negativo"
        }, {
            perceived_negatively: false,
            word: "auto-crítico"
        }],
        Neuroticism_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "excitable"
        }, {
            perceived_negatively: true,
            word: "verborrágico"
        }, {
            perceived_negatively: false,
            word: "coqueto"
        }, {
            perceived_negatively: true,
            word: "explosivo"
        }, {
            perceived_negatively: false,
            word: "extravagante"
        }, {
            perceived_negatively: true,
            word: "volátil"
        }],
        Neuroticism_plus_Openness_minus: [{
            perceived_negatively: false,
            word: "irritable"
        }, {
            perceived_negatively: false,
            word: "fastidioso"
        }, {
            perceived_negatively: false,
            word: "aprensivo"
        }],
        Neuroticism_plus_Openness_plus: [{
            perceived_negatively: false,
            word: "excitable"
        }, {
            perceived_negatively: false,
            word: "apasionado"
        }, {
            perceived_negatively: false,
            word: "sensual"
        }],
        Openness_minus_Agreeableness_minus: [{
            perceived_negatively: true,
            word: "ordinario"
        }, {
            perceived_negatively: true,
            word: "sin tacto"
        }, {
            perceived_negatively: true,
            word: "brusco"
        }, {
            perceived_negatively: true,
            word: "cerrado"
        }, {
            perceived_negatively: true,
            word: "duro"
        }],
        Openness_minus_Agreeableness_plus: [{
            perceived_negatively: true,
            word: "simple"
        }, {
            perceived_negatively: true,
            word: "dependiente"
        }],
        Openness_minus_Conscientiousness_minus: [{
            perceived_negatively: true,
            word: "cortoplacista"
        }, {
            perceived_negatively: false,
            word: "temerario"
        }, {
            perceived_negatively: true,
            word: "ilógico"
        }, {
            perceived_negatively: true,
            word: "inmaduro"
        }, {
            perceived_negatively: true,
            word: "azaroso"
        }, {
            perceived_negatively: false,
            word: "laxo"
        }, {
            perceived_negatively: true,
            word: "irrespetuoso"
        }],
        Openness_minus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "convencional"
        }, {
            perceived_negatively: false,
            word: "tradicional"
        }],
        Openness_minus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "predecible"
        }, {
            perceived_negatively: true,
            word: "poco imaginativo"
        }, {
            perceived_negatively: false,
            word: "sombrío"
        }, {
            perceived_negatively: true,
            word: "apático"
        }, {
            perceived_negatively: true,
            word: "poco aventurero"
        }],
        Openness_minus_Extraversion_plus: [{
            perceived_negatively: true,
            word: "verborrágico"
        }, {
            perceived_negatively: true,
            word: "inescrupuloso"
        }, {
            perceived_negatively: true,
            word: "pomposo"
        }],
        Openness_minus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "imperturbable"
        }, {
            perceived_negatively: true,
            word: "insensible"
        }],
        Openness_minus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "irritable"
        }, {
            perceived_negatively: false,
            word: "fastidioso"
        }, {
            perceived_negatively: false,
            word: "aprensivo"
        }],
        Openness_plus_Agreeableness_minus: [{
            perceived_negatively: false,
            word: "perspicaz"
        }, {
            perceived_negatively: false,
            word: "excéntrico"
        }, {
            perceived_negatively: false,
            word: "individualista"
        }],
        Openness_plus_Agreeableness_plus: [{
            perceived_negatively: false,
            word: "idealista"
        }, {
            perceived_negatively: false,
            word: "diplomático"
        }, {
            perceived_negatively: false,
            word: "profundo"
        }, {
            perceived_negatively: false,
            word: "una persona con tacto"
        }, {
            perceived_negatively: false,
            word: "amistoso"
        }],
        Openness_plus_Conscientiousness_minus: [{
            perceived_negatively: false,
            word: "poco convencional"
        }, {
            perceived_negatively: false,
            word: "peculiar"
        }],
        Openness_plus_Conscientiousness_plus: [{
            perceived_negatively: false,
            word: "analítico"
        }, {
            perceived_negatively: false,
            word: "perceptivo"
        }, {
            perceived_negatively: false,
            word: "informativo"
        }, {
            perceived_negatively: false,
            word: "grandilocuente"
        }, {
            perceived_negatively: false,
            word: "digno"
        }, {
            perceived_negatively: false,
            word: "culto"
        }],
        Openness_plus_Extraversion_minus: [{
            perceived_negatively: false,
            word: "introspectivo"
        }, {
            perceived_negatively: false,
            word: "meditativo"
        }, {
            perceived_negatively: false,
            word: "contemplativo"
        }, {
            perceived_negatively: false,
            word: "introspectivo"
        }, {
            perceived_negatively: false,
            word: "pensativo"
        }],
        Openness_plus_Extraversion_plus: [{
            perceived_negatively: false,
            word: "mundano"
        }, {
            perceived_negatively: false,
            word: "exagerado"
        }, {
            perceived_negatively: false,
            word: "elocuente"
        }, {
            perceived_negatively: false,
            word: "inquisitivo"
        }, {
            perceived_negatively: false,
            word: "intenso"
        }],
        Openness_plus_Neuroticism_minus: [{
            perceived_negatively: false,
            word: "creativo"
        }, {
            perceived_negatively: false,
            word: "intelectual"
        }, {
            perceived_negatively: false,
            word: "perspicaz"
        }, {
            perceived_negatively: false,
            word: "versátil"
        }, {
            perceived_negatively: false,
            word: "inventivo"
        }],
        Openness_plus_Neuroticism_plus: [{
            perceived_negatively: false,
            word: "apasionado"
        }, {
            perceived_negatively: false,
            word: "excitable"
        }, {
            perceived_negatively: false,
            word: "sensual"
        }]
    },
    values: {
        Hedonism: [{
            Term: "Disfrutar de la vida",
            LowDescription: "Prefiere actividades con un propósito más grande que el sólo deleite personal",
            HighDescription: "Tiene gran motivación por disfrutar la vida en su plenitud"
        }],
        "Self-transcendence": [{
            Term: "Ayudar a los demás",
            LowDescription: "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
            HighDescription: "Cree que es importante cuidar de las personas que lo rodean"
        }, {
            Term: "La justicia",
            LowDescription: "Cree que son las personas crean sus oportunidades",
            HighDescription: "Cree en la justicia social y la igualdad para todos"
        }, {
            Term: "La justicia social",
            LowDescription: "Cree que son las personas crean sus oportunidades",
            HighDescription: "Cree en la justicia social y la igualdad para todos"
        }, {
            Term: "La igualdad",
            LowDescription: "Cree que son las personas crean sus oportunidades",
            HighDescription: "Cree en la justicia social y la igualdad para todos"
        }, {
            Term: "El servicio comunitario",
            LowDescription: "Cree que las personas pueden encargarse de sus propios asuntos sin interferencia",
            HighDescription: "Cree que es importante cuidar de las personas que lo rodean"
        }],
        Conservation: [{
            Term: "Las tradiciones",
            LowDescription: "Le importa más seguir su propio camino que seguir el camino de otros",
            HighDescription: "Tiene mucho respeto por los grupos a los que pertenece y sigue su guía"
        }, {
            Term: "La armonía",
            LowDescription: "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
            HighDescription: "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
        }, {
            Term: "La humildad",
            LowDescription: "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
            HighDescription: "Ve valor en deferir a otros"
        }, {
            Term: "Las normas sociales",
            LowDescription: "Decide qué es lo correcto basado en sus creencias, no en lo que la gente piensa",
            HighDescription: "Cree que las reglas existen por una razón y nunca intenta trasgredirlas"
        }, {
            Term: "La seguridad",
            LowDescription: "Prefiere la seguridad a costa de dejar a un lado sus metas",
            HighDescription: "Cree que es importante salvaguardar la seguridad"
        }, {
            Term: "La seguridad",
            LowDescription: "Prefiere estar seguro a costa de dejar a un lado sus metas",
            HighDescription: "Cree que es importante salvaguardar la seguridad"
        }],
        "Openness-to-change": [{
            Term: "Ser independiente",
            LowDescription: "Recibe de buena manera que otros dirijan sus actividades",
            HighDescription: "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
        }, {
            Term: "La emoción",
            LowDescription: "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
            HighDescription: "Está ansioso por buscar experiencias nuevas y emocionantes"
        }, {
            Term: "La creatividad",
            LowDescription: "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
            HighDescription: "Está ansioso por buscar experiencias nuevas y emocionantes"
        }, {
            Term: "La curiosidad",
            LowDescription: "Se apega a las cosas que conoce antes que arriesgarse a probar algo nuevo y riesgoso",
            HighDescription: "Está ansioso por buscar experiencias nuevas y emocionantes"
        }, {
            Term: "La autonomía",
            LowDescription: "Recibe de buena manera que otros dirijan sus actividades",
            HighDescription: "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
        }, {
            Term: "La libertad",
            LowDescription: "Recibe de buena manera que otros dirijan sus actividades",
            HighDescription: "Le gusta establecer sus propias metas para decidir cómo alcanzarlas mejor"
        }],
        "Self-enhancement": [{
            Term: "Alcanzar el éxito",
            LowDescription: "Toma decisiones sin considerar cómo muestran sus talentos",
            HighDescription: "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
        }, {
            Term: "Mejorar su estatus social",
            LowDescription: "Está conforme con su estatus social y no siente necesidad de mejorarlo",
            HighDescription: "Se esfuerza considerablemente para mejorar su estatus e imagen pública"
        }, {
            Term: "La ambición",
            LowDescription: "Está conforme con su estatus social y no siente necesidad de mejorarlo",
            HighDescription: "Siente que es importante avanzar para alcanzar metas"
        }, {
            Term: "Los grandes logros",
            LowDescription: "Toma decisiones sin considerar cómo muestran sus talentos",
            HighDescription: "Busca oportunidades para autosuperase y para demostrar que es una persona capaz"
        }]
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JhdGFyeXBhL3dvcmtzcGFjZXMvZGVtb3MvbnBtLXN5c3RlbXUvdGV4dC1zdW1tYXJ5L25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2JhdGFyeXBhL3dvcmtzcGFjZXMvZGVtb3MvbnBtLXN5c3RlbXUvdGV4dC1zdW1tYXJ5Ly5idWlsZC9mYWtlX2I5NTMzNzg5LmpzIiwiL2hvbWUvYmF0YXJ5cGEvd29ya3NwYWNlcy9kZW1vcy9ucG0tc3lzdGVtdS90ZXh0LXN1bW1hcnkvLmJ1aWxkL2Zvcm1hdC5qcyIsIi9ob21lL2JhdGFyeXBhL3dvcmtzcGFjZXMvZGVtb3MvbnBtLXN5c3RlbXUvdGV4dC1zdW1tYXJ5Ly5idWlsZC9pMThuLmpzIiwiL2hvbWUvYmF0YXJ5cGEvd29ya3NwYWNlcy9kZW1vcy9ucG0tc3lzdGVtdS90ZXh0LXN1bW1hcnkvLmJ1aWxkL2kxOG4vZW4uanMiLCIvaG9tZS9iYXRhcnlwYS93b3Jrc3BhY2VzL2RlbW9zL25wbS1zeXN0ZW11L3RleHQtc3VtbWFyeS8uYnVpbGQvaTE4bi9lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQkEsWUFBWSxDQUFDOztBQUViLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDNUIsSUFBSSxHQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7QUFLL0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLElBQUksRUFBRTs7QUFHL0IsTUFBSSxJQUFJLEdBQUksRUFBRTtNQUNaLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztNQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O0FB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QXdCLElBQUk7QUFDNUIsa0JBQVEsU0FBUztTQUNwQixDQUNKO0FBQ0QsOENBQXdDLENBQ3BDO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsY0FBYztTQUN6QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsT0FBTztTQUNsQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsT0FBTztTQUNsQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsUUFBUTtTQUNuQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixDQUNKO0FBQ0QsOENBQXdDLENBQ3BDO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsWUFBWTtTQUN2QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsTUFBTTtTQUNqQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsWUFBWTtTQUN2QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixDQUNKO0FBQ0QsNkNBQXVDLENBQ25DO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsYUFBYTtTQUN4QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsY0FBYztTQUN6QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsV0FBVztTQUN0QixFQUNE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QUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsYUFBYTtTQUN4QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsTUFBTTtTQUNqQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsT0FBTztTQUNsQixDQUNKO0FBQ0QsK0NBQXlDLENBQ3JDO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsWUFBWTtTQUN2QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsV0FBVztTQUN0QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsV0FBVztTQUN0QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsU0FBUztTQUNwQixFQUNEO0FBQ0ksa0NBQXdCLElBQUk7QUFDNUIsa0JBQVEsWUFBWTtTQUN2QixDQUNKO0FBQ0QsOENBQXdDLENBQ3BDO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsY0FBYztTQUN6QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsUUFBUTtTQUNuQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsUUFBUTtTQUNuQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsUUFBUTtTQUNuQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsUUFBUTtTQUNuQixDQUNKO0FBQ0QsOENBQXdDLENBQ3BDO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsV0FBVztTQUN0QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsV0FBVztTQUN0QixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFBVTtTQUNyQixFQUNEO0FBQ0ksa0NBQXdCLEtBQUs7QUFDN0Isa0JBQVEsVUFB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O0FBQzVFLDZCQUFtQiwyRUFBMkU7U0FDakcsQ0FDSjtBQUNELDBCQUFrQixFQUFFLENBQ2hCO0FBQ0ksa0JBQVEsbUJBQW1CO0FBQzNCLDRCQUFrQiwyREFBMkQ7QUFDN0UsNkJBQW1CLGlGQUFpRjtTQUN2RyxFQUNEO0FBQ0ksa0JBQVEsMkJBQTJCO0FBQ25DLDRCQUFrQix3RUFBd0U7QUFDMUYsNkJBQW1CLHdFQUF3RTtTQUM5RixFQUNEO0FBQ0ksa0JBQVEsYUFBYTtBQUNyQiw0QkFBa0Isd0VBQXdFO0FBQzFGLDZCQUFtQixzREFBc0Q7U0FDNUUsRUFDRDtBQUNJLGtCQUFRLG9CQUFvQjtBQUM1Qiw0QkFBa0IsMkRBQTJEO0FBQzdFLDZCQUFtQixpRkFBaUY7U0FDdkcsQ0FDSjtLQUNGO0NBQ0YsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9ybWF0ID0gcmVxdWlyZSgnLi9mb3JtYXQnKSxcbiAgICBpMThuICAgPSByZXF1aXJlKCcuL2kxOG4nKTtcblxuLyoqXG4gKiBQcm92aWRlcyBhIFRleHQgU3VtbWFyeSBmb3IgcHJvZmlsZXMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxhbmcpIHtcblxuXG4gIHZhciBzZWxmICA9IHt9LFxuICAgIGRpY3Rpb25hcnkgPSBpMThuLmdldERpY3Rpb25hcnkobGFuZyksXG4gICAgdHBocmFzZSA9IGkxOG4udHJhbnNsYXRvckZhY3RvcnkuY3JlYXRlVHJhbnNsYXRvcihkaWN0aW9uYXJ5LnBocmFzZXMpOyAvLyBpMThuIGZvciBwaHJhc2VzXG5cbiAgLy8gRG93bmxvYWQgYWxsIHN0YXRpYyBkYXRhLlxuICBzZWxmLmNpcmN1bXBsZXhEYXRhID0gZGljdGlvbmFyeS50cmFpdHM7XG4gIHNlbGYuZmFjZXRzRGF0YSA9IGRpY3Rpb25hcnkuZmFjZXRzO1xuICBzZWxmLnZhbHVlc0RhdGEgPSBkaWN0aW9uYXJ5LnZhbHVlcztcbiAgc2VsZi5uZWVkc0RhdGEgPSBkaWN0aW9uYXJ5Lm5lZWRzO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVCeVJlbGV2YW5jZShvMSwgbzIpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcblxuICAgIGlmIChNYXRoLmFicygwLjUgLSBvMS5wZXJjZW50YWdlKSA+IE1hdGguYWJzKDAuNSAtIG8yLnBlcmNlbnRhZ2UpKSB7XG4gICAgICByZXN1bHQgPSAtMTsgLy8gQSB0cmFpdCB3aXRoIDElIGlzIG1vcmUgaW50ZXJlc3RpbmcgdGhhbiBvbmUgd2l0aCA2MCUuXG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKDAuNSAtIG8xLnBlcmNlbnRhZ2UpIDwgTWF0aC5hYnMoMC41IC0gbzIucGVyY2VudGFnZSkpIHtcbiAgICAgIHJlc3VsdCA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmVCeVZhbHVlKG8xLCBvMikge1xuICAgIHZhciByZXN1bHQgPSAwO1xuXG4gICAgaWYgKE1hdGguYWJzKG8xLnBlcmNlbnRhZ2UpID4gTWF0aC5hYnMobzIucGVyY2VudGFnZSkpIHtcbiAgICAgIHJlc3VsdCA9IC0xOyAvLyAxMDAgJSBoYXMgcHJlY2VkZW5jZSBvdmVyIDk5JVxuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhvMS5wZXJjZW50YWdlKSA8IE1hdGguYWJzKG8yLnBlcmNlbnRhZ2UpKSB7XG4gICAgICByZXN1bHQgPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDaXJjdW1wbGV4QWRqZWN0aXZlKHAxLCBwMiwgb3JkZXIpIHtcbiAgICAvLyBTb3J0IHRoZSBwZXJzb25hbGl0eSB0cmFpdHMgaW4gdGhlIG9yZGVyIHRoZSBKU09OIGZpbGUgc3RvcmVkIGl0LlxuICAgIHZhciBvcmRlcmVkID0gW3AxLCBwMl0uc29ydChmdW5jdGlvbiAobzEsIG8yKSB7XG4gICAgICB2YXJcbiAgICAgICAgaTEgPSAnRUFOT0MnLmluZGV4T2YobzEuaWQuY2hhckF0KDApKSxcbiAgICAgICAgaTIgPSAnRUFOT0MnLmluZGV4T2YobzIuaWQuY2hhckF0KDApKTtcblxuICAgICAgcmV0dXJuIGkxIDwgaTIgPyAtMSA6IDE7XG4gICAgfSksXG4gICAgICAvLyBBc3NlbWJsZSB0aGUgaWRlbnRpZmllciBhcyB0aGUgSlNPTiBmaWxlIHN0b3JlZCBpdC5cbiAgICAgIGlkZW50aWZpZXIgPSBvcmRlcmVkWzBdLmlkLlxuICAgICAgY29uY2F0KG9yZGVyZWRbMF0ucGVyY2VudGFnZSA+IDAuNSA/ICdfcGx1c18nIDogJ19taW51c18nKS5cbiAgICAgIGNvbmNhdChvcmRlcmVkWzFdLmlkKS5cbiAgICAgIGNvbmNhdChvcmRlcmVkWzFdLnBlcmNlbnRhZ2UgPiAwLjUgPyAnX3BsdXMnIDogJ19taW51cycpLFxuXG4gICAgICB0cmFpdE11bHQgPSBzZWxmLmNpcmN1bXBsZXhEYXRhW2lkZW50aWZpZXJdWzBdLFxuICAgICAgc2VudGVuY2UgPSBcIiVzXCI7XG5cbiAgICBpZiAodHJhaXRNdWx0LnBlcmNlaXZlZF9uZWdhdGl2ZWx5KSB7XG4gICAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHNlbnRlbmNlID0gdHBocmFzZSgnYSBiaXQgJXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHNlbnRlbmNlID0gdHBocmFzZSgnc29tZXdoYXQgJXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHNlbnRlbmNlID0gdHBocmFzZSgnY2FuIGJlIHBlcmNlaXZlZCBhcyAlcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KHNlbnRlbmNlLCB0cmFpdE11bHQud29yZCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGYWNldEluZm8oZikge1xuICAgIHZhclxuICAgICAgZGF0YSA9IHNlbGYuZmFjZXRzRGF0YVtmLmlkLnJlcGxhY2UoJ18nLCAnLScpLnJlcGxhY2UoJyAnLCAnLScpXSxcbiAgICAgIHQsIGQ7XG5cbiAgICBpZiAoZi5wZXJjZW50YWdlID4gMC41KSB7XG4gICAgICB0ID0gZGF0YS5IaWdoVGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgZCA9IGRhdGEuSGlnaERlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQgPSBkYXRhLkxvd1Rlcm0udG9Mb3dlckNhc2UoKTtcbiAgICAgIGQgPSBkYXRhLkxvd0Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGYuaWQsXG4gICAgICB0ZXJtOiB0LFxuICAgICAgZGVzY3JpcHRpb246IGRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJ2YWxGb3IocCkge1xuICAgIC8vIFRoZSBNSU4gaGFuZGxlcyB0aGUgc3BlY2lhbCBjYXNlIGZvciAxMDAlLlxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKHAgKiA0KSwgMyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbmZvRm9yVmFsdWUodikge1xuICAgIHZhclxuICAgICAgZGF0YSA9IHNlbGYudmFsdWVzRGF0YVt2LmlkLnJlcGxhY2UoL1tfIF0vZywgJy0nKV1bMF0sXG4gICAgICBkID0gdi5wZXJjZW50YWdlID4gMC41ID8gZGF0YS5IaWdoRGVzY3JpcHRpb24gOiBkYXRhLkxvd0Rlc2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHYuaWQsXG4gICAgICB0ZXJtOiBkYXRhLlRlcm0udG9Mb3dlckNhc2UoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdvcmRzRm9yTmVlZChuKSB7XG4gICAgLy8gQXNzZW1ibGUgdGhlIGlkZW50aWZpZXIgYXMgdGhlIEpTT04gZmlsZSBzdG9yZWQgaXQuXG4gICAgdmFyIHRyYWl0TXVsdCA9IHNlbGYubmVlZHNEYXRhW24uaWRdO1xuICAgIHJldHVybiB0cmFpdE11bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBhc3NlbWJsZVRyYWl0cyhwZXJzb25hbGl0eVRyZWUpIHtcbiAgICB2YXJcbiAgICAgIHNlbnRlbmNlcyA9IFtdLFxuICAgICAgYmlnNWVsZW1lbnRzID0gW10sXG4gICAgICByZWxldmFudEJpZzUsXG4gICAgICBhZGosIGFkajEsIGFkajIsIGFkajM7XG5cbiAgICAvLyBTb3J0IHRoZSBCaWcgNSBiYXNlZCBvbiBob3cgZXh0cmVtZSB0aGUgbnVtYmVyIGlzLlxuICAgIHBlcnNvbmFsaXR5VHJlZS5jaGlsZHJlblswXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICBiaWc1ZWxlbWVudHMucHVzaCh7XG4gICAgICAgIGlkOiBwLmlkLFxuICAgICAgICBwZXJjZW50YWdlOiBwLnBlcmNlbnRhZ2VcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGJpZzVlbGVtZW50cy5zb3J0KGNvbXBhcmVCeVJlbGV2YW5jZSk7XG5cbiAgICAvLyBSZW1vdmUgZXZlcnl0aGluZyBiZXR3ZWVuIDMyJSBhbmQgNjglLCBhcyBpdCdzIGluc2lkZSB0aGUgY29tbW9uIHBlb3BsZS5cbiAgICByZWxldmFudEJpZzUgPSBiaWc1ZWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMoMC41IC0gaXRlbS5wZXJjZW50YWdlKSA+IDAuMTg7XG4gICAgfSk7XG4gICAgaWYgKHJlbGV2YW50QmlnNS5sZW5ndGggPCAyKSB7XG4gICAgICAvLyBFdmVuIGlmIG5vIEJpZyA1IGF0dHJpYnV0ZSBpcyBpbnRlcmVzdGluZywgeW91IGdldCAxIGFkamVjdGl2ZS5cbiAgICAgIHJlbGV2YW50QmlnNSA9IFtiaWc1ZWxlbWVudHNbMF0sIGJpZzVlbGVtZW50c1sxXV07XG4gICAgfVxuXG4gICAgc3dpdGNoIChyZWxldmFudEJpZzUubGVuZ3RoKSB7XG4gICAgY2FzZSAyOlxuICAgICAgLy8gUmVwb3J0IDEgYWRqZWN0aXZlLlxuICAgICAgYWRqID0gZ2V0Q2lyY3VtcGxleEFkamVjdGl2ZShyZWxldmFudEJpZzVbMF0sIHJlbGV2YW50QmlnNVsxXSwgMCk7XG4gICAgICBzZW50ZW5jZXMucHVzaChmb3JtYXQodHBocmFzZSgnWW91IGFyZSAlcycpLCBhZGopICsgJy4nKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIC8vIFJlcG9ydCAyIGFkamVjdGl2ZXMuXG4gICAgICBhZGoxID0gZ2V0Q2lyY3VtcGxleEFkamVjdGl2ZShyZWxldmFudEJpZzVbMF0sIHJlbGV2YW50QmlnNVsxXSwgMCk7XG4gICAgICBhZGoyID0gZ2V0Q2lyY3VtcGxleEFkamVjdGl2ZShyZWxldmFudEJpZzVbMV0sIHJlbGV2YW50QmlnNVsyXSwgMSk7XG4gICAgICBzZW50ZW5jZXMucHVzaChmb3JtYXQodHBocmFzZSgnWW91IGFyZSAlcyBhbmQgJXMnKSwgIGFkajEsIGFkajIpICsgJy4nKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICBjYXNlIDU6XG4gICAgICAvLyBSZXBvcnQgMyBhZGplY3RpdmVzLlxuICAgICAgYWRqMSA9IGdldENpcmN1bXBsZXhBZGplY3RpdmUocmVsZXZhbnRCaWc1WzBdLCByZWxldmFudEJpZzVbMV0sIDApO1xuICAgICAgYWRqMiA9IGdldENpcmN1bXBsZXhBZGplY3RpdmUocmVsZXZhbnRCaWc1WzFdLCByZWxldmFudEJpZzVbMl0sIDEpO1xuICAgICAgYWRqMyA9IGdldENpcmN1bXBsZXhBZGplY3RpdmUocmVsZXZhbnRCaWc1WzJdLCByZWxldmFudEJpZzVbM10sIDIpO1xuICAgICAgc2VudGVuY2VzLnB1c2goZm9ybWF0KHRwaHJhc2UoJ1lvdSBhcmUgJXMsICVzIGFuZCAlcycpLCAgYWRqMSwgYWRqMiwgYWRqMykgKyAnLicpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbnRlbmNlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VtYmxlRmFjZXRzKHBlcnNvbmFsaXR5VHJlZSkge1xuICAgIHZhclxuICAgICAgc2VudGVuY2VzID0gW10sXG4gICAgICBmYWNldEVsZW1lbnRzID0gW10sXG4gICAgICBpbmZvLFxuICAgICAgaTtcblxuICAgIC8vIEFzc2VtYmxlIHRoZSBmdWxsIGxpc3Qgb2YgZmFjZXRzIGFuZCBzb3J0IHRoZW0gYmFzZWQgb24gaG93IGV4dHJlbWVcbiAgICAvLyBpcyB0aGUgbnVtYmVyLlxuICAgIHBlcnNvbmFsaXR5VHJlZS5jaGlsZHJlblswXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICBwLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgZmFjZXRFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICBpZDogZi5pZCxcbiAgICAgICAgICBwZXJjZW50YWdlOiBmLnBlcmNlbnRhZ2UsXG4gICAgICAgICAgcGFyZW50OiBwXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZmFjZXRFbGVtZW50cy5zb3J0KGNvbXBhcmVCeVJlbGV2YW5jZSk7XG5cbiAgICAvLyBBc3NlbWJsZSBhbiBhZGplY3RpdmUgYW5kIGRlc2NyaXB0aW9uIGZvciB0aGUgdHdvIG1vc3QgaW1wb3J0YW50IGZhY2V0cy5cbiAgICBpbmZvID0gZ2V0RmFjZXRJbmZvKGZhY2V0RWxlbWVudHNbMF0pO1xuICAgIHNlbnRlbmNlcy5wdXNoKGZvcm1hdCh0cGhyYXNlKCdZb3UgYXJlICVzJyksIGluZm8udGVybSkgKyAnOiAnICsgaW5mby5kZXNjcmlwdGlvbiArICcuJyk7XG4gICAgaW5mbyA9IGdldEZhY2V0SW5mbyhmYWNldEVsZW1lbnRzWzFdKTtcbiAgICBzZW50ZW5jZXMucHVzaChmb3JtYXQodHBocmFzZSgnWW91IGFyZSAlcycpLCBpbmZvLnRlcm0pICsgJzogJyArIGluZm8uZGVzY3JpcHRpb24gKyAnLicpO1xuXG4gICAgLy8gSWYgYWxsIHRoZSBmYWNldHMgY29ycmVzcG9uZCB0byB0aGUgc2FtZSBmZWF0dXJlLCBjb250aW51ZSB1bnRpbCBhXG4gICAgLy8gZGlmZmVyZW50IHBhcmVudCBmZWF0dXJlIGlzIGZvdW5kLlxuICAgIGkgPSAyO1xuICAgIGlmIChmYWNldEVsZW1lbnRzWzBdLnBhcmVudCA9PT0gZmFjZXRFbGVtZW50c1sxXS5wYXJlbnQpIHtcbiAgICAgIHdoaWxlIChmYWNldEVsZW1lbnRzWzBdLnBhcmVudCA9PT0gZmFjZXRFbGVtZW50c1tpXS5wYXJlbnQpIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpbmZvID0gZ2V0RmFjZXRJbmZvKGZhY2V0RWxlbWVudHNbaV0pO1xuICAgIHNlbnRlbmNlcy5wdXNoKGZvcm1hdCh0cGhyYXNlKCdBbmQgeW91IGFyZSAlcycpLCBpbmZvLnRlcm0pICsgJzogJyArIGluZm8uZGVzY3JpcHRpb24gKyAnLicpO1xuXG4gICAgcmV0dXJuIHNlbnRlbmNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlbWJsZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIHNvcnQgdGhlbSBiYXNlZCBvbiByZWxldmFuY2UuXG4gICAqL1xuICBmdW5jdGlvbiBhc3NlbWJsZVZhbHVlcyh2YWx1ZXNUcmVlKSB7XG4gICAgdmFyXG4gICAgICBzZW50ZW5jZXMgPSBbXSxcbiAgICAgIHZhbHVlc0xpc3QgPSBbXSxcbiAgICAgIHNhbWVRSSwgaW5mbzEsIGluZm8yLFxuICAgICAgc2VudGVuY2UsXG4gICAgICB2YWx1ZXNJbmZvLFxuICAgICAgaSwgdGVybTEsIHRlcm0yO1xuXG4gICAgdmFsdWVzVHJlZS5jaGlsZHJlblswXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICB2YWx1ZXNMaXN0LnB1c2goe1xuICAgICAgICBpZDogcC5pZCxcbiAgICAgICAgcGVyY2VudGFnZTogcC5wZXJjZW50YWdlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YWx1ZXNMaXN0LnNvcnQoY29tcGFyZUJ5UmVsZXZhbmNlKTtcblxuICAgIC8vIEFyZSB0aGUgdHdvIG1vc3QgcmVsZXZhbnQgaW4gdGhlIHNhbWUgcXVhcnRpbGUgaW50ZXJ2YWw/IChlLmcuIDAlLTI1JSlcbiAgICBzYW1lUUkgPSBpbnRlcnZhbEZvcih2YWx1ZXNMaXN0WzBdLnBlcmNlbnRhZ2UpID09PSBpbnRlcnZhbEZvcih2YWx1ZXNMaXN0WzFdLnBlcmNlbnRhZ2UpO1xuXG4gICAgLy8gR2V0IGFsbCB0aGUgdGV4dCBhbmQgZGF0YSByZXF1aXJlZC5cbiAgICBpbmZvMSA9IGdldEluZm9Gb3JWYWx1ZSh2YWx1ZXNMaXN0WzBdKTtcbiAgICBpbmZvMiA9IGdldEluZm9Gb3JWYWx1ZSh2YWx1ZXNMaXN0WzFdKTtcblxuICAgIGlmIChzYW1lUUkpIHtcbiAgICAgIC8vIEFzc2VtYmxlIHRoZSBmaXJzdCAnYm90aCcgc2VudGVuY2UuXG4gICAgICB0ZXJtMSA9IGluZm8xLnRlcm07XG4gICAgICB0ZXJtMiA9IGluZm8yLnRlcm07XG4gICAgICBzd2l0Y2ggKGludGVydmFsRm9yKHZhbHVlc0xpc3RbMF0ucGVyY2VudGFnZSkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgc2VudGVuY2UgPSBmb3JtYXQodHBocmFzZSgnWW91IGFyZSByZWxhdGl2ZWx5IHVuY29uY2VybmVkIHdpdGggYm90aCAlcyBhbmQgJXMnKSwgdGVybTEsIHRlcm0yKSArICcuJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHNlbnRlbmNlID0gZm9ybWF0KHRwaHJhc2UoXCJZb3UgZG9uJ3QgZmluZCBlaXRoZXIgJXMgb3IgJXMgdG8gYmUgcGFydGljdWxhcmx5IG1vdGl2YXRpbmcgZm9yIHlvdVwiKSwgdGVybTEsIHRlcm0yKSArICcuJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHNlbnRlbmNlID0gZm9ybWF0KHRwaHJhc2UoJ1lvdSB2YWx1ZSBib3RoICVzIGFuZCAlcyBhIGJpdCcpLCB0ZXJtMSwgdGVybTIpICsgJy4nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgc2VudGVuY2UgPSBmb3JtYXQodHBocmFzZSgnWW91IGNvbnNpZGVyIGJvdGggJXMgYW5kICVzIHRvIGd1aWRlIGEgbGFyZ2UgcGFydCBvZiB3aGF0IHlvdSBkbycpLCB0ZXJtMSwgdGVybTIpICsgJy4nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNlbnRlbmNlcy5wdXNoKHNlbnRlbmNlKTtcblxuICAgICAgLy8gQXNzZW1ibGUgdGhlIGZpbmFsIHN0cmluZ3MgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LlxuICAgICAgc2VudGVuY2VzLnB1c2goaW5mbzEuZGVzY3JpcHRpb24gKyAnLicpO1xuICAgICAgc2VudGVuY2VzLnB1c2goZm9ybWF0KHRwaHJhc2UoJ0FuZCAlcycpLCBpbmZvMi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpKSArICcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlc0luZm8gPSBbaW5mbzEsIGluZm8yXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWx1ZXNJbmZvLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIC8vIFByb2Nlc3MgaXQgdGhpcyB3YXkgYmVjYXVzZSB0aGUgY29kZSBpcyB0aGUgc2FtZS5cbiAgICAgICAgc3dpdGNoIChpbnRlcnZhbEZvcih2YWx1ZXNMaXN0W2ldLnBlcmNlbnRhZ2UpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBzZW50ZW5jZSA9IGZvcm1hdCh0cGhyYXNlKCdZb3UgYXJlIHJlbGF0aXZlbHkgdW5jb25jZXJuZWQgd2l0aCAlcycpLCB2YWx1ZXNJbmZvW2ldLnRlcm0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgc2VudGVuY2UgPSBmb3JtYXQodHBocmFzZShcIllvdSBkb24ndCBmaW5kICVzIHRvIGJlIHBhcnRpY3VsYXJseSBtb3RpdmF0aW5nIGZvciB5b3VcIiksIHZhbHVlc0luZm9baV0udGVybSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZW50ZW5jZSA9IGZvcm1hdCh0cGhyYXNlKCdZb3UgdmFsdWUgJXMgYSBiaXQgbW9yZScpLCAgdmFsdWVzSW5mb1tpXS50ZXJtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlbnRlbmNlID0gZm9ybWF0KHRwaHJhc2UoJ1lvdSBjb25zaWRlciAlcyB0byBndWlkZSBhIGxhcmdlIHBhcnQgb2Ygd2hhdCB5b3UgZG8nKSwgIHZhbHVlc0luZm9baV0udGVybSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc2VudGVuY2UgPSBzZW50ZW5jZS5jb25jYXQoJzogJykuXG4gICAgICAgICAgICBjb25jYXQodmFsdWVzSW5mb1tpXS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpKS5cbiAgICAgICAgICAgIGNvbmNhdCgnLicpO1xuICAgICAgICBzZW50ZW5jZXMucHVzaChzZW50ZW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbnRlbmNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NlbWJsZSB0aGUgbGlzdCBvZiBuZWVkcyBhbmQgc29ydCB0aGVtIGJhc2VkIG9uIHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gYXNzZW1ibGVOZWVkcyhuZWVkc1RyZWUpIHtcbiAgICB2YXJcbiAgICAgIHNlbnRlbmNlcyA9IFtdLFxuICAgICAgbmVlZHNMaXN0ID0gW10sXG4gICAgICB3b3JkLFxuICAgICAgc2VudGVuY2U7XG5cbiAgICBuZWVkc1RyZWUuY2hpbGRyZW5bMF0uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgbmVlZHNMaXN0LnB1c2goe1xuICAgICAgICBpZDogcC5pZCxcbiAgICAgICAgcGVyY2VudGFnZTogcC5wZXJjZW50YWdlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBuZWVkc0xpc3Quc29ydChjb21wYXJlQnlWYWx1ZSk7XG5cbiAgICAvLyBHZXQgdGhlIHdvcmRzIHJlcXVpcmVkLlxuICAgIHdvcmQgPSBnZXRXb3Jkc0Zvck5lZWQobmVlZHNMaXN0WzBdKVswXTtcblxuICAgIC8vIEZvcm0gdGhlIHJpZ2h0IHNlbnRlbmNlIGZvciB0aGUgc2luZ2xlIG5lZWQuXG4gICAgc3dpdGNoIChpbnRlcnZhbEZvcihuZWVkc0xpc3RbMF0ucGVyY2VudGFnZSkpIHtcbiAgICBjYXNlIDA6XG4gICAgICBzZW50ZW5jZSA9IHRwaHJhc2UoJ0V4cGVyaWVuY2VzIHRoYXQgbWFrZSB5b3UgZmVlbCBoaWdoICVzIGFyZSBnZW5lcmFsbHkgdW5hcHBlYWxpbmcgdG8geW91Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBzZW50ZW5jZSA9IHRwaHJhc2UoJ0V4cGVyaWVuY2VzIHRoYXQgZ2l2ZSBhIHNlbnNlIG9mICVzIGhvbGQgc29tZSBhcHBlYWwgdG8geW91Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBzZW50ZW5jZSA9IHRwaHJhc2UoJ1lvdSBhcmUgbW90aXZhdGVkIHRvIHNlZWsgb3V0IGV4cGVyaWVuY2VzIHRoYXQgcHJvdmlkZSBhIHN0cm9uZyBmZWVsaW5nIG9mICVzJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBzZW50ZW5jZSA9IHRwaHJhc2UoJ1lvdXIgY2hvaWNlcyBhcmUgZHJpdmVuIGJ5IGEgZGVzaXJlIGZvciAlcycpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNlbnRlbmNlID0gZm9ybWF0KHNlbnRlbmNlLCB3b3JkKS5jb25jYXQoXCIuXCIpO1xuICAgIHNlbnRlbmNlcy5wdXNoKHNlbnRlbmNlKTtcblxuICAgIHJldHVybiBzZW50ZW5jZXM7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBUcmFpdFRyZWUgcmV0dXJucyBhIHRleHRcbiAgICogc3VtbWFyeSBkZXNjcmliaW5nIHRoZSByZXN1bHQuXG4gICAqXG4gICAqIEBwYXJhbSB0cmVlIEEgVHJhaXRUcmVlLlxuICAgKiBAcmV0dXJuIEFuIGFycmF5IG9mIHN0cmluZ3MgcmVwcmVzZW50aW5nIHRoZVxuICAgKiAgICAgICAgIHBhcmFncmFwaHMgb2YgdGhlIHRleHQgc3VtbWFyeS5cbiAgICovXG4gIGZ1bmN0aW9uIGFzc2VtYmxlKHRyZWUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgYXNzZW1ibGVUcmFpdHModHJlZS5jaGlsZHJlblswXSksXG4gICAgICBhc3NlbWJsZUZhY2V0cyh0cmVlLmNoaWxkcmVuWzBdKSxcbiAgICAgIGFzc2VtYmxlTmVlZHModHJlZS5jaGlsZHJlblsxXSksXG4gICAgICBhc3NlbWJsZVZhbHVlcyh0cmVlLmNoaWxkcmVuWzJdKVxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBUcmFpdFRyZWUgcmV0dXJucyBhIHRleHRcbiAgICogc3VtbWFyeSBkZXNjcmliaW5nIHRoZSByZXN1bHQuXG4gICAqXG4gICAqIEBwYXJhbSB0cmVlIEEgVHJhaXRUcmVlLlxuICAgKiBAcmV0dXJuIEEgU3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgc3VtbWFyeS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN1bW1hcnkocHJvZmlsZSkge1xuICAgIHJldHVybiBhc3NlbWJsZShwcm9maWxlLnRyZWUpLm1hcChmdW5jdGlvbiAocGFyYWdyYXBoKSB7IHJldHVybiBwYXJhZ3JhcGguam9pbihcIiBcIik7IH0pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICAvKiBUZXh0LVN1bW1hcnkgQVBJICovXG4gIHNlbGYuYXNzZW1ibGVUcmFpdHMgPSBhc3NlbWJsZVRyYWl0cztcbiAgc2VsZi5hc3NlbWJsZUZhY2V0cyA9IGFzc2VtYmxlRmFjZXRzO1xuICBzZWxmLmFzc2VtYmxlTmVlZHMgPSBhc3NlbWJsZU5lZWRzO1xuICBzZWxmLmFzc2VtYmxlVmFsdWVzID0gYXNzZW1ibGVWYWx1ZXM7XG4gIHNlbGYuYXNzZW1ibGUgPSBhc3NlbWJsZTtcbiAgc2VsZi5nZXRTdW1tYXJ5ID0gZ2V0U3VtbWFyeTtcblxuICByZXR1cm4gc2VsZjtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG4vKipcbiAqIEdpdmVuIGEgdGVtcGxhdGUgc3RyaW5nIHRvIGZvcm1hdCBhbmQgc2VydmVyYWwgc3RyaW5nc1xuICogdG8gZmlsbCB0aGUgdGVtcGxhdGUsIGl0IHJldHVybnMgdGhlIGZvcm1hdHRlZCBzdHJpbmcuXG4gKiBAcGFyYW0gdGVtcGxhdGUgVGhpcyBpcyBhIHN0cmluZyBjb250YWluaW5nIHplcm8sIG9uZSBvclxuICogICAgICAgICAgICAgICAgIG1vcmUgb2NjdXJyZW5jZXMgb2YgXCIlc1wiLlxuICogQHBhcmFtIC4uLnN0cmluZ3NcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0dGVkIHRlbXBsYXRlLlxuICovXG5mdW5jdGlvbiBmb3JtYXQoc3ViamVjdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyXG4gICAgcmVwbGFjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzLCBbMSwgYXJndW1lbnRzLmxlbmd0aF0pLFxuICAgIHBhcnRzID0gbnVsbCxcbiAgICBvdXRwdXQsXG4gICAgaTtcblxuICBpZiAoKHN1YmplY3QubWF0Y2goLyVzL2cpID09PSBudWxsICYmIHJlcGxhY2VzLmxlbmd0aCA+IDApIHx8IHJlcGxhY2VzLmxlbmd0aCAhPT0gc3ViamVjdC5tYXRjaCgvJXMvZykubGVuZ3RoKSB7XG4gICAgdGhyb3cgJ0Zvcm1hdCBlcnJvcjogVGhlIHN0cmluZyBjb3VudCB0byByZXBsYWNlIGRvIG5vdCBtYXRjaGVzIHRoZSBhcmd1bWVudCBjb3VudC4gU3ViamVjdDogJyArIHN1YmplY3QgKyAnLiBSZXBsYWNlczogJyArIHJlcGxhY2VzO1xuICB9XG5cbiAgb3V0cHV0ID0gc3ViamVjdDtcbiAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHBhcnRzID0gb3V0cHV0LnNwbGl0KCclcycpO1xuICAgIG91dHB1dCA9IHBhcnRzWzBdICsgYXJndW1lbnRzW2ldICsgcGFydHMuc2xpY2UoMSwgcGFydHMubGVuZ3RoKS5qb2luKCclcycpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxudmFyIGZvcm1hdCA9IHJlcXVpcmUoJy4vZm9ybWF0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyB0cmFuc2xhdG9yc1xuICpcbiAqIEBhdXRob3IgQXJ5IFBhYmxvIEJhdGlzdGEgPGJhdGFyeXBhQGFyLmlibS5jb20+XG4gKi9cbnZhciB0cmFuc2xhdG9yRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHNlbGYgPSB7XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleSBmcm9tIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSBkaWN0aW9uYXJ5IEEgZGljdGlvbmFyeSB3aXRoIFN0cmluZyBrZXlzIGFuZCBTdHJpbmcgdmFsdWVzLlxuICAgICAgICogQHBhcmFtIGtleSBBIGtleS4gQ2FuIGNvbnRhaW4gJy4nIHRvIGluZGljYXRlIGtleSdzIHByZXNlbnQgaW4gc3ViLWRpY3Rpb25hcmllcy5cbiAgICAgICAqICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlICdhcHBsaWNhdGlvbi5uYW1lJyBsb29rcyB1cCBmb3IgdGhlICdhcHBsaWNhdGlvbicga2V5XG4gICAgICAgKiAgICAgICAgICAgICAgICAgICBpbiB0aGUgZGljdGlvbmFyeSBhbmQsIHdpdGggaXQncyB2YWx1ZSwgbG9va3MgdXAgZm9yIHRoZSAnbmFtZScga2V5LlxuICAgICAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBBIHZhbHVlIHRvIHJldHVybiBpZiB0aGUga2V5IGlzIG5vdCBpbiB0aGUgZGljdGlvbmFyeS5cbiAgICAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBmcm9tIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgICovXG4gICAgICBnZXRLZXkgOiBmdW5jdGlvbiAoZGljdGlvbmFyeSwga2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgcGFydHMgPSBrZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICB2YWx1ZSA9IGRpY3Rpb25hcnk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZVtwYXJ0c1tpXV07XG4gICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgdHJhbnNsYXRpb24gZnVuY3Rpb24gZ2l2ZW4gYSBkaWN0aW9uYXJ5IG9mIHRyYW5zbGF0aW9uc1xuICAgICAgICogYW5kIGFuIG9wdGlvbmFsIGJhY2t1cCBkaWN0aW9uYXJ5IGlmIHRoZSBrZXkgaXMgbm8gcHJlc2VudCBpbiB0aGVcbiAgICAgICAqIGZpcnN0IG9uZS4gVGhlIGtleSBpcyByZXR1cm5lZCBpZiBub3QgZm91bmQgaW4gdGhlIGRpY3Rpb25hcmllcy5cbiAgICAgICAqIEBwYXJhbSB0cmFuc2xhdGlvbnMgQSB0cmFuc2xhdGlvbiBkaWN0aW9uYXJ5LlxuICAgICAgICogQHBhcmFtIGRlZmF1bHRzIEEgdHJhbnNsYXRpb24gZGljdGlvbmFyeS5cbiAgICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSB0cmFuc2xhdG9yLlxuICAgICAgICovXG4gICAgICBjcmVhdGVUcmFuc2xhdG9yIDogZnVuY3Rpb24gKHRyYW5zbGF0aW9ucywgZGVmYXVsdHMpIHtcbiAgICAgICAgZGVmYXVsdHMgPSBkZWZhdWx0cyB8fCB7fTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxmLmdldEtleSh0cmFuc2xhdGlvbnMsIGtleSwgbnVsbCk7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXQoJ1BlbmRpbmcgdHJhbnNsYXRpb24gZm9yOiAlcycsIGtleSkpO1xuICAgICAgICAgICAgdmFsdWUgPSBfdGhpcy5nZXRLZXkoZGVmYXVsdHMsIGtleSwga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2VsZjtcblxuICB9KCkpLFxuXG5cbi8qKlxuICogUHJvdmlkZSBmaWxlcyBhY2NvcmRpbmcgdG8gdXNlcidzIGxvY2FsZVxuICpcbiAqIEBhdXRob3IgQXJ5IFBhYmxvIEJhdGlzdGEgPGJhdGFyeXBhQGFyLmlibS5jb20+XG4gKi9cbiAgaTE4blByb3ZpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgREVGQVVMVF9MT0NBTEUgPSAnZW4nLFxuICAgICAgICBJMThOX0RJUiA9ICcuL2kxOG4nLFxuICAgICAgICBzZWxmID0ge1xuICAgICAgICAgIGRpY3Rpb25hcmllczoge1xuICAgICAgICAgICAgJ2VuJzogcmVxdWlyZSgnLi9pMThuL2VuJyksXG4gICAgICAgICAgICAnZXMnOiByZXF1aXJlKCcuL2kxOG4vZXMnKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIGxvY2FsZSBvcHRpb25zLlxuICAgICAqIGZvciAnZXMtQVInWyd0cmFpdHNfZXMtQVIuanNvbicsICd0cmFpdHNfZXMuanNvbicsICd0cmFpdHMuanNvbiddXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9jYWxlIEEgbG9jYWxlIChmb3JtYXQ6IGxsLUNDKVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2YgdGhlIHBvc3NpYmxlIG5hbWVzIGZvciBkaWN0aW9uYXJ5IGZpbGUuXG4gICAgICovXG4gICAgc2VsZi5nZXRMb2NhbGVPcHRpb25zID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgdmFyXG4gICAgICAgIGxvY2FsZVBhcnRzID0gbG9jYWxlLnNwbGl0KCctJyksXG4gICAgICAgIG9wdGlvbnMgPSBbXTtcblxuICAgICAgb3B0aW9ucy5wdXNoKGxvY2FsZS5yZXBsYWNlKCctJywgJ18nKSk7XG4gICAgICBpZiAobG9jYWxlUGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIG9wdGlvbnMucHVzaChsb2NhbGVQYXJ0c1swXSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMucHVzaChERUZBVUxUX0xPQ0FMRSk7XG5cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFwcHJvcGlhdGUgZGljdGlvbmFyeSBmaWxlIGZvciB1c2VyJ3MgbG9jYWxlLlxuICAgICAqL1xuICAgIHNlbGYuZ2V0RGljdGlvbmFyeSA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBsb2NhbGVzID0gc2VsZi5nZXRMb2NhbGVPcHRpb25zKGxvY2FsZSksXG4gICAgICAgICAgZGljdDtcblxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuZGljdGlvbmFyaWVzW2xvY2FsZXNbaV1dKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuZGljdGlvbmFyaWVzW2xvY2FsZXNbaV1dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IG9idGFpbiBhbnkgZGljdGlvbmFyeSBmb3IgbG9jYWxlIFwiJyArIGxvY2FsZSArICdcIicpO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2VsZjtcblxuICB9KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaTE4blByb3ZpZGVyIDogaTE4blByb3ZpZGVyLFxuICBnZXREaWN0aW9uYXJ5IDogaTE4blByb3ZpZGVyLmdldERpY3Rpb25hcnksXG4gIHRyYW5zbGF0b3JGYWN0b3J5IDogdHJhbnNsYXRvckZhY3Rvcnlcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZmFjZXRzXCIgOiB7XG4gIFx0XCJGcmllbmRsaW5lc3NcIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiRXh0cmF2ZXJzaW9uXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJSZXNlcnZlZFwiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIk91dGdvaW5nXCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBhIHByaXZhdGUgcGVyc29uIGFuZCBkb24ndCBsZXQgbWFueSBwZW9wbGUgaW5cIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IG1ha2UgZnJpZW5kcyBlYXNpbHkgYW5kIGZlZWwgY29tZm9ydGFibGUgYXJvdW5kIG90aGVyIHBlb3BsZVwiXG4gIFx0fSxcbiAgXHRcIkdyZWdhcmlvdXNuZXNzXCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkV4dHJhdmVyc2lvblwiLFxuICBcdFx0XCJMb3dUZXJtXCI6IFwiSW5kZXBlbmRlbnRcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJTb2NpYWJsZVwiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBoYXZlIGEgc3Ryb25nIGRlc2lyZSB0byBoYXZlIHRpbWUgdG8geW91cnNlbGZcIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGVuam95IGJlaW5nIGluIHRoZSBjb21wYW55IG9mIG90aGVyc1wiXG4gIFx0fSxcbiAgXHRcIkFzc2VydGl2ZW5lc3NcIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiRXh0cmF2ZXJzaW9uXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJEZW11cmVcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJBc3NlcnRpdmVcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgcHJlZmVyIHRvIGxpc3RlbiB0aGFuIHRvIHRhbGssIGVzcGVjaWFsbHkgaW4gZ3JvdXAgc2l0dWF0aW9uc1wiLFxuICBcdFx0XCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgdGVuZCB0byBzcGVhayB1cCBhbmQgdGFrZSBjaGFyZ2Ugb2Ygc2l0dWF0aW9ucywgYW5kIHlvdSBhcmUgY29tZm9ydGFibGUgbGVhZGluZyBncm91cHNcIlxuICBcdH0sXG4gIFx0XCJBY3Rpdml0eS1sZXZlbFwiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJFeHRyYXZlcnNpb25cIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkxhaWQtYmFja1wiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIkVuZXJnZXRpY1wiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBhcHByZWNpYXRlIGEgcmVsYXhlZCBwYWNlIGluIGxpZmVcIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGVuam95IGEgZmFzdC1wYWNlZCwgYnVzeSBzY2hlZHVsZSB3aXRoIG1hbnkgYWN0aXZpdGllc1wiXG4gIFx0fSxcbiAgXHRcIkV4Y2l0ZW1lbnQtc2Vla2luZ1wiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJFeHRyYXZlcnNpb25cIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkNhbG0tc2Vla2luZ1wiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIkV4Y2l0ZW1lbnQtc2Vla2luZ1wiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBwcmVmZXIgYWN0aXZpdGllcyB0aGF0IGFyZSBxdWlldCwgY2FsbSwgYW5kIHNhZmVcIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBleGNpdGVkIGJ5IHRha2luZyByaXNrcyBhbmQgZmVlbCBib3JlZCB3aXRob3V0IGxvdHMgb2YgYWN0aW9uIGdvaW5nIG9uXCJcbiAgXHR9LFxuICBcdFwiQ2hlZXJmdWxuZXNzXCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkV4dHJhdmVyc2lvblwiLFxuICBcdFx0XCJMb3dUZXJtXCI6IFwiU29sZW1uXCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiQ2hlZXJmdWxcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIGdlbmVyYWxseSBzZXJpb3VzIGFuZCBkbyBub3Qgam9rZSBtdWNoXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBhcmUgYSBqb3lmdWwgcGVyc29uIGFuZCBzaGFyZSB0aGF0IGpveSB3aXRoIHRoZSB3b3JsZFwiXG4gIFx0fSxcbiAgXHRcIlRydXN0XCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkFncmVlYWJsZW5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkNhdXRpb3VzIG9mIG90aGVyc1wiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIlRydXN0aW5nIG9mIG90aGVyc1wiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBhcmUgd2FyeSBvZiBvdGhlciBwZW9wbGUncyBpbnRlbnRpb25zIGFuZCBkbyBub3QgdHJ1c3QgZWFzaWx5XCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBiZWxpZXZlIHRoZSBiZXN0IGluIG90aGVycyBhbmQgdHJ1c3QgcGVvcGxlIGVhc2lseVwiXG4gIFx0fSxcbiAgXHRcIkNvb3BlcmF0aW9uXCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkFncmVlYWJsZW5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkNvbnRyYXJ5XCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiQWNjb21tb2RhdGluZ1wiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBkbyBub3Qgc2h5IGF3YXkgZnJvbSBjb250cmFkaWN0aW5nIG90aGVyc1wiLFxuICBcdFx0XCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIGVhc3kgdG8gcGxlYXNlIGFuZCB0cnkgdG8gYXZvaWQgY29uZnJvbnRhdGlvblwiXG4gIFx0fSxcbiAgXHRcIkFsdHJ1aXNtXCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkFncmVlYWJsZW5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIlNlbGYtZm9jdXNlZFwiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIkFsdHJ1aXN0aWNcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIG1vcmUgY29uY2VybmVkIHdpdGggdGFraW5nIGNhcmUgb2YgeW91cnNlbGYgdGhhbiB0YWtpbmcgdGltZSBmb3Igb3RoZXJzXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBmZWVsIGZ1bGZpbGxlZCB3aGVuIGhlbHBpbmcgb3RoZXJzLCBhbmQgd2lsbCBnbyBvdXQgb2YgeW91ciB3YXkgdG8gZG8gc29cIlxuICBcdH0sXG4gIFx0XCJNb3JhbGl0eVwiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJBZ3JlZWFibGVuZXNzXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJDb21wcm9taXNpbmdcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJVbmNvbXByb21pc2luZ1wiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBhcmUgY29tZm9ydGFibGUgdXNpbmcgZXZlcnkgdHJpY2sgaW4gdGhlIGJvb2sgdG8gZ2V0IHdoYXQgeW91IHdhbnRcIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IHRoaW5rIGl0IGlzIHdyb25nIHRvIHRha2UgYWR2YW50YWdlIG9mIG90aGVycyB0byBnZXQgYWhlYWRcIlxuICBcdH0sXG4gIFx0XCJNb2Rlc3R5XCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkFncmVlYWJsZW5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIlByb3VkXCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiTW9kZXN0XCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGhvbGQgeW91cnNlbGYgaW4gaGlnaCByZWdhcmQsIHNhdGlzZmllZCB3aXRoIHdobyB5b3UgYXJlXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBhcmUgdW5jb21mb3J0YWJsZSBiZWluZyB0aGUgY2VudGVyIG9mIGF0dGVudGlvblwiXG4gIFx0fSxcbiAgXHRcIlN5bXBhdGh5XCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkFncmVlYWJsZW5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkhhcmRlbmVkXCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiRW1wYXRoZXRpY1wiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSB0aGluayB0aGF0IHBlb3BsZSBzaG91bGQgZ2VuZXJhbGx5IHJlbHkgbW9yZSBvbiB0aGVtc2VsdmVzIHRoYW4gb24gb3RoZXIgcGVvcGxlXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBmZWVsIHdoYXQgb3RoZXJzIGZlZWwgYW5kIGFyZSBjb21wYXNzaW9uYXRlIHRvd2FyZHMgdGhlbVwiXG4gIFx0fSxcbiAgXHRcIlNlbGYtZWZmaWNhY3lcIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiQ29uc2NpZW50aW91c25lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIlNlbGYtZG91YnRpbmdcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJTZWxmLWFzc3VyZWRcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgZnJlcXVlbnRseSBkb3VidCB5b3VyIGFiaWxpdHkgdG8gYWNoaWV2ZSB5b3VyIGdvYWxzXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBmZWVsIHlvdSBoYXZlIHRoZSBhYmlsaXR5IHRvIHN1Y2NlZWQgaW4gdGhlIHRhc2tzIHlvdSBzZXQgb3V0IHRvIGRvXCJcbiAgXHR9LFxuICBcdFwiT3JkZXJsaW5lc3NcIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiQ29uc2NpZW50aW91c25lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIlVuc3RydWN0dXJlZFwiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIk9yZ2FuaXplZFwiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBkbyBub3QgbWFrZSBhIGxvdCBvZiB0aW1lIGZvciBvcmdhbml6YXRpb24gaW4geW91ciBkYWlseSBsaWZlXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBmZWVsIGEgc3Ryb25nIG5lZWQgZm9yIHN0cnVjdHVyZSBpbiB5b3VyIGxpZmVcIlxuICBcdH0sXG4gIFx0XCJEdXRpZnVsbmVzc1wiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJDb25zY2llbnRpb3VzbmVzc1wiLFxuICBcdFx0XCJMb3dUZXJtXCI6IFwiQ2FyZWZyZWVcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJEdXRpZnVsXCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGRvIHdoYXQgeW91IHdhbnQsIGRpc3JlZ2FyZGluZyBydWxlcyBhbmQgb2JsaWdhdGlvbnNcIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IHRha2UgcnVsZXMgYW5kIG9ibGlnYXRpb25zIHNlcmlvdXNseSwgZXZlbiB3aGVuIHRoZXkncmUgaW5jb252ZW5pZW50XCJcbiAgXHR9LFxuICBcdFwiQWNoaWV2ZW1lbnQtc3RyaXZpbmdcIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiQ29uc2NpZW50aW91c25lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkNvbnRlbnRcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJEcml2ZW5cIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIGNvbnRlbnQgd2l0aCB5b3VyIGxldmVsIG9mIGFjY29tcGxpc2htZW50IGFuZCBkbyBub3QgZmVlbCB0aGUgbmVlZCB0byBzZXQgYW1iaXRpb3VzIGdvYWxzXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBoYXZlIGhpZ2ggZ29hbHMgZm9yIHlvdXJzZWxmIGFuZCB3b3JrIGhhcmQgdG8gYWNoaWV2ZSB0aGVtXCJcbiAgXHR9LFxuICBcdFwiU2VsZi1kaXNjaXBsaW5lXCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIkNvbnNjaWVudGlvdXNuZXNzXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJJbnRlcm1pdHRlbnRcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJQZXJzaXN0ZW50XCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGhhdmUgYSBoYXJkIHRpbWUgc3RpY2tpbmcgd2l0aCBkaWZmaWN1bHQgdGFza3MgZm9yIGEgbG9uZyBwZXJpb2Qgb2YgdGltZVwiLFxuICBcdFx0XCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgY2FuIHRhY2tsZSBhbmQgc3RpY2sgd2l0aCB0b3VnaCB0YXNrc1wiXG4gIFx0fSxcbiAgXHRcIkNhdXRpb3VzbmVzc1wiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJDb25zY2llbnRpb3VzbmVzc1wiLFxuICBcdFx0XCJMb3dUZXJtXCI6IFwiQm9sZFwiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIkRlbGliZXJhdGVcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3Ugd291bGQgcmF0aGVyIHRha2UgYWN0aW9uIGltbWVkaWF0ZWx5IHRoYW4gc3BlbmQgdGltZSBkZWxpYmVyYXRpbmcgbWFraW5nIGEgZGVjaXNpb25cIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGNhcmVmdWxseSB0aGluayB0aHJvdWdoIGRlY2lzaW9ucyBiZWZvcmUgbWFraW5nIHRoZW1cIlxuICBcdH0sXG4gIFx0XCJBbnhpZXR5XCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIk5ldXJvdGljaXNtXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJTZWxmLWFzc3VyZWRcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJQcm9uZSB0byB3b3JyeVwiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSB0ZW5kIHRvIGZlZWwgY2FsbSBhbmQgc2VsZi1hc3N1cmVkXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSB0ZW5kIHRvIHdvcnJ5IGFib3V0IHRoaW5ncyB0aGF0IG1pZ2h0IGhhcHBlblwiXG4gIFx0fSxcbiAgXHRcIkFuZ2VyXCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIk5ldXJvdGljaXNtXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJNaWxkLXRlbXBlcmVkXCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiRmllcnlcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJJdCB0YWtlcyBhIGxvdCB0byBnZXQgeW91IGFuZ3J5XCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBoYXZlIGEgZmllcnkgdGVtcGVyLCBlc3BlY2lhbGx5IHdoZW4gdGhpbmdzIGRvIG5vdCBnbyB5b3VyIHdheVwiXG4gIFx0fSxcbiAgXHRcIkRlcHJlc3Npb25cIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiTmV1cm90aWNpc21cIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkNvbnRlbnRcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJNZWxhbmNob2x5XCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBnZW5lcmFsbHkgY29tZm9ydGFibGUgd2l0aCB5b3Vyc2VsZiBhcyB5b3UgYXJlXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSB0aGluayBxdWl0ZSBvZnRlbiBhYm91dCB0aGUgdGhpbmdzIHlvdSBhcmUgdW5oYXBweSBhYm91dFwiXG4gIFx0fSxcbiAgXHRcIlNlbGYtY29uc2Npb3VzbmVzc1wiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJOZXVyb3RpY2lzbVwiLFxuICBcdFx0XCJMb3dUZXJtXCI6IFwiQ29uZmlkZW50XCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiU2VsZi1jb25zY2lvdXNcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIGhhcmQgdG8gZW1iYXJyYXNzIGFuZCBhcmUgc2VsZi1jb25maWRlbnQgbW9zdCBvZiB0aGUgdGltZVwiLFxuICBcdFx0XCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIHNlbnNpdGl2ZSBhYm91dCB3aGF0IG90aGVycyBtaWdodCBiZSB0aGlua2luZyBhYm91dCB5b3VcIlxuICBcdH0sXG4gIFx0XCJJbW1vZGVyYXRpb25cIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiTmV1cm90aWNpc21cIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIlNlbGYtY29udHJvbGxlZFwiLFxuICBcdFx0XCJIaWdoVGVybVwiOiBcIkhlZG9uaXN0aWNcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgaGF2ZSBjb250cm9sIG92ZXIgeW91ciBkZXNpcmVzLCB3aGljaCBhcmUgbm90IHBhcnRpY3VsYXJseSBpbnRlbnNlXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBmZWVsIHlvdXIgZGVzaXJlcyBzdHJvbmdseSBhbmQgYXJlIGVhc2lseSB0ZW1wdGVkIGJ5IHRoZW1cIlxuICBcdH0sXG4gIFx0XCJWdWxuZXJhYmlsaXR5XCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIk5ldXJvdGljaXNtXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJDYWxtIHVuZGVyIHByZXNzdXJlXCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiU3VzY2VwdGlibGUgdG8gc3RyZXNzXCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGhhbmRsZSB1bmV4cGVjdGVkIGV2ZW50cyBjYWxtbHkgYW5kIGVmZmVjdGl2ZWx5XCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBhcmUgZWFzaWx5IG92ZXJ3aGVsbWVkIGluIHN0cmVzc2Z1bCBzaXR1YXRpb25zXCJcbiAgXHR9LFxuICBcdFwiSW1hZ2luYXRpb25cIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiT3Blbm5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkRvd24tdG8tZWFydGhcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJJbWFnaW5hdGl2ZVwiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBwcmVmZXIgZmFjdHMgb3ZlciBmYW50YXN5XCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBoYXZlIGEgd2lsZCBpbWFnaW5hdGlvblwiXG4gIFx0fSxcbiAgXHRcIkFydGlzdGljLWludGVyZXN0c1wiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJPcGVubmVzc1wiLFxuICBcdFx0XCJMb3dUZXJtXCI6IFwiVW5jb25jZXJuZWQgd2l0aCBhcnRcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJBcHByZWNpYXRpdmUgb2YgYXJ0XCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBsZXNzIGNvbmNlcm5lZCB3aXRoIGFydGlzdGljIG9yIGNyZWF0aXZlIGFjdGl2aXRpZXMgdGhhbiBtb3N0IHBlb3BsZSB3aG8gcGFydGljaXBhdGVkIGluIG91ciBzdXJ2ZXlzXCIsXG4gIFx0XHRcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBlbmpveSBiZWF1dHkgYW5kIHNlZWsgb3V0IGNyZWF0aXZlIGV4cGVyaWVuY2VzXCJcbiAgXHR9LFxuICBcdFwiRW1vdGlvbmFsaXR5XCI6IHtcbiAgXHRcdFwiQmlnNVwiOiBcIk9wZW5uZXNzXCIsXG4gIFx0XHRcIkxvd1Rlcm1cIjogXCJEaXNwYXNzaW9uYXRlXCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiRW1vdGlvbmFsbHkgYXdhcmVcIixcbiAgXHRcdFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgZG8gbm90IGZyZXF1ZW50bHkgdGhpbmsgYWJvdXQgb3Igb3Blbmx5IGV4cHJlc3MgeW91ciBlbW90aW9uc1wiLFxuICBcdFx0XCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIGF3YXJlIG9mIHlvdXIgZmVlbGluZ3MgYW5kIGhvdyB0byBleHByZXNzIHRoZW1cIlxuICBcdH0sXG4gIFx0XCJBZHZlbnR1cm91c25lc3NcIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiT3Blbm5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIkNvbnNpc3RlbnRcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJBZHZlbnR1cm91c1wiLFxuICBcdFx0XCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBlbmpveSBmYW1pbGlhciByb3V0aW5lcyBhbmQgcHJlZmVyIG5vdCB0byBkZXZpYXRlIGZyb20gdGhlbVwiLFxuICBcdFx0XCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIGVhZ2VyIHRvIGV4cGVyaWVuY2UgbmV3IHRoaW5nc1wiXG4gIFx0fSxcbiAgXHRcIkludGVsbGVjdFwiOiB7XG4gIFx0XHRcIkJpZzVcIjogXCJPcGVubmVzc1wiLFxuICBcdFx0XCJMb3dUZXJtXCI6IFwiQ29uY3JldGVcIixcbiAgXHRcdFwiSGlnaFRlcm1cIjogXCJQaGlsb3NvcGhpY2FsXCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IHByZWZlciBkZWFsaW5nIHdpdGggdGhlIHdvcmxkIGFzIGl0IGlzLCByYXJlbHkgY29uc2lkZXJpbmcgYWJzdHJhY3QgaWRlYXNcIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBvcGVuIHRvIGFuZCBpbnRyaWd1ZWQgYnkgbmV3IGlkZWFzIGFuZCBsb3ZlIHRvIGV4cGxvcmUgdGhlbVwiXG4gIFx0fSxcbiAgXHRcIkxpYmVyYWxpc21cIjoge1xuICBcdFx0XCJCaWc1XCI6IFwiT3Blbm5lc3NcIixcbiAgXHRcdFwiTG93VGVybVwiOiBcIlJlc3BlY3RmdWwgb2YgYXV0aG9yaXR5XCIsXG4gIFx0XHRcIkhpZ2hUZXJtXCI6IFwiQXV0aG9yaXR5LWNoYWxsZW5naW5nXCIsXG4gIFx0XHRcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IHByZWZlciBmb2xsb3dpbmcgd2l0aCB0cmFkaXRpb24gaW4gb3JkZXIgdG8gbWFpbnRhaW4gYSBzZW5zZSBvZiBzdGFiaWxpdHlcIixcbiAgXHRcdFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IHByZWZlciB0byBjaGFsbGVuZ2UgYXV0aG9yaXR5IGFuZCB0cmFkaXRpb25hbCB2YWx1ZXMgdG8gaGVscCBicmluZyBhYm91dCBwb3NpdGl2ZSBjaGFuZ2VzXCJcbiAgXHR9XG4gIH0sXG4gIFwibmVlZHNcIjoge1xuICAgICAgXCJDaGFsbGVuZ2VcIjogW1xuICAgICAgICAgIFwicHJlc3RpZ2VcIixcbiAgICAgICAgICBcImNvbXBldGl0aW9uXCIsXG4gICAgICAgICAgXCJnbG9yeVwiXG4gICAgICBdLFxuICAgICAgXCJDbG9zZW5lc3NcIjogW1xuICAgICAgICAgIFwiYmVsb25naW5nbmVzc1wiLFxuICAgICAgICAgIFwibm9zdGFsZ2lhXCIsXG4gICAgICAgICAgXCJpbnRpbWFjeVwiXG4gICAgICBdLFxuICAgICAgXCJDdXJpb3NpdHlcIjogW1xuICAgICAgICAgIFwiZGlzY292ZXJ5XCIsXG4gICAgICAgICAgXCJtYXN0ZXJ5XCIsXG4gICAgICAgICAgXCJnYWluaW5nIGtub3dsZWRnZVwiXG4gICAgICBdLFxuICAgICAgXCJFeGNpdGVtZW50XCI6IFtcbiAgICAgICAgICBcInJldmVscnlcIixcbiAgICAgICAgICBcImFudGljaXBhdGlvblwiLFxuICAgICAgICAgIFwiZXhoaWxpcmF0aW9uXCJcbiAgICAgIF0sXG4gICAgICBcIkhhcm1vbnlcIjogW1xuICAgICAgICAgIFwid2VsbC1iZWluZ1wiLFxuICAgICAgICAgIFwiY291cnRlc3lcIixcbiAgICAgICAgICBcInBvbGl0ZW5lc3NcIlxuICAgICAgXSxcbiAgICAgIFwiSWRlYWxcIjogW1xuICAgICAgICAgIFwic29waGlzdGljYXRpb25cIixcbiAgICAgICAgICBcInNwaXJpdHVhbGl0eVwiLFxuICAgICAgICAgIFwic3VwZXJpb3JpdHlcIixcbiAgICAgICAgICBcImZ1bGZpbGxtZW50XCJcbiAgICAgIF0sXG4gICAgICBcIkxpYmVydHlcIjogW1xuICAgICAgICAgIFwibW9kZXJuaXR5XCIsXG4gICAgICAgICAgXCJleHBhbmRpbmcgcG9zc2liaWxpdHlcIixcbiAgICAgICAgICBcImVzY2FwZVwiLFxuICAgICAgICAgIFwic3BvbnRhbmVpdHlcIixcbiAgICAgICAgICBcIm5vdmVsdHlcIlxuICAgICAgXSxcbiAgICAgIFwiTG92ZVwiOiBbXG4gICAgICAgICAgXCJjb25uZWN0ZWRuZXNzXCIsXG4gICAgICAgICAgXCJhZmZpbml0eVwiXG4gICAgICBdLFxuICAgICAgXCJQcmFjdGljYWxpdHlcIjogW1xuICAgICAgICAgIFwiZWZmaWNpZW5jeVwiLFxuICAgICAgICAgIFwicHJhY3RpY2FsaXR5XCIsXG4gICAgICAgICAgXCJoaWdoIHZhbHVlXCIsXG4gICAgICAgICAgXCJjb252ZW5pZW5jZVwiXG4gICAgICBdLFxuICAgICAgXCJTZWxmLWV4cHJlc3Npb25cIjogW1xuICAgICAgICAgIFwic2VsZi1leHByZXNzaW9uXCIsXG4gICAgICAgICAgXCJwZXJzb25hbCBlbXBvd2VybWVudFwiLFxuICAgICAgICAgIFwicGVyc29uYWwgc3RyZW5ndGhcIlxuICAgICAgXSxcbiAgICAgIFwiU3RhYmlsaXR5XCI6IFtcbiAgICAgICAgICBcInN0YWJpbGl0eVwiLFxuICAgICAgICAgIFwiYXV0aGVudGljaXR5XCIsXG4gICAgICAgICAgXCJ0cnVzdHdvcnRoaW5lc3NcIlxuICAgICAgXSxcbiAgICAgIFwiU3RydWN0dXJlXCI6IFtcbiAgICAgICAgICBcIm9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgIFwic3RyYWlnaHRmb3J3YXJkbmVzc1wiLFxuICAgICAgICAgIFwiY2xhcml0eVwiLFxuICAgICAgICAgIFwicmVsaWFiaWxpdHlcIlxuICAgICAgXVxuICB9LFxuICBcInBocmFzZXNcIjoge1xuICAgIFwiWW91IGFyZSAlc1wiOiBcIllvdSBhcmUgJXNcIixcbiAgICBcIllvdSBhcmUgJXMgYW5kICVzXCI6IFwiWW91IGFyZSAlcyBhbmQgJXNcIixcbiAgICBcIllvdSBhcmUgJXMsICVzIGFuZCAlc1wiOiBcIllvdSBhcmUgJXMsICVzIGFuZCAlc1wiLFxuICAgIFwiQW5kIHlvdSBhcmUgJXNcIjogXCJBbmQgeW91IGFyZSAlc1wiLFxuICAgIFwiWW91IGFyZSByZWxhdGl2ZWx5IHVuY29uY2VybmVkIHdpdGggJXNcIjogXCJZb3UgYXJlIHJlbGF0aXZlbHkgdW5jb25jZXJuZWQgd2l0aCAlc1wiLFxuICAgIFwiWW91IGFyZSByZWxhdGl2ZWx5IHVuY29uY2VybmVkIHdpdGggYm90aCAlcyBhbmQgJXNcIjogXCJZb3UgYXJlIHJlbGF0aXZlbHkgdW5jb25jZXJuZWQgd2l0aCBib3RoICVzIGFuZCAlc1wiLFxuICAgIFwiWW91IGRvbid0IGZpbmQgJXMgdG8gYmUgcGFydGljdWxhcmx5IG1vdGl2YXRpbmcgZm9yIHlvdVwiOiBcIllvdSBkb24ndCBmaW5kICVzIHRvIGJlIHBhcnRpY3VsYXJseSBtb3RpdmF0aW5nIGZvciB5b3VcIixcbiAgICBcIllvdSBkb24ndCBmaW5kIGVpdGhlciAlcyBvciAlcyB0byBiZSBwYXJ0aWN1bGFybHkgbW90aXZhdGluZyBmb3IgeW91XCI6IFwiWW91IGRvbid0IGZpbmQgZWl0aGVyICVzIG9yICVzIHRvIGJlIHBhcnRpY3VsYXJseSBtb3RpdmF0aW5nIGZvciB5b3VcIixcbiAgICBcIllvdSB2YWx1ZSBib3RoICVzIGEgYml0XCI6IFwiWW91IHZhbHVlIGJvdGggJXMgYSBiaXRcIixcbiAgICBcIllvdSB2YWx1ZSBib3RoICVzIGFuZCAlcyBhIGJpdFwiOiBcIllvdSB2YWx1ZSBib3RoICVzIGFuZCAlcyBhIGJpdFwiLFxuICAgIFwiWW91IGNvbnNpZGVyICVzIHRvIGd1aWRlIGEgbGFyZ2UgcGFydCBvZiB3aGF0IHlvdSBkb1wiIDogXCJZb3UgY29uc2lkZXIgJXMgdG8gZ3VpZGUgYSBsYXJnZSBwYXJ0IG9mIHdoYXQgeW91IGRvXCIsXG4gICAgXCJZb3UgY29uc2lkZXIgYm90aCAlcyBhbmQgJXMgdG8gZ3VpZGUgYSBsYXJnZSBwYXJ0IG9mIHdoYXQgeW91IGRvXCIgOiBcIllvdSBjb25zaWRlciBib3RoICVzIGFuZCAlcyB0byBndWlkZSBhIGxhcmdlIHBhcnQgb2Ygd2hhdCB5b3UgZG9cIixcbiAgICBcIkFuZCAlc1wiOiBcIkFuZCAlc1wiLFxuICAgIFwiWW91IHZhbHVlICVzIGEgYml0IG1vcmVcIjogXCJZb3UgdmFsdWUgJXMgYSBiaXQgbW9yZVwiLFxuICAgIFwiRXhwZXJpZW5jZXMgdGhhdCBtYWtlIHlvdSBmZWVsIGhpZ2ggJXMgYXJlIGdlbmVyYWxseSB1bmFwcGVhbGluZyB0byB5b3VcIjogXCJFeHBlcmllbmNlcyB0aGF0IG1ha2UgeW91IGZlZWwgaGlnaCAlcyBhcmUgZ2VuZXJhbGx5IHVuYXBwZWFsaW5nIHRvIHlvdVwiLFxuICAgIFwiRXhwZXJpZW5jZXMgdGhhdCBnaXZlIGEgc2Vuc2Ugb2YgJXMgaG9sZCBzb21lIGFwcGVhbCB0byB5b3VcIjogXCJFeHBlcmllbmNlcyB0aGF0IGdpdmUgYSBzZW5zZSBvZiAlcyBob2xkIHNvbWUgYXBwZWFsIHRvIHlvdVwiLFxuICAgIFwiWW91IGFyZSBtb3RpdmF0ZWQgdG8gc2VlayBvdXQgZXhwZXJpZW5jZXMgdGhhdCBwcm92aWRlIGEgc3Ryb25nIGZlZWxpbmcgb2YgJXNcIjogXCJZb3UgYXJlIG1vdGl2YXRlZCB0byBzZWVrIG91dCBleHBlcmllbmNlcyB0aGF0IHByb3ZpZGUgYSBzdHJvbmcgZmVlbGluZyBvZiAlc1wiLFxuICAgIFwiWW91ciBjaG9pY2VzIGFyZSBkcml2ZW4gYnkgYSBkZXNpcmUgZm9yICVzXCIgOiBcIllvdXIgY2hvaWNlcyBhcmUgZHJpdmVuIGJ5IGEgZGVzaXJlIGZvciAlc1wiLFxuICAgIFwiYSBiaXQgJXNcIjogXCJhIGJpdCAlc1wiLFxuICAgIFwic29tZXdoYXQgJXNcIiA6IFwic29tZXdoYXQgJXNcIixcbiAgICBcImNhbiBiZSBwZXJjZWl2ZWQgYXMgJXNcIjogXCJjYW4gYmUgcGVyY2VpdmVkIGFzICVzXCJcbiAgfSxcbiAgXCJ0cmFpdHNcIjoge1xuICAgICAgXCJBZ3JlZWFibGVuZXNzX21pbnVzX0NvbnNjaWVudGlvdXNuZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5jb25zaWRlcmF0ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW1wb2xpdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRpc3RydXN0ZnVsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ1bmNvb3BlcmF0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0aG91Z2h0bGVzc1wiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQWdyZWVhYmxlbmVzc19taW51c19Db25zY2llbnRpb3VzbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInN0cmljdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInJpZ2lkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzdGVyblwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQWdyZWVhYmxlbmVzc19taW51c19FeHRyYXZlcnNpb25fbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjeW5pY2FsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ3YXJ5IG9mIG90aGVyc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2VjbHVzaXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkZXRhY2hlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW1wZXJzb25hbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZ2x1bVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQWdyZWVhYmxlbmVzc19taW51c19FeHRyYXZlcnNpb25fcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImJ1bGxoZWFkZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImFicnVwdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3J1ZGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvbWJhdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicm91Z2hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzbHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIm1hbmlwdWxhdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZ3J1ZmZcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRldmlvdXNcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkFncmVlYWJsZW5lc3NfbWludXNfTmV1cm90aWNpc21fbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbnNlbnNpdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hZmZlY3Rpb25hdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBhc3Npb25sZXNzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ1bmVtb3Rpb25hbFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQWdyZWVhYmxlbmVzc19taW51c19OZXVyb3RpY2lzbV9wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3JpdGljYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlbGZpc2hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImlsbC10ZW1wZXJlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYW50YWdvbmlzdGljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJncnVtcHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImJpdHRlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlzYWdyZWVhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkZW1hbmRpbmdcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkFncmVlYWJsZW5lc3NfbWludXNfT3Blbm5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb2Fyc2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInRhY3RsZXNzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjdXJ0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJuYXJyb3ctbWluZGVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjYWxsb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJydXRobGVzc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5jaGFyaXRhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ2aW5kaWN0aXZlXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJBZ3JlZWFibGVuZXNzX21pbnVzX09wZW5uZXNzX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2hyZXdkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZWNjZW50cmljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kaXZpZHVhbGlzdGljXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJBZ3JlZWFibGVuZXNzX3BsdXNfQ29uc2NpZW50aW91c25lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5wcmV0ZW50aW91c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlbGYtZWZmYWNpbmdcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkFncmVlYWJsZW5lc3NfcGx1c19Db25zY2llbnRpb3VzbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImhlbHBmdWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb29wZXJhdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvbnNpZGVyYXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicmVzcGVjdGZ1bFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBvbGl0ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInJlYXNvbmFibGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb3VydGVvdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0aG91Z2h0ZnVsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibG95YWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJtb3JhbFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQWdyZWVhYmxlbmVzc19wbHVzX0V4dHJhdmVyc2lvbl9taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzb2Z0LWhlYXJ0ZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhZ3JlZWFibGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJvYmxpZ2luZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImh1bWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibGVuaWVudFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQWdyZWVhYmxlbmVzc19wbHVzX0V4dHJhdmVyc2lvbl9wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImVmZmVydmVzY2VudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImhhcHB5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZnJpZW5kbHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJtZXJyeVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImpvdmlhbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImh1bW9yb3VzXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJBZ3JlZWFibGVuZXNzX3BsdXNfTmV1cm90aWNpc21fbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZ2VuZXJvdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwbGVhc2FudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInRvbGVyYW50XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVhY2VmdWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJmbGV4aWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImVhc3ktZ29pbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJmYWlyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY2hhcml0YWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInRydXN0ZnVsXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJBZ3JlZWFibGVuZXNzX3BsdXNfTmV1cm90aWNpc21fcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzZW50aW1lbnRhbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImFmZmVjdGlvbmF0ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlbnNpdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNvZnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwYXNzaW9uYXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicm9tYW50aWNcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkFncmVlYWJsZW5lc3NfcGx1c19PcGVubmVzc19taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRlcGVuZGVudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2ltcGxlXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJBZ3JlZWFibGVuZXNzX3BsdXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJnZW5pYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0YWN0ZnVsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlwbG9tYXRpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRlZXBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpZGVhbGlzdGljXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19BZ3JlZWFibGVuZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicmFzaFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5jb29wZXJhdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5yZWxpYWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlzdHJ1c3RmdWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInRob3VnaHRsZXNzXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19BZ3JlZWFibGVuZXNzX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5wcmV0ZW50aW91c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlbGYtZWZmYWNpbmdcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkNvbnNjaWVudGlvdXNuZXNzX21pbnVzX0V4dHJhdmVyc2lvbl9taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImluZGVjaXNpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImFpbWxlc3NcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ3aXNoeS13YXNoeVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIm5vbmNvbW1pdHRhbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hbWJpdGlvdXNcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkNvbnNjaWVudGlvdXNuZXNzX21pbnVzX0V4dHJhdmVyc2lvbl9wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5ydWx5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYm9pc3Rlcm91c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicmVja2xlc3NcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRldmlsLW1heS1jYXJlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQ29uc2NpZW50aW91c25lc3NfbWludXNfTmV1cm90aWNpc21fbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5mb3JtYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJsb3cta2V5XCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19OZXVyb3RpY2lzbV9wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2NhdHRlcmJyYWluZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImluY29uc2lzdGVudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXJyYXRpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZm9yZ2V0ZnVsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbXB1bHNpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImZyaXZvbG91c1wiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQ29uc2NpZW50aW91c25lc3NfbWludXNfT3Blbm5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZm9vbGhhcmR5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbGxvZ2ljYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImltbWF0dXJlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJoYXBoYXphcmRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJsYXhcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImZsaXBwYW50XCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19PcGVubmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVuY29udmVudGlvbmFsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicXVpcmt5XCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zY2llbnRpb3VzbmVzc19wbHVzX0FncmVlYWJsZW5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzdGVyblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInN0cmljdFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInJpZ2lkXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zY2llbnRpb3VzbmVzc19wbHVzX0FncmVlYWJsZW5lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkZXBlbmRhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicmVzcG9uc2libGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJyZWxpYWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIm1hbm5lcmx5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29uc2lkZXJhdGVcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkNvbnNjaWVudGlvdXNuZXNzX3BsdXNfRXh0cmF2ZXJzaW9uX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNhdXRpb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29uZmlkZW50XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicHVuY3R1YWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJmb3JtYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0aHJpZnR5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicHJpbmNpcGxlZFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQ29uc2NpZW50aW91c25lc3NfcGx1c19FeHRyYXZlcnNpb25fcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhbWJpdGlvdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhbGVydFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImZpcm1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwdXJwb3NlZnVsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29tcGV0aXRpdmVcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkNvbnNjaWVudGlvdXNuZXNzX3BsdXNfTmV1cm90aWNpc21fbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidGhvcm91Z2hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzdGVhZHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb25zaXN0ZW50XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2VsZi1kaXNjaXBsaW5lZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImxvZ2ljYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkZWNpc2l2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvbnRyb2xsZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb25jaXNlXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zY2llbnRpb3VzbmVzc19wbHVzX05ldXJvdGljaXNtX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGFydGljdWxhclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaGlnaC1zdHJ1bmdcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkNvbnNjaWVudGlvdXNuZXNzX3BsdXNfT3Blbm5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidHJhZGl0aW9uYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb252ZW50aW9uYWxcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkNvbnNjaWVudGlvdXNuZXNzX3BsdXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzb3BoaXN0aWNhdGVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVyZmVjdGlvbmlzdGljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kdXN0cmlvdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkaWduaWZpZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJyZWZpbmVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3VsdHVyZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJmb3Jlc2lnaHRlZFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX0FncmVlYWJsZW5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2tlcHRpY2FsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwid2FyeSBvZiBvdGhlcnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlY2x1c2l2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5jb21tdW5pY2F0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ1bnNvY2lhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJnbHVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkZXRhY2hlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImFsb29mXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJFeHRyYXZlcnNpb25fbWludXNfQWdyZWVhYmxlbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVuYWdncmVzc2l2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImh1bWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInN1Ym1pc3NpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0aW1pZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvbXBsaWFudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIm5hw692ZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX0NvbnNjaWVudGlvdXNuZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kaXJlY3RcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVuZW5lcmdldGljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzbHVnZ2lzaFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibm9ucGVyc2lzdGVudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmFndWVcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkV4dHJhdmVyc2lvbl9taW51c19Db25zY2llbnRpb3VzbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInJlc3RyYWluZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzZXJpb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlzY3JlZXRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjYXV0aW91c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInByaW5jaXBsZWRcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkV4dHJhdmVyc2lvbl9taW51c19OZXVyb3RpY2lzbV9taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0cmFucXVpbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlZGF0ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBsYWNpZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImltcGFydGlhbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVuYXNzdW1pbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhY3F1aWVzY2VudFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX05ldXJvdGljaXNtX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZ3VhcmRlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBlc3NpbWlzdGljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2VjcmV0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb3dhcmRseVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlY3JldGl2ZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX09wZW5uZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNvbWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWVla1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hZHZlbnR1cm91c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBhc3NpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImFwYXRoZXRpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRvY2lsZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX09wZW5uZXNzX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5uZXItZGlyZWN0ZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbnRyb3NwZWN0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWVkaXRhdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvbnRlbXBsYXRpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzZWxmLWV4YW1pbmluZ1wiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX3BsdXNfQWdyZWVhYmxlbmVzc19taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJvcGluaW9uYXRlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZm9yY2VmdWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRvbWluZWVyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJib2FzdGZ1bFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYm9zc3lcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkb21pbmFudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImN1bm5pbmdcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkV4dHJhdmVyc2lvbl9wbHVzX0FncmVlYWJsZW5lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzb2NpYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJlbmVyZ2V0aWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJlbnRodXNpYXN0aWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb21tdW5pY2F0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmlicmFudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNwaXJpdGVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWFnbmV0aWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ6ZXN0ZnVsXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJFeHRyYXZlcnNpb25fcGx1c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJib2lzdGVyb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWlzY2hpZXZvdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJleGhpYml0aW9uaXN0aWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJncmVnYXJpb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX3BsdXNfQ29uc2NpZW50aW91c25lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhY3RpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb21wZXRpdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBlcnNpc3RlbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhbWJpdGlvdXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwdXJwb3NlZnVsXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJFeHRyYXZlcnNpb25fcGx1c19OZXVyb3RpY2lzbV9taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb25maWRlbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJib2xkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXNzdXJlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVuaW5oaWJpdGVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY291cmFnZW91c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImJyYXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2VsZi1zYXRpc2ZpZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ2aWdvcm91c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInN0cm9uZ1wiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiRXh0cmF2ZXJzaW9uX3BsdXNfTmV1cm90aWNpc21fcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJleHBsb3NpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIndvcmR5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXh0cmF2YWdhbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInZvbGF0aWxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZmxpcnRhdGlvdXNcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIkV4dHJhdmVyc2lvbl9wbHVzX09wZW5uZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmVyYm9zZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5zY3J1cHVsb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwb21wb3VzXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJFeHRyYXZlcnNpb25fcGx1c19PcGVubmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImV4cHJlc3NpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjYW5kaWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkcmFtYXRpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNwb250YW5lb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwid2l0dHlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJvcHBvcnR1bmlzdGljXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kZXBlbmRlbnRcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk5ldXJvdGljaXNtX21pbnVzX0FncmVlYWJsZW5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ1bmVtb3Rpb25hbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5zZW5zaXRpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVuYWZmZWN0aW9uYXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwYXNzaW9ubGVzc1wiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiTmV1cm90aWNpc21fbWludXNfQWdyZWVhYmxlbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBhdGllbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJyZWxheGVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5kZW1hbmRpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkb3duLXRvLWVhcnRoXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwib3B0aW1pc3RpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvbmNlaXRsZXNzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5jcml0aWNhbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVucHJldGVudGlvdXNcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk5ldXJvdGljaXNtX21pbnVzX0NvbnNjaWVudGlvdXNuZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImluZm9ybWFsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibG93LWtleVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiTmV1cm90aWNpc21fbWludXNfQ29uc2NpZW50aW91c25lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJyYXRpb25hbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIm9iamVjdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInN0ZWFkeVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImxvZ2ljYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkZWNpc2l2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBvaXNlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvbmNpc2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0aG9yb3VnaFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImVjb25vbWljYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzZWxmLWRpc2NpcGxpbmVkXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJOZXVyb3RpY2lzbV9taW51c19FeHRyYXZlcnNpb25fbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hc3N1bWluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5leGNpdGFibGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwbGFjaWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0cmFucXVpbFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiTmV1cm90aWNpc21fbWludXNfRXh0cmF2ZXJzaW9uX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5zZWxmY29uc2Npb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwid2VhcmlsZXNzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kZWZhdGlnYWJsZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiTmV1cm90aWNpc21fbWludXNfT3Blbm5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW1wZXJ0dXJiYWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5zZW5zaXRpdmVcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk5ldXJvdGljaXNtX21pbnVzX09wZW5uZXNzX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaGVhcnRmZWx0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmVyc2F0aWxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3JlYXRpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbnRlbGxlY3R1YWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbnNpZ2h0ZnVsXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJOZXVyb3RpY2lzbV9wbHVzX0FncmVlYWJsZW5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0ZW1wZXJhbWVudGFsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpcnJpdGFibGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInF1YXJyZWxzb21lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbXBhdGllbnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImdydW1weVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3JhYmJ5XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjcmFua3lcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk5ldXJvdGljaXNtX3BsdXNfQWdyZWVhYmxlbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImVtb3Rpb25hbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZ3VsbGlibGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhZmZlY3Rpb25hdGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzZW5zaXRpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzb2Z0XCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJOZXVyb3RpY2lzbV9wbHVzX0NvbnNjaWVudGlvdXNuZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29tcHVsc2l2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibm9zZXlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlbGYtaW5kdWxnZW50XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJmb3JnZXRmdWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImltcHVsc2l2ZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiTmV1cm90aWNpc21fcGx1c19Db25zY2llbnRpb3VzbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInBhcnRpY3VsYXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImhpZ2gtc3RydW5nXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJOZXVyb3RpY2lzbV9wbHVzX0V4dHJhdmVyc2lvbl9taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJndWFyZGVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJmcmV0ZnVsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbnNlY3VyZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVzc2ltaXN0aWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJzZWNyZXRpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImZlYXJmdWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIm5lZ2F0aXZpc3RpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlbGYtY3JpdGljYWxcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk5ldXJvdGljaXNtX3BsdXNfRXh0cmF2ZXJzaW9uX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhjaXRhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ3b3JkeVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImZsaXJ0YXRpb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJleHBsb3NpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJleHRyYXZhZ2FudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidm9sYXRpbGVcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk5ldXJvdGljaXNtX3BsdXNfT3Blbm5lc3NfbWludXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZWFzaWx5IHJhdHRsZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJlYXNpbHkgaXJrZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhcHByZWhlbnNpdmVcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk5ldXJvdGljaXNtX3BsdXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJleGNpdGFibGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwYXNzaW9uYXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2Vuc3VhbFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfbWludXNfQWdyZWVhYmxlbmVzc19taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNvYXJzZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidGFjdGxlc3NcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImN1cnRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcIm5hcnJvdy1taW5kZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImNhbGxvdXNcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk9wZW5uZXNzX21pbnVzX0FncmVlYWJsZW5lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNpbXBsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVwZW5kZW50XCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJPcGVubmVzc19taW51c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNob3J0c2lnaHRlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImZvb2xoYXJkeVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaWxsb2dpY2FsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbW1hdHVyZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaGFwaGF6YXJkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwibGF4XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJmbGlwcGFudFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfbWludXNfQ29uc2NpZW50aW91c25lc3NfcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjb252ZW50aW9uYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ0cmFkaXRpb25hbFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfbWludXNfRXh0cmF2ZXJzaW9uX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInByZWRpY3RhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ1bmltYWdpbmF0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic29tYmVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhcGF0aGV0aWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInVuYWR2ZW50dXJvdXNcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk9wZW5uZXNzX21pbnVzX0V4dHJhdmVyc2lvbl9wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmVyYm9zZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5zY3J1cHVsb3VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwb21wb3VzXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJPcGVubmVzc19taW51c19OZXVyb3RpY2lzbV9taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbXBlcnR1cmJhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbnNlbnNpdGl2ZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfbWludXNfTmV1cm90aWNpc21fcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJlYXNpbHkgcmF0dGxlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImVhc2lseSBpcmtlZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImFwcHJlaGVuc2l2ZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfcGx1c19BZ3JlZWFibGVuZXNzX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNocmV3ZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImVjY2VudHJpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImluZGl2aWR1YWxpc3RpY1wiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfcGx1c19BZ3JlZWFibGVuZXNzX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaWRlYWxpc3RpY1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImRpcGxvbWF0aWNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJkZWVwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwidGFjdGZ1bFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImdlbmlhbFwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfcGx1c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ1bmNvbnZlbnRpb25hbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInF1aXJreVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfcGx1c19Db25zY2llbnRpb3VzbmVzc19wbHVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImFuYWx5dGljYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwZXJjZXB0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5mb3JtYXRpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJhcnRpY3VsYXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlnbmlmaWVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3VsdHVyZWRcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk9wZW5uZXNzX3BsdXNfRXh0cmF2ZXJzaW9uX21pbnVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImludHJvc3BlY3RpdmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJtZWRpdGF0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29udGVtcGxhdGluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInNlbGYtZXhhbWluaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5uZXItZGlyZWN0ZWRcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk9wZW5uZXNzX3BsdXNfRXh0cmF2ZXJzaW9uX3BsdXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwid29ybGRseVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcInRoZWF0cmljYWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJlbG9xdWVudFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImlucXVpc2l0aXZlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW50ZW5zZVwiXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiT3Blbm5lc3NfcGx1c19OZXVyb3RpY2lzbV9taW51c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJjcmVhdGl2ZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImludGVsbGVjdHVhbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICAgIFwid29yZFwiOiBcImluc2lnaHRmdWxcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJ2ZXJzYXRpbGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJpbnZlbnRpdmVcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIk9wZW5uZXNzX3BsdXNfTmV1cm90aWNpc21fcGx1c1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgICBcIndvcmRcIjogXCJwYXNzaW9uYXRlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhjaXRhYmxlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2Vuc3VhbFwiXG4gICAgICAgICAgfVxuICAgICAgXVxuICB9LFxuICBcInZhbHVlc1wiOiB7XG4gICAgICBcIkhlZG9uaXNtXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiVGVybVwiOiBcIlRha2luZyBwbGVhc3VyZSBpbiBsaWZlXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgcHJlZmVyIGFjdGl2aXRpZXMgd2l0aCBhIHB1cnBvc2UgZ3JlYXRlciB0aGFuIGp1c3QgcGVyc29uYWwgZW5qb3ltZW50XCIsXG4gICAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBoaWdobHkgbW90aXZhdGVkIHRvIGVuam95IGxpZmUgdG8gaXRzIGZ1bGxlc3RcIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIlNlbGYtdHJhbnNjZW5kZW5jZVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIlRlcm1cIjogXCJIZWxwaW5nIG90aGVyc1wiLFxuICAgICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IHRoaW5rIHBlb3BsZSBjYW4gaGFuZGxlIHRoZWlyIG93biBidXNpbmVzcyB3aXRob3V0IGludGVyZmVyZW5jZVwiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSB0aGluayBpdCBpcyBpbXBvcnRhbnQgdG8gdGFrZSBjYXJlIG9mIHRoZSBwZW9wbGUgYXJvdW5kIHlvdVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiVGVybVwiOiBcIkZhaXJuZXNzXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYmVsaWV2ZSB0aGF0IHBlb3BsZSBjcmVhdGUgdGhlaXIgb3duIG9wcG9ydHVuaXRpZXNcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYmVsaWV2ZSBpbiBzb2NpYWwganVzdGljZSBhbmQgZXF1YWxpdHkgZm9yIGFsbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiVGVybVwiOiBcIlNvY2lhbCBqdXN0aWNlXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYmVsaWV2ZSB0aGF0IHBlb3BsZSBjcmVhdGUgdGhlaXIgb3duIG9wcG9ydHVuaXRpZXNcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYmVsaWV2ZSBpbiBzb2NpYWwganVzdGljZSBhbmQgZXF1YWxpdHkgZm9yIGFsbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiVGVybVwiOiBcIkVxdWFsaXR5XCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYmVsaWV2ZSB0aGF0IHBlb3BsZSBjcmVhdGUgdGhlaXIgb3duIG9wcG9ydHVuaXRpZXNcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYmVsaWV2ZSBpbiBzb2NpYWwganVzdGljZSBhbmQgZXF1YWxpdHkgZm9yIGFsbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiVGVybVwiOiBcIkNvbW11bml0eSBzZXJ2aWNlXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgdGhpbmsgcGVvcGxlIGNhbiBoYW5kbGUgdGhlaXIgb3duIGJ1c2luZXNzIHdpdGhvdXQgaW50ZXJmZXJlbmNlXCIsXG4gICAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IHRoaW5rIGl0IGlzIGltcG9ydGFudCB0byB0YWtlIGNhcmUgb2YgdGhlIHBlb3BsZSBhcm91bmQgeW91XCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJDb25zZXJ2YXRpb25cIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiVHJhZGl0aW9uXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgY2FyZSBtb3JlIGFib3V0IG1ha2luZyB5b3VyIG93biBwYXRoIHRoYW4gZm9sbG93aW5nIHdoYXQgb3RoZXJzIGhhdmUgZG9uZVwiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBoaWdobHkgcmVzcGVjdCB0aGUgZ3JvdXBzIHlvdSBiZWxvbmcgdG8gYW5kIGZvbGxvdyB0aGVpciBndWlkYW5jZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiVGVybVwiOiBcIkhhcm1vbnlcIixcbiAgICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBkZWNpZGUgd2hhdCBpcyByaWdodCBiYXNlZCBvbiB5b3VyIGJlbGllZnMsIG5vdCB3aGF0IG90aGVyIHBlb3BsZSB0aGlua1wiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBrbm93IHJ1bGVzIGFyZSB0aGVyZSBmb3IgYSByZWFzb24sIGFuZCB5b3UgdHJ5IG5ldmVyIHRvIGJyZWFrIHRoZW1cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIlRlcm1cIjogXCJIdW1pbGl0eVwiLFxuICAgICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGRlY2lkZSB3aGF0IGlzIHJpZ2h0IGJhc2VkIG9uIHlvdXIgYmVsaWVmcywgbm90IHdoYXQgb3RoZXIgcGVvcGxlIHRoaW5rXCIsXG4gICAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IHNlZSB3b3J0aCBpbiBkZWZlcnJpbmcgdG8gb3RoZXJzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiU29jaWFsIG5vcm1zXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgZGVjaWRlIHdoYXQgaXMgcmlnaHQgYmFzZWQgb24geW91ciBiZWxpZWZzLCBub3Qgd2hhdCBvdGhlciBwZW9wbGUgdGhpbmtcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3Uga25vdyBydWxlcyBhcmUgdGhlcmUgZm9yIGEgcmVhc29uLCBhbmQgeW91IHRyeSBuZXZlciB0byBicmVhayB0aGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiU2VjdXJpdHlcIixcbiAgICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBiZWxpZXZlIHRoYXQgc2VjdXJpdHkgaXMgd29ydGggc2FjcmlmaWNpbmcgdG8gYWNoaWV2ZSBvdGhlciBnb2Fsc1wiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBiZWxpZXZlIHRoYXQgc2FmZXR5IGFuZCBzZWN1cml0eSBhcmUgaW1wb3J0YW50IHRoaW5ncyB0byBzYWZlZ3VhcmRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIlRlcm1cIjogXCJTYWZldHlcIixcbiAgICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBiZWxpZXZlIHRoYXQgc2FmZXR5IGlzIHdvcnRoIHNhY3JpZmljaW5nIHRvIGFjaGlldmUgb3RoZXIgZ29hbHNcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgYmVsaWV2ZSB0aGF0IHNhZmV0eSBhbmQgc2VjdXJpdHkgYXJlIGltcG9ydGFudCB0aGluZ3MgdG8gc2FmZWd1YXJkXCJcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJPcGVubmVzcy10by1jaGFuZ2VcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiSW5kZXBlbmRlbmNlXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3Ugd2VsY29tZSB3aGVuIG90aGVycyBkaXJlY3QgeW91ciBhY3Rpdml0aWVzIGZvciB5b3VcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgbGlrZSB0byBzZXQgeW91ciBvd24gZ29hbHMgdG8gZGVjaWRlIGhvdyB0byBiZXN0IGFjaGlldmUgdGhlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiVGVybVwiOiBcIkV4Y2l0ZW1lbnRcIixcbiAgICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSB3b3VsZCByYXRoZXIgc3RpY2sgd2l0aCB0aGluZ3MgeW91IGFscmVhZHkga25vdyB5b3UgbGlrZSB0aGFuIHJpc2sgdHJ5aW5nIHNvbWV0aGluZyBuZXcgYW5kIHJpc2t5XCIsXG4gICAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBlYWdlciB0byBzZWFyY2ggb3V0IG5ldyBhbmQgZXhjaXRpbmcgZXhwZXJpZW5jZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIlRlcm1cIjogXCJDcmVhdGl2aXR5XCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3Ugd291bGQgcmF0aGVyIHN0aWNrIHdpdGggdGhpbmdzIHlvdSBhbHJlYWR5IGtub3cgeW91IGxpa2UgdGhhbiByaXNrIHRyeWluZyBzb21ldGhpbmcgbmV3IGFuZCByaXNreVwiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBhcmUgZWFnZXIgdG8gc2VhcmNoIG91dCBuZXcgYW5kIGV4Y2l0aW5nIGV4cGVyaWVuY2VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiQ3VyaW9zaXR5XCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3Ugd291bGQgcmF0aGVyIHN0aWNrIHdpdGggdGhpbmdzIHlvdSBhbHJlYWR5IGtub3cgeW91IGxpa2UgdGhhbiByaXNrIHRyeWluZyBzb21ldGhpbmcgbmV3IGFuZCByaXNreVwiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBhcmUgZWFnZXIgdG8gc2VhcmNoIG91dCBuZXcgYW5kIGV4Y2l0aW5nIGV4cGVyaWVuY2VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiU2VsZi1kaXJlY3Rpb25cIixcbiAgICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSB3ZWxjb21lIHdoZW4gb3RoZXJzIGRpcmVjdCB5b3VyIGFjdGl2aXRpZXMgZm9yIHlvdVwiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBsaWtlIHRvIHNldCB5b3VyIG93biBnb2FscyB0byBkZWNpZGUgaG93IHRvIGJlc3QgYWNoaWV2ZSB0aGVtXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiRnJlZWRvbVwiLFxuICAgICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IHdlbGNvbWUgd2hlbiBvdGhlcnMgZGlyZWN0IHlvdXIgYWN0aXZpdGllcyBmb3IgeW91XCIsXG4gICAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiWW91IGxpa2UgdG8gc2V0IHlvdXIgb3duIGdvYWxzIHRvIGRlY2lkZSBob3cgdG8gYmVzdCBhY2hpZXZlIHRoZW1cIlxuICAgICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIlNlbGYtZW5oYW5jZW1lbnRcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiQWNoaWV2aW5nIHN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIllvdSBtYWtlIGRlY2lzaW9ucyB3aXRoIGxpdHRsZSByZWdhcmQgZm9yIGhvdyB0aGV5IHNob3cgb2ZmIHlvdXIgdGFsZW50c1wiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBzZWVrIG91dCBvcHBvcnR1bml0aWVzIHRvIGltcHJvdmUgeW91cnNlbGYgYW5kIGRlbW9uc3RyYXRlIHRoYXQgeW91IGFyZSBhIGNhcGFibGUgcGVyc29uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJUZXJtXCI6IFwiR2FpbmluZyBzb2NpYWwgc3RhdHVzXCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgYXJlIGNvbWZvcnRhYmxlIHdpdGggeW91ciBzb2NpYWwgc3RhdHVzIGFuZCBkb24ndCBmZWVsIGEgc3Ryb25nIG5lZWQgdG8gaW1wcm92ZSBpdFwiLFxuICAgICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIllvdSBwdXQgc3Vic3RhbnRpYWwgZWZmb3J0IGludG8gaW1wcm92aW5nIHlvdXIgc3RhdHVzIGFuZCBwdWJsaWMgaW1hZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIlRlcm1cIjogXCJBbWJpdGlvblwiLFxuICAgICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiWW91IGFyZSBjb21mb3J0YWJsZSB3aXRoIHlvdXIgc29jaWFsIHN0YXR1cyBhbmQgZG9uJ3QgZmVlbCBhIHN0cm9uZyBuZWVkIHRvIGltcHJvdmUgaXRcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3UgZmVlbCBpdCBpcyBpbXBvcnRhbnQgdG8gcHVzaCBmb3J3YXJkIHRvd2FyZHMgZ29hbHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcIlRlcm1cIjogXCJIaWdoIGFjaGlldmVtZW50XCIsXG4gICAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJZb3UgbWFrZSBkZWNpc2lvbnMgd2l0aCBsaXR0bGUgcmVnYXJkIGZvciBob3cgdGhleSBzaG93IG9mZiB5b3VyIHRhbGVudHNcIixcbiAgICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJZb3Ugc2VlayBvdXQgb3Bwb3J0dW5pdGllcyB0byBpbXByb3ZlIHlvdXJzZWxmIGFuZCBkZW1vbnN0cmF0ZSB0aGF0IHlvdSBhcmUgYSBjYXBhYmxlIHBlcnNvblwiXG4gICAgICAgICAgfVxuICAgICAgXVxuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IElCTSBDb3JwLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZmFjZXRzXCI6e1xuICAgIFwiQXJ0aXN0aWMtaW50ZXJlc3RzXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIlVuYSBwZXJzb25hIHF1ZSBhcHJlY2lhIGVsIGFydGVcIixcbiAgICAgICAgXCJCaWc1XCI6IFwiQXBlcnR1cmEgYSBleHBlcmllbmNpYXNcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJEaXNmcnV0YSBkZSBsYSBiZWxsZXphIHkgYnVzY2EgZXhwZXJpZW5jaWFzIGNyZWF0aXZhc1wiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiTGUgaW50ZXJlc2FuIG1lbm9zIGxhcyBhY3RpdmlkYWRlcyBhcnTDrXN0aWNhcyBvIGNyZWF0aXZhcyBxdWUgbGEgbWF5b3LDrWEgZGUgbGFzIHBlcnNvbmFzIHF1ZSBwYXJ0aWNpcGFyb24gZGUgbnVlc3RyYXMgZW5jdWVzdGFzXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIlVuYSBwZXJzb25hIGRlc2ludGVyZXNhZGEgcG9yIGVsIGFydGVcIlxuICAgIH0sXG4gICAgXCJEdXRpZnVsbmVzc1wiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJVbmEgcGVyc29uYSBxdWUgY3VtcGxlIGNvbiBzdSBkZWJlclwiLFxuICAgICAgICBcIkJpZzVcIjogXCJSZXNwb25zYWJpbGlkYWRcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJUb21hIGxhcyByZWdsYXMgeSBsYXMgb2JsaWdhY2lvbmVzIHNlcmlhbWVudGUsIGHDum4gY3VhbmRvIHNvbiBpbmNvbnZlbmllbnRlc1wiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiSGFjZSBsbyBxdWUgcXVpZXJlIHNpbiBpbXBvcnRhciBsYXMgcmVnbGFzIHkgbGFzIG9ibGlnYWNpb25lc1wiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJEZXNwcmVvY3VwYWRvXCJcbiAgICB9LFxuICAgIFwiQ29vcGVyYXRpb25cIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiQWNvbW9kYXRpY2lvXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkFmYWJpbGlkYWRcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJFcyBmw6FjaWwgZGUgY29tcGxhY2VyIGUgaW50ZW50YSBldml0YXIgcG9zaWJsZXMgY29uZnJvbnRhY2lvbmVzXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJObyB0ZSBpbXBvcnRhIGNvbnRyYWRlY2lyIGEgbG9zIGRlbcOhc1wiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJDb250cmFyaW9cIlxuICAgIH0sXG4gICAgXCJTZWxmLWNvbnNjaW91c25lc3NcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiQ29uc2NpZW50ZSBkZSBzw60gbWlzbW9cIixcbiAgICAgICAgXCJCaWc1XCI6IFwiUmFuZ28gZW1vY2lvbmFsXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiRXMgc2Vuc2libGUgYSBsbyBxdWUgbGFzIGRlbcOhcyBwZXJzb25hcyBwb2Ryw61hbiBlc3RhciBwZW5zYW5kbyBhY2VyY2EgZGUgdXN0ZWRcIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkVzIGRpZsOtY2lsIGRlIGF2ZXJnb256YXIgeSBjb25mw61hIGVuIHPDrSBtaXNtbyBsYSBtYXlvciBwYXJ0ZSBkZWwgdGllbXBvXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIkNvbmZpYWRvXCJcbiAgICB9LFxuICAgIFwiT3JkZXJsaW5lc3NcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiT3JnYW5pemFkb1wiLFxuICAgICAgICBcIkJpZzVcIjogXCJSZXNwb25zYWJpbGlkYWRcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJTaWVudGUgdW5hIGZ1ZXJ0ZSBuZWNlc2lkYWQgZGUgbWFudGVuZXIgdW5hIHZpZGEgZXN0cnVjdHVyYWRhXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJObyBsZSBkZWRpY2EgbXVjaG8gdGllbXBvIGEgb3JnYW5pemFyc2UgZW4gc3UgdmlkYSBkaWFyaWFcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiRGVzZXN0cnVjdHVyYWRvXCJcbiAgICB9LFxuICAgIFwiU3ltcGF0aHlcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiRW1ww6F0aWNvXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkFmYWJpbGlkYWRcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJTaWVudGUgbG8gcXVlIG90cm9zIHNpZW50ZW4geSBlcyBjb21wYXNpdm8gY29uIGVsbG9zXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJDcmVlIHF1ZSBsYXMgcGVyc29uYXMgZGViZXLDrWFuIGNvbmZpYXIgbcOhcyBlbiBzw60gbWlzbW9zIHF1ZSBlbiBvdHJhcyBwZXJzb25hc1wiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJVbmEgcGVyc29uYSBkZSBncmFuIGZvcnRhbGV6YVwiXG4gICAgfSxcbiAgICBcIkFjdGl2aXR5LWxldmVsXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIkVuZXJnw6l0aWNvXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkV4dHJhdmVyc2nDs25cIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJEaXNmcnV0YSBsbGV2YXIgdW4gcml0bW8gZGUgdmlkYSBhY2VsZXJhZG8sIHVuYSBhZ2VuZGEgb2N1cGFkYSBjb24gbXVjaGFzIGFjdGl2aWRhZGVzXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJBcHJlY2lhIGxsZXZhciB1biByaXRtbyBkZSB2aWRhIHJlbGFqYWRvXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIlJlbGFqYWRvXCJcbiAgICB9LFxuICAgIFwiU2VsZi1lZmZpY2FjeVwiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJTZWd1cm8gZGUgc8OtIG1pc21vXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIlJlc3BvbnNhYmlsaWRhZFwiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlNpZW50ZSBxdWUgdGllbmUgbGEgaGFiaWxpZGFkIGRlIHRyaXVuZmFyIGVuIGxhcyB0YXJlYXMgcXVlIHNlIHByb3BvbmUgcmVhbGl6YXJcIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkZyZWN1ZW50ZW1lbnRlIGR1ZGEgYWNlcmNhIGRlIHN1IGhhYmlsaWRhZCBwYXJhIGFsY2FuemFyIHN1cyBtZXRhc1wiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJJbnNlZ3VybyBkZSBzw60gbWlzbWFcIlxuICAgIH0sXG4gICAgXCJTZWxmLWRpc2NpcGxpbmVcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiUGVyc2lzdGVudGVcIixcbiAgICAgICAgXCJCaWc1XCI6IFwiUmVzcG9uc2FiaWxpZGFkXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiUHVlZGUgaGFjZXIgZnJlbnRlIHkgbGxldmFyIGEgY2FibyB0YXJlYXMgZGlmw61jaWxlc1wiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiTGUgZGEgdHJhYmFqbyBsbGV2YXIgYWRlbGFudGUgdGFyZWFzIGRpZsOtY2lsZXMgcG9yIHVuIGxhcmdvIHBlcmlvZG8gZGUgdGllbXBvXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIkludGVybWl0ZW50ZVwiXG4gICAgfSxcbiAgICBcIkFsdHJ1aXNtXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIkFsdHJ1aXN0YVwiLFxuICAgICAgICBcIkJpZzVcIjogXCJBZmFiaWxpZGFkXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiU2Ugc2llbnRlIHJlYWxpemFkbyBheXVkYW5kbyBhIG90cm9zIHkgZGVqYXLDoSBzdXMgY29zYXMgZGUgbGFkbyBwYXJhIGhhY2VybG9cIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkVzdMOhIG3DoXMgZW5mb2NhZG8gZW4gY3VpZGFyIGRlIHVzdGVkIG1pc21vIHF1ZSBlbiBkZWRpY2FyIHRpZW1wbyBhIG90cmFzIHBlcnNvbmFzXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIkluZGl2aWR1YWxpc3RhXCJcbiAgICB9LFxuICAgIFwiQ2F1dGlvdXNuZXNzXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIlBydWRlbnRlXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIlJlc3BvbnNhYmlsaWRhZFwiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlBpZW5zYSBjdWlkYWRvc2FtZW50ZSBhY2VyY2EgZGUgc3VzIGRlY2lzaW9uZXMgYW50ZXMgZGUgdG9tYXJsYXNcIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlByZWZpZXJlIHRvbWFyIGFjY2nDs24gaW5tZWRpYXRhbWVudGUgYW50ZXMgcXVlIGludmVydGlyIHRpZW1wbyBkZWxpYmVyYW5kbyBxdcOpIGRlY2lzacOzbiB0b21hclwiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJBdWRhelwiXG4gICAgfSxcbiAgICBcIk1vcmFsaXR5XCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIkludHJhbnNpZ2VudGVcIixcbiAgICAgICAgXCJCaWc1XCI6IFwiQWZhYmlsaWRhZFwiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlBpZW5zYSBxdWUgZXN0w6EgbWFsIHRvbWFyIHZlbnRhamEgZGUgbG9zIGRlbcOhcyBwYXJhIGF2YW56YXJcIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlV0aWxpemEgY3VhbHF1aWVyIG1lZGlvIHBvc2libGUgcGFyYSBjb25zZWd1aXIgbG8gcXVlIHF1aWVyZSB5IGVzdMOhIGPDs21vZG8gY29uIGVsbG9cIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiVW5hIHBlcnNvbmEgY29tcHJvbWV0aWRhXCJcbiAgICB9LFxuICAgIFwiQW54aWV0eVwiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJQcm9wZW5zbyBhIHByZW9jdXBhcnNlXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIlJhbmdvIGVtb2Npb25hbFwiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlRpZW5kZSBhIHByZW9jdXBhcnNlIGFjZXJjYSBkZSBsYXMgY29zYXMgcXVlIHBvZHLDrWFuIHBhc2FyXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJUaWVuZGUgYSBzZW50aXJzZSB0cmFucXVpbG8geSBhIGNvbmZpYXIgZW4gc8OtIG1pc21vXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIlNlZ3VybyBkZSBzw60gbWlzbW9cIlxuICAgIH0sXG4gICAgXCJFbW90aW9uYWxpdHlcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiRW1vY2lvbmFsbWVudGUgY29uc2NpZW50ZVwiLFxuICAgICAgICBcIkJpZzVcIjogXCJBcGVydHVyYSBhIGV4cGVyaWVuY2lhc1wiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIkVzIGNvbnNjaWVudGUgZGUgc3VzIHNlbnRpbWllbnRvcyB5IGRlIGPDs21vIGV4cHJlc2FybG9zXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJObyBwaWVuc2EgZnJlY3VlbnRlbWVudGUgYWNlcmNhIGRlIHN1cyBlbW9jaW9uZXMgbmkgbGFzIGV4cHJlc2EgYWJpZXJ0YW1lbnRlXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIkRlc2FwYXNpb25hZG9cIlxuICAgIH0sXG4gICAgXCJWdWxuZXJhYmlsaXR5XCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIlN1c2NlcHRpYmxlIGFsIGVzdHLDqXNcIixcbiAgICAgICAgXCJCaWc1XCI6IFwiUmFuZ28gZW1vY2lvbmFsXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiU2UgYWJydW1hIGbDoWNpbG1lbnRlIGVuIHNpdHVhY2lvbmVzIGRlIGVzdHLDqXNcIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIk1hbmVqYSBldmVudG9zIGluZXNwZXJhZG9zIGNvbiBjYWxtYSB5IGVmZWN0aXZhbWVudGVcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiVW5hIHBlcnNvbmEgcXVlIG1hbnRpZW5lIGxhIGNhbG1hIGJham8gcHJlc2nDs25cIlxuICAgIH0sXG4gICAgXCJJbW1vZGVyYXRpb25cIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiSGVkb25pc3RhXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIlJhbmdvIGVtb2Npb25hbFwiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlNpZW50ZSBmdWVydGVtZW50ZSBzdXMgZGVzZW9zIHkgZXMgZsOhY2lsbWVudGUgdGVudGFkbyBwb3IgZWxsb3NcIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkNvbnRyb2xhIHN1cyBkZXNlb3MsIGxvcyBjdWFsZXMgbm8gc29uIHBhcnRpY3VsYXJtZW50ZSBpbnRlbnNvc1wiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJTZXJlbm9cIlxuICAgIH0sXG4gICAgXCJGcmllbmRsaW5lc3NcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiRXh0cm92ZXJ0aWRvXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkV4dHJhdmVyc2nDs25cIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJIYWNlIGFtaWdvcyBmw6FjaWxtZW50ZSB5IHNlIHNpZW50ZSBjw7Ntb2RvIGVzdGFuZG8gY29uIG90cmFzIHBlcnNvbmFzXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJFcyB1bmEgcGVyc29uYSByZXNlcnZhZGEgeSBubyBkZWphIGEgbXVjaGFzIHBlcnNvbmFzIGVudHJhclwiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJSZXNlcnZhZG9cIlxuICAgIH0sXG4gICAgXCJBY2hpZXZlbWVudC1zdHJpdmluZ1wiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJVbmEgcGVyc29uYSBtb3RpdmFkYVwiLFxuICAgICAgICBcIkJpZzVcIjogXCJSZXNwb25zYWJpbGlkYWRcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJTZSBwcm9wb25lIGdyYW5kZXMgbWV0YXMgeSB0cmFiYWphIGR1cm8gcGFyYSBhbGNhbnphcmxhc1wiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiRXN0w6EgY29uZm9ybWUgY29uIHN1cyBsb2dyb3MgeSBubyBzaWVudGUgbGEgbmVjZXNpZGFkIGRlIHBvbmVyc2UgbWV0YXMgbcOhcyBhbWJpY2lvc2FzXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIlVuYSBwZXJzb25hIHNhdGlzZmVjaGFcIlxuICAgIH0sXG4gICAgXCJNb2Rlc3R5XCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIk1vZGVzdG9cIixcbiAgICAgICAgXCJCaWc1XCI6IFwiQWZhYmlsaWRhZFwiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlNlIHNpZW50ZSBjw7Ntb2RvIHNpZW5kbyBlbCBjZW50cm8gZGUgYXRlbmNpw7NuXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJTZSB0aWVuZSB1bmEgZXN0aW1hIGFsdGEsIHNlIGVuY3VlbnRyYSBzYXRpc2ZlY2hvIGNvbiBxdWnDqW4gZXNcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiT3JndWxsb3NvXCJcbiAgICB9LFxuICAgIFwiRXhjaXRlbWVudC1zZWVraW5nXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIlVuYSBwZXJzb25hIHF1ZSBidXNjYSBsYSBlbW9jacOzblwiLFxuICAgICAgICBcIkJpZzVcIjogXCJFeHRyYXZlcnNpw7NuXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiTGUgZW1vY2lvbmEgdG9tYXIgcmllc2dvcyB5IHNlIGFidXJyZSBzaSBubyBzZSB2ZSBlbnZ1ZWx0byBlbiBtdWNoYSBhY2Npw7NuXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJQcmVmaWVyZSBsYXMgYWN0aXZpZGFkZXMgdHJhbnF1aWxhcywgcGFjw61maWNhcyB5IHNlZ3VyYXNcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiVW5hIHBlcnNvbmEgcXVlIGJ1c2NhIGxhIGNhbG1hXCJcbiAgICB9LFxuICAgIFwiQXNzZXJ0aXZlbmVzc1wiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJBc2VydGl2b1wiLFxuICAgICAgICBcIkJpZzVcIjogXCJFeHRyYXZlcnNpw7NuXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiVGllbmRlIGEgZXhwcmVzYXJzZSB5IGEgaGFjZXJzZSBjYXJnbyBkZSBsYXMgc2l0dWFjaW9uZXMsIHkgc2UgZW5jdWVudHJhIGPDs21vZG8gbGlkZXJhbmRvIGdydXBvc1wiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiUHJlZmllcmUgZXNjdWNoYXIgYW50ZXMgcXVlIGhhYmxhciwgZXNwZWNpYWxtZW50ZSBlbiBzaXR1YWNpb25lcyBkZSBncnVwb1wiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJDYWxsYWRvXCJcbiAgICB9LFxuICAgIFwiQWR2ZW50dXJvdXNuZXNzXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIkF1ZGF6XCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkFwZXJ0dXJhIGEgZXhwZXJpZW5jaWFzXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiRXN0w6EgZGVzZW9zbyBkZSB0ZW5lciBudWV2YXMgZXhwZXJpZW5jaWFzXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJEaXNmcnV0YSBkZSBsYXMgcnV0aW5hcyBmYW1pbGlhcmVzIHkgcHJlZmllcmUgbm8gZGVzdmlhcnNlIGRlIGVsbGFzXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIkNvbnNpc3RlbnRlXCJcbiAgICB9LFxuICAgIFwiR3JlZ2FyaW91c25lc3NcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiU29jaWFibGVcIixcbiAgICAgICAgXCJCaWc1XCI6IFwiRXh0cmF2ZXJzacOzblwiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIkRpc2ZydXRhIGVzdGFuZG8gZW4gY29tcGHDscOtYSBkZSBvdHJvc1wiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiVGllbmUgdW4gZnVlcnRlIGRlc2VvIGRlIHRlbmVyIHRpZW1wbyBwYXJhIHVzdGVkIG1pc21vXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIkluZGVwZW5kaWVudGVcIlxuICAgIH0sXG4gICAgXCJDaGVlcmZ1bG5lc3NcIjoge1xuICAgICAgICBcIkhpZ2hUZXJtXCI6IFwiQWxlZ3JlXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkV4dHJhdmVyc2nDs25cIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJFcyB1bmEgcGVyc29uYSBhbGVncmUgeSBjb21wYXJ0ZSBlc2EgYWxlZ3LDrWEgY29uIGVsIG11bmRvXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJHZW5lcmFsbWVudGUgZXMgc2VyaW8geSBubyBoYWNlIG11Y2hhcyBicm9tYXNcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiU29sZW1uZVwiXG4gICAgfSxcbiAgICBcIkltYWdpbmF0aW9uXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIkltYWdpbmF0aXZvXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkFwZXJ0dXJhIGEgZXhwZXJpZW5jaWFzXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiU3UgaW1hZ2luYWNpw7NuIHZ1ZWxhIGxpYnJlXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJQcmVmaWVyZSBoZWNob3MgYW50ZXMgcXVlIGxhIGZhbnRhc8OtYVwiLFxuICAgICAgICBcIkxvd1Rlcm1cIjogXCJVbmEgcGVyc29uYSBjb24gbG9zIHBpZXMgZW4gbGEgdGllcnJhXCJcbiAgICB9LFxuICAgIFwiRGVwcmVzc2lvblwiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJNZWxhbmPDs2xpY29cIixcbiAgICAgICAgXCJCaWc1XCI6IFwiUmFuZ28gZW1vY2lvbmFsXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiUGllbnNhIGJhc3RhbnRlIHNlZ3VpZG8gZW4gbGFzIGNvc2FzIGNvbiBsYXMgcXVlIGVzdMOhIGRpc2NvbmZvcm1lXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJHZW5lcmFsbWVudGUgc2UgYWNlcHRhIGEgdXN0ZWQgbWlzbW8gdGFsIGN1YWwgZXNcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiVW5hIHBlcnNvbmEgc2F0aXNmZWNoYVwiXG4gICAgfSxcbiAgICBcIkFuZ2VyXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIkludGVuc29cIixcbiAgICAgICAgXCJCaWc1XCI6IFwiUmFuZ28gZW1vY2lvbmFsXCIsXG4gICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiVGllbmUgdW4gdGVtcGVyYW1lbnRvIGZ1ZXJ0ZSwgZXNwZWNpYWxtZW50ZSBjdWFuZG8gbGFzIGNvc2FzIG5vIGZ1bmNpb25hbiBjb21vIGVzcGVyYVwiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiRXMgZGlmw61jaWwgaGFjZXJsZSBlbm9qYXJcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiQXBhY2libGVcIlxuICAgIH0sXG4gICAgXCJUcnVzdFwiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJVbmEgcGVyc29uYSBxdWUgY29uZsOtYSBlbiBsb3MgZGVtw6FzXCIsXG4gICAgICAgIFwiQmlnNVwiOiBcIkFmYWJpbGlkYWRcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJDcmVlIGxvIG1lam9yIGRlIGxvcyBkZW3DoXMgeSBjb25mw61hIGbDoWNpbG1lbnRlIGVuIGxhcyBwZXJzb25hc1wiLFxuICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiU2UgY3VpZGEgZGUgbGFzIGludGVuY2lvbmVzIGRlIGxvcyBkZW3DoXMgeSBubyBjb25mw61hIGbDoWNpbG1lbnRlXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIkN1aWRhZG9zbyBjb24gbG9zIGRlbcOhc1wiXG4gICAgfSxcbiAgICBcIkludGVsbGVjdFwiOiB7XG4gICAgICAgIFwiSGlnaFRlcm1cIjogXCJGaWxvc8OzZmljb1wiLFxuICAgICAgICBcIkJpZzVcIjogXCJBcGVydHVyYSBhIGV4cGVyaWVuY2lhc1wiLFxuICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIkVzdMOhIGFiaWVydG8gYSBudWV2YXMgaWRlYXMsIGxlIGludHJpZ2FuIHkgYW1hIGV4cGxvcmFybGFzXCIsXG4gICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJQcmVmaWVyZSBsaWRpYXIgY29uIGVsIG11bmRvIHRhbCBjdWFsIGVzLCByYXJhbWVudGUgY29uc2lkZXJhbmRvIGlkZWFzIGFic3RyYWN0YXNcIixcbiAgICAgICAgXCJMb3dUZXJtXCI6IFwiQ29uY3JldG9cIlxuICAgIH0sXG4gICAgXCJMaWJlcmFsaXNtXCI6IHtcbiAgICAgICAgXCJIaWdoVGVybVwiOiBcIkRlc2FmaWFudGUgYW50ZSBsYSBhdXRvcmlkYWRcIixcbiAgICAgICAgXCJCaWc1XCI6IFwiQXBlcnR1cmEgYSBleHBlcmllbmNpYXNcIixcbiAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJQcmVmaWVyZSBkZXNhZmlhciBhIGxhIGF1dG9yaWRhZCB5ICBhIGxvcyB2YWxvcmVzIHRyYWRpY2lvbmFsZXMgcGFyYSBsb2dyYXIgY2FtYmlvcyBwb3NpdGl2b3NcIixcbiAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlByZWZpZXJlIHNlZ3VpciB0cmFkaWNpb25lcyBwYXJhIG1hbnRlbmVyIHVuYSBzZW5zYWNpw7NuIGRlIGVzdGFiaWxpZGFkXCIsXG4gICAgICAgIFwiTG93VGVybVwiOiBcIlJlc3BldHVvc28gZGUgbGEgYXV0b3JpZGFkXCJcbiAgICB9XG4gIH0sXG4gIFwibmVlZHNcIjoge1xuICAgIFwiU3RhYmlsaXR5XCI6IFtcbiAgICAgICAgXCJlc3RhYmlsaWRhZFwiLFxuICAgICAgICBcImF1dGVudGljaWRhZFwiLFxuICAgICAgICBcImludGVncmlkYWRcIlxuICAgIF0sXG4gICAgXCJQcmFjdGljYWxpdHlcIjogW1xuICAgICAgICBcImVmaWNpZW5jaWFcIixcbiAgICAgICAgXCJwcmFjdGljaWRhZFwiLFxuICAgICAgICBcInZhbG9yIGFncmVnYWRvXCIsXG4gICAgICAgIFwiY29udmVuaWVuY2lhXCJcbiAgICBdLFxuICAgIFwiTG92ZVwiOiBbXG4gICAgICAgIFwiYWZpbmlkYWRcIixcbiAgICAgICAgXCJjb25leGnDs25cIlxuICAgIF0sXG4gICAgXCJTZWxmLWV4cHJlc3Npb25cIjogW1xuICAgICAgICBcImF1dG8tZXhwcmVzacOzblwiLFxuICAgICAgICBcImVtcG9kZXJhbWllbnRvIHBlcnNvbmFsXCIsXG4gICAgICAgIFwiZm9ydGFsZXphIHBlcnNvbmFsXCJcbiAgICBdLFxuICAgIFwiQ2hhbGxlbmdlXCI6IFtcbiAgICAgICAgXCJwcmVzdGlnaW9cIixcbiAgICAgICAgXCJjb21wZXRlbmNpYVwiLFxuICAgICAgICBcImdsb3JpYVwiXG4gICAgXSxcbiAgICBcIkNsb3NlbmVzc1wiOiBbXG4gICAgICAgIFwicGVydGVuZW5jaWFcIixcbiAgICAgICAgXCJub3N0YWxnaWFcIixcbiAgICAgICAgXCJpbnRpbWlkYWRcIlxuICAgIF0sXG4gICAgXCJMaWJlcnR5XCI6IFtcbiAgICAgICAgXCJtb2Rlcm5pZGFkXCIsXG4gICAgICAgIFwiZXhwYW5zacOzbiBkZSBwb3NpYmlsaWRhZGVzXCIsXG4gICAgICAgIFwicG9kZXIgZXNjYXBhclwiLFxuICAgICAgICBcImVzcG9udGFuZWlkYWRcIixcbiAgICAgICAgXCJub3ZlZGFkXCJcbiAgICBdLFxuICAgIFwiRXhjaXRlbWVudFwiOiBbXG4gICAgICAgIFwicmVnb2Npam9cIixcbiAgICAgICAgXCJhbnRpY2lwYWNpw7NuXCIsXG4gICAgICAgIFwiY2VicmFjacOzblwiXG4gICAgXSxcbiAgICBcIklkZWFsXCI6IFtcbiAgICAgICAgXCJzb2Zpc3RpY2FjacOzblwiLFxuICAgICAgICBcImVzcGlyaXR1YWxpZGFkXCIsXG4gICAgICAgIFwic3VwZXJpb3JpZGFkXCIsXG4gICAgICAgIFwicmVhbGl6YWNpw7NuXCJcbiAgICBdLFxuICAgIFwiSGFybW9ueVwiOiBbXG4gICAgICAgIFwiYmllbmVzdGFyXCIsXG4gICAgICAgIFwiY29ydGVzw61hXCIsXG4gICAgICAgIFwiY2l2aWxpZGFkXCJcbiAgICBdLFxuICAgIFwiQ3VyaW9zaXR5XCI6IFtcbiAgICAgICAgXCJkZXNjdWJyaW1pZW50b1wiLFxuICAgICAgICBcIm1hZXN0csOtYVwiLFxuICAgICAgICBcImFkcXVpc2ljacOzbiBkZSBjb25vY2ltaWVudG9cIlxuICAgIF0sXG4gICAgXCJTdHJ1Y3R1cmVcIjogW1xuICAgICAgICBcIm9yZ2FuaXphY2nDs25cIixcbiAgICAgICAgXCJmcmFucXVlemFcIixcbiAgICAgICAgXCJjbGFyaWRhZFwiLFxuICAgICAgICBcImNvbmZpYWJpbGlkYWRcIlxuICAgIF1cbiAgfSxcbiAgXCJwaHJhc2VzXCI6IHtcbiAgICBcIllvdSBhcmUgJXNcIjogXCJVc3RlZCBlcyAlc1wiLFxuICAgIFwiWW91IGFyZSAlcyBhbmQgJXNcIjogXCJVc3RlZCBlcyAlcyB5ICVzXCIsXG4gICAgXCJZb3UgYXJlICVzLCAlcyBhbmQgJXNcIjogXCJVc3RlZCBlcyAlcywgJXMgeSAlc1wiLFxuICAgIFwiQW5kIHlvdSBhcmUgJXNcIjogXCJZIHVzdGVkIGVzICVzXCIsXG4gICAgXCJZb3UgYXJlIHJlbGF0aXZlbHkgdW5jb25jZXJuZWQgd2l0aCAlc1wiOiBcIlVzdGVkIGVzIHJlbGF0aXZhbWVudGUgaW5kaWZlcmVudGUgY29uICVzXCIsXG4gICAgXCJZb3UgYXJlIHJlbGF0aXZlbHkgdW5jb25jZXJuZWQgd2l0aCBib3RoICVzIGFuZCAlc1wiOiBcIlVzdGVkIGVzIHJlbGF0aXZhbWVudGUgaW5kaWZlcmVudGUgY29uICVzIHkgJXNcIixcbiAgICBcIllvdSBkb24ndCBmaW5kICVzIHRvIGJlIHBhcnRpY3VsYXJseSBtb3RpdmF0aW5nIGZvciB5b3VcIjogXCJVc3RlZCBubyBlbmN1ZW50cmEgYSAlcyBwYXJ0aWN1bGFybWVudGUgbW90aXZhbnRlIHBhcmEgdXN0ZWRcIixcbiAgICBcIllvdSBkb24ndCBmaW5kIGVpdGhlciAlcyBvciAlcyB0byBiZSBwYXJ0aWN1bGFybHkgbW90aXZhdGluZyBmb3IgeW91XCI6IFwiVXN0ZWQgbm8gZW5jdWVudHJhIGEgJXMgbyAlcyBwYXJ0aWN1bGFybWVudGUgbW90aXZhbnRlcyBwYXJhIHVzdGVkXCIsXG4gICAgXCJZb3UgdmFsdWUgYm90aCAlcyBhIGJpdFwiOiBcIlVzdGVkIHZhbG9yYSBhICVzIHVuIHBvY29cIixcbiAgICBcIllvdSB2YWx1ZSBib3RoICVzIGFuZCAlcyBhIGJpdFwiOiBcIlVzdGVkIHZhbG9yYSBhICVzIHkgJXMgdW4gcG9jb1wiLFxuICAgIFwiWW91IGNvbnNpZGVyICVzIHRvIGd1aWRlIGEgbGFyZ2UgcGFydCBvZiB3aGF0IHlvdSBkb1wiIDogXCJVc3RlZCBjb25zaWRlcmEgcXVlICVzIGxvIGd1aWEgZW4gZ3JhbiBwYXJ0ZSBkZSBsbyBxdWUgaGFjZVwiLFxuICAgIFwiWW91IGNvbnNpZGVyIGJvdGggJXMgYW5kICVzIHRvIGd1aWRlIGEgbGFyZ2UgcGFydCBvZiB3aGF0IHlvdSBkb1wiIDogXCJVc3RlZCBjb25zaWRlcmEgcXVlICVzIHkgJXMgbG8gZ3VpYW4gZW4gZ3JhbiBwYXJ0ZSBkZSBsbyBxdWUgaGFjZVwiLFxuICAgIFwiQW5kICVzXCI6IFwiWSAlc1wiLFxuICAgIFwiRXhwZXJpZW5jZXMgdGhhdCBtYWtlIHlvdSBmZWVsIGhpZ2ggJXMgYXJlIGdlbmVyYWxseSB1bmFwcGVhbGluZyB0byB5b3VcIjogXCJObyBsZSBhZ3JhZGFuIGxhcyBleHBlcmllbmNpYXMgcXVlIGxlIGRhbiB1bmEgZ3JhbiBzZW5zYWNpw7NuIGRlICVzXCIsXG4gICAgXCJFeHBlcmllbmNlcyB0aGF0IGdpdmUgYSBzZW5zZSBvZiAlcyBob2xkIHNvbWUgYXBwZWFsIHRvIHlvdVwiOiBcIkxlIGFncmFkYW4gbGFzIGV4cGVyaWVuY2lhcyBxdWUgbGUgZGFuIHVuYSBzZW5zYWNpw7NuIGRlICVzXCIsXG4gICAgXCJZb3UgYXJlIG1vdGl2YXRlZCB0byBzZWVrIG91dCBleHBlcmllbmNlcyB0aGF0IHByb3ZpZGUgYSBzdHJvbmcgZmVlbGluZyBvZiAlc1wiOiBcIkVzdMOhIG1vdGl2YWRvIGEgYnVzY2FyIGV4cGVyaWVuY2lhcyBxdWUgbG8gcHJvdmVhbiBkZSB1bmEgZnVlcnRlIHNlbnNhY2nDs24gZGUgJXNcIixcbiAgICBcIllvdXIgY2hvaWNlcyBhcmUgZHJpdmVuIGJ5IGEgZGVzaXJlIGZvciAlc1wiIDogXCJTdXMgZWxlY2Npb25lcyBlc3TDoW4gZGV0ZXJtaW5hZGFzIHBvciB1biBkZXNlbyBkZSAlc1wiLFxuICAgIFwiYSBiaXQgJXNcIjogXCJ1biBwb2NvICVzXCIsXG4gICAgXCJzb21ld2hhdCAlc1wiIDogXCJhbGdvICVzXCIsXG4gICAgXCJjYW4gYmUgcGVyY2VpdmVkIGFzICVzXCI6IFwicHVlZGUgc2VyIHBlcmNpYmlkbyBjb21vICVzXCJcbiAgfSxcbiAgXCJ0cmFpdHNcIjoge1xuICAgIFwiQWdyZWVhYmxlbmVzc19taW51c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlc2NvbnNpZGVyYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVzY29ydMOpc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlc2NvbmZpYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicG9jbyBjb29wZXJhdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImlycmVmbGV4aXZvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJBZ3JlZWFibGVuZXNzX21pbnVzX0NvbnNjaWVudGlvdXNuZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXN0cmljdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicsOtZ2lkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImR1cm9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkFncmVlYWJsZW5lc3NfbWludXNfRXh0cmF2ZXJzaW9uX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY8Otbmljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNhdXRvIGNvbiBsb3MgZGVtw6FzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwic29saXRhcmlvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVzYXBlZ2Fkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImltcGVyc29uYWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzb21icsOtb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQWdyZWVhYmxlbmVzc19taW51c19FeHRyYXZlcnNpb25fcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm9ic3RpbmFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFicnVwdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjcnVkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvbWJhdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImR1cm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXN0dXRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWFuaXB1bGFkb3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJob3Njb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInRhaW1hZG9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkFncmVlYWJsZW5lc3NfbWludXNfTmV1cm90aWNpc21fbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbnNlbnNpYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicG9jbyBhZmVjdHVvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkZXNhcGFzaW9uYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hIHBlcnNvbmEgc2luIGVtb2Npb25lc1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQWdyZWVhYmxlbmVzc19taW51c19OZXVyb3RpY2lzbV9wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3LDrXRpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlZ2/DrXN0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlIG1hbCBnZW5pb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFudGFnb25pc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZ3J1w7HDs25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhbWFyZ2Fkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlc2FncmFkYWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImV4aWdlbnRlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJBZ3JlZWFibGVuZXNzX21pbnVzX09wZW5uZXNzX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidG9zY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ1bmEgcGVyc29uYSBzaW4gdGFjdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJicnVzY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjZXJyYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiw6FzcGVyb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImltcGxhY2FibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwb2NvIGNhcml0YXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ2ZW5nYXRpdm9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkFncmVlYWJsZW5lc3NfbWludXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwZXJzcGljYXpcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhjw6ludHJpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kaXZpZHVhbGlzdGFcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkFncmVlYWJsZW5lc3NfcGx1c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzb2JyaW9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibW9kZXN0b1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQWdyZWVhYmxlbmVzc19wbHVzX0NvbnNjaWVudGlvdXNuZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2VydmljaWFsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvb3BlcmF0aXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvbnNpZGVyYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInJlc3BldHVvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29ydMOpc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzZW5zYXRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImF0ZW50b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb25zaWRlcmFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJsZWFsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm1vcmFsXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJBZ3JlZWFibGVuZXNzX3BsdXNfRXh0cmF2ZXJzaW9uX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvbm1vdmlibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYWdyYWRhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNlcnZpY2lhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJodW1pbGRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kdWxnZW50ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQWdyZWVhYmxlbmVzc19wbHVzX0V4dHJhdmVyc2lvbl9wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImVmZXJ2ZXNjZW50ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhbGVncmVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYW1pc3Rvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYWxlZ3JlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImpvdmlhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJqb2Nvc29cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkFncmVlYWJsZW5lc3NfcGx1c19OZXVyb3RpY2lzbV9taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJnZW5lcm9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhZ3JhZGFibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidG9sZXJhbnRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBhY8OtZmljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJmbGV4aWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJmw6FjaWwgZGUgdHJhdGFyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImp1c3RvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNhcml0YXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29uZmlhYmxlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJBZ3JlZWFibGVuZXNzX3BsdXNfTmV1cm90aWNpc21fcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzZW50aW1lbnRhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjYXJpw7Fvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2Vuc2libGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidGllcm5vXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFwYXNpb25hZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicm9tw6FudGljb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQWdyZWVhYmxlbmVzc19wbHVzX09wZW5uZXNzX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVwZW5kaWVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzaW1wbGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkFncmVlYWJsZW5lc3NfcGx1c19PcGVubmVzc19wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFtaXN0b3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInVuYSBwZXJzb25hIGNvbiB0YWN0b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkaXBsb23DoXRpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicHJvZnVuZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaWRlYWxpc3RhXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19BZ3JlZWFibGVuZXNzX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXJyZWJhdGFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gY29vcGVyYXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwb2NvIGZpYWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlc2NvbmZpYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaXJyZWZsZXhpdm9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkNvbnNjaWVudGlvdXNuZXNzX21pbnVzX0FncmVlYWJsZW5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwb2NvIHByZXRlbmNpb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm1vZGVzdG9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkNvbnNjaWVudGlvdXNuZXNzX21pbnVzX0V4dHJhdmVyc2lvbl9taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImluZGVjaXNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hIHBlcnNvbmEgc2luIHByb3DDs3NpdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hIHBlcnNvbmEgc2luIGNhcsOhY3RlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ1bmEgcGVyc29uYSBzaW4gY29tcHJvbWlzb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gYW1iaWNpb3NvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19FeHRyYXZlcnNpb25fcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInJldm9sdG9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJidWxsaWNpb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidGVtZXJhcmlvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidHVtdWx0dW9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkZW1vc3RyYXRpdm9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkNvbnNjaWVudGlvdXNuZXNzX21pbnVzX05ldXJvdGljaXNtX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImluZm9ybWFsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlIGJham8gcGVyZmlsXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19OZXVyb3RpY2lzbV9wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXRvbG9uZHJhZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbmNvbnNpc3RlbnRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXJyw6F0aWNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwib2x2aWRhZGl6b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImltcHVsc2l2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImZyw612b2xvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJDb25zY2llbnRpb3VzbmVzc19taW51c19PcGVubmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ0ZW1lcmFyaW9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbMOzZ2ljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImlubWFkdXJvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXphcm9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJsYXhvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kaXNjaXBsaW5hZG9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkNvbnNjaWVudGlvdXNuZXNzX21pbnVzX09wZW5uZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicG9jbyBjb252ZW5jaW9uYWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVjdWxpYXJcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkNvbnNjaWVudGlvdXNuZXNzX3BsdXNfQWdyZWVhYmxlbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImluZmxleGlibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXN0cmljdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicsOtZ2lkb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQ29uc2NpZW50aW91c25lc3NfcGx1c19BZ3JlZWFibGVuZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29uZmlhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInJlc3BvbnNhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNlZ3Vyb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlZHVjYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvbnNpZGVyYWRvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJDb25zY2llbnRpb3VzbmVzc19wbHVzX0V4dHJhdmVyc2lvbl9taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjYXV0b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzZWd1cm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhhY3RvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImZvcm1hbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhaG9ycmF0aXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInByaW5jaXBpc3RhXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJDb25zY2llbnRpb3VzbmVzc19wbHVzX0V4dHJhdmVyc2lvbl9wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFtYmljaW9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhbGVydGFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZmlybWVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVjaWRpZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29tcGV0aXRpdm9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkNvbnNjaWVudGlvdXNuZXNzX3BsdXNfTmV1cm90aWNpc21fbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWludWNpb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImVzdGFibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29uc2lzdGVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlzY2lwbGluYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImzDs2dpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVjaWRpZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29udHJvbGFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb25jaXNvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJDb25zY2llbnRpb3VzbmVzc19wbHVzX05ldXJvdGljaXNtX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGV0YWxsaXN0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImV4Y2l0YWJsZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQ29uc2NpZW50aW91c25lc3NfcGx1c19PcGVubmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ0cmFkaWNpb25hbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb252ZW5jaW9uYWxcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkNvbnNjaWVudGlvdXNuZXNzX3BsdXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzb2Zpc3RpY2Fkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwZXJmZWNjaW9uaXN0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbmR1c3RyaW9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkaWdub1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJyZWZpbmFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjdWx0b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwcmV2aXNvclwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX0FncmVlYWJsZW5lc3NfbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXNjw6lwdGljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjYXV0byBjb24gbG9zIGRlbcOhc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNvbGl0YXJpb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gY29tdW5pY2F0aXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYW50aXNvY2lhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNvbWJyw61vXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVzaW50ZXJlc2Fkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhcGFydGFkb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX0FncmVlYWJsZW5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwYWPDrWZpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaHVtaWxkZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzdW1pc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidMOtbWlkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJvYmVkaWVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5nZW51b1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX0NvbnNjaWVudGlvdXNuZXNzX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kaXJlY3RvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZMOpYmlsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVyZXpvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwb2NvIHBlcnNpc3RlbnRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmFnb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX0NvbnNjaWVudGlvdXNuZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibW9kZXJhZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2VyaW9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlzY3JldG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY2F1dGVsb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInByaW5jaXBpc3RhXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJFeHRyYXZlcnNpb25fbWludXNfTmV1cm90aWNpc21fbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidHJhbnF1aWxvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNvc2VnYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBsw6FjaWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImltcGFyY2lhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJtb2Rlc3RvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvbmRlc2NlbmRpZW50ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX05ldXJvdGljaXNtX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVzY29uZmlhZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVzaW1pc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInJlc2VydmFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvYmFyZGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY2FsbGFkb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX21pbnVzX09wZW5uZXNzX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNvbWJyw61vXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWFuc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwb2NvIGF2ZW50dXJlcm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGFzaXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXDDoXRpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZMOzY2lsXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJFeHRyYXZlcnNpb25fbWludXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ1bmEgcGVyc29uYSBndWlhZGEgcG9yIHN1IHByb3BpYSBjb25zY2llbmNpYSB5IHZhbG9yZXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW50cm9zcGVjdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwZW5zYXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29udGVtcGxhdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbnRyb3NwZWN0aXZvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJFeHRyYXZlcnNpb25fcGx1c19BZ3JlZWFibGVuZXNzX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidGVyY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ2aWdvcm9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRvbWluYWRvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInByZXN1bWlkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm1hbmTDs25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZG9taW5hbnRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFzdHV0b1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX3BsdXNfQWdyZWVhYmxlbmVzc19wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNvY2lhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlbsOpcmdpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZW50dXNpYXN0YVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb211bmljYXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmlicmFudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXNwaXJpdHVvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWFnbsOpdGljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlbnR1c2lhc3RhXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJFeHRyYXZlcnNpb25fcGx1c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJidWxsaWNpb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInRyYXZpZXNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImV4aGliaWNpb25pc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImdyZWdhcmlvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlbW9zdHJhdGl2b1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX3BsdXNfQ29uc2NpZW50aW91c25lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhY3Rpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29tcGV0aXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVyc2lzdGVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYW1iaWNpb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlY2lkaWRvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJFeHRyYXZlcnNpb25fcGx1c19OZXVyb3RpY2lzbV9taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb25maWFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhdWRhelwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzZWd1cm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVzaW5oaWJpZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmFsaWVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmFsaWVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidW5hIHBlcnNvbmEgc2F0aXNmZWNoYSBkZSBzaSBtaXNtYVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ2aWdvcm9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJmdWVydGVcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIkV4dHJhdmVyc2lvbl9wbHVzX05ldXJvdGljaXNtX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhwbG9zaXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidmVyYm9ycsOhZ2ljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJleHRyYXZhZ2FudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ2b2zDoXRpbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb3F1ZXRvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJFeHRyYXZlcnNpb25fcGx1c19PcGVubmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInZlcmJvcnLDoWdpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbmVzY3J1cHVsb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicG9tcG9zb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiRXh0cmF2ZXJzaW9uX3BsdXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJleHByZXNpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY8OhbmRpZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZHJhbcOhdGljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlc3BvbnTDoW5lb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbmdlbmlvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwib3BvcnR1bmlzdGFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5kZXBlbmRpZW50ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiTmV1cm90aWNpc21fbWludXNfQWdyZWVhYmxlbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gZW1vY2lvbmFsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5zZW5zaWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gY2FyacOxb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVzYXBhc2lvbmFkb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiTmV1cm90aWNpc21fbWludXNfQWdyZWVhYmxlbmVzc19wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBhY2llbnRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInJlbGFqYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gZXhpZ2VudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicmVhbGlzdGFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwib3B0aW1pc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm1vZGVzdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicG9jbyBjcsOtdGljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwb2NvIHByZXRlbmNpb3NvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJOZXVyb3RpY2lzbV9taW51c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbmZvcm1hbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkZSBwZXJmaWwgYmFqb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiTmV1cm90aWNpc21fbWludXNfQ29uc2NpZW50aW91c25lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJyYWNpb25hbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJvYmpldGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlc3RhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImzDs2dpY29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGVjaWRpZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicHJlcGFyYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvbmNpc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhoYXVzdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlY29uw7NtaWNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRpc2NpcGxpbmFkb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiTmV1cm90aWNpc21fbWludXNfRXh0cmF2ZXJzaW9uX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm1vZGVzdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwb2NvIGV4Y2l0YWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwbMOhY2lkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ0cmFucXVpbG9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk5ldXJvdGljaXNtX21pbnVzX0V4dHJhdmVyc2lvbl9wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImluY29uc2NpZW50ZSBkZSBzaSBtaXNtb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbmNhbnNhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImluZmF0aWdhYmxlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJOZXVyb3RpY2lzbV9taW51c19PcGVubmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbXBlcnR1cmJhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5zZW5zaWJsZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiTmV1cm90aWNpc21fbWludXNfT3Blbm5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzZW50aWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInZlcnPDoXRpbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjcmVhdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbnRlbGVjdHVhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwZXJzcGljYXpcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk5ldXJvdGljaXNtX3BsdXNfQWdyZWVhYmxlbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInRlbXBlcmFtZW50YWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpcnJpdGFibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwZWxlYWRvclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImltcGFjaWVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJncnXDscOzblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm1hbGh1bW9yYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaXJyaXRhYmxlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJOZXVyb3RpY2lzbV9wbHVzX0FncmVlYWJsZW5lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJlbW90aXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3LDqWR1bG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY2FyacOxb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNlbnNpYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImJsYW5kb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiTmV1cm90aWNpc21fcGx1c19Db25zY2llbnRpb3VzbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvbXB1bHNpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbnF1aXNpdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRlc2VuZnJlbmFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm9sdmlkYWRpem9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbXB1bHNpdm9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk5ldXJvdGljaXNtX3BsdXNfQ29uc2NpZW50aW91c25lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkZXRhbGxpc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhjaXRhYmxlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJOZXVyb3RpY2lzbV9wbHVzX0V4dHJhdmVyc2lvbl9taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJndWFyZGFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImlycml0YWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImluc2VndXJvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVzaW1pc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInJlc2VydmFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInRlbWVyb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibmVnYXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXV0by1jcsOtdGljb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiTmV1cm90aWNpc21fcGx1c19FeHRyYXZlcnNpb25fcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJleGNpdGFibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ2ZXJib3Jyw6FnaWNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNvcXVldG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJleHBsb3Npdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXh0cmF2YWdhbnRlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwidm9sw6F0aWxcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk5ldXJvdGljaXNtX3BsdXNfT3Blbm5lc3NfbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaXJyaXRhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImZhc3RpZGlvc29cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXByZW5zaXZvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJOZXVyb3RpY2lzbV9wbHVzX09wZW5uZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhjaXRhYmxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFwYXNpb25hZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2Vuc3VhbFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiT3Blbm5lc3NfbWludXNfQWdyZWVhYmxlbmVzc19taW51c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm9yZGluYXJpb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInNpbiB0YWN0b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImJydXNjb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNlcnJhZG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkdXJvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJPcGVubmVzc19taW51c19BZ3JlZWFibGVuZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJzaW1wbGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJkZXBlbmRpZW50ZVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiT3Blbm5lc3NfbWludXNfQ29uc2NpZW50aW91c25lc3NfbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb3J0b3BsYWNpc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInRlbWVyYXJpb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImlsw7NnaWNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5tYWR1cm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhemFyb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImxheG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpcnJlc3BldHVvc29cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk9wZW5uZXNzX21pbnVzX0NvbnNjaWVudGlvdXNuZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY29udmVuY2lvbmFsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInRyYWRpY2lvbmFsXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJPcGVubmVzc19taW51c19FeHRyYXZlcnNpb25fbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicHJlZGVjaWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gaW1hZ2luYXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwic29tYnLDrW9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhcMOhdGljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvY28gYXZlbnR1cmVyb1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiT3Blbm5lc3NfbWludXNfRXh0cmF2ZXJzaW9uX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ2ZXJib3Jyw6FnaWNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5lc2NydXB1bG9zb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBvbXBvc29cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk9wZW5uZXNzX21pbnVzX05ldXJvdGljaXNtX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImltcGVydHVyYmFibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IHRydWUsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbnNlbnNpYmxlXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJPcGVubmVzc19taW51c19OZXVyb3RpY2lzbV9wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImlycml0YWJsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJmYXN0aWRpb3NvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImFwcmVuc2l2b1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiT3Blbm5lc3NfcGx1c19BZ3JlZWFibGVuZXNzX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBlcnNwaWNhelwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJleGPDqW50cmljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbmRpdmlkdWFsaXN0YVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiT3Blbm5lc3NfcGx1c19BZ3JlZWFibGVuZXNzX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaWRlYWxpc3RhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImRpcGxvbcOhdGljb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJwcm9mdW5kb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ1bmEgcGVyc29uYSBjb24gdGFjdG9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYW1pc3Rvc29cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk9wZW5uZXNzX3BsdXNfQ29uc2NpZW50aW91c25lc3NfbWludXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicG9jbyBjb252ZW5jaW9uYWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVjdWxpYXJcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk9wZW5uZXNzX3BsdXNfQ29uc2NpZW50aW91c25lc3NfcGx1c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJhbmFsw610aWNvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBlcmNlcHRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW5mb3JtYXRpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZ3JhbmRpbG9jdWVudGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZGlnbm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiY3VsdG9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcIk9wZW5uZXNzX3BsdXNfRXh0cmF2ZXJzaW9uX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImludHJvc3BlY3Rpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwibWVkaXRhdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJjb250ZW1wbGF0aXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImludHJvc3BlY3Rpdm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwicGVuc2F0aXZvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJPcGVubmVzc19wbHVzX0V4dHJhdmVyc2lvbl9wbHVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcIm11bmRhbm9cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiZXhhZ2VyYWRvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImVsb2N1ZW50ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbnF1aXNpdGl2b1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJpbnRlbnNvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJPcGVubmVzc19wbHVzX05ldXJvdGljaXNtX21pbnVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImNyZWF0aXZvXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcImludGVsZWN0dWFsXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJwZXJjZWl2ZWRfbmVnYXRpdmVseVwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwid29yZFwiOiBcInBlcnNwaWNhelwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJ2ZXJzw6F0aWxcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiaW52ZW50aXZvXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJPcGVubmVzc19wbHVzX05ldXJvdGljaXNtX3BsdXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwiYXBhc2lvbmFkb1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicGVyY2VpdmVkX25lZ2F0aXZlbHlcIjogZmFsc2UsXG4gICAgICAgICAgICBcIndvcmRcIjogXCJleGNpdGFibGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInBlcmNlaXZlZF9uZWdhdGl2ZWx5XCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJ3b3JkXCI6IFwic2Vuc3VhbFwiXG4gICAgICAgIH1cbiAgICBdXG59LFxuXCJ2YWx1ZXNcIjoge1xuICAgIFwiSGVkb25pc21cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJEaXNmcnV0YXIgZGUgbGEgdmlkYVwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlByZWZpZXJlIGFjdGl2aWRhZGVzIGNvbiB1biBwcm9ww7NzaXRvIG3DoXMgZ3JhbmRlIHF1ZSBlbCBzw7NsbyBkZWxlaXRlIHBlcnNvbmFsXCIsXG4gICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlRpZW5lIGdyYW4gbW90aXZhY2nDs24gcG9yIGRpc2ZydXRhciBsYSB2aWRhIGVuIHN1IHBsZW5pdHVkXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJTZWxmLXRyYW5zY2VuZGVuY2VcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJBeXVkYXIgYSBsb3MgZGVtw6FzXCIsXG4gICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiQ3JlZSBxdWUgbGFzIHBlcnNvbmFzIHB1ZWRlbiBlbmNhcmdhcnNlIGRlIHN1cyBwcm9waW9zIGFzdW50b3Mgc2luIGludGVyZmVyZW5jaWFcIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiQ3JlZSBxdWUgZXMgaW1wb3J0YW50ZSBjdWlkYXIgZGUgbGFzIHBlcnNvbmFzIHF1ZSBsbyByb2RlYW5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJMYSBqdXN0aWNpYVwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkNyZWUgcXVlIHNvbiBsYXMgcGVyc29uYXMgY3JlYW4gc3VzIG9wb3J0dW5pZGFkZXNcIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiQ3JlZSBlbiBsYSBqdXN0aWNpYSBzb2NpYWwgeSBsYSBpZ3VhbGRhZCBwYXJhIHRvZG9zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiTGEganVzdGljaWEgc29jaWFsXCIsXG4gICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiQ3JlZSBxdWUgc29uIGxhcyBwZXJzb25hcyBjcmVhbiBzdXMgb3BvcnR1bmlkYWRlc1wiLFxuICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJDcmVlIGVuIGxhIGp1c3RpY2lhIHNvY2lhbCB5IGxhIGlndWFsZGFkIHBhcmEgdG9kb3NcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJMYSBpZ3VhbGRhZFwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkNyZWUgcXVlIHNvbiBsYXMgcGVyc29uYXMgY3JlYW4gc3VzIG9wb3J0dW5pZGFkZXNcIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiQ3JlZSBlbiBsYSBqdXN0aWNpYSBzb2NpYWwgeSBsYSBpZ3VhbGRhZCBwYXJhIHRvZG9zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiRWwgc2VydmljaW8gY29tdW5pdGFyaW9cIixcbiAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJDcmVlIHF1ZSBsYXMgcGVyc29uYXMgcHVlZGVuIGVuY2FyZ2Fyc2UgZGUgc3VzIHByb3Bpb3MgYXN1bnRvcyBzaW4gaW50ZXJmZXJlbmNpYVwiLFxuICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJDcmVlIHF1ZSBlcyBpbXBvcnRhbnRlIGN1aWRhciBkZSBsYXMgcGVyc29uYXMgcXVlIGxvIHJvZGVhblwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiQ29uc2VydmF0aW9uXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiTGFzIHRyYWRpY2lvbmVzXCIsXG4gICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiTGUgaW1wb3J0YSBtw6FzIHNlZ3VpciBzdSBwcm9waW8gY2FtaW5vIHF1ZSBzZWd1aXIgZWwgY2FtaW5vIGRlIG90cm9zXCIsXG4gICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlRpZW5lIG11Y2hvIHJlc3BldG8gcG9yIGxvcyBncnVwb3MgYSBsb3MgcXVlIHBlcnRlbmVjZSB5IHNpZ3VlIHN1IGd1w61hXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiTGEgYXJtb27DrWFcIixcbiAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJEZWNpZGUgcXXDqSBlcyBsbyBjb3JyZWN0byBiYXNhZG8gZW4gc3VzIGNyZWVuY2lhcywgbm8gZW4gbG8gcXVlIGxhIGdlbnRlIHBpZW5zYVwiLFxuICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJDcmVlIHF1ZSBsYXMgcmVnbGFzIGV4aXN0ZW4gcG9yIHVuYSByYXrDs24geSBudW5jYSBpbnRlbnRhIHRyYXNncmVkaXJsYXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJMYSBodW1pbGRhZFwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkRlY2lkZSBxdcOpIGVzIGxvIGNvcnJlY3RvIGJhc2FkbyBlbiBzdXMgY3JlZW5jaWFzLCBubyBlbiBsbyBxdWUgbGEgZ2VudGUgcGllbnNhXCIsXG4gICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlZlIHZhbG9yIGVuIGRlZmVyaXIgYSBvdHJvc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiVGVybVwiOiBcIkxhcyBub3JtYXMgc29jaWFsZXNcIixcbiAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJEZWNpZGUgcXXDqSBlcyBsbyBjb3JyZWN0byBiYXNhZG8gZW4gc3VzIGNyZWVuY2lhcywgbm8gZW4gbG8gcXVlIGxhIGdlbnRlIHBpZW5zYVwiLFxuICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJDcmVlIHF1ZSBsYXMgcmVnbGFzIGV4aXN0ZW4gcG9yIHVuYSByYXrDs24geSBudW5jYSBpbnRlbnRhIHRyYXNncmVkaXJsYXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJMYSBzZWd1cmlkYWRcIixcbiAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJQcmVmaWVyZSBsYSBzZWd1cmlkYWQgYSBjb3N0YSBkZSBkZWphciBhIHVuIGxhZG8gc3VzIG1ldGFzXCIsXG4gICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIkNyZWUgcXVlIGVzIGltcG9ydGFudGUgc2FsdmFndWFyZGFyIGxhIHNlZ3VyaWRhZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiVGVybVwiOiBcIkxhIHNlZ3VyaWRhZFwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlByZWZpZXJlIGVzdGFyIHNlZ3VybyBhIGNvc3RhIGRlIGRlamFyIGEgdW4gbGFkbyBzdXMgbWV0YXNcIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiQ3JlZSBxdWUgZXMgaW1wb3J0YW50ZSBzYWx2YWd1YXJkYXIgbGEgc2VndXJpZGFkXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJPcGVubmVzcy10by1jaGFuZ2VcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJTZXIgaW5kZXBlbmRpZW50ZVwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlJlY2liZSBkZSBidWVuYSBtYW5lcmEgcXVlIG90cm9zIGRpcmlqYW4gc3VzIGFjdGl2aWRhZGVzXCIsXG4gICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIkxlIGd1c3RhIGVzdGFibGVjZXIgc3VzIHByb3BpYXMgbWV0YXMgcGFyYSBkZWNpZGlyIGPDs21vIGFsY2FuemFybGFzIG1lam9yXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiTGEgZW1vY2nDs25cIixcbiAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJTZSBhcGVnYSBhIGxhcyBjb3NhcyBxdWUgY29ub2NlIGFudGVzIHF1ZSBhcnJpZXNnYXJzZSBhIHByb2JhciBhbGdvIG51ZXZvIHkgcmllc2dvc29cIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiRXN0w6EgYW5zaW9zbyBwb3IgYnVzY2FyIGV4cGVyaWVuY2lhcyBudWV2YXMgeSBlbW9jaW9uYW50ZXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJMYSBjcmVhdGl2aWRhZFwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlNlIGFwZWdhIGEgbGFzIGNvc2FzIHF1ZSBjb25vY2UgYW50ZXMgcXVlIGFycmllc2dhcnNlIGEgcHJvYmFyIGFsZ28gbnVldm8geSByaWVzZ29zb1wiLFxuICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJFc3TDoSBhbnNpb3NvIHBvciBidXNjYXIgZXhwZXJpZW5jaWFzIG51ZXZhcyB5IGVtb2Npb25hbnRlc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiVGVybVwiOiBcIkxhIGN1cmlvc2lkYWRcIixcbiAgICAgICAgICAgIFwiTG93RGVzY3JpcHRpb25cIjogXCJTZSBhcGVnYSBhIGxhcyBjb3NhcyBxdWUgY29ub2NlIGFudGVzIHF1ZSBhcnJpZXNnYXJzZSBhIHByb2JhciBhbGdvIG51ZXZvIHkgcmllc2dvc29cIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiRXN0w6EgYW5zaW9zbyBwb3IgYnVzY2FyIGV4cGVyaWVuY2lhcyBudWV2YXMgeSBlbW9jaW9uYW50ZXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJMYSBhdXRvbm9tw61hXCIsXG4gICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiUmVjaWJlIGRlIGJ1ZW5hIG1hbmVyYSBxdWUgb3Ryb3MgZGlyaWphbiBzdXMgYWN0aXZpZGFkZXNcIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiTGUgZ3VzdGEgZXN0YWJsZWNlciBzdXMgcHJvcGlhcyBtZXRhcyBwYXJhIGRlY2lkaXIgY8OzbW8gYWxjYW56YXJsYXMgbWVqb3JcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcIlRlcm1cIjogXCJMYSBsaWJlcnRhZFwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlJlY2liZSBkZSBidWVuYSBtYW5lcmEgcXVlIG90cm9zIGRpcmlqYW4gc3VzIGFjdGl2aWRhZGVzXCIsXG4gICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIkxlIGd1c3RhIGVzdGFibGVjZXIgc3VzIHByb3BpYXMgbWV0YXMgcGFyYSBkZWNpZGlyIGPDs21vIGFsY2FuemFybGFzIG1lam9yXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJTZWxmLWVuaGFuY2VtZW50XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiQWxjYW56YXIgZWwgw6l4aXRvXCIsXG4gICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiVG9tYSBkZWNpc2lvbmVzIHNpbiBjb25zaWRlcmFyIGPDs21vIG11ZXN0cmFuIHN1cyB0YWxlbnRvc1wiLFxuICAgICAgICAgICAgXCJIaWdoRGVzY3JpcHRpb25cIjogXCJCdXNjYSBvcG9ydHVuaWRhZGVzIHBhcmEgYXV0b3N1cGVyYXNlIHkgcGFyYSBkZW1vc3RyYXIgcXVlIGVzIHVuYSBwZXJzb25hIGNhcGF6XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiTWVqb3JhciBzdSBlc3RhdHVzIHNvY2lhbFwiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIkVzdMOhIGNvbmZvcm1lIGNvbiBzdSBlc3RhdHVzIHNvY2lhbCB5IG5vIHNpZW50ZSBuZWNlc2lkYWQgZGUgbWVqb3JhcmxvXCIsXG4gICAgICAgICAgICBcIkhpZ2hEZXNjcmlwdGlvblwiOiBcIlNlIGVzZnVlcnphIGNvbnNpZGVyYWJsZW1lbnRlIHBhcmEgbWVqb3JhciBzdSBlc3RhdHVzIGUgaW1hZ2VuIHDDumJsaWNhXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJUZXJtXCI6IFwiTGEgYW1iaWNpw7NuXCIsXG4gICAgICAgICAgICBcIkxvd0Rlc2NyaXB0aW9uXCI6IFwiRXN0w6EgY29uZm9ybWUgY29uIHN1IGVzdGF0dXMgc29jaWFsIHkgbm8gc2llbnRlIG5lY2VzaWRhZCBkZSBtZWpvcmFybG9cIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiU2llbnRlIHF1ZSBlcyBpbXBvcnRhbnRlIGF2YW56YXIgcGFyYSBhbGNhbnphciBtZXRhc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiVGVybVwiOiBcIkxvcyBncmFuZGVzIGxvZ3Jvc1wiLFxuICAgICAgICAgICAgXCJMb3dEZXNjcmlwdGlvblwiOiBcIlRvbWEgZGVjaXNpb25lcyBzaW4gY29uc2lkZXJhciBjw7NtbyBtdWVzdHJhbiBzdXMgdGFsZW50b3NcIixcbiAgICAgICAgICAgIFwiSGlnaERlc2NyaXB0aW9uXCI6IFwiQnVzY2Egb3BvcnR1bmlkYWRlcyBwYXJhIGF1dG9zdXBlcmFzZSB5IHBhcmEgZGVtb3N0cmFyIHF1ZSBlcyB1bmEgcGVyc29uYSBjYXBhelwiXG4gICAgICAgIH1cbiAgICBdXG4gIH1cbn1cbiJdfQ==
(1)
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function debug() {
  if (false) {
    console.debug.apply(console, arguments);
  }
}

$(document).ready(function () {
  'use strict';

  var
    demo = {
      users: [],
      userCategories : {},

      visibleView : 'personality_summary_view',

      fundsView : 'tradeoffTable',

      funds : undefined,
      funds_problem : undefined,

      currentUser : undefined,
      currentUserData : {},

      headerInfo : false
    },
    Users = {
      getList : QJSON.post.bind(this, '/users/list', {}),
      getProfile : QJSON.post.bind(this, '/users/profile'),
      getContentItems : QJSON.post.bind(this, '/users/contentItems')
    },
    Resources = {
      getCommunicationChannels : QJSON.get.bind(this, '/recommendations/communication_channels.json', {}),
      getFunds : QJSON.get.bind(this, '/recommendations/funds_personality.json', {}),
      getFundsProblem : QJSON.get.bind(this, '/recommendations/funds_dilemma.json', {})
    },
    taWrapper,
    taTable,
    postGallery,
    userInfo,
    gallery,
    galleryr,
    chart,
    similarityGallery,
    textSummary;

  function taError(error) {
    debug('Error: ', error);
  }

  function loadingElement(id, additionalStyle) {
    additionalStyle = additionalStyle || 'padding 50px';
    return [
      '<div id="', id, '"',
      '     style="text-align:center;' + additionalStyle + '">',
      '  <img src="dist/assets/images/watson.gif"/>',
      '</div>'
    ].join('');
  }

  function loadElement(selector) {
    var
      loadingElementId = selector.replace(/[\.# :]/g,"") + "-Loading",
      loading = loadingElement(loadingElementId, "padding: 150px 0px 150px 0px"),
      doneLoading = function () {
        $("#" + loadingElementId).remove();
        debug("Removed loading widget #" + loadingElementId + " for " + selector);
      };
    $(selector).parent().append(loading);
    debug("Appended loading widget #" + loadingElementId + " for " + selector);
    return doneLoading;
  }

  function switchView(visibleViewId, hiddenViewId, loadingFunction, displayLoading) {
    var deferred = Q.defer();

    debug("Switching views: " + visibleViewId + " -> " + hiddenViewId);
    var
      visibleElement = $('#' + visibleViewId),
      doneLoading,
      show;

    if (displayLoading) {
      doneLoading = loadElement("#" + visibleViewId);
    }

    show = function () {
      debug("Switching views: " + visibleViewId + " -> " + hiddenViewId + " [FINISHING]");
      if (displayLoading) {
        doneLoading();
      }
      $('#' + hiddenViewId).show(400, deferred.resolve);
      $('footer').show(400);
      debug("Switching views: " + visibleViewId + " -> " + hiddenViewId + " [DONE]");
    };

    $('footer').hide(400);
    visibleElement.hide(400, loadingFunction ? loadingFunction.bind(this, show) : show);
    return deferred.promise;
  }

  function setView(viewId, currentViewId, loadingFunction, displayLoading) {
    debug("Setting view", viewId);
    $('#' + currentViewId + '-section').removeClass('active');
    $('#' + viewId + '-section').addClass('active');
    return switchView(currentViewId, viewId, loadingFunction, displayLoading);
  }

  function setUserSection(viewId) {
    switchView(demo.visibleView + "-text", viewId + "-text").done();
    setView(viewId, demo.visibleView).done();
    demo.visibleView = viewId;
  }

  function calculateDilemma(user) {
    debug('Calculating dilemma for user.');
    demo.currentUserData.showingTradeoffAnalytics = true;

    function cloneAndClean(problem) {
      var p = $.extend({}, problem);
      p.columns.forEach(function (v) {
        delete v.short_name;
      });
      return p;
    }

    return taWrapper.show(cloneAndClean(user.problem));
  }

  function setFundsSection(viewId) {
    setView(viewId, demo.fundsView, function (next) {
      if (viewId === 'taWidgetContainer') {
        debug('Switching to Tradeoff Analytics Widget');
        if (taWrapper.loaded) {
          debug('Tradeoff Analytics Widget was already loaded.');
          if (!demo.currentUserData.showingTradeoffAnalytics) {
            calculateDilemma(demo.currentUser).then(next).done();
          } else {
            debug('We have already calculated the dilemma for this user, skipping.');
            next();
          }
        } else {
          debug('Loading Tradeoff Analytics Widget');
          taWrapper.load().then(calculateDilemma.bind(this, demo.currentUser)).then(next).done();
        }
      } else {
        next();
      }
    }, viewId === 'taWidgetContainer').done();
    demo.fundsView = viewId;
  }

  $("#userSections.sections .sectionLink").click(function (event) {
    var element = $(event.delegateTarget);
    if (!element.hasClass('active')) {
      setUserSection(element.attr("data-view"));
    }
  });

  $(".recommendedFund .sections .sectionLink").click(function (event) {
    var element = $(event.delegateTarget);
    if (!element.hasClass('active')) {
      setFundsSection(element.attr("data-view"));
    }
  });

  function contentItemsToPosts(user, contentItems) {
    var
      posts = [],
      i;

    for (i = 0; i < contentItems.length; i += 1) {
      posts.push({
        displayName: user.name,
        imageUrl: user.image,
        description: contentItems[i].content
      });
    }

    return posts;
  }

  function showHeaderInfo() {
    $('#headerInfo').show(400);
    demo.headerInfo = true;
  }

  function hideHeaderInfo() {
    $('#headerInfo').hide(400);
    demo.headerInfo = false;
  }

  function toggleHeaderInfo() {
    if (demo.headerInfo) {
      hideHeaderInfo();
    } else {
      showHeaderInfo();
    }
  }

  function calculateChannelMatching(user) {
    var
      comparedTraits = [
        'Openness',
        'Conscientiousness',
        'Extraversion',
        'Agreeableness',
        'Neuroticism'
      ],
      finder = new MatchFinder(comparedTraits);

    Resources.getCommunicationChannels()
      .then(function (channels) {
        var matchResult = finder.findMatch(user, channels);
        debug('Best channel for user', user.name, 'is', matchResult.match);
        debug('Match result', matchResult);
        $(".recommendations .channel").text(matchResult.match.data.label);
      })
      .done();
  }

  function calculateRepresentativeMatching(user, representatives) {
    var
      polarizedTraits = {
        'Openness' : { left: 'Cautious',  right: 'Curious'},
        'Conscientiousness' : { left: 'Organized', right: 'Easy Going'},
        'Extraversion' : { left: 'Outgoing',  right: 'Reserved'},
        'Agreeableness' : { left: 'Sensitive', right: 'Confident'},
        'Neuroticism' : { left: 'Compassionate', right: 'Analytical'}
      },
      comparedTraits = [
        'Openness',
        'Conscientiousness',
        'Extraversion',
        'Agreeableness'
      ],
      visualizedTraits = comparedTraits.concat([
        'Neuroticism'
      ]),
      finder = new MatchFinder(comparedTraits, {
        biasFunction: function (subjectTraits, targetTraits) {
          var
            distance = 0;
          if (subjectTraits['Neuroticism'] > 0.7 && targetTraits['Agreeableness'] < 0.7) {
            distance = 0.15;
          } else if (subjectTraits['Agreeableness'] < 0.3 && targetTraits['Neuroticism'] > 0.3) {
            distance = 0.15;
          }
          return distance;
        }
      }),
      i,
      matchResult;

    user.traits = user.traits || ProfileUtils.getTraits(user.profile);
    user.fullTraits = user.fullTraits || ProfileUtils.getTraits(user.profile, true);

    for (i = 0; i < representatives.length; i += 1) {
      if (representatives[i].profile) {
        representatives[i].traits = representatives[i].traits || ProfileUtils.getTraits(representatives[i].profile);
        representatives[i].fullTraits = representatives[i].fullTraits || ProfileUtils.getTraits(representatives[i].profile, true);
      } else {
        console.warn("[WARNING] Representative " + representatives[i].name  +
                    "(" + representatives[i].id + ") has not been profiled!" +
                    " Will be ignored for representative match calculation.");
      }
    }

    matchResult = finder.findMatch(user, representatives);

    var matchComparator2 = new HorseRacingMatch('representativeMatching2', polarizedTraits);

    debug('Best representative for user', user.name, 'is', matchResult.match);
    debug(matchResult);
    $(".currentUser.displayName").text(user.name);
    matchComparator2.show(user, matchResult.match.data, matchResult.match.score);
    similarityGallery.show(matchResult.scores);
    similarityGallery.click(function (result) {
      matchComparator2.show(user, result.data, result.score);
    });
  }

  function setRecommendedFund(fund) {
    $(".recommendations .product").text(fund.label + (fund.code ? " (" + fund.code + ")" : ""));
    $(".recommendations .message").text(fund.message);
    $(".recommendations .strategy").text(fund.strategy);
  }

  function setRecommendedEngagementTime(user) {
    var
      behavior = user.profile.tree.children[3].children[0],
      time = behavior.children[1].name,
      day = behavior.children[0].name;

    // TODO: Better labels
    $(".recommendations .times").text(day + " in the " + time + " hour");
  }

  function calculateFundMatching(user) {
    var comparedTraits = [
        'Conservation',
        'Cautiousness'
      ],
      finder = new MatchFinder(comparedTraits, demo.fundsSimilarityFunction),
      matchResult,
      problem,
      keyScoreDict,
      i,
      key;

    user.traits = ProfileUtils.getTraits(user.profile);

    matchResult = finder.findMatch(user, demo.funds);

    debug('Best result for user', user.name, 'is', matchResult.match);
    debug('Match result', matchResult);

    setRecommendedFund(matchResult.match.data);
    setRecommendedEngagementTime(user);

    problem = $.extend({}, demo.funds_problem);


    keyScoreDict = {};
    matchResult.scores.forEach(function (result) {
      keyScoreDict[result.data.id] = result.score;
    });

    for (i = 0; i < problem.options.length; i += 1) {
      key = problem.options[i].key;
      problem.options[i].values["Personality match"] = parseFloat((keyScoreDict[key] * 100).toFixed(2));
    }

    user.problem = problem;

    debug('Problem', problem);
    debug('Generating table');
    taTable.buildTable(problem, $('#tradeoffTable'), {'Personality match' : 'desc'});

    $('#tradeoffTable tr#problem-' + matchResult.match.data.id).addClass("important");
  }

  function setClient(user) {
    $('#tradeoff_analytics_view-section').show();
    $('#representatives_view-section').show();
  }

  function setRepresentative(user) {
    $('#tradeoff_analytics_view-section').hide();
    $('#representatives_view-section').hide();
  }

  function showUser(user, callback) {
    hideHeaderInfo();
    demo.currentUser = user;
    demo.currentUserData = {};
    debug("Showing user");
    var chartLoadingDone;

    if (user.category == 'clients') {
      setClient(user);
    } else {
      setRepresentative(user);
    }

    $('#topnav').show(400);

    switchView('galleries', 'expandedUser',
      function (next) {
        debug('Loading user view');

        userInfo.show({
          displayName: user.name,
          description: user.job,
          imageUrl: user.image,
          language: user.language || "No info",
          postCount: user.contentitems || "No info",
          username: ""
        });


        $(".nav .category").text(user.category === 'clients' ? 'Clients' : 'Representatives');
        $(".nav .userName").text(user.name);

        function buildSummaryHtml(summary) {
          return '<p>' + summary.split('\n').join('</p><p>') + '</p>';
        }


        if (user.profile) {
          $('#personality_summary_view-text').children().remove();
          $('#personality_summary_view-text').append(buildSummaryHtml(textSummary.getSummary(user.profile)));
        } else {
          console.error("[ERROR] User " + user.name + " (" + user.id + ")  has no profile!");
        }


        chart.clean();

        Users.getContentItems({userid: user.id, limit: 5})
          .then(function (contentItems) {
            user.contentItems = contentItems;
            debug('Showing post gallery');
            postGallery.show(contentItemsToPosts(user, user.contentItems));
            if (callback) { callback(user); }

          })
          .done();
        chartLoadingDone = loadElement('#sunburstChart');
        setUserSection("personality_summary_view");
        next();
        debug('Finished loading user view');
      })
      .then(function () {

        debug('Executing after user view loading functions');
        if (user.profile) {
          chart.show(user.profile, user.image);
          chartLoadingDone();
        } else {
          console.error("[ERROR] User " + user.name + " (" + user.id + ")  has no profile!");
        }

        if (user.category == 'clients') {
          calculateFundMatching(user);
          setFundsSection('tradeoffTable');
          calculateChannelMatching(user);
          calculateRepresentativeMatching(user, demo.userCategories.representatives);
        }
      })
      .done();



  }

  function loadResources() {
    Resources.getFunds().then(function (funds) {
      debug("Loaded funds");
      demo.funds = funds;
    }).done();

    Resources.getFundsProblem().then(function (problem) {
      debug("Loaded funds problem");
      demo.funds_problem = problem;
    }).done();

    debug('Loading users list');
    Users.getList()
      .then(function (users) {
        debug('Processing users list');
        var
          clients = [],
          clients_raw = [],
          representatives = [],
          representatives_raw = [],
          u;
        users.forEach(function (user) {
          u = { displayName: user.name, imageUrl: user.image, description: user.job, data: user };
          if (user.category === 'clients') {
            clients.push(u);
            clients_raw.push(user);
          } else {
            representatives_raw.push(user);
            representatives.push(u);
          }
        });
        debug('Showing gallery for users', users);
        gallery.show(clients);
        galleryr.show(representatives);

        demo.users = users;
        demo.userCategories.clients = clients_raw;
        demo.userCategories.representatives = representatives_raw;

      })
      .done();
  }

  function switchToGallery() {
    $('#topnav').hide(400);
    switchView('expandedUser', 'galleries').done();
  }

  function launchApp() {
    showHeaderInfo();
    switchView('landing', 'galleries').done();
  }

  function initializeDemo() {
    loadResources();

    taWrapper = new TradeoffAnalyticsWrapper('taWidgetContainer', 'basic', 'watson', taError, '/services/dilemmas');
    taTable = new TradeoffAnalyticsTable(true);
    postGallery = new PostGallery('post-gallery');
    userInfo = new UserInfo('user-info');
    gallery = new UserGallery('client-gallery').click(showUser);
    galleryr = new UserGallery('representative-gallery').click(showUser);
    chart = new PersonalitySunburstChart('sunburstChart', 600, 560);
    similarityGallery = new SimilarityGallery('similarRepresentatives', 6);
    textSummary = new TextSummary('en');

    $('.nav .category').click(switchToGallery);
    $('.nav a.back').click(switchToGallery);
    $('#appHeader').click(toggleHeaderInfo);

    $('#launchApp').click(launchApp);
    $('#landing').show(400);
  }

  initializeDemo();
});

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Obtain JSON files by using Q promises.
 */
var QJSON = (function () {
  'use strict';

  var self = {};

  /**
   * Obtain a JSON file returning a promise.
   * @param method The request method (GET|POST)
   * @param url The URL to request the JSON file.
   * @param data Some payload data for the request.
   * @return A promise.
   */
  function QJSON(method, url, data) {
    var deferred = Q.defer();
    $.ajax({
      dataType: 'json',
      method: method,
      url: url,
      data: data,
      success: deferred.resolve,
      error: deferred.reject
    });
    return deferred.promise;
  }

  /**
   * Obtain a JSON file via GET returning a promise.
   * @param url The URL to request the JSON file.
   * @param data Some payload data for the request.
   * @return A promise.
   */
  function QGetJSON(url, data) {
    return QJSON('GET', url, data);
  }

  /**
   * Obtain a JSON file via POST returning a promise.
   * @param url The URL to request the JSON file.
   * @param data Some payload data for the request.
   * @return A promise.
   */
  function QPostJSON(url, data) {
    return QJSON('POST', url, data);
  }

  self.get = QGetJSON;
  self.post = QPostJSON;

  return self;
}());

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jade = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
'use strict';

/*!
 * Jade
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Parser = require('./parser')
  , Lexer = require('./lexer')
  , Compiler = require('./compiler')
  , runtime = require('./runtime')
  , addWith = require('with')
  , fs = require('fs')
  , utils = require('./utils');

/**
 * Expose self closing tags.
 */

// FIXME: either stop exporting selfClosing in v2 or export the new object
// form
exports.selfClosing = Object.keys(require('void-elements'));

/**
 * Default supported doctypes.
 */

exports.doctypes = require('./doctypes');

/**
 * Text filters.
 */

exports.filters = require('./filters');

/**
 * Utilities.
 */

exports.utils = utils;

/**
 * Expose `Compiler`.
 */

exports.Compiler = Compiler;

/**
 * Expose `Parser`.
 */

exports.Parser = Parser;

/**
 * Expose `Lexer`.
 */

exports.Lexer = Lexer;

/**
 * Nodes.
 */

exports.nodes = require('./nodes');

/**
 * Jade runtime helpers.
 */

exports.runtime = runtime;

/**
 * Template function cache.
 */

exports.cache = {};

/**
 * Parse the given `str` of jade and return a function body.
 *
 * @param {String} str
 * @param {Object} options
 * @return {Object}
 * @api private
 */

function parse(str, options){

  if (options.lexer) {
    console.warn('Using `lexer` as a local in render() is deprecated and '
               + 'will be interpreted as an option in Jade 2.0.0');
  }

  // Parse
  var parser = new (options.parser || Parser)(str, options.filename, options);
  var tokens;
  try {
    // Parse
    tokens = parser.parse();
  } catch (err) {
    parser = parser.context();
    runtime.rethrow(err, parser.filename, parser.lexer.lineno, parser.input);
  }

  // Compile
  var compiler = new (options.compiler || Compiler)(tokens, options);
  var js;
  try {
    js = compiler.compile();
  } catch (err) {
    if (err.line && (err.filename || !options.filename)) {
      runtime.rethrow(err, err.filename, err.line, parser.input);
    } else {
      if (err instanceof Error) {
        err.message += '\n\nPlease report this entire error and stack trace to https://github.com/jadejs/jade/issues';
      }
      throw err;
    }
  }

  // Debug compiler
  if (options.debug) {
    console.error('\nCompiled Function:\n\n\u001b[90m%s\u001b[0m', js.replace(/^/gm, '  '));
  }

  var globals = [];

  if (options.globals) {
    globals = options.globals.slice();
  }

  globals.push('jade');
  globals.push('jade_mixins');
  globals.push('jade_interp');
  globals.push('jade_debug');
  globals.push('buf');

  var body = ''
    + 'var buf = [];\n'
    + 'var jade_mixins = {};\n'
    + 'var jade_interp;\n'
    + (options.self
      ? 'var self = locals || {};\n' + js
      : addWith('locals || {}', '\n' + js, globals)) + ';'
    + 'return buf.join("");';
  return {body: body, dependencies: parser.dependencies};
}

/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `str` is not set, the file specified in `options.filename` will be read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @param {Object} options
 * @param {String=} str
 * @return {Function}
 * @api private
 */
function handleTemplateCache (options, str) {
  var key = options.filename;
  if (options.cache && exports.cache[key]) {
    return exports.cache[key];
  } else {
    if (str === undefined) str = fs.readFileSync(options.filename, 'utf8');
    var templ = exports.compile(str, options);
    if (options.cache) exports.cache[key] = templ;
    return templ;
  }
}

/**
 * Compile a `Function` representation of the given jade `str`.
 *
 * Options:
 *
 *   - `compileDebug` when `false` debugging code is stripped from the compiled
       template, when it is explicitly `true`, the source code is included in
       the compiled template for better accuracy.
 *   - `filename` used to improve errors when `compileDebug` is not `false` and to resolve imports/extends
 *
 * @param {String} str
 * @param {Options} options
 * @return {Function}
 * @api public
 */

exports.compile = function(str, options){
  var options = options || {}
    , filename = options.filename
      ? utils.stringify(options.filename)
      : 'undefined'
    , fn;

  str = String(str);

  var parsed = parse(str, options);
  if (options.compileDebug !== false) {
    fn = [
        'var jade_debug = [ new jade.DebugItem( 1, ' + filename + ' ) ];'
      , 'try {'
      , parsed.body
      , '} catch (err) {'
      , '  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno' + (options.compileDebug === true ? ',' + utils.stringify(str) : '') + ');'
      , '}'
    ].join('\n');
  } else {
    fn = parsed.body;
  }
  fn = new Function('locals, jade', fn)
  var res = function(locals){ return fn(locals, Object.create(runtime)) };
  if (options.client) {
    res.toString = function () {
      var err = new Error('The `client` option is deprecated, use the `jade.compileClient` method instead');
      err.name = 'Warning';
      console.error(err.stack || /* istanbul ignore next */ err.message);
      return exports.compileClient(str, options);
    };
  }
  res.dependencies = parsed.dependencies;
  return res;
};

/**
 * Compile a JavaScript source representation of the given jade `str`.
 *
 * Options:
 *
 *   - `compileDebug` When it is `true`, the source code is included in
 *     the compiled template for better error messages.
 *   - `filename` used to improve errors when `compileDebug` is not `true` and to resolve imports/extends
 *   - `name` the name of the resulting function (defaults to "template")
 *
 * @param {String} str
 * @param {Options} options
 * @return {Object}
 * @api public
 */

exports.compileClientWithDependenciesTracked = function(str, options){
  var options = options || {};
  var name = options.name || 'template';
  var filename = options.filename ? utils.stringify(options.filename) : 'undefined';
  var fn;

  str = String(str);
  options.compileDebug = options.compileDebug ? true : false;
  var parsed = parse(str, options);
  if (options.compileDebug) {
    fn = [
        'var jade_debug = [ new jade.DebugItem( 1, ' + filename + ' ) ];'
      , 'try {'
      , parsed.body
      , '} catch (err) {'
      , '  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ' + utils.stringify(str) + ');'
      , '}'
    ].join('\n');
  } else {
    fn = parsed.body;
  }

  return {body: 'function ' + name + '(locals) {\n' + fn + '\n}', dependencies: parsed.dependencies};
};

/**
 * Compile a JavaScript source representation of the given jade `str`.
 *
 * Options:
 *
 *   - `compileDebug` When it is `true`, the source code is included in
 *     the compiled template for better error messages.
 *   - `filename` used to improve errors when `compileDebug` is not `true` and to resolve imports/extends
 *   - `name` the name of the resulting function (defaults to "template")
 *
 * @param {String} str
 * @param {Options} options
 * @return {String}
 * @api public
 */
exports.compileClient = function (str, options) {
  return exports.compileClientWithDependenciesTracked(str, options).body;
};

/**
 * Compile a `Function` representation of the given jade file.
 *
 * Options:
 *
 *   - `compileDebug` when `false` debugging code is stripped from the compiled
       template, when it is explicitly `true`, the source code is included in
       the compiled template for better accuracy.
 *
 * @param {String} path
 * @param {Options} options
 * @return {Function}
 * @api public
 */
exports.compileFile = function (path, options) {
  options = options || {};
  options.filename = path;
  return handleTemplateCache(options);
};

/**
 * Render the given `str` of jade.
 *
 * Options:
 *
 *   - `cache` enable template caching
 *   - `filename` filename required for `include` / `extends` and caching
 *
 * @param {String} str
 * @param {Object|Function} options or fn
 * @param {Function|undefined} fn
 * @returns {String}
 * @api public
 */

exports.render = function(str, options, fn){
  // support callback API
  if ('function' == typeof options) {
    fn = options, options = undefined;
  }
  if (typeof fn === 'function') {
    var res
    try {
      res = exports.render(str, options);
    } catch (ex) {
      return fn(ex);
    }
    return fn(null, res);
  }

  options = options || {};

  // cache requires .filename
  if (options.cache && !options.filename) {
    throw new Error('the "filename" option is required for caching');
  }

  return handleTemplateCache(options, str)(options);
};

/**
 * Render a Jade file at the given `path`.
 *
 * @param {String} path
 * @param {Object|Function} options or callback
 * @param {Function|undefined} fn
 * @returns {String}
 * @api public
 */

exports.renderFile = function(path, options, fn){
  // support callback API
  if ('function' == typeof options) {
    fn = options, options = undefined;
  }
  if (typeof fn === 'function') {
    var res
    try {
      res = exports.renderFile(path, options);
    } catch (ex) {
      return fn(ex);
    }
    return fn(null, res);
  }

  options = options || {};

  options.filename = path;
  return handleTemplateCache(options)(options);
};


/**
 * Compile a Jade file at the given `path` for use on the client.
 *
 * @param {String} path
 * @param {Object} options
 * @returns {String}
 * @api public
 */

exports.compileFileClient = function(path, options){
  var key = path + ':client';
  options = options || {};

  options.filename = path;

  if (options.cache && exports.cache[key]) {
    return exports.cache[key];
  }

  var str = fs.readFileSync(options.filename, 'utf8');
  var out = exports.compileClient(str, options);
  if (options.cache) exports.cache[key] = out;
  return out;
};

/**
 * Express support.
 */

exports.__express = function(path, options, fn) {
  if(options.compileDebug == undefined && process.env.NODE_ENV === 'production') {
    options.compileDebug = false;
  }
  exports.renderFile(path, options, fn);
}

}).call(this,require('_process'))
},{"./compiler":2,"./doctypes":3,"./filters":4,"./lexer":6,"./nodes":16,"./parser":23,"./runtime":24,"./utils":25,"_process":28,"fs":26,"void-elements":34,"with":35}],2:[function(require,module,exports){
'use strict';

var nodes = require('./nodes');
var filters = require('./filters');
var doctypes = require('./doctypes');
var runtime = require('./runtime');
var utils = require('./utils');
var selfClosing = require('void-elements');
var parseJSExpression = require('character-parser').parseMax;
var constantinople = require('constantinople');

function isConstant(src) {
  return constantinople(src, {jade: runtime, 'jade_interp': undefined});
}
function toConstant(src) {
  return constantinople.toConstant(src, {jade: runtime, 'jade_interp': undefined});
}
function errorAtNode(node, error) {
  error.line = node.line;
  error.filename = node.filename;
  return error;
}

/**
 * Initialize `Compiler` with the given `node`.
 *
 * @param {Node} node
 * @param {Object} options
 * @api public
 */

var Compiler = module.exports = function Compiler(node, options) {
  this.options = options = options || {};
  this.node = node;
  this.hasCompiledDoctype = false;
  this.hasCompiledTag = false;
  this.pp = options.pretty || false;
  if (this.pp && typeof this.pp !== 'string') {
    this.pp = '  ';
  }
  this.debug = false !== options.compileDebug;
  this.indents = 0;
  this.parentIndents = 0;
  this.terse = false;
  this.mixins = {};
  this.dynamicMixins = false;
  if (options.doctype) this.setDoctype(options.doctype);
};

/**
 * Compiler prototype.
 */

Compiler.prototype = {

  /**
   * Compile parse tree to JavaScript.
   *
   * @api public
   */

  compile: function(){
    this.buf = [];
    if (this.pp) this.buf.push("var jade_indent = [];");
    this.lastBufferedIdx = -1;
    this.visit(this.node);
    if (!this.dynamicMixins) {
      // if there are no dynamic mixins we can remove any un-used mixins
      var mixinNames = Object.keys(this.mixins);
      for (var i = 0; i < mixinNames.length; i++) {
        var mixin = this.mixins[mixinNames[i]];
        if (!mixin.used) {
          for (var x = 0; x < mixin.instances.length; x++) {
            for (var y = mixin.instances[x].start; y < mixin.instances[x].end; y++) {
              this.buf[y] = '';
            }
          }
        }
      }
    }
    return this.buf.join('\n');
  },

  /**
   * Sets the default doctype `name`. Sets terse mode to `true` when
   * html 5 is used, causing self-closing tags to end with ">" vs "/>",
   * and boolean attributes are not mirrored.
   *
   * @param {string} name
   * @api public
   */

  setDoctype: function(name){
    this.doctype = doctypes[name.toLowerCase()] || '<!DOCTYPE ' + name + '>';
    this.terse = this.doctype.toLowerCase() == '<!doctype html>';
    this.xml = 0 == this.doctype.indexOf('<?xml');
  },

  /**
   * Buffer the given `str` exactly as is or with interpolation
   *
   * @param {String} str
   * @param {Boolean} interpolate
   * @api public
   */

  buffer: function (str, interpolate) {
    var self = this;
    if (interpolate) {
      var match = /(\\)?([#!]){((?:.|\n)*)$/.exec(str);
      if (match) {
        this.buffer(str.substr(0, match.index), false);
        if (match[1]) { // escape
          this.buffer(match[2] + '{', false);
          this.buffer(match[3], true);
          return;
        } else {
          var rest = match[3];
          var range = parseJSExpression(rest);
          var code = ('!' == match[2] ? '' : 'jade.escape') + "((jade_interp = " + range.src + ") == null ? '' : jade_interp)";
          this.bufferExpression(code);
          this.buffer(rest.substr(range.end + 1), true);
          return;
        }
      }
    }

    str = utils.stringify(str);
    str = str.substr(1, str.length - 2);

    if (this.lastBufferedIdx == this.buf.length) {
      if (this.lastBufferedType === 'code') this.lastBuffered += ' + "';
      this.lastBufferedType = 'text';
      this.lastBuffered += str;
      this.buf[this.lastBufferedIdx - 1] = 'buf.push(' + this.bufferStartChar + this.lastBuffered + '");'
    } else {
      this.buf.push('buf.push("' + str + '");');
      this.lastBufferedType = 'text';
      this.bufferStartChar = '"';
      this.lastBuffered = str;
      this.lastBufferedIdx = this.buf.length;
    }
  },

  /**
   * Buffer the given `src` so it is evaluated at run time
   *
   * @param {String} src
   * @api public
   */

  bufferExpression: function (src) {
    if (isConstant(src)) {
      return this.buffer(toConstant(src) + '', false)
    }
    if (this.lastBufferedIdx == this.buf.length) {
      if (this.lastBufferedType === 'text') this.lastBuffered += '"';
      this.lastBufferedType = 'code';
      this.lastBuffered += ' + (' + src + ')';
      this.buf[this.lastBufferedIdx - 1] = 'buf.push(' + this.bufferStartChar + this.lastBuffered + ');'
    } else {
      this.buf.push('buf.push(' + src + ');');
      this.lastBufferedType = 'code';
      this.bufferStartChar = '';
      this.lastBuffered = '(' + src + ')';
      this.lastBufferedIdx = this.buf.length;
    }
  },

  /**
   * Buffer an indent based on the current `indent`
   * property and an additional `offset`.
   *
   * @param {Number} offset
   * @param {Boolean} newline
   * @api public
   */

  prettyIndent: function(offset, newline){
    offset = offset || 0;
    newline = newline ? '\n' : '';
    this.buffer(newline + Array(this.indents + offset).join(this.pp));
    if (this.parentIndents)
      this.buf.push("buf.push.apply(buf, jade_indent);");
  },

  /**
   * Visit `node`.
   *
   * @param {Node} node
   * @api public
   */

  visit: function(node){
    var debug = this.debug;

    if (debug) {
      this.buf.push('jade_debug.unshift(new jade.DebugItem( ' + node.line
        + ', ' + (node.filename
          ? utils.stringify(node.filename)
          : 'jade_debug[0].filename')
        + ' ));');
    }

    // Massive hack to fix our context
    // stack for - else[ if] etc
    if (false === node.debug && this.debug) {
      this.buf.pop();
      this.buf.pop();
    }

    this.visitNode(node);

    if (debug) this.buf.push('jade_debug.shift();');
  },

  /**
   * Visit `node`.
   *
   * @param {Node} node
   * @api public
   */

  visitNode: function(node){
    return this['visit' + node.type](node);
  },

  /**
   * Visit case `node`.
   *
   * @param {Literal} node
   * @api public
   */

  visitCase: function(node){
    var _ = this.withinCase;
    this.withinCase = true;
    this.buf.push('switch (' + node.expr + '){');
    this.visit(node.block);
    this.buf.push('}');
    this.withinCase = _;
  },

  /**
   * Visit when `node`.
   *
   * @param {Literal} node
   * @api public
   */

  visitWhen: function(node){
    if ('default' == node.expr) {
      this.buf.push('default:');
    } else {
      this.buf.push('case ' + node.expr + ':');
    }
    if (node.block) {
      this.visit(node.block);
      this.buf.push('  break;');
    }
  },

  /**
   * Visit literal `node`.
   *
   * @param {Literal} node
   * @api public
   */

  visitLiteral: function(node){
    this.buffer(node.str);
  },

  /**
   * Visit all nodes in `block`.
   *
   * @param {Block} block
   * @api public
   */

  visitBlock: function(block){
    var len = block.nodes.length
      , escape = this.escape
      , pp = this.pp

    // Pretty print multi-line text
    if (pp && len > 1 && !escape && block.nodes[0].isText && block.nodes[1].isText)
      this.prettyIndent(1, true);

    for (var i = 0; i < len; ++i) {
      // Pretty print text
      if (pp && i > 0 && !escape && block.nodes[i].isText && block.nodes[i-1].isText)
        this.prettyIndent(1, false);

      this.visit(block.nodes[i]);
      // Multiple text nodes are separated by newlines
      if (block.nodes[i+1] && block.nodes[i].isText && block.nodes[i+1].isText)
        this.buffer('\n');
    }
  },

  /**
   * Visit a mixin's `block` keyword.
   *
   * @param {MixinBlock} block
   * @api public
   */

  visitMixinBlock: function(block){
    if (this.pp) this.buf.push("jade_indent.push('" + Array(this.indents + 1).join(this.pp) + "');");
    this.buf.push('block && block();');
    if (this.pp) this.buf.push("jade_indent.pop();");
  },

  /**
   * Visit `doctype`. Sets terse mode to `true` when html 5
   * is used, causing self-closing tags to end with ">" vs "/>",
   * and boolean attributes are not mirrored.
   *
   * @param {Doctype} doctype
   * @api public
   */

  visitDoctype: function(doctype){
    if (doctype && (doctype.val || !this.doctype)) {
      this.setDoctype(doctype.val || 'default');
    }

    if (this.doctype) this.buffer(this.doctype);
    this.hasCompiledDoctype = true;
  },

  /**
   * Visit `mixin`, generating a function that
   * may be called within the template.
   *
   * @param {Mixin} mixin
   * @api public
   */

  visitMixin: function(mixin){
    var name = 'jade_mixins[';
    var args = mixin.args || '';
    var block = mixin.block;
    var attrs = mixin.attrs;
    var attrsBlocks = mixin.attributeBlocks.slice();
    var pp = this.pp;
    var dynamic = mixin.name[0]==='#';
    var key = mixin.name;
    if (dynamic) this.dynamicMixins = true;
    name += (dynamic ? mixin.name.substr(2,mixin.name.length-3):'"'+mixin.name+'"')+']';

    this.mixins[key] = this.mixins[key] || {used: false, instances: []};
    if (mixin.call) {
      this.mixins[key].used = true;
      if (pp) this.buf.push("jade_indent.push('" + Array(this.indents + 1).join(pp) + "');")
      if (block || attrs.length || attrsBlocks.length) {

        this.buf.push(name + '.call({');

        if (block) {
          this.buf.push('block: function(){');

          // Render block with no indents, dynamically added when rendered
          this.parentIndents++;
          var _indents = this.indents;
          this.indents = 0;
          this.visit(mixin.block);
          this.indents = _indents;
          this.parentIndents--;

          if (attrs.length || attrsBlocks.length) {
            this.buf.push('},');
          } else {
            this.buf.push('}');
          }
        }

        if (attrsBlocks.length) {
          if (attrs.length) {
            var val = this.attrs(attrs);
            attrsBlocks.unshift(val);
          }
          this.buf.push('attributes: jade.merge([' + attrsBlocks.join(',') + '])');
        } else if (attrs.length) {
          var val = this.attrs(attrs);
          this.buf.push('attributes: ' + val);
        }

        if (args) {
          this.buf.push('}, ' + args + ');');
        } else {
          this.buf.push('});');
        }

      } else {
        this.buf.push(name + '(' + args + ');');
      }
      if (pp) this.buf.push("jade_indent.pop();")
    } else {
      var mixin_start = this.buf.length;
      args = args ? args.split(',') : [];
      var rest;
      if (args.length && /^\.\.\./.test(args[args.length - 1].trim())) {
        rest = args.pop().trim().replace(/^\.\.\./, '');
      }
      // we need use jade_interp here for v8: https://code.google.com/p/v8/issues/detail?id=4165
      // once fixed, use this: this.buf.push(name + ' = function(' + args.join(',') + '){');
      this.buf.push(name + ' = jade_interp = function(' + args.join(',') + '){');
      this.buf.push('var block = (this && this.block), attributes = (this && this.attributes) || {};');
      if (rest) {
        this.buf.push('var ' + rest + ' = [];');
        this.buf.push('for (jade_interp = ' + args.length + '; jade_interp < arguments.length; jade_interp++) {');
        this.buf.push('  ' + rest + '.push(arguments[jade_interp]);');
        this.buf.push('}');
      }
      this.parentIndents++;
      this.visit(block);
      this.parentIndents--;
      this.buf.push('};');
      var mixin_end = this.buf.length;
      this.mixins[key].instances.push({start: mixin_start, end: mixin_end});
    }
  },

  /**
   * Visit `tag` buffering tag markup, generating
   * attributes, visiting the `tag`'s code and block.
   *
   * @param {Tag} tag
   * @api public
   */

  visitTag: function(tag){
    this.indents++;
    var name = tag.name
      , pp = this.pp
      , self = this;

    function bufferName() {
      if (tag.buffer) self.bufferExpression(name);
      else self.buffer(name);
    }

    if ('pre' == tag.name) this.escape = true;

    if (!this.hasCompiledTag) {
      if (!this.hasCompiledDoctype && 'html' == name) {
        this.visitDoctype();
      }
      this.hasCompiledTag = true;
    }

    // pretty print
    if (pp && !tag.isInline())
      this.prettyIndent(0, true);

    if (tag.selfClosing || (!this.xml && selfClosing[tag.name])) {
      this.buffer('<');
      bufferName();
      this.visitAttributes(tag.attrs, tag.attributeBlocks.slice());
      this.terse
        ? this.buffer('>')
        : this.buffer('/>');
      // if it is non-empty throw an error
      if (tag.block &&
          !(tag.block.type === 'Block' && tag.block.nodes.length === 0) &&
          tag.block.nodes.some(function (tag) {
            return tag.type !== 'Text' || !/^\s*$/.test(tag.val)
          })) {
        throw errorAtNode(tag, new Error(name + ' is self closing and should not have content.'));
      }
    } else {
      // Optimize attributes buffering
      this.buffer('<');
      bufferName();
      this.visitAttributes(tag.attrs, tag.attributeBlocks.slice());
      this.buffer('>');
      if (tag.code) this.visitCode(tag.code);
      this.visit(tag.block);

      // pretty print
      if (pp && !tag.isInline() && 'pre' != tag.name && !tag.canInline())
        this.prettyIndent(0, true);

      this.buffer('</');
      bufferName();
      this.buffer('>');
    }

    if ('pre' == tag.name) this.escape = false;

    this.indents--;
  },

  /**
   * Visit `filter`, throwing when the filter does not exist.
   *
   * @param {Filter} filter
   * @api public
   */

  visitFilter: function(filter){
    var text = filter.block.nodes.map(
      function(node){ return node.val; }
    ).join('\n');
    filter.attrs.filename = this.options.filename;
    try {
      this.buffer(filters(filter.name, text, filter.attrs), true);
    } catch (err) {
      throw errorAtNode(filter, err);
    }
  },

  /**
   * Visit `text` node.
   *
   * @param {Text} text
   * @api public
   */

  visitText: function(text){
    this.buffer(text.val, true);
  },

  /**
   * Visit a `comment`, only buffering when the buffer flag is set.
   *
   * @param {Comment} comment
   * @api public
   */

  visitComment: function(comment){
    if (!comment.buffer) return;
    if (this.pp) this.prettyIndent(1, true);
    this.buffer('<!--' + comment.val + '-->');
  },

  /**
   * Visit a `BlockComment`.
   *
   * @param {Comment} comment
   * @api public
   */

  visitBlockComment: function(comment){
    if (!comment.buffer) return;
    if (this.pp) this.prettyIndent(1, true);
    this.buffer('<!--' + comment.val);
    this.visit(comment.block);
    if (this.pp) this.prettyIndent(1, true);
    this.buffer('-->');
  },

  /**
   * Visit `code`, respecting buffer / escape flags.
   * If the code is followed by a block, wrap it in
   * a self-calling function.
   *
   * @param {Code} code
   * @api public
   */

  visitCode: function(code){
    // Wrap code blocks with {}.
    // we only wrap unbuffered code blocks ATM
    // since they are usually flow control

    // Buffer code
    if (code.buffer) {
      var val = code.val.trim();
      val = 'null == (jade_interp = '+val+') ? "" : jade_interp';
      if (code.escape) val = 'jade.escape(' + val + ')';
      this.bufferExpression(val);
    } else {
      this.buf.push(code.val);
    }

    // Block support
    if (code.block) {
      if (!code.buffer) this.buf.push('{');
      this.visit(code.block);
      if (!code.buffer) this.buf.push('}');
    }
  },

  /**
   * Visit `each` block.
   *
   * @param {Each} each
   * @api public
   */

  visitEach: function(each){
    this.buf.push(''
      + '// iterate ' + each.obj + '\n'
      + ';(function(){\n'
      + '  var $$obj = ' + each.obj + ';\n'
      + '  if (\'number\' == typeof $$obj.length) {\n');

    if (each.alternative) {
      this.buf.push('  if ($$obj.length) {');
    }

    this.buf.push(''
      + '    for (var ' + each.key + ' = 0, $$l = $$obj.length; ' + each.key + ' < $$l; ' + each.key + '++) {\n'
      + '      var ' + each.val + ' = $$obj[' + each.key + '];\n');

    this.visit(each.block);

    this.buf.push('    }\n');

    if (each.alternative) {
      this.buf.push('  } else {');
      this.visit(each.alternative);
      this.buf.push('  }');
    }

    this.buf.push(''
      + '  } else {\n'
      + '    var $$l = 0;\n'
      + '    for (var ' + each.key + ' in $$obj) {\n'
      + '      $$l++;'
      + '      var ' + each.val + ' = $$obj[' + each.key + '];\n');

    this.visit(each.block);

    this.buf.push('    }\n');
    if (each.alternative) {
      this.buf.push('    if ($$l === 0) {');
      this.visit(each.alternative);
      this.buf.push('    }');
    }
    this.buf.push('  }\n}).call(this);\n');
  },

  /**
   * Visit `attrs`.
   *
   * @param {Array} attrs
   * @api public
   */

  visitAttributes: function(attrs, attributeBlocks){
    if (attributeBlocks.length) {
      if (attrs.length) {
        var val = this.attrs(attrs);
        attributeBlocks.unshift(val);
      }
      this.bufferExpression('jade.attrs(jade.merge([' + attributeBlocks.join(',') + ']), ' + utils.stringify(this.terse) + ')');
    } else if (attrs.length) {
      this.attrs(attrs, true);
    }
  },

  /**
   * Compile attributes.
   */

  attrs: function(attrs, buffer){
    var buf = [];
    var classes = [];
    var classEscaping = [];

    attrs.forEach(function(attr){
      var key = attr.name;
      var escaped = attr.escaped;

      if (key === 'class') {
        classes.push(attr.val);
        classEscaping.push(attr.escaped);
      } else if (isConstant(attr.val)) {
        if (buffer) {
          this.buffer(runtime.attr(key, toConstant(attr.val), escaped, this.terse));
        } else {
          var val = toConstant(attr.val);
          if (key === 'style') val = runtime.style(val);
          if (escaped && !(key.indexOf('data') === 0 && typeof val !== 'string')) {
            val = runtime.escape(val);
          }
          buf.push(utils.stringify(key) + ': ' + utils.stringify(val));
        }
      } else {
        if (buffer) {
          this.bufferExpression('jade.attr("' + key + '", ' + attr.val + ', ' + utils.stringify(escaped) + ', ' + utils.stringify(this.terse) + ')');
        } else {
          var val = attr.val;
          if (key === 'style') {
            val = 'jade.style(' + val + ')';
          }
          if (escaped && !(key.indexOf('data') === 0)) {
            val = 'jade.escape(' + val + ')';
          } else if (escaped) {
            val = '(typeof (jade_interp = ' + val + ') == "string" ? jade.escape(jade_interp) : jade_interp)';
          }
          buf.push(utils.stringify(key) + ': ' + val);
        }
      }
    }.bind(this));
    if (buffer) {
      if (classes.every(isConstant)) {
        this.buffer(runtime.cls(classes.map(toConstant), classEscaping));
      } else {
        this.bufferExpression('jade.cls([' + classes.join(',') + '], ' + utils.stringify(classEscaping) + ')');
      }
    } else if (classes.length) {
      if (classes.every(isConstant)) {
        classes = utils.stringify(runtime.joinClasses(classes.map(toConstant).map(runtime.joinClasses).map(function (cls, i) {
          return classEscaping[i] ? runtime.escape(cls) : cls;
        })));
      } else {
        classes = '(jade_interp = ' + utils.stringify(classEscaping) + ',' +
          ' jade.joinClasses([' + classes.join(',') + '].map(jade.joinClasses).map(function (cls, i) {' +
          '   return jade_interp[i] ? jade.escape(cls) : cls' +
          ' }))' +
          ')';
      }
      if (classes.length)
        buf.push('"class": ' + classes);
    }
    return '{' + buf.join(',') + '}';
  }
};

},{"./doctypes":3,"./filters":4,"./nodes":16,"./runtime":24,"./utils":25,"character-parser":29,"constantinople":30,"void-elements":34}],3:[function(require,module,exports){
'use strict';

module.exports = {
    'default': '<!DOCTYPE html>'
  , 'xml': '<?xml version="1.0" encoding="utf-8" ?>'
  , 'transitional': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
  , 'strict': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
  , 'frameset': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'
  , '1.1': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'
  , 'basic': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">'
  , 'mobile': '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">'
};
},{}],4:[function(require,module,exports){
'use strict';

module.exports = filter;
function filter(name, str, options) {
  if (typeof filter[name] === 'function') {
    return filter[name](str, options);
  } else {
    throw new Error('unknown filter ":' + name + '"');
  }
}

},{}],5:[function(require,module,exports){
'use strict';

module.exports = [
    'a'
  , 'abbr'
  , 'acronym'
  , 'b'
  , 'br'
  , 'code'
  , 'em'
  , 'font'
  , 'i'
  , 'img'
  , 'ins'
  , 'kbd'
  , 'map'
  , 'samp'
  , 'small'
  , 'span'
  , 'strong'
  , 'sub'
  , 'sup'
];
},{}],6:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var characterParser = require('character-parser');


/**
 * Initialize `Lexer` with the given `str`.
 *
 * @param {String} str
 * @param {String} filename
 * @api private
 */

var Lexer = module.exports = function Lexer(str, filename) {
  this.input = str.replace(/\r\n|\r/g, '\n');
  this.filename = filename;
  this.deferredTokens = [];
  this.lastIndents = 0;
  this.lineno = 1;
  this.stash = [];
  this.indentStack = [];
  this.indentRe = null;
  this.pipeless = false;
};


function assertExpression(exp) {
  //this verifies that a JavaScript expression is valid
  Function('', 'return (' + exp + ')');
}
function assertNestingCorrect(exp) {
  //this verifies that code is properly nested, but allows
  //invalid JavaScript such as the contents of `attributes`
  var res = characterParser(exp)
  if (res.isNesting()) {
    throw new Error('Nesting must match on expression `' + exp + '`')
  }
}

/**
 * Lexer prototype.
 */

Lexer.prototype = {

  /**
   * Construct a token with the given `type` and `val`.
   *
   * @param {String} type
   * @param {String} val
   * @return {Object}
   * @api private
   */

  tok: function(type, val){
    return {
        type: type
      , line: this.lineno
      , val: val
    }
  },

  /**
   * Consume the given `len` of input.
   *
   * @param {Number} len
   * @api private
   */

  consume: function(len){
    this.input = this.input.substr(len);
  },

  /**
   * Scan for `type` with the given `regexp`.
   *
   * @param {String} type
   * @param {RegExp} regexp
   * @return {Object}
   * @api private
   */

  scan: function(regexp, type){
    var captures;
    if (captures = regexp.exec(this.input)) {
      this.consume(captures[0].length);
      return this.tok(type, captures[1]);
    }
  },

  /**
   * Defer the given `tok`.
   *
   * @param {Object} tok
   * @api private
   */

  defer: function(tok){
    this.deferredTokens.push(tok);
  },

  /**
   * Lookahead `n` tokens.
   *
   * @param {Number} n
   * @return {Object}
   * @api private
   */

  lookahead: function(n){
    var fetch = n - this.stash.length;
    while (fetch-- > 0) this.stash.push(this.next());
    return this.stash[--n];
  },

  /**
   * Return the indexOf `(` or `{` or `[` / `)` or `}` or `]` delimiters.
   *
   * @return {Number}
   * @api private
   */

  bracketExpression: function(skip){
    skip = skip || 0;
    var start = this.input[skip];
    if (start != '(' && start != '{' && start != '[') throw new Error('unrecognized start character');
    var end = ({'(': ')', '{': '}', '[': ']'})[start];
    var range = characterParser.parseMax(this.input, {start: skip + 1});
    if (this.input[range.end] !== end) throw new Error('start character ' + start + ' does not match end character ' + this.input[range.end]);
    return range;
  },

  /**
   * Stashed token.
   */

  stashed: function() {
    return this.stash.length
      && this.stash.shift();
  },

  /**
   * Deferred token.
   */

  deferred: function() {
    return this.deferredTokens.length
      && this.deferredTokens.shift();
  },

  /**
   * end-of-source.
   */

  eos: function() {
    if (this.input.length) return;
    if (this.indentStack.length) {
      this.indentStack.shift();
      return this.tok('outdent');
    } else {
      return this.tok('eos');
    }
  },

  /**
   * Blank line.
   */

  blank: function() {
    var captures;
    if (captures = /^\n *\n/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      ++this.lineno;
      if (this.pipeless) return this.tok('text', '');
      return this.next();
    }
  },

  /**
   * Comment.
   */

  comment: function() {
    var captures;
    if (captures = /^\/\/(-)?([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('comment', captures[2]);
      tok.buffer = '-' != captures[1];
      this.pipeless = true;
      return tok;
    }
  },

  /**
   * Interpolated tag.
   */

  interpolation: function() {
    if (/^#\{/.test(this.input)) {
      var match = this.bracketExpression(1);

      this.consume(match.end + 1);
      return this.tok('interpolation', match.src);
    }
  },

  /**
   * Tag.
   */

  tag: function() {
    var captures;
    if (captures = /^(\w[-:\w]*)(\/?)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok, name = captures[1];
      if (':' == name[name.length - 1]) {
        name = name.slice(0, -1);
        tok = this.tok('tag', name);
        this.defer(this.tok(':'));
        if (this.input[0] !== ' ') {
          console.warn('Warning: space required after `:` on line ' + this.lineno +
              ' of jade file "' + this.filename + '"');
        }
        while (' ' == this.input[0]) this.input = this.input.substr(1);
      } else {
        tok = this.tok('tag', name);
      }
      tok.selfClosing = !!captures[2];
      return tok;
    }
  },

  /**
   * Filter.
   */

  filter: function() {
    var tok = this.scan(/^:([\w\-]+)/, 'filter');
    if (tok) {
      this.pipeless = true;
      return tok;
    }
  },

  /**
   * Doctype.
   */

  doctype: function() {
    if (this.scan(/^!!! *([^\n]+)?/, 'doctype')) {
      throw new Error('`!!!` is deprecated, you must now use `doctype`');
    }
    var node = this.scan(/^(?:doctype) *([^\n]+)?/, 'doctype');
    if (node && node.val && node.val.trim() === '5') {
      throw new Error('`doctype 5` is deprecated, you must now use `doctype html`');
    }
    return node;
  },

  /**
   * Id.
   */

  id: function() {
    return this.scan(/^#([\w-]+)/, 'id');
  },

  /**
   * Class.
   */

  className: function() {
    return this.scan(/^\.([\w-]+)/, 'class');
  },

  /**
   * Text.
   */

  text: function() {
    return this.scan(/^(?:\| ?| )([^\n]+)/, 'text') ||
      this.scan(/^\|?( )/, 'text') ||
      this.scan(/^(<[^\n]*)/, 'text');
  },

  textFail: function () {
    var tok;
    if (tok = this.scan(/^([^\.\n][^\n]+)/, 'text')) {
      console.warn('Warning: missing space before text for line ' + this.lineno +
          ' of jade file "' + this.filename + '"');
      return tok;
    }
  },

  /**
   * Dot.
   */

  dot: function() {
    var match;
    if (match = this.scan(/^\./, 'dot')) {
      this.pipeless = true;
      return match;
    }
  },

  /**
   * Extends.
   */

  "extends": function() {
    return this.scan(/^extends? +([^\n]+)/, 'extends');
  },

  /**
   * Block prepend.
   */

  prepend: function() {
    var captures;
    if (captures = /^prepend +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = 'prepend'
        , name = captures[1]
        , tok = this.tok('block', name);
      tok.mode = mode;
      return tok;
    }
  },

  /**
   * Block append.
   */

  append: function() {
    var captures;
    if (captures = /^append +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = 'append'
        , name = captures[1]
        , tok = this.tok('block', name);
      tok.mode = mode;
      return tok;
    }
  },

  /**
   * Block.
   */

  block: function() {
    var captures;
    if (captures = /^block\b *(?:(prepend|append) +)?([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var mode = captures[1] || 'replace'
        , name = captures[2]
        , tok = this.tok('block', name);

      tok.mode = mode;
      return tok;
    }
  },

  /**
   * Mixin Block.
   */

  mixinBlock: function() {
    var captures;
    if (captures = /^block[ \t]*(\n|$)/.exec(this.input)) {
      this.consume(captures[0].length - captures[1].length);
      return this.tok('mixin-block');
    }
  },

  /**
   * Yield.
   */

  'yield': function() {
    return this.scan(/^yield */, 'yield');
  },

  /**
   * Include.
   */

  include: function() {
    return this.scan(/^include +([^\n]+)/, 'include');
  },

  /**
   * Include with filter
   */

  includeFiltered: function() {
    var captures;
    if (captures = /^include:([\w\-]+)([\( ])/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      var filter = captures[1];
      var attrs = captures[2] === '(' ? this.attrs() : null;
      if (!(captures[2] === ' ' || this.input[0] === ' ')) {
        throw new Error('expected space after include:filter but got ' + utils.stringify(this.input[0]));
      }
      captures = /^ *([^\n]+)/.exec(this.input);
      if (!captures || captures[1].trim() === '') {
        throw new Error('missing path for include:filter');
      }
      this.consume(captures[0].length);
      var path = captures[1];
      var tok = this.tok('include', path);
      tok.filter = filter;
      tok.attrs = attrs;
      return tok;
    }
  },

  /**
   * Case.
   */

  "case": function() {
    return this.scan(/^case +([^\n]+)/, 'case');
  },

  /**
   * When.
   */

  when: function() {
    return this.scan(/^when +([^:\n]+)/, 'when');
  },

  /**
   * Default.
   */

  "default": function() {
    return this.scan(/^default */, 'default');
  },

  /**
   * Call mixin.
   */

  call: function(){

    var tok, captures;
    if (captures = /^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)) {
      // try to consume simple or interpolated call
      if (captures[3]) {
        // simple call
        this.consume(captures[0].length);
        tok = this.tok('call', captures[3]);
      } else {
        // interpolated call
        var match = this.bracketExpression(2 + captures[1].length);
        this.consume(match.end + 1);
        assertExpression(match.src);
        tok = this.tok('call', '#{'+match.src+'}');
      }

      // Check for args (not attributes)
      if (captures = /^ *\(/.exec(this.input)) {
        var range = this.bracketExpression(captures[0].length - 1);
        if (!/^\s*[-\w]+ *=/.test(range.src)) { // not attributes
          this.consume(range.end + 1);
          tok.args = range.src;
        }
        if (tok.args) {
          assertExpression('[' + tok.args + ']');
        }
      }

      return tok;
    }
  },

  /**
   * Mixin.
   */

  mixin: function(){
    var captures;
    if (captures = /^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('mixin', captures[1]);
      tok.args = captures[2];
      return tok;
    }
  },

  /**
   * Conditional.
   */

  conditional: function() {
    var captures;
    if (captures = /^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)) {
      this.consume(captures[0].length);
      var type = captures[1]
      var js = captures[2];
      var isIf = false;
      var isElse = false;

      switch (type) {
        case 'if':
          assertExpression(js)
          js = 'if (' + js + ')';
          isIf = true;
          break;
        case 'unless':
          assertExpression(js)
          js = 'if (!(' + js + '))';
          isIf = true;
          break;
        case 'else if':
          assertExpression(js)
          js = 'else if (' + js + ')';
          isIf = true;
          isElse = true;
          break;
        case 'else':
          if (js && js.trim()) {
            throw new Error('`else` cannot have a condition, perhaps you meant `else if`');
          }
          js = 'else';
          isElse = true;
          break;
      }
      var tok = this.tok('code', js);
      tok.isElse = isElse;
      tok.isIf = isIf;
      tok.requiresBlock = true;
      return tok;
    }
  },

  /**
   * While.
   */

  "while": function() {
    var captures;
    if (captures = /^while +([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      assertExpression(captures[1])
      var tok = this.tok('code', 'while (' + captures[1] + ')');
      tok.requiresBlock = true;
      return tok;
    }
  },

  /**
   * Each.
   */

  each: function() {
    var captures;
    if (captures = /^(?:- *)?(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var tok = this.tok('each', captures[1]);
      tok.key = captures[2] || '$index';
      assertExpression(captures[3])
      tok.code = captures[3];
      return tok;
    }
  },

  /**
   * Code.
   */

  code: function() {
    var captures;
    if (captures = /^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)) {
      this.consume(captures[0].length);
      var flags = captures[1];
      captures[1] = captures[2];
      var tok = this.tok('code', captures[1]);
      tok.escape = flags.charAt(0) === '=';
      tok.buffer = flags.charAt(0) === '=' || flags.charAt(1) === '=';
      if (tok.buffer) assertExpression(captures[1])
      return tok;
    }
  },


  /**
   * Block code.
   */

  blockCode: function() {
    var captures;
    if (captures = /^-\n/.exec(this.input)) {
      this.consume(captures[0].length - 1);
      var tok = this.tok('blockCode');
      this.pipeless = true;
      return tok;
    }
  },

  /**
   * Attributes.
   */

  attrs: function() {
    if ('(' == this.input.charAt(0)) {
      var index = this.bracketExpression().end
        , str = this.input.substr(1, index-1)
        , tok = this.tok('attrs');

      assertNestingCorrect(str);

      var quote = '';
      var interpolate = function (attr) {
        return attr.replace(/(\\)?#\{(.+)/g, function(_, escape, expr){
          if (escape) return _;
          try {
            var range = characterParser.parseMax(expr);
            if (expr[range.end] !== '}') return _.substr(0, 2) + interpolate(_.substr(2));
            assertExpression(range.src)
            return quote + " + (" + range.src + ") + " + quote + interpolate(expr.substr(range.end + 1));
          } catch (ex) {
            return _.substr(0, 2) + interpolate(_.substr(2));
          }
        });
      }

      this.consume(index + 1);
      tok.attrs = [];

      var escapedAttr = true
      var key = '';
      var val = '';
      var interpolatable = '';
      var state = characterParser.defaultState();
      var loc = 'key';
      var isEndOfAttribute = function (i) {
        if (key.trim() === '') return false;
        if (i === str.length) return true;
        if (loc === 'key') {
          if (str[i] === ' ' || str[i] === '\n') {
            for (var x = i; x < str.length; x++) {
              if (str[x] != ' ' && str[x] != '\n') {
                if (str[x] === '=' || str[x] === '!' || str[x] === ',') return false;
                else return true;
              }
            }
          }
          return str[i] === ','
        } else if (loc === 'value' && !state.isNesting()) {
          try {
            assertExpression(val);
            if (str[i] === ' ' || str[i] === '\n') {
              for (var x = i; x < str.length; x++) {
                if (str[x] != ' ' && str[x] != '\n') {
                  if (characterParser.isPunctuator(str[x]) && str[x] != '"' && str[x] != "'") return false;
                  else return true;
                }
              }
            }
            return str[i] === ',';
          } catch (ex) {
            return false;
          }
        }
      }

      this.lineno += str.split("\n").length - 1;

      for (var i = 0; i <= str.length; i++) {
        if (isEndOfAttribute(i)) {
          val = val.trim();
          if (val) assertExpression(val)
          key = key.trim();
          key = key.replace(/^['"]|['"]$/g, '');
          tok.attrs.push({
            name: key,
            val: '' == val ? true : val,
            escaped: escapedAttr
          });
          key = val = '';
          loc = 'key';
          escapedAttr = false;
        } else {
          switch (loc) {
            case 'key-char':
              if (str[i] === quote) {
                loc = 'key';
                if (i + 1 < str.length && [' ', ',', '!', '=', '\n'].indexOf(str[i + 1]) === -1)
                  throw new Error('Unexpected character ' + str[i + 1] + ' expected ` `, `\\n`, `,`, `!` or `=`');
              } else {
                key += str[i];
              }
              break;
            case 'key':
              if (key === '' && (str[i] === '"' || str[i] === "'")) {
                loc = 'key-char';
                quote = str[i];
              } else if (str[i] === '!' || str[i] === '=') {
                escapedAttr = str[i] !== '!';
                if (str[i] === '!') i++;
                if (str[i] !== '=') throw new Error('Unexpected character ' + str[i] + ' expected `=`');
                loc = 'value';
                state = characterParser.defaultState();
              } else {
                key += str[i]
              }
              break;
            case 'value':
              state = characterParser.parseChar(str[i], state);
              if (state.isString()) {
                loc = 'string';
                quote = str[i];
                interpolatable = str[i];
              } else {
                val += str[i];
              }
              break;
            case 'string':
              state = characterParser.parseChar(str[i], state);
              interpolatable += str[i];
              if (!state.isString()) {
                loc = 'value';
                val += interpolate(interpolatable);
              }
              break;
          }
        }
      }

      if ('/' == this.input.charAt(0)) {
        this.consume(1);
        tok.selfClosing = true;
      }

      return tok;
    }
  },

  /**
   * &attributes block
   */
  attributesBlock: function () {
    var captures;
    if (/^&attributes\b/.test(this.input)) {
      this.consume(11);
      var args = this.bracketExpression();
      this.consume(args.end + 1);
      return this.tok('&attributes', args.src);
    }
  },

  /**
   * Indent | Outdent | Newline.
   */

  indent: function() {
    var captures, re;

    // established regexp
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    // determine regexp
    } else {
      // tabs
      re = /^\n(\t*) */;
      captures = re.exec(this.input);

      // spaces
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }

      // established
      if (captures && captures[1].length) this.indentRe = re;
    }

    if (captures) {
      var tok
        , indents = captures[1].length;

      ++this.lineno;
      this.consume(indents + 1);

      if (' ' == this.input[0] || '\t' == this.input[0]) {
        throw new Error('Invalid indentation, you can use tabs or spaces but not both');
      }

      // blank line
      if ('\n' == this.input[0]) {
        this.pipeless = false;
        return this.tok('newline');
      }

      // outdent
      if (this.indentStack.length && indents < this.indentStack[0]) {
        while (this.indentStack.length && this.indentStack[0] > indents) {
          this.stash.push(this.tok('outdent'));
          this.indentStack.shift();
        }
        tok = this.stash.pop();
      // indent
      } else if (indents && indents != this.indentStack[0]) {
        this.indentStack.unshift(indents);
        tok = this.tok('indent', indents);
      // newline
      } else {
        tok = this.tok('newline');
      }

      this.pipeless = false;
      return tok;
    }
  },

  /**
   * Pipe-less text consumed only when
   * pipeless is true;
   */

  pipelessText: function() {
    if (!this.pipeless) return;
    var captures, re;

    // established regexp
    if (this.indentRe) {
      captures = this.indentRe.exec(this.input);
    // determine regexp
    } else {
      // tabs
      re = /^\n(\t*) */;
      captures = re.exec(this.input);

      // spaces
      if (captures && !captures[1].length) {
        re = /^\n( *)/;
        captures = re.exec(this.input);
      }

      // established
      if (captures && captures[1].length) this.indentRe = re;
    }

    var indents = captures && captures[1].length;
    if (indents && (this.indentStack.length === 0 || indents > this.indentStack[0])) {
      var indent = captures[1];
      var line;
      var tokens = [];
      var isMatch;
      do {
        // text has `\n` as a prefix
        var i = this.input.substr(1).indexOf('\n');
        if (-1 == i) i = this.input.length - 1;
        var str = this.input.substr(1, i);
        isMatch = str.substr(0, indent.length) === indent || !str.trim();
        if (isMatch) {
          // consume test along with `\n` prefix if match
          this.consume(str.length + 1);
          ++this.lineno;
          tokens.push(str.substr(indent.length));
        }
      } while(this.input.length && isMatch);
      while (this.input.length === 0 && tokens[tokens.length - 1] === '') tokens.pop();
      return this.tok('pipeless-text', tokens);
    }
  },

  /**
   * ':'
   */

  colon: function() {
    var good = /^: +/.test(this.input);
    var res = this.scan(/^: */, ':');
    if (res && !good) {
      console.warn('Warning: space required after `:` on line ' + this.lineno +
          ' of jade file "' + this.filename + '"');
    }
    return res;
  },

  fail: function () {
    throw new Error('unexpected text ' + this.input.substr(0, 5));
  },

  /**
   * Return the next token object, or those
   * previously stashed by lookahead.
   *
   * @return {Object}
   * @api private
   */

  advance: function(){
    return this.stashed()
      || this.next();
  },

  /**
   * Return the next token object.
   *
   * @return {Object}
   * @api private
   */

  next: function() {
    return this.deferred()
      || this.blank()
      || this.eos()
      || this.pipelessText()
      || this.yield()
      || this.doctype()
      || this.interpolation()
      || this["case"]()
      || this.when()
      || this["default"]()
      || this["extends"]()
      || this.append()
      || this.prepend()
      || this.block()
      || this.mixinBlock()
      || this.include()
      || this.includeFiltered()
      || this.mixin()
      || this.call()
      || this.conditional()
      || this.each()
      || this["while"]()
      || this.tag()
      || this.filter()
      || this.blockCode()
      || this.code()
      || this.id()
      || this.className()
      || this.attrs()
      || this.attributesBlock()
      || this.indent()
      || this.text()
      || this.comment()
      || this.colon()
      || this.dot()
      || this.textFail()
      || this.fail();
  }
};

},{"./utils":25,"character-parser":29}],7:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Attrs` node.
 *
 * @api public
 */

var Attrs = module.exports = function Attrs() {
  this.attributeNames = [];
  this.attrs = [];
  this.attributeBlocks = [];
};

// Inherit from `Node`.
Attrs.prototype = Object.create(Node.prototype);
Attrs.prototype.constructor = Attrs;

Attrs.prototype.type = 'Attrs';

/**
 * Set attribute `name` to `val`, keep in mind these become
 * part of a raw js object literal, so to quote a value you must
 * '"quote me"', otherwise or example 'user.name' is literal JavaScript.
 *
 * @param {String} name
 * @param {String} val
 * @param {Boolean} escaped
 * @return {Tag} for chaining
 * @api public
 */

Attrs.prototype.setAttribute = function(name, val, escaped){
  if (name !== 'class' && this.attributeNames.indexOf(name) !== -1) {
    throw new Error('Duplicate attribute "' + name + '" is not allowed.');
  }
  this.attributeNames.push(name);
  this.attrs.push({ name: name, val: val, escaped: escaped });
  return this;
};

/**
 * Remove attribute `name` when present.
 *
 * @param {String} name
 * @api public
 */

Attrs.prototype.removeAttribute = function(name){
  var err = new Error('attrs.removeAttribute is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  for (var i = 0, len = this.attrs.length; i < len; ++i) {
    if (this.attrs[i] && this.attrs[i].name == name) {
      delete this.attrs[i];
    }
  }
};

/**
 * Get attribute value by `name`.
 *
 * @param {String} name
 * @return {String}
 * @api public
 */

Attrs.prototype.getAttribute = function(name){
  var err = new Error('attrs.getAttribute is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  for (var i = 0, len = this.attrs.length; i < len; ++i) {
    if (this.attrs[i] && this.attrs[i].name == name) {
      return this.attrs[i].val;
    }
  }
};

Attrs.prototype.addAttributes = function (src) {
  this.attributeBlocks.push(src);
};

},{"./node":20}],8:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `BlockComment` with the given `block`.
 *
 * @param {String} val
 * @param {Block} block
 * @param {Boolean} buffer
 * @api public
 */

var BlockComment = module.exports = function BlockComment(val, block, buffer) {
  this.block = block;
  this.val = val;
  this.buffer = buffer;
};

// Inherit from `Node`.
BlockComment.prototype = Object.create(Node.prototype);
BlockComment.prototype.constructor = BlockComment;

BlockComment.prototype.type = 'BlockComment';

},{"./node":20}],9:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a new `Block` with an optional `node`.
 *
 * @param {Node} node
 * @api public
 */

var Block = module.exports = function Block(node){
  this.nodes = [];
  if (node) this.push(node);
};

// Inherit from `Node`.
Block.prototype = Object.create(Node.prototype);
Block.prototype.constructor = Block;

Block.prototype.type = 'Block';

/**
 * Block flag.
 */

Block.prototype.isBlock = true;

/**
 * Replace the nodes in `other` with the nodes
 * in `this` block.
 *
 * @param {Block} other
 * @api private
 */

Block.prototype.replace = function(other){
  var err = new Error('block.replace is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  other.nodes = this.nodes;
};

/**
 * Push the given `node`.
 *
 * @param {Node} node
 * @return {Number}
 * @api public
 */

Block.prototype.push = function(node){
  return this.nodes.push(node);
};

/**
 * Check if this block is empty.
 *
 * @return {Boolean}
 * @api public
 */

Block.prototype.isEmpty = function(){
  return 0 == this.nodes.length;
};

/**
 * Unshift the given `node`.
 *
 * @param {Node} node
 * @return {Number}
 * @api public
 */

Block.prototype.unshift = function(node){
  return this.nodes.unshift(node);
};

/**
 * Return the "last" block, or the first `yield` node.
 *
 * @return {Block}
 * @api private
 */

Block.prototype.includeBlock = function(){
  var ret = this
    , node;

  for (var i = 0, len = this.nodes.length; i < len; ++i) {
    node = this.nodes[i];
    if (node.yield) return node;
    else if (node.textOnly) continue;
    else if (node.includeBlock) ret = node.includeBlock();
    else if (node.block && !node.block.isEmpty()) ret = node.block.includeBlock();
    if (ret.yield) return ret;
  }

  return ret;
};

/**
 * Return a clone of this block.
 *
 * @return {Block}
 * @api private
 */

Block.prototype.clone = function(){
  var err = new Error('block.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  var clone = new Block;
  for (var i = 0, len = this.nodes.length; i < len; ++i) {
    clone.push(this.nodes[i].clone());
  }
  return clone;
};

},{"./node":20}],10:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a new `Case` with `expr`.
 *
 * @param {String} expr
 * @api public
 */

var Case = exports = module.exports = function Case(expr, block){
  this.expr = expr;
  this.block = block;
};

// Inherit from `Node`.
Case.prototype = Object.create(Node.prototype);
Case.prototype.constructor = Case;

Case.prototype.type = 'Case';

var When = exports.When = function When(expr, block){
  this.expr = expr;
  this.block = block;
  this.debug = false;
};

// Inherit from `Node`.
When.prototype = Object.create(Node.prototype);
When.prototype.constructor = When;

When.prototype.type = 'When';

},{"./node":20}],11:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Code` node with the given code `val`.
 * Code may also be optionally buffered and escaped.
 *
 * @param {String} val
 * @param {Boolean} buffer
 * @param {Boolean} escape
 * @api public
 */

var Code = module.exports = function Code(val, buffer, escape) {
  this.val = val;
  this.buffer = buffer;
  this.escape = escape;
  if (val.match(/^ *else/)) this.debug = false;
};

// Inherit from `Node`.
Code.prototype = Object.create(Node.prototype);
Code.prototype.constructor = Code;

Code.prototype.type = 'Code'; // prevent the minifiers removing this
},{"./node":20}],12:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Comment` with the given `val`, optionally `buffer`,
 * otherwise the comment may render in the output.
 *
 * @param {String} val
 * @param {Boolean} buffer
 * @api public
 */

var Comment = module.exports = function Comment(val, buffer) {
  this.val = val;
  this.buffer = buffer;
};

// Inherit from `Node`.
Comment.prototype = Object.create(Node.prototype);
Comment.prototype.constructor = Comment;

Comment.prototype.type = 'Comment';

},{"./node":20}],13:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Doctype` with the given `val`. 
 *
 * @param {String} val
 * @api public
 */

var Doctype = module.exports = function Doctype(val) {
  this.val = val;
};

// Inherit from `Node`.
Doctype.prototype = Object.create(Node.prototype);
Doctype.prototype.constructor = Doctype;

Doctype.prototype.type = 'Doctype';

},{"./node":20}],14:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize an `Each` node, representing iteration
 *
 * @param {String} obj
 * @param {String} val
 * @param {String} key
 * @param {Block} block
 * @api public
 */

var Each = module.exports = function Each(obj, val, key, block) {
  this.obj = obj;
  this.val = val;
  this.key = key;
  this.block = block;
};

// Inherit from `Node`.
Each.prototype = Object.create(Node.prototype);
Each.prototype.constructor = Each;

Each.prototype.type = 'Each';

},{"./node":20}],15:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Filter` node with the given
 * filter `name` and `block`.
 *
 * @param {String} name
 * @param {Block|Node} block
 * @api public
 */

var Filter = module.exports = function Filter(name, block, attrs) {
  this.name = name;
  this.block = block;
  this.attrs = attrs;
};

// Inherit from `Node`.
Filter.prototype = Object.create(Node.prototype);
Filter.prototype.constructor = Filter;

Filter.prototype.type = 'Filter';

},{"./node":20}],16:[function(require,module,exports){
'use strict';

exports.Node = require('./node');
exports.Tag = require('./tag');
exports.Code = require('./code');
exports.Each = require('./each');
exports.Case = require('./case');
exports.Text = require('./text');
exports.Block = require('./block');
exports.MixinBlock = require('./mixin-block');
exports.Mixin = require('./mixin');
exports.Filter = require('./filter');
exports.Comment = require('./comment');
exports.Literal = require('./literal');
exports.BlockComment = require('./block-comment');
exports.Doctype = require('./doctype');

},{"./block":9,"./block-comment":8,"./case":10,"./code":11,"./comment":12,"./doctype":13,"./each":14,"./filter":15,"./literal":17,"./mixin":19,"./mixin-block":18,"./node":20,"./tag":21,"./text":22}],17:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Literal` node with the given `str.
 *
 * @param {String} str
 * @api public
 */

var Literal = module.exports = function Literal(str) {
  this.str = str;
};

// Inherit from `Node`.
Literal.prototype = Object.create(Node.prototype);
Literal.prototype.constructor = Literal;

Literal.prototype.type = 'Literal';

},{"./node":20}],18:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a new `Block` with an optional `node`.
 *
 * @param {Node} node
 * @api public
 */

var MixinBlock = module.exports = function MixinBlock(){};

// Inherit from `Node`.
MixinBlock.prototype = Object.create(Node.prototype);
MixinBlock.prototype.constructor = MixinBlock;

MixinBlock.prototype.type = 'MixinBlock';

},{"./node":20}],19:[function(require,module,exports){
'use strict';

var Attrs = require('./attrs');

/**
 * Initialize a new `Mixin` with `name` and `block`.
 *
 * @param {String} name
 * @param {String} args
 * @param {Block} block
 * @api public
 */

var Mixin = module.exports = function Mixin(name, args, block, call){
  Attrs.call(this);
  this.name = name;
  this.args = args;
  this.block = block;
  this.call = call;
};

// Inherit from `Attrs`.
Mixin.prototype = Object.create(Attrs.prototype);
Mixin.prototype.constructor = Mixin;

Mixin.prototype.type = 'Mixin';

},{"./attrs":7}],20:[function(require,module,exports){
'use strict';

var Node = module.exports = function Node(){};

/**
 * Clone this node (return itself)
 *
 * @return {Node}
 * @api private
 */

Node.prototype.clone = function(){
  var err = new Error('node.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);
  return this;
};

Node.prototype.type = '';

},{}],21:[function(require,module,exports){
'use strict';

var Attrs = require('./attrs');
var Block = require('./block');
var inlineTags = require('../inline-tags');

/**
 * Initialize a `Tag` node with the given tag `name` and optional `block`.
 *
 * @param {String} name
 * @param {Block} block
 * @api public
 */

var Tag = module.exports = function Tag(name, block) {
  Attrs.call(this);
  this.name = name;
  this.block = block || new Block;
};

// Inherit from `Attrs`.
Tag.prototype = Object.create(Attrs.prototype);
Tag.prototype.constructor = Tag;

Tag.prototype.type = 'Tag';

/**
 * Clone this tag.
 *
 * @return {Tag}
 * @api private
 */

Tag.prototype.clone = function(){
  var err = new Error('tag.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);

  var clone = new Tag(this.name, this.block.clone());
  clone.line = this.line;
  clone.attrs = this.attrs;
  clone.textOnly = this.textOnly;
  return clone;
};

/**
 * Check if this tag is an inline tag.
 *
 * @return {Boolean}
 * @api private
 */

Tag.prototype.isInline = function(){
  return ~inlineTags.indexOf(this.name);
};

/**
 * Check if this tag's contents can be inlined.  Used for pretty printing.
 *
 * @return {Boolean}
 * @api private
 */

Tag.prototype.canInline = function(){
  var nodes = this.block.nodes;

  function isInline(node){
    // Recurse if the node is a block
    if (node.isBlock) return node.nodes.every(isInline);
    return node.isText || (node.isInline && node.isInline());
  }

  // Empty tag
  if (!nodes.length) return true;

  // Text-only or inline-only tag
  if (1 == nodes.length) return isInline(nodes[0]);

  // Multi-line inline-only tag
  if (this.block.nodes.every(isInline)) {
    for (var i = 1, len = nodes.length; i < len; ++i) {
      if (nodes[i-1].isText && nodes[i].isText)
        return false;
    }
    return true;
  }

  // Mixed tag
  return false;
};

},{"../inline-tags":5,"./attrs":7,"./block":9}],22:[function(require,module,exports){
'use strict';

var Node = require('./node');

/**
 * Initialize a `Text` node with optional `line`.
 *
 * @param {String} line
 * @api public
 */

var Text = module.exports = function Text(line) {
  this.val = line;
};

// Inherit from `Node`.
Text.prototype = Object.create(Node.prototype);
Text.prototype.constructor = Text;

Text.prototype.type = 'Text';

/**
 * Flag as text.
 */

Text.prototype.isText = true;
},{"./node":20}],23:[function(require,module,exports){
'use strict';

var Lexer = require('./lexer');
var nodes = require('./nodes');
var utils = require('./utils');
var filters = require('./filters');
var path = require('path');
var constantinople = require('constantinople');
var parseJSExpression = require('character-parser').parseMax;
var extname = path.extname;

/**
 * Initialize `Parser` with the given input `str` and `filename`.
 *
 * @param {String} str
 * @param {String} filename
 * @param {Object} options
 * @api public
 */

var Parser = exports = module.exports = function Parser(str, filename, options){
  //Strip any UTF-8 BOM off of the start of `str`, if it exists.
  this.input = str.replace(/^\uFEFF/, '');
  this.lexer = new Lexer(this.input, filename);
  this.filename = filename;
  this.blocks = {};
  this.mixins = {};
  this.options = options;
  this.contexts = [this];
  this.inMixin = 0;
  this.dependencies = [];
  this.inBlock = 0;
};

/**
 * Parser prototype.
 */

Parser.prototype = {

  /**
   * Save original constructor
   */

  constructor: Parser,

  /**
   * Push `parser` onto the context stack,
   * or pop and return a `Parser`.
   */

  context: function(parser){
    if (parser) {
      this.contexts.push(parser);
    } else {
      return this.contexts.pop();
    }
  },

  /**
   * Return the next token object.
   *
   * @return {Object}
   * @api private
   */

  advance: function(){
    return this.lexer.advance();
  },

  /**
   * Single token lookahead.
   *
   * @return {Object}
   * @api private
   */

  peek: function() {
    return this.lookahead(1);
  },

  /**
   * Return lexer lineno.
   *
   * @return {Number}
   * @api private
   */

  line: function() {
    return this.lexer.lineno;
  },

  /**
   * `n` token lookahead.
   *
   * @param {Number} n
   * @return {Object}
   * @api private
   */

  lookahead: function(n){
    return this.lexer.lookahead(n);
  },

  /**
   * Parse input returning a string of js for evaluation.
   *
   * @return {String}
   * @api public
   */

  parse: function(){
    var block = new nodes.Block, parser;
    block.line = 0;
    block.filename = this.filename;

    while ('eos' != this.peek().type) {
      if ('newline' == this.peek().type) {
        this.advance();
      } else {
        var next = this.peek();
        var expr = this.parseExpr();
        expr.filename = expr.filename || this.filename;
        expr.line = next.line;
        block.push(expr);
      }
    }

    if (parser = this.extending) {
      this.context(parser);
      var ast = parser.parse();
      this.context();

      // hoist mixins
      for (var name in this.mixins)
        ast.unshift(this.mixins[name]);
      return ast;
    }

    if (!this.extending && !this.included && Object.keys(this.blocks).length){
      var blocks = [];
      utils.walkAST(block, function (node) {
        if (node.type === 'Block' && node.name) {
          blocks.push(node.name);
        }
      });
      Object.keys(this.blocks).forEach(function (name) {
        if (blocks.indexOf(name) === -1 && !this.blocks[name].isSubBlock) {
          console.warn('Warning: Unexpected block "'
                       + name
                       + '" '
                       + ' on line '
                       + this.blocks[name].line
                       + ' of '
                       + (this.blocks[name].filename)
                       + '. This block is never used. This warning will be an error in v2.0.0');
        }
      }.bind(this));
    }

    return block;
  },

  /**
   * Expect the given type, or throw an exception.
   *
   * @param {String} type
   * @api private
   */

  expect: function(type){
    if (this.peek().type === type) {
      return this.advance();
    } else {
      throw new Error('expected "' + type + '", but got "' + this.peek().type + '"');
    }
  },

  /**
   * Accept the given `type`.
   *
   * @param {String} type
   * @api private
   */

  accept: function(type){
    if (this.peek().type === type) {
      return this.advance();
    }
  },

  /**
   *   tag
   * | doctype
   * | mixin
   * | include
   * | filter
   * | comment
   * | text
   * | each
   * | code
   * | yield
   * | id
   * | class
   * | interpolation
   */

  parseExpr: function(){
    switch (this.peek().type) {
      case 'tag':
        return this.parseTag();
      case 'mixin':
        return this.parseMixin();
      case 'block':
        return this.parseBlock();
      case 'mixin-block':
        return this.parseMixinBlock();
      case 'case':
        return this.parseCase();
      case 'extends':
        return this.parseExtends();
      case 'include':
        return this.parseInclude();
      case 'doctype':
        return this.parseDoctype();
      case 'filter':
        return this.parseFilter();
      case 'comment':
        return this.parseComment();
      case 'text':
        return this.parseText();
      case 'each':
        return this.parseEach();
      case 'code':
        return this.parseCode();
      case 'blockCode':
        return this.parseBlockCode();
      case 'call':
        return this.parseCall();
      case 'interpolation':
        return this.parseInterpolation();
      case 'yield':
        this.advance();
        var block = new nodes.Block;
        block.yield = true;
        return block;
      case 'id':
      case 'class':
        var tok = this.advance();
        this.lexer.defer(this.lexer.tok('tag', 'div'));
        this.lexer.defer(tok);
        return this.parseExpr();
      default:
        throw new Error('unexpected token "' + this.peek().type + '"');
    }
  },

  /**
   * Text
   */

  parseText: function(){
    var tok = this.expect('text');
    var tokens = this.parseInlineTagsInText(tok.val);
    if (tokens.length === 1) return tokens[0];
    var node = new nodes.Block;
    for (var i = 0; i < tokens.length; i++) {
      node.push(tokens[i]);
    };
    return node;
  },

  /**
   *   ':' expr
   * | block
   */

  parseBlockExpansion: function(){
    if (':' == this.peek().type) {
      this.advance();
      return new nodes.Block(this.parseExpr());
    } else {
      return this.block();
    }
  },

  /**
   * case
   */

  parseCase: function(){
    var val = this.expect('case').val;
    var node = new nodes.Case(val);
    node.line = this.line();

    var block = new nodes.Block;
    block.line = this.line();
    block.filename = this.filename;
    this.expect('indent');
    while ('outdent' != this.peek().type) {
      switch (this.peek().type) {
        case 'comment':
        case 'newline':
          this.advance();
          break;
        case 'when':
          block.push(this.parseWhen());
          break;
        case 'default':
          block.push(this.parseDefault());
          break;
        default:
          throw new Error('Unexpected token "' + this.peek().type
                          + '", expected "when", "default" or "newline"');
      }
    }
    this.expect('outdent');

    node.block = block;

    return node;
  },

  /**
   * when
   */

  parseWhen: function(){
    var val = this.expect('when').val;
    if (this.peek().type !== 'newline')
      return new nodes.Case.When(val, this.parseBlockExpansion());
    else
      return new nodes.Case.When(val);
  },

  /**
   * default
   */

  parseDefault: function(){
    this.expect('default');
    return new nodes.Case.When('default', this.parseBlockExpansion());
  },

  /**
   * code
   */

  parseCode: function(afterIf){
    var tok = this.expect('code');
    var node = new nodes.Code(tok.val, tok.buffer, tok.escape);
    var block;
    node.line = this.line();

    // throw an error if an else does not have an if
    if (tok.isElse && !tok.hasIf) {
      throw new Error('Unexpected else without if');
    }

    // handle block
    block = 'indent' == this.peek().type;
    if (block) {
      node.block = this.block();
    }

    // handle missing block
    if (tok.requiresBlock && !block) {
      node.block = new nodes.Block();
    }

    // mark presense of if for future elses
    if (tok.isIf && this.peek().isElse) {
      this.peek().hasIf = true;
    } else if (tok.isIf && this.peek().type === 'newline' && this.lookahead(2).isElse) {
      this.lookahead(2).hasIf = true;
    }

    return node;
  },

  /**
   * block code
   */

  parseBlockCode: function(){
    var tok = this.expect('blockCode');
    var node;
    var body = this.peek();
    var text;
    if (body.type === 'pipeless-text') {
      this.advance();
      text = body.val.join('\n');
    } else {
      text = '';
    }
      node = new nodes.Code(text, false, false);
      return node;
  },

  /**
   * comment
   */

  parseComment: function(){
    var tok = this.expect('comment');
    var node;

    var block;
    if (block = this.parseTextBlock()) {
      node = new nodes.BlockComment(tok.val, block, tok.buffer);
    } else {
      node = new nodes.Comment(tok.val, tok.buffer);
    }

    node.line = this.line();
    return node;
  },

  /**
   * doctype
   */

  parseDoctype: function(){
    var tok = this.expect('doctype');
    var node = new nodes.Doctype(tok.val);
    node.line = this.line();
    return node;
  },

  /**
   * filter attrs? text-block
   */

  parseFilter: function(){
    var tok = this.expect('filter');
    var attrs = this.accept('attrs');
    var block;

    block = this.parseTextBlock() || new nodes.Block();

    var options = {};
    if (attrs) {
      attrs.attrs.forEach(function (attribute) {
        options[attribute.name] = constantinople.toConstant(attribute.val);
      });
    }

    var node = new nodes.Filter(tok.val, block, options);
    node.line = this.line();
    return node;
  },

  /**
   * each block
   */

  parseEach: function(){
    var tok = this.expect('each');
    var node = new nodes.Each(tok.code, tok.val, tok.key);
    node.line = this.line();
    node.block = this.block();
    if (this.peek().type == 'code' && this.peek().val == 'else') {
      this.advance();
      node.alternative = this.block();
    }
    return node;
  },

  /**
   * Resolves a path relative to the template for use in
   * includes and extends
   *
   * @param {String}  path
   * @param {String}  purpose  Used in error messages.
   * @return {String}
   * @api private
   */

  resolvePath: function (path, purpose) {
    var p = require('path');
    var dirname = p.dirname;
    var basename = p.basename;
    var join = p.join;

    if (path[0] !== '/' && !this.filename)
      throw new Error('the "filename" option is required to use "' + purpose + '" with "relative" paths');

    if (path[0] === '/' && !this.options.basedir)
      throw new Error('the "basedir" option is required to use "' + purpose + '" with "absolute" paths');

    path = join(path[0] === '/' ? this.options.basedir : dirname(this.filename), path);

    if (basename(path).indexOf('.') === -1) path += '.jade';

    return path;
  },

  /**
   * 'extends' name
   */

  parseExtends: function(){
    var fs = require('fs');

    var path = this.resolvePath(this.expect('extends').val.trim(), 'extends');
    if ('.jade' != path.substr(-5)) path += '.jade';

    this.dependencies.push(path);
    var str = fs.readFileSync(path, 'utf8');
    var parser = new this.constructor(str, path, this.options);
    parser.dependencies = this.dependencies;

    parser.blocks = this.blocks;
    parser.included = this.included;
    parser.contexts = this.contexts;
    this.extending = parser;

    // TODO: null node
    return new nodes.Literal('');
  },

  /**
   * 'block' name block
   */

  parseBlock: function(){
    var block = this.expect('block');
    var mode = block.mode;
    var name = block.val.trim();

    var line = block.line;

    this.inBlock++;
    block = 'indent' == this.peek().type
      ? this.block()
      : new nodes.Block(new nodes.Literal(''));
    this.inBlock--;
    block.name = name;
    block.line = line;

    var prev = this.blocks[name] || {prepended: [], appended: []}
    if (prev.mode === 'replace') return this.blocks[name] = prev;

    var allNodes = prev.prepended.concat(block.nodes).concat(prev.appended);

    switch (mode) {
      case 'append':
        prev.appended = prev.parser === this ?
                        prev.appended.concat(block.nodes) :
                        block.nodes.concat(prev.appended);
        break;
      case 'prepend':
        prev.prepended = prev.parser === this ?
                         block.nodes.concat(prev.prepended) :
                         prev.prepended.concat(block.nodes);
        break;
    }
    block.nodes = allNodes;
    block.appended = prev.appended;
    block.prepended = prev.prepended;
    block.mode = mode;
    block.parser = this;

    block.isSubBlock = this.inBlock > 0;

    return this.blocks[name] = block;
  },

  parseMixinBlock: function () {
    var block = this.expect('mixin-block');
    if (!this.inMixin) {
      throw new Error('Anonymous blocks are not allowed unless they are part of a mixin.');
    }
    return new nodes.MixinBlock();
  },

  /**
   * include block?
   */

  parseInclude: function(){
    var fs = require('fs');
    var tok = this.expect('include');

    var path = this.resolvePath(tok.val.trim(), 'include');
    this.dependencies.push(path);
    // has-filter
    if (tok.filter) {
      var str = fs.readFileSync(path, 'utf8').replace(/\r/g, '');
      var options = {filename: path};
      if (tok.attrs) {
        tok.attrs.attrs.forEach(function (attribute) {
          options[attribute.name] = constantinople.toConstant(attribute.val);
        });
      }
      str = filters(tok.filter, str, options);
      return new nodes.Literal(str);
    }

    // non-jade
    if ('.jade' != path.substr(-5)) {
      var str = fs.readFileSync(path, 'utf8').replace(/\r/g, '');
      return new nodes.Literal(str);
    }

    var str = fs.readFileSync(path, 'utf8');
    var parser = new this.constructor(str, path, this.options);
    parser.dependencies = this.dependencies;

    parser.blocks = utils.merge({}, this.blocks);
    parser.included = true;

    parser.mixins = this.mixins;

    this.context(parser);
    var ast = parser.parse();
    this.context();
    ast.filename = path;

    if ('indent' == this.peek().type) {
      ast.includeBlock().push(this.block());
    }

    return ast;
  },

  /**
   * call ident block
   */

  parseCall: function(){
    var tok = this.expect('call');
    var name = tok.val;
    var args = tok.args;
    var mixin = new nodes.Mixin(name, args, new nodes.Block, true);

    this.tag(mixin);
    if (mixin.code) {
      mixin.block.push(mixin.code);
      mixin.code = null;
    }
    if (mixin.block.isEmpty()) mixin.block = null;
    return mixin;
  },

  /**
   * mixin block
   */

  parseMixin: function(){
    var tok = this.expect('mixin');
    var name = tok.val;
    var args = tok.args;
    var mixin;

    // definition
    if ('indent' == this.peek().type) {
      this.inMixin++;
      mixin = new nodes.Mixin(name, args, this.block(), false);
      this.mixins[name] = mixin;
      this.inMixin--;
      return mixin;
    // call
    } else {
      return new nodes.Mixin(name, args, null, true);
    }
  },

  parseInlineTagsInText: function (str) {
    var line = this.line();

    var match = /(\\)?#\[((?:.|\n)*)$/.exec(str);
    if (match) {
      if (match[1]) { // escape
        var text = new nodes.Text(str.substr(0, match.index) + '#[');
        text.line = line;
        var rest = this.parseInlineTagsInText(match[2]);
        if (rest[0].type === 'Text') {
          text.val += rest[0].val;
          rest.shift();
        }
        return [text].concat(rest);
      } else {
        var text = new nodes.Text(str.substr(0, match.index));
        text.line = line;
        var buffer = [text];
        var rest = match[2];
        var range = parseJSExpression(rest);
        var inner = new Parser(range.src, this.filename, this.options);
        buffer.push(inner.parse());
        return buffer.concat(this.parseInlineTagsInText(rest.substr(range.end + 1)));
      }
    } else {
      var text = new nodes.Text(str);
      text.line = line;
      return [text];
    }
  },

  /**
   * indent (text | newline)* outdent
   */

  parseTextBlock: function(){
    var block = new nodes.Block;
    block.line = this.line();
    var body = this.peek();
    if (body.type !== 'pipeless-text') return;
    this.advance();
    block.nodes = body.val.reduce(function (accumulator, text) {
      return accumulator.concat(this.parseInlineTagsInText(text));
    }.bind(this), []);
    return block;
  },

  /**
   * indent expr* outdent
   */

  block: function(){
    var block = new nodes.Block;
    block.line = this.line();
    block.filename = this.filename;
    this.expect('indent');
    while ('outdent' != this.peek().type) {
      if ('newline' == this.peek().type) {
        this.advance();
      } else {
        var expr = this.parseExpr();
        expr.filename = this.filename;
        block.push(expr);
      }
    }
    this.expect('outdent');
    return block;
  },

  /**
   * interpolation (attrs | class | id)* (text | code | ':')? newline* block?
   */

  parseInterpolation: function(){
    var tok = this.advance();
    var tag = new nodes.Tag(tok.val);
    tag.buffer = true;
    return this.tag(tag);
  },

  /**
   * tag (attrs | class | id)* (text | code | ':')? newline* block?
   */

  parseTag: function(){
    var tok = this.advance();
    var tag = new nodes.Tag(tok.val);

    tag.selfClosing = tok.selfClosing;

    return this.tag(tag);
  },

  /**
   * Parse tag.
   */

  tag: function(tag){
    tag.line = this.line();

    var seenAttrs = false;
    // (attrs | class | id)*
    out:
      while (true) {
        switch (this.peek().type) {
          case 'id':
          case 'class':
            var tok = this.advance();
            tag.setAttribute(tok.type, "'" + tok.val + "'");
            continue;
          case 'attrs':
            if (seenAttrs) {
              console.warn(this.filename + ', line ' + this.peek().line + ':\nYou should not have jade tags with multiple attributes.');
            }
            seenAttrs = true;
            var tok = this.advance();
            var attrs = tok.attrs;

            if (tok.selfClosing) tag.selfClosing = true;

            for (var i = 0; i < attrs.length; i++) {
              tag.setAttribute(attrs[i].name, attrs[i].val, attrs[i].escaped);
            }
            continue;
          case '&attributes':
            var tok = this.advance();
            tag.addAttributes(tok.val);
            break;
          default:
            break out;
        }
      }

    // check immediate '.'
    if ('dot' == this.peek().type) {
      tag.textOnly = true;
      this.advance();
    }

    // (text | code | ':')?
    switch (this.peek().type) {
      case 'text':
        tag.block.push(this.parseText());
        break;
      case 'code':
        tag.code = this.parseCode();
        break;
      case ':':
        this.advance();
        tag.block = new nodes.Block;
        tag.block.push(this.parseExpr());
        break;
      case 'newline':
      case 'indent':
      case 'outdent':
      case 'eos':
      case 'pipeless-text':
        break;
      default:
        throw new Error('Unexpected token `' + this.peek().type + '` expected `text`, `code`, `:`, `newline` or `eos`')
    }

    // newline*
    while ('newline' == this.peek().type) this.advance();

    // block?
    if (tag.textOnly) {
      tag.block = this.parseTextBlock() || new nodes.Block();
    } else if ('indent' == this.peek().type) {
      var block = this.block();
      for (var i = 0, len = block.nodes.length; i < len; ++i) {
        tag.block.push(block.nodes[i]);
      }
    }

    return tag;
  }
};

},{"./filters":4,"./lexer":6,"./nodes":16,"./utils":25,"character-parser":29,"constantinople":30,"fs":26,"path":27}],24:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var jade_encode_html_rules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var jade_match_html = /[&<>"]/g;

function jade_encode_char(c) {
  return jade_encode_html_rules[c] || c;
}

exports.escape = jade_escape;
function jade_escape(html){
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

exports.DebugItem = function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
}

},{"fs":26}],25:[function(require,module,exports){
'use strict';

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object}
 * @api public
 */

exports.merge = function(a, b) {
  for (var key in b) a[key] = b[key];
  return a;
};

exports.stringify = function(str) {
  return JSON.stringify(str)
             .replace(/\u2028/g, '\\u2028')
             .replace(/\u2029/g, '\\u2029');
};

exports.walkAST = function walkAST(ast, before, after) {
  before && before(ast);
  switch (ast.type) {
    case 'Block':
      ast.nodes.forEach(function (node) {
        walkAST(node, before, after);
      });
      break;
    case 'Case':
    case 'Each':
    case 'Mixin':
    case 'Tag':
    case 'When':
    case 'Code':
      ast.block && walkAST(ast.block, before, after);
      break;
    case 'Attrs':
    case 'BlockComment':
    case 'Comment':
    case 'Doctype':
    case 'Filter':
    case 'Literal':
    case 'MixinBlock':
    case 'Text':
      break;
    default:
      throw new Error('Unexpected node type ' + ast.type);
      break;
  }
  after && after(ast);
};

},{}],26:[function(require,module,exports){

},{}],27:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":28}],28:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],29:[function(require,module,exports){
exports = (module.exports = parse);
exports.parse = parse;
function parse(src, state, options) {
  options = options || {};
  state = state || exports.defaultState();
  var start = options.start || 0;
  var end = options.end || src.length;
  var index = start;
  while (index < end) {
    if (state.roundDepth < 0 || state.curlyDepth < 0 || state.squareDepth < 0) {
      throw new SyntaxError('Mismatched Bracket: ' + src[index - 1]);
    }
    exports.parseChar(src[index++], state);
  }
  return state;
}

exports.parseMax = parseMax;
function parseMax(src, options) {
  options = options || {};
  var start = options.start || 0;
  var index = start;
  var state = exports.defaultState();
  while (state.roundDepth >= 0 && state.curlyDepth >= 0 && state.squareDepth >= 0) {
    if (index >= src.length) {
      throw new Error('The end of the string was reached with no closing bracket found.');
    }
    exports.parseChar(src[index++], state);
  }
  var end = index - 1;
  return {
    start: start,
    end: end,
    src: src.substring(start, end)
  };
}

exports.parseUntil = parseUntil;
function parseUntil(src, delimiter, options) {
  options = options || {};
  var includeLineComment = options.includeLineComment || false;
  var start = options.start || 0;
  var index = start;
  var state = exports.defaultState();
  while (state.isString() || state.regexp || state.blockComment ||
         (!includeLineComment && state.lineComment) || !startsWith(src, delimiter, index)) {
    exports.parseChar(src[index++], state);
  }
  var end = index;
  return {
    start: start,
    end: end,
    src: src.substring(start, end)
  };
}


exports.parseChar = parseChar;
function parseChar(character, state) {
  if (character.length !== 1) throw new Error('Character must be a string of length 1');
  state = state || exports.defaultState();
  state.src = state.src || '';
  state.src += character;
  var wasComment = state.blockComment || state.lineComment;
  var lastChar = state.history ? state.history[0] : '';

  if (state.regexpStart) {
    if (character === '/' || character == '*') {
      state.regexp = false;
    }
    state.regexpStart = false;
  }
  if (state.lineComment) {
    if (character === '\n') {
      state.lineComment = false;
    }
  } else if (state.blockComment) {
    if (state.lastChar === '*' && character === '/') {
      state.blockComment = false;
    }
  } else if (state.singleQuote) {
    if (character === '\'' && !state.escaped) {
      state.singleQuote = false;
    } else if (character === '\\' && !state.escaped) {
      state.escaped = true;
    } else {
      state.escaped = false;
    }
  } else if (state.doubleQuote) {
    if (character === '"' && !state.escaped) {
      state.doubleQuote = false;
    } else if (character === '\\' && !state.escaped) {
      state.escaped = true;
    } else {
      state.escaped = false;
    }
  } else if (state.regexp) {
    if (character === '/' && !state.escaped) {
      state.regexp = false;
    } else if (character === '\\' && !state.escaped) {
      state.escaped = true;
    } else {
      state.escaped = false;
    }
  } else if (lastChar === '/' && character === '/') {
    state.history = state.history.substr(1);
    state.lineComment = true;
  } else if (lastChar === '/' && character === '*') {
    state.history = state.history.substr(1);
    state.blockComment = true;
  } else if (character === '/' && isRegexp(state.history)) {
    state.regexp = true;
    state.regexpStart = true;
  } else if (character === '\'') {
    state.singleQuote = true;
  } else if (character === '"') {
    state.doubleQuote = true;
  } else if (character === '(') {
    state.roundDepth++;
  } else if (character === ')') {
    state.roundDepth--;
  } else if (character === '{') {
    state.curlyDepth++;
  } else if (character === '}') {
    state.curlyDepth--;
  } else if (character === '[') {
    state.squareDepth++;
  } else if (character === ']') {
    state.squareDepth--;
  }
  if (!state.blockComment && !state.lineComment && !wasComment) state.history = character + state.history;
  state.lastChar = character; // store last character for ending block comments
  return state;
}

exports.defaultState = function () { return new State() };
function State() {
  this.lineComment = false;
  this.blockComment = false;

  this.singleQuote = false;
  this.doubleQuote = false;
  this.regexp = false;

  this.escaped = false;

  this.roundDepth = 0;
  this.curlyDepth = 0;
  this.squareDepth = 0;

  this.history = ''
  this.lastChar = ''
}
State.prototype.isString = function () {
  return this.singleQuote || this.doubleQuote;
}
State.prototype.isComment = function () {
  return this.lineComment || this.blockComment;
}
State.prototype.isNesting = function () {
  return this.isString() || this.isComment() || this.regexp || this.roundDepth > 0 || this.curlyDepth > 0 || this.squareDepth > 0
}

function startsWith(str, start, i) {
  return str.substr(i || 0, start.length) === start;
}

exports.isPunctuator = isPunctuator
function isPunctuator(c) {
  if (!c) return true; // the start of a string is a punctuator
  var code = c.charCodeAt(0)

  switch (code) {
    case 46:   // . dot
    case 40:   // ( open bracket
    case 41:   // ) close bracket
    case 59:   // ; semicolon
    case 44:   // , comma
    case 123:  // { open curly brace
    case 125:  // } close curly brace
    case 91:   // [
    case 93:   // ]
    case 58:   // :
    case 63:   // ?
    case 126:  // ~
    case 37:   // %
    case 38:   // &
    case 42:   // *:
    case 43:   // +
    case 45:   // -
    case 47:   // /
    case 60:   // <
    case 62:   // >
    case 94:   // ^
    case 124:  // |
    case 33:   // !
    case 61:   // =
      return true;
    default:
      return false;
  }
}
exports.isKeyword = isKeyword
function isKeyword(id) {
  return (id === 'if') || (id === 'in') || (id === 'do') || (id === 'var') || (id === 'for') || (id === 'new') ||
         (id === 'try') || (id === 'let') || (id === 'this') || (id === 'else') || (id === 'case') ||
         (id === 'void') || (id === 'with') || (id === 'enum') || (id === 'while') || (id === 'break') || (id === 'catch') ||
         (id === 'throw') || (id === 'const') || (id === 'yield') || (id === 'class') || (id === 'super') ||
         (id === 'return') || (id === 'typeof') || (id === 'delete') || (id === 'switch') || (id === 'export') ||
         (id === 'import') || (id === 'default') || (id === 'finally') || (id === 'extends') || (id === 'function') ||
         (id === 'continue') || (id === 'debugger') || (id === 'package') || (id === 'private') || (id === 'interface') ||
         (id === 'instanceof') || (id === 'implements') || (id === 'protected') || (id === 'public') || (id === 'static') ||
         (id === 'yield') || (id === 'let');
}

function isRegexp(history) {
  //could be start of regexp or divide sign

  history = history.replace(/^\s*/, '');

  //unless its an `if`, `while`, `for` or `with` it's a divide, so we assume it's a divide
  if (history[0] === ')') return false;
  //unless it's a function expression, it's a regexp, so we assume it's a regexp
  if (history[0] === '}') return true;
  //any punctuation means it's a regexp
  if (isPunctuator(history[0])) return true;
  //if the last thing was a keyword then it must be a regexp (e.g. `typeof /foo/`)
  if (/^\w+\b/.test(history) && isKeyword(/^\w+\b/.exec(history)[0].split('').reverse().join(''))) return true;

  return false;
}

},{}],30:[function(require,module,exports){
'use strict'

var detect = require('acorn-globals');

var lastSRC = '(null)';
var lastRes = true;
var lastConstants = undefined;

module.exports = isConstant;
function isConstant(src, constants) {
  src = '(' + src + ')';
  if (lastSRC === src && lastConstants === constants) return lastRes;
  lastSRC = src;
  lastConstants = constants;
  try {
    isExpression(src);
    return lastRes = (detect(src).filter(function (key) {
      return !constants || !(key.name in constants);
    }).length === 0);
  } catch (ex) {
    return lastRes = false;
  }
}
isConstant.isConstant = isConstant;

isConstant.toConstant = toConstant;
function toConstant(src, constants) {
  if (!isConstant(src, constants)) throw new Error(JSON.stringify(src) + ' is not constant.');
  return Function(Object.keys(constants || {}).join(','), 'return (' + src + ')').apply(null, Object.keys(constants || {}).map(function (key) {
    return constants[key];
  }));
}

function isExpression(src) {
  try {
    eval('throw "STOP"; (function () { return (' + src + '); })()');
    return false;
  }
  catch (err) {
    return err === 'STOP';
  }
}

},{"acorn-globals":31}],31:[function(require,module,exports){
'use strict';

var acorn = require('acorn');
var walk = require('acorn/dist/walk');

// polyfill for https://github.com/marijnh/acorn/pull/231
walk.base.ExportNamedDeclaration = walk.base.ExportDefaultDeclaration = function (node, st, c) {
  return c(node.declaration, st);
};
walk.base.ImportDefaultSpecifier = walk.base.ImportNamespaceSpecifier = function () {};

function isScope(node) {
  return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'Program';
}
function isBlockScope(node) {
  return node.type === 'BlockStatement' || isScope(node);
}

function declaresArguments(node) {
  return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'ArrowFunction';
}
function declaresThis(node) {
  return node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration';
}

function reallyParse(source) {
  try {
    return acorn.parse(source, {
      ecmaVersion: 6,
      allowReturnOutsideFunction: true,
      sourceType: 'module'
    });
  } catch (ex) {
    if (ex.name !== 'SyntaxError') {
      throw ex;
    }
    try {
      return acorn.parse(source, {
        ecmaVersion: 6,
        allowReturnOutsideFunction: true
      });
    } catch (ex) {
      if (ex.name !== 'SyntaxError') {
        throw ex;
      }
      return acorn.parse(source, {
        ecmaVersion: 5,
        allowReturnOutsideFunction: true
      });
    }
  }
}
module.exports = findGlobals;
module.exports.parse = reallyParse;
function findGlobals(source) {
  var globals = [];
  var ast = typeof source === 'string' ?
    ast = reallyParse(source) :
    source;
  if (!(ast && typeof ast === 'object' && ast.type === 'Program')) {
    throw new TypeError('Source must be either a string of JavaScript or an acorn AST');
  }
  var declareFunction = function (node) {
    var fn = node;
    fn.locals = fn.locals || {};
    node.params.forEach(function (node) {
      fn.locals[node.name] = true;
    });
    if (node.id) {
      fn.locals[node.id.name] = true;
    }
  }
  walk.ancestor(ast, {
    'VariableDeclaration': function (node, parents) {
      var parent = null;
      for (var i = parents.length - 1; i >= 0 && parent === null; i--) {
        if (node.kind === 'var' ? isScope(parents[i]) : isBlockScope(parents[i])) {
          parent = parents[i];
        }
      }
      parent.locals = parent.locals || {};
      node.declarations.forEach(function (declaration) {
        parent.locals[declaration.id.name] = true;
      });
    },
    'FunctionDeclaration': function (node, parents) {
      var parent = null;
      for (var i = parents.length - 2; i >= 0 && parent === null; i--) {
        if (isScope(parents[i])) {
          parent = parents[i];
        }
      }
      parent.locals = parent.locals || {};
      parent.locals[node.id.name] = true;
      declareFunction(node);
    },
    'Function': declareFunction,
    'TryStatement': function (node) {
      node.handler.body.locals = node.handler.body.locals || {};
      node.handler.body.locals[node.handler.param.name] = true;
    },
    'ImportDefaultSpecifier': function (node) {
      if (node.local.type === 'Identifier') {
        ast.locals = ast.locals || {};
        ast.locals[node.local.name] = true;
      }
    },
    'ImportSpecifier': function (node) {
      var id = node.local ? node.local : node.imported;
      if (id.type === 'Identifier') {
        ast.locals = ast.locals || {};
        ast.locals[id.name] = true;
      }
    },
    'ImportNamespaceSpecifier': function (node) {
      if (node.local.type === 'Identifier') {
        ast.locals = ast.locals || {};
        ast.locals[node.local.name] = true;
      }
    }
  });
  walk.ancestor(ast, {
    'Identifier': function (node, parents) {
      var name = node.name;
      if (name === 'undefined') return;
      for (var i = 0; i < parents.length; i++) {
        if (name === 'arguments' && declaresArguments(parents[i])) {
          return;
        }
        if (parents[i].locals && name in parents[i].locals) {
          return;
        }
      }
      node.parents = parents;
      globals.push(node);
    },
    ThisExpression: function (node, parents) {
      for (var i = 0; i < parents.length; i++) {
        if (declaresThis(parents[i])) {
          return;
        }
      }
      node.parents = parents;
      globals.push(node);
    }
  });
  var groupedGlobals = {};
  globals.forEach(function (node) {
    groupedGlobals[node.name] = (groupedGlobals[node.name] || []);
    groupedGlobals[node.name].push(node);
  });
  return Object.keys(groupedGlobals).sort().map(function (name) {
    return {name: name, nodes: groupedGlobals[name]};
  });
}

},{"acorn":32,"acorn/dist/walk":33}],32:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.acorn = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){


// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

"use strict";

exports.parse = parse;

// This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.

exports.parseExpressionAt = parseExpressionAt;

// Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenize` export provides an interface to the tokenizer.

exports.tokenizer = tokenizer;
exports.__esModule = true;
// Acorn is a tiny, fast JavaScript parser written in JavaScript.
//
// Acorn was written by Marijn Haverbeke, Ingvar Stepanyan, and
// various contributors and released under an MIT license.
//
// Git repositories for Acorn are available at
//
//     http://marijnhaverbeke.nl/git/acorn
//     https://github.com/marijnh/acorn.git
//
// Please use the [github bug tracker][ghbt] to report issues.
//
// [ghbt]: https://github.com/marijnh/acorn/issues
//
// This file defines the main parser interface. The library also comes
// with a [error-tolerant parser][dammit] and an
// [abstract syntax tree walker][walk], defined in other files.
//
// [dammit]: acorn_loose.js
// [walk]: util/walk.js

var _state = _dereq_("./state");

var Parser = _state.Parser;

var _options = _dereq_("./options");

var getOptions = _options.getOptions;

_dereq_("./parseutil");

_dereq_("./statement");

_dereq_("./lval");

_dereq_("./expression");

exports.Parser = _state.Parser;
exports.plugins = _state.plugins;
exports.defaultOptions = _options.defaultOptions;

var _location = _dereq_("./location");

exports.SourceLocation = _location.SourceLocation;
exports.getLineInfo = _location.getLineInfo;
exports.Node = _dereq_("./node").Node;

var _tokentype = _dereq_("./tokentype");

exports.TokenType = _tokentype.TokenType;
exports.tokTypes = _tokentype.types;

var _tokencontext = _dereq_("./tokencontext");

exports.TokContext = _tokencontext.TokContext;
exports.tokContexts = _tokencontext.types;

var _identifier = _dereq_("./identifier");

exports.isIdentifierChar = _identifier.isIdentifierChar;
exports.isIdentifierStart = _identifier.isIdentifierStart;
exports.Token = _dereq_("./tokenize").Token;

var _whitespace = _dereq_("./whitespace");

exports.isNewLine = _whitespace.isNewLine;
exports.lineBreak = _whitespace.lineBreak;
exports.lineBreakG = _whitespace.lineBreakG;
var version = "1.2.2";exports.version = version;

function parse(input, options) {
  var p = parser(options, input);
  var startPos = p.pos,
      startLoc = p.options.locations && p.curPosition();
  p.nextToken();
  return p.parseTopLevel(p.options.program || p.startNodeAt(startPos, startLoc));
}

function parseExpressionAt(input, pos, options) {
  var p = parser(options, input, pos);
  p.nextToken();
  return p.parseExpression();
}

function tokenizer(input, options) {
  return parser(options, input);
}

function parser(options, input) {
  return new Parser(getOptions(options), String(input));
}

},{"./expression":6,"./identifier":7,"./location":8,"./lval":9,"./node":10,"./options":11,"./parseutil":12,"./state":13,"./statement":14,"./tokencontext":15,"./tokenize":16,"./tokentype":17,"./whitespace":19}],2:[function(_dereq_,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],3:[function(_dereq_,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(_dereq_,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],5:[function(_dereq_,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = _dereq_('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = _dereq_('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":4,"_process":3,"inherits":2}],6:[function(_dereq_,module,exports){
// A recursive descent parser operates by defining functions for all
// syntactic elements, and recursively calling those, each function
// advancing the input stream and returning an AST node. Precedence
// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
// instead of `(!x)[1]` is handled by the fact that the parser
// function that parses unary prefix operators is called first, and
// in turn calls the function that parses `[]` subscripts — that
// way, it'll receive the node for `x[1]` already parsed, and wraps
// *that* in the unary operator node.
//
// Acorn uses an [operator precedence parser][opp] to handle binary
// operator precedence, because it is much more compact than using
// the technique outlined above, which uses different, nesting
// functions to specify precedence, for all of the ten binary
// precedence levels that JavaScript defines.
//
// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

"use strict";

var tt = _dereq_("./tokentype").types;

var Parser = _dereq_("./state").Parser;

var reservedWords = _dereq_("./identifier").reservedWords;

var has = _dereq_("./util").has;

var pp = Parser.prototype;

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp.checkPropClash = function (prop, propHash) {
  if (this.options.ecmaVersion >= 6) return;
  var key = prop.key,
      name = undefined;
  switch (key.type) {
    case "Identifier":
      name = key.name;break;
    case "Literal":
      name = String(key.value);break;
    default:
      return;
  }
  var kind = prop.kind || "init",
      other = undefined;
  if (has(propHash, name)) {
    other = propHash[name];
    var isGetSet = kind !== "init";
    if ((this.strict || isGetSet) && other[kind] || !(isGetSet ^ other.init)) this.raise(key.start, "Redefinition of property");
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp.parseExpression = function (noIn, refShorthandDefaultPos) {
  var startPos = this.start,
      startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refShorthandDefaultPos);
  if (this.type === tt.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(tt.comma)) node.expressions.push(this.parseMaybeAssign(noIn, refShorthandDefaultPos));
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp.parseMaybeAssign = function (noIn, refShorthandDefaultPos, afterLeftParse) {
  if (this.type == tt._yield && this.inGenerator) return this.parseYield();

  var failOnShorthandAssign = undefined;
  if (!refShorthandDefaultPos) {
    refShorthandDefaultPos = { start: 0 };
    failOnShorthandAssign = true;
  } else {
    failOnShorthandAssign = false;
  }
  var startPos = this.start,
      startLoc = this.startLoc;
  if (this.type == tt.parenL || this.type == tt.name) this.potentialArrowAt = this.start;
  var left = this.parseMaybeConditional(noIn, refShorthandDefaultPos);
  if (afterLeftParse) left = afterLeftParse.call(this, left, startPos, startLoc);
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.left = this.type === tt.eq ? this.toAssignable(left) : left;
    refShorthandDefaultPos.start = 0; // reset because shorthand default was used correctly
    this.checkLVal(left);
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression");
  } else if (failOnShorthandAssign && refShorthandDefaultPos.start) {
    this.unexpected(refShorthandDefaultPos.start);
  }
  return left;
};

// Parse a ternary conditional (`?:`) operator.

pp.parseMaybeConditional = function (noIn, refShorthandDefaultPos) {
  var startPos = this.start,
      startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refShorthandDefaultPos);
  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
  if (this.eat(tt.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(tt.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};

// Start the precedence parser.

pp.parseExprOps = function (noIn, refShorthandDefaultPos) {
  var startPos = this.start,
      startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refShorthandDefaultPos);
  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
  return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
};

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp.parseExprOp = function (left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (Array.isArray(leftStartPos)) {
    if (this.options.locations && noIn === undefined) {
      // shift arguments to left by one
      noIn = minPrec;
      minPrec = leftStartLoc;
      // flatten leftStartPos
      leftStartLoc = leftStartPos[1];
      leftStartPos = leftStartPos[0];
    }
  }
  if (prec != null && (!noIn || this.type !== tt._in)) {
    if (prec > minPrec) {
      var node = this.startNodeAt(leftStartPos, leftStartLoc);
      node.left = left;
      node.operator = this.value;
      var op = this.type;
      this.next();
      var startPos = this.start,
          startLoc = this.startLoc;
      node.right = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, prec, noIn);
      this.finishNode(node, op === tt.logicalOR || op === tt.logicalAND ? "LogicalExpression" : "BinaryExpression");
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
    }
  }
  return left;
};

// Parse unary operators, both prefix and postfix.

pp.parseMaybeUnary = function (refShorthandDefaultPos) {
  if (this.type.prefix) {
    var node = this.startNode(),
        update = this.type === tt.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary();
    if (refShorthandDefaultPos && refShorthandDefaultPos.start) this.unexpected(refShorthandDefaultPos.start);
    if (update) this.checkLVal(node.argument);else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") this.raise(node.start, "Deleting local variable in strict mode");
    return this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  }
  var startPos = this.start,
      startLoc = this.startLoc;
  var expr = this.parseExprSubscripts(refShorthandDefaultPos);
  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
  while (this.type.postfix && !this.canInsertSemicolon()) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.prefix = false;
    node.argument = expr;
    this.checkLVal(expr);
    this.next();
    expr = this.finishNode(node, "UpdateExpression");
  }
  return expr;
};

// Parse call, dot, and `[]`-subscript expressions.

pp.parseExprSubscripts = function (refShorthandDefaultPos) {
  var startPos = this.start,
      startLoc = this.startLoc;
  var expr = this.parseExprAtom(refShorthandDefaultPos);
  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
  return this.parseSubscripts(expr, startPos, startLoc);
};

pp.parseSubscripts = function (base, startPos, startLoc, noCalls) {
  if (Array.isArray(startPos)) {
    if (this.options.locations && noCalls === undefined) {
      // shift arguments to left by one
      noCalls = startLoc;
      // flatten startPos
      startLoc = startPos[1];
      startPos = startPos[0];
    }
  }
  for (;;) {
    if (this.eat(tt.dot)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.property = this.parseIdent(true);
      node.computed = false;
      base = this.finishNode(node, "MemberExpression");
    } else if (this.eat(tt.bracketL)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.property = this.parseExpression();
      node.computed = true;
      this.expect(tt.bracketR);
      base = this.finishNode(node, "MemberExpression");
    } else if (!noCalls && this.eat(tt.parenL)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      node.arguments = this.parseExprList(tt.parenR, false);
      base = this.finishNode(node, "CallExpression");
    } else if (this.type === tt.backQuote) {
      var node = this.startNodeAt(startPos, startLoc);
      node.tag = base;
      node.quasi = this.parseTemplate();
      base = this.finishNode(node, "TaggedTemplateExpression");
    } else {
      return base;
    }
  }
};

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp.parseExprAtom = function (refShorthandDefaultPos) {
  var node = undefined,
      canBeArrow = this.potentialArrowAt == this.start;
  switch (this.type) {
    case tt._this:
    case tt._super:
      var type = this.type === tt._this ? "ThisExpression" : "Super";
      node = this.startNode();
      this.next();
      return this.finishNode(node, type);

    case tt._yield:
      if (this.inGenerator) this.unexpected();

    case tt.name:
      var startPos = this.start,
          startLoc = this.startLoc;
      var id = this.parseIdent(this.type !== tt.name);
      if (canBeArrow && !this.canInsertSemicolon() && this.eat(tt.arrow)) return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id]);
      return id;

    case tt.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;

    case tt.num:case tt.string:
      return this.parseLiteral(this.value);

    case tt._null:case tt._true:case tt._false:
      node = this.startNode();
      node.value = this.type === tt._null ? null : this.type === tt._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");

    case tt.parenL:
      return this.parseParenAndDistinguishExpression(canBeArrow);

    case tt.bracketL:
      node = this.startNode();
      this.next();
      // check whether this is array comprehension or regular array
      if (this.options.ecmaVersion >= 7 && this.type === tt._for) {
        return this.parseComprehension(node, false);
      }
      node.elements = this.parseExprList(tt.bracketR, true, true, refShorthandDefaultPos);
      return this.finishNode(node, "ArrayExpression");

    case tt.braceL:
      return this.parseObj(false, refShorthandDefaultPos);

    case tt._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, false);

    case tt._class:
      return this.parseClass(this.startNode(), false);

    case tt._new:
      return this.parseNew();

    case tt.backQuote:
      return this.parseTemplate();

    default:
      this.unexpected();
  }
};

pp.parseLiteral = function (value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  this.next();
  return this.finishNode(node, "Literal");
};

pp.parseParenExpression = function () {
  this.expect(tt.parenL);
  var val = this.parseExpression();
  this.expect(tt.parenR);
  return val;
};

pp.parseParenAndDistinguishExpression = function (canBeArrow) {
  var startPos = this.start,
      startLoc = this.startLoc,
      val = undefined;
  if (this.options.ecmaVersion >= 6) {
    this.next();

    if (this.options.ecmaVersion >= 7 && this.type === tt._for) {
      return this.parseComprehension(this.startNodeAt(startPos, startLoc), true);
    }

    var innerStartPos = this.start,
        innerStartLoc = this.startLoc;
    var exprList = [],
        first = true;
    var refShorthandDefaultPos = { start: 0 },
        spreadStart = undefined,
        innerParenStart = undefined;
    while (this.type !== tt.parenR) {
      first ? first = false : this.expect(tt.comma);
      if (this.type === tt.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRest()));
        break;
      } else {
        if (this.type === tt.parenL && !innerParenStart) {
          innerParenStart = this.start;
        }
        exprList.push(this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem));
      }
    }
    var innerEndPos = this.start,
        innerEndLoc = this.startLoc;
    this.expect(tt.parenR);

    if (canBeArrow && !this.canInsertSemicolon() && this.eat(tt.arrow)) {
      if (innerParenStart) this.unexpected(innerParenStart);
      return this.parseParenArrowList(startPos, startLoc, exprList);
    }

    if (!exprList.length) this.unexpected(this.lastTokStart);
    if (spreadStart) this.unexpected(spreadStart);
    if (refShorthandDefaultPos.start) this.unexpected(refShorthandDefaultPos.start);

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }

  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};

pp.parseParenItem = function (item) {
  return item;
};

pp.parseParenArrowList = function (startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList);
};

// New's precedence is slightly tricky. It must allow its argument
// to be a `[]` or dot subscript expression, but not a call — at
// least, not without wrapping it in parentheses. Thus, it uses the

var empty = [];

pp.parseNew = function () {
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(tt.dot)) {
    node.meta = meta;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target") this.raise(node.property.start, "The only valid meta property for new is new.target");
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start,
      startLoc = this.startLoc;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (this.eat(tt.parenL)) node.arguments = this.parseExprList(tt.parenR, false);else node.arguments = empty;
  return this.finishNode(node, "NewExpression");
};

// Parse template expression.

pp.parseTemplateElement = function () {
  var elem = this.startNode();
  elem.value = {
    raw: this.input.slice(this.start, this.end),
    cooked: this.value
  };
  this.next();
  elem.tail = this.type === tt.backQuote;
  return this.finishNode(elem, "TemplateElement");
};

pp.parseTemplate = function () {
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement();
  node.quasis = [curElt];
  while (!curElt.tail) {
    this.expect(tt.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(tt.braceR);
    node.quasis.push(curElt = this.parseTemplateElement());
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};

// Parse an object literal or binding pattern.

pp.parseObj = function (isPattern, refShorthandDefaultPos) {
  var node = this.startNode(),
      first = true,
      propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(tt.braceR)) {
    if (!first) {
      this.expect(tt.comma);
      if (this.afterTrailingComma(tt.braceR)) break;
    } else first = false;

    var prop = this.startNode(),
        isGenerator = undefined,
        startPos = undefined,
        startLoc = undefined;
    if (this.options.ecmaVersion >= 6) {
      prop.method = false;
      prop.shorthand = false;
      if (isPattern || refShorthandDefaultPos) {
        startPos = this.start;
        startLoc = this.startLoc;
      }
      if (!isPattern) isGenerator = this.eat(tt.star);
    }
    this.parsePropertyName(prop);
    this.parsePropertyValue(prop, isPattern, isGenerator, startPos, startLoc, refShorthandDefaultPos);
    this.checkPropClash(prop, propHash);
    node.properties.push(this.finishNode(prop, "Property"));
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};

pp.parsePropertyValue = function (prop, isPattern, isGenerator, startPos, startLoc, refShorthandDefaultPos) {
  if (this.eat(tt.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refShorthandDefaultPos);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === tt.parenL) {
    if (isPattern) this.unexpected();
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator);
  } else if (this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type != tt.comma && this.type != tt.braceR)) {
    if (isGenerator || isPattern) this.unexpected();
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    prop.kind = "init";
    if (isPattern) {
      if (this.isKeyword(prop.key.name) || this.strict && (reservedWords.strictBind(prop.key.name) || reservedWords.strict(prop.key.name)) || !this.options.allowReserved && this.isReservedWord(prop.key.name)) this.raise(prop.key.start, "Binding " + prop.key.name);
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === tt.eq && refShorthandDefaultPos) {
      if (!refShorthandDefaultPos.start) refShorthandDefaultPos.start = this.start;
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else this.unexpected();
};

pp.parsePropertyName = function (prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(tt.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(tt.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === tt.num || this.type === tt.string ? this.parseExprAtom() : this.parseIdent(true);
};

// Initialize empty function node.

pp.initFunction = function (node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = false;
    node.expression = false;
  }
};

// Parse object or class method.

pp.parseMethod = function (isGenerator) {
  var node = this.startNode();
  this.initFunction(node);
  this.expect(tt.parenL);
  node.params = this.parseBindingList(tt.parenR, false, false);
  var allowExpressionBody = undefined;
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
    allowExpressionBody = true;
  } else {
    allowExpressionBody = false;
  }
  this.parseFunctionBody(node, allowExpressionBody);
  return this.finishNode(node, "FunctionExpression");
};

// Parse arrow function expression with given parameters.

pp.parseArrowExpression = function (node, params) {
  this.initFunction(node);
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true);
  return this.finishNode(node, "ArrowFunctionExpression");
};

// Parse function body and check parameters.

pp.parseFunctionBody = function (node, allowExpression) {
  var isExpression = allowExpression && this.type !== tt.braceL;

  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
  } else {
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldInFunc = this.inFunction,
        oldInGen = this.inGenerator,
        oldLabels = this.labels;
    this.inFunction = true;this.inGenerator = node.generator;this.labels = [];
    node.body = this.parseBlock(true);
    node.expression = false;
    this.inFunction = oldInFunc;this.inGenerator = oldInGen;this.labels = oldLabels;
  }

  // If this is a strict mode function, verify that argument names
  // are not repeated, and it does not try to bind the words `eval`
  // or `arguments`.
  if (this.strict || !isExpression && node.body.body.length && this.isUseStrict(node.body.body[0])) {
    var nameHash = {},
        oldStrict = this.strict;
    this.strict = true;
    if (node.id) this.checkLVal(node.id, true);
    for (var i = 0; i < node.params.length; i++) {
      this.checkLVal(node.params[i], true, nameHash);
    }this.strict = oldStrict;
  }
};

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp.parseExprList = function (close, allowTrailingComma, allowEmpty, refShorthandDefaultPos) {
  var elts = [],
      first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(tt.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) break;
    } else first = false;

    if (allowEmpty && this.type === tt.comma) {
      elts.push(null);
    } else {
      if (this.type === tt.ellipsis) elts.push(this.parseSpread(refShorthandDefaultPos));else elts.push(this.parseMaybeAssign(false, refShorthandDefaultPos));
    }
  }
  return elts;
};

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp.parseIdent = function (liberal) {
  var node = this.startNode();
  if (liberal && this.options.allowReserved == "never") liberal = false;
  if (this.type === tt.name) {
    if (!liberal && (!this.options.allowReserved && this.isReservedWord(this.value) || this.strict && reservedWords.strict(this.value) && (this.options.ecmaVersion >= 6 || this.input.slice(this.start, this.end).indexOf("\\") == -1))) this.raise(this.start, "The keyword '" + this.value + "' is reserved");
    node.name = this.value;
  } else if (liberal && this.type.keyword) {
    node.name = this.type.keyword;
  } else {
    this.unexpected();
  }
  this.next();
  return this.finishNode(node, "Identifier");
};

// Parses yield expression inside generator.

pp.parseYield = function () {
  var node = this.startNode();
  this.next();
  if (this.type == tt.semi || this.canInsertSemicolon() || this.type != tt.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(tt.star);
    node.argument = this.parseMaybeAssign();
  }
  return this.finishNode(node, "YieldExpression");
};

// Parses array and generator comprehensions.

pp.parseComprehension = function (node, isGenerator) {
  node.blocks = [];
  while (this.type === tt._for) {
    var block = this.startNode();
    this.next();
    this.expect(tt.parenL);
    block.left = this.parseBindingAtom();
    this.checkLVal(block.left, true);
    this.expectContextual("of");
    block.right = this.parseExpression();
    this.expect(tt.parenR);
    node.blocks.push(this.finishNode(block, "ComprehensionBlock"));
  }
  node.filter = this.eat(tt._if) ? this.parseParenExpression() : null;
  node.body = this.parseExpression();
  this.expect(isGenerator ? tt.parenR : tt.bracketR);
  node.generator = isGenerator;
  return this.finishNode(node, "ComprehensionExpression");
};

},{"./identifier":7,"./state":13,"./tokentype":17,"./util":18}],7:[function(_dereq_,module,exports){


// Test whether a given character code starts an identifier.

"use strict";

exports.isIdentifierStart = isIdentifierStart;

// Test whether a given character is part of an identifier.

exports.isIdentifierChar = isIdentifierChar;
exports.__esModule = true;
// This is a trick taken from Esprima. It turns out that, on
// non-Chrome browsers, to check whether a string is in a set, a
// predicate containing a big ugly `switch` statement is faster than
// a regular expression, and on Chrome the two are about on par.
// This function uses `eval` (non-lexical) to produce such a
// predicate from a space-separated string of words.
//
// It starts by sorting the words by length.

function makePredicate(words) {
  words = words.split(" ");
  var f = "",
      cats = [];
  out: for (var i = 0; i < words.length; ++i) {
    for (var j = 0; j < cats.length; ++j) {
      if (cats[j][0].length == words[i].length) {
        cats[j].push(words[i]);
        continue out;
      }
    }cats.push([words[i]]);
  }
  function compareTo(arr) {
    if (arr.length == 1) {
      return f += "return str === " + JSON.stringify(arr[0]) + ";";
    }f += "switch(str){";
    for (var i = 0; i < arr.length; ++i) {
      f += "case " + JSON.stringify(arr[i]) + ":";
    }f += "return true}return false;";
  }

  // When there are more than three length categories, an outer
  // switch first dispatches on the lengths, to save on comparisons.

  if (cats.length > 3) {
    cats.sort(function (a, b) {
      return b.length - a.length;
    });
    f += "switch(str.length){";
    for (var i = 0; i < cats.length; ++i) {
      var cat = cats[i];
      f += "case " + cat[0].length + ":";
      compareTo(cat);
    }
    f += "}"

    // Otherwise, simply generate a flat `switch` statement.

    ;
  } else {
    compareTo(words);
  }
  return new Function("str", f);
}

// Reserved word lists for various dialects of the language

var reservedWords = {
  3: makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
  5: makePredicate("class enum extends super const export import"),
  6: makePredicate("enum await"),
  strict: makePredicate("implements interface let package private protected public static yield"),
  strictBind: makePredicate("eval arguments")
};

exports.reservedWords = reservedWords;
// And the keywords

var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

var keywords = {
  5: makePredicate(ecma5AndLessKeywords),
  6: makePredicate(ecma5AndLessKeywords + " let const class extends export import yield super")
};

exports.keywords = keywords;
// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `tools/generate-identifier-regex.js`.

var nonASCIIidentifierStartChars = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢲऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞭꞰꞱꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭟꭤꭥꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var nonASCIIidentifierChars = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏ᦰ-ᧀᧈᧉ᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷼-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︭︳︴﹍-﹏０-９＿";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by tools/generate-identifier-regex.js
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 99, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 98, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 955, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 38, 17, 2, 24, 133, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 32, 4, 287, 47, 21, 1, 2, 0, 185, 46, 82, 47, 21, 0, 60, 42, 502, 63, 32, 0, 449, 56, 1288, 920, 104, 110, 2962, 1070, 13266, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 16481, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 1340, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 16355, 541];
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 16, 9, 83, 11, 168, 11, 6, 9, 8, 2, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 316, 19, 13, 9, 214, 6, 3, 8, 112, 16, 16, 9, 82, 12, 9, 9, 535, 9, 20855, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 4305, 6, 792618, 239];

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) {
      return false;
    }pos += set[i + 1];
    if (pos >= code) {
      return true;
    }
  }
}
function isIdentifierStart(code, astral) {
  if (code < 65) {
    return code === 36;
  }if (code < 91) {
    return true;
  }if (code < 97) {
    return code === 95;
  }if (code < 123) {
    return true;
  }if (code <= 65535) {
    return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }if (astral === false) {
    return false;
  }return isInAstralSet(code, astralIdentifierStartCodes);
}

function isIdentifierChar(code, astral) {
  if (code < 48) {
    return code === 36;
  }if (code < 58) {
    return true;
  }if (code < 65) {
    return false;
  }if (code < 91) {
    return true;
  }if (code < 97) {
    return code === 95;
  }if (code < 123) {
    return true;
  }if (code <= 65535) {
    return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
  }if (astral === false) {
    return false;
  }return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

},{}],8:[function(_dereq_,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

exports.getLineInfo = getLineInfo;
exports.__esModule = true;

var Parser = _dereq_("./state").Parser;

var lineBreakG = _dereq_("./whitespace").lineBreakG;

var deprecate = _dereq_("util").deprecate;

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = exports.Position = (function () {
  function Position(line, col) {
    _classCallCheck(this, Position);

    this.line = line;
    this.column = col;
  }

  Position.prototype.offset = function offset(n) {
    return new Position(this.line, this.column + n);
  };

  return Position;
})();

var SourceLocation = exports.SourceLocation = function SourceLocation(p, start, end) {
  _classCallCheck(this, SourceLocation);

  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) this.source = p.sourceFile;
};

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur);
    }
  }
}

var pp = Parser.prototype;

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp.raise = function (pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;err.loc = loc;err.raisedAt = this.pos;
  throw err;
};

pp.curPosition = function () {
  return new Position(this.curLine, this.pos - this.lineStart);
};

pp.markPosition = function () {
  return this.options.locations ? [this.start, this.startLoc] : this.start;
};

},{"./state":13,"./whitespace":19,"util":5}],9:[function(_dereq_,module,exports){
"use strict";

var tt = _dereq_("./tokentype").types;

var Parser = _dereq_("./state").Parser;

var reservedWords = _dereq_("./identifier").reservedWords;

var has = _dereq_("./util").has;

var pp = Parser.prototype;

// Convert existing expression atom to assignable pattern
// if possible.

pp.toAssignable = function (node, isBinding) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
        break;

      case "ObjectExpression":
        node.type = "ObjectPattern";
        for (var i = 0; i < node.properties.length; i++) {
          var prop = node.properties[i];
          if (prop.kind !== "init") this.raise(prop.key.start, "Object pattern can't contain getter or setter");
          this.toAssignable(prop.value, isBinding);
        }
        break;

      case "ArrayExpression":
        node.type = "ArrayPattern";
        this.toAssignableList(node.elements, isBinding);
        break;

      case "AssignmentExpression":
        if (node.operator === "=") {
          node.type = "AssignmentPattern";
        } else {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        break;

      case "ParenthesizedExpression":
        node.expression = this.toAssignable(node.expression, isBinding);
        break;

      case "MemberExpression":
        if (!isBinding) break;

      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  }
  return node;
};

// Convert list of expression atoms to binding list.

pp.toAssignableList = function (exprList, isBinding) {
  var end = exprList.length;
  if (end) {
    var last = exprList[end - 1];
    if (last && last.type == "RestElement") {
      --end;
    } else if (last && last.type == "SpreadElement") {
      last.type = "RestElement";
      var arg = last.argument;
      this.toAssignable(arg, isBinding);
      if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern") this.unexpected(arg.start);
      --end;
    }
  }
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) this.toAssignable(elt, isBinding);
  }
  return exprList;
};

// Parses spread element.

pp.parseSpread = function (refShorthandDefaultPos) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(refShorthandDefaultPos);
  return this.finishNode(node, "SpreadElement");
};

pp.parseRest = function () {
  var node = this.startNode();
  this.next();
  node.argument = this.type === tt.name || this.type === tt.bracketL ? this.parseBindingAtom() : this.unexpected();
  return this.finishNode(node, "RestElement");
};

// Parses lvalue (assignable) atom.

pp.parseBindingAtom = function () {
  if (this.options.ecmaVersion < 6) return this.parseIdent();
  switch (this.type) {
    case tt.name:
      return this.parseIdent();

    case tt.bracketL:
      var node = this.startNode();
      this.next();
      node.elements = this.parseBindingList(tt.bracketR, true, true);
      return this.finishNode(node, "ArrayPattern");

    case tt.braceL:
      return this.parseObj(true);

    default:
      this.unexpected();
  }
};

pp.parseBindingList = function (close, allowEmpty, allowTrailingComma) {
  var elts = [],
      first = true;
  while (!this.eat(close)) {
    if (first) first = false;else this.expect(tt.comma);
    if (allowEmpty && this.type === tt.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break;
    } else if (this.type === tt.ellipsis) {
      var rest = this.parseRest();
      this.parseBindingListItem(rest);
      elts.push(rest);
      this.expect(close);
      break;
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts;
};

pp.parseBindingListItem = function (param) {
  return param;
};

// Parses assignment pattern around given atom if possible.

pp.parseMaybeDefault = function (startPos, startLoc, left) {
  if (Array.isArray(startPos)) {
    if (this.options.locations && noCalls === undefined) {
      // shift arguments to left by one
      left = startLoc;
      // flatten startPos
      startLoc = startPos[1];
      startPos = startPos[0];
    }
  }
  left = left || this.parseBindingAtom();
  if (!this.eat(tt.eq)) return left;
  var node = this.startNodeAt(startPos, startLoc);
  node.operator = "=";
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};

// Verify that a node is an lval — something that can be assigned
// to.

pp.checkLVal = function (expr, isBinding, checkClashes) {
  switch (expr.type) {
    case "Identifier":
      if (this.strict && (reservedWords.strictBind(expr.name) || reservedWords.strict(expr.name))) this.raise(expr.start, (isBinding ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      if (checkClashes) {
        if (has(checkClashes, expr.name)) this.raise(expr.start, "Argument name clash in strict mode");
        checkClashes[expr.name] = true;
      }
      break;

    case "MemberExpression":
      if (isBinding) this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " member expression");
      break;

    case "ObjectPattern":
      for (var i = 0; i < expr.properties.length; i++) {
        this.checkLVal(expr.properties[i].value, isBinding, checkClashes);
      }break;

    case "ArrayPattern":
      for (var i = 0; i < expr.elements.length; i++) {
        var elem = expr.elements[i];
        if (elem) this.checkLVal(elem, isBinding, checkClashes);
      }
      break;

    case "AssignmentPattern":
      this.checkLVal(expr.left, isBinding, checkClashes);
      break;

    case "RestElement":
      this.checkLVal(expr.argument, isBinding, checkClashes);
      break;

    case "ParenthesizedExpression":
      this.checkLVal(expr.expression, isBinding, checkClashes);
      break;

    default:
      this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " rvalue");
  }
};

},{"./identifier":7,"./state":13,"./tokentype":17,"./util":18}],10:[function(_dereq_,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.__esModule = true;

var Parser = _dereq_("./state").Parser;

var SourceLocation = _dereq_("./location").SourceLocation;

// Start an AST node, attaching a start offset.

var pp = Parser.prototype;

var Node = exports.Node = function Node() {
  _classCallCheck(this, Node);
};

pp.startNode = function () {
  var node = new Node();
  node.start = this.start;
  if (this.options.locations) node.loc = new SourceLocation(this, this.startLoc);
  if (this.options.directSourceFile) node.sourceFile = this.options.directSourceFile;
  if (this.options.ranges) node.range = [this.start, 0];
  return node;
};

pp.startNodeAt = function (pos, loc) {
  var node = new Node();
  if (Array.isArray(pos)) {
    if (this.options.locations && loc === undefined) {
      // flatten pos
      loc = pos[1];
      pos = pos[0];
    }
  }
  node.start = pos;
  if (this.options.locations) node.loc = new SourceLocation(this, loc);
  if (this.options.directSourceFile) node.sourceFile = this.options.directSourceFile;
  if (this.options.ranges) node.range = [pos, 0];
  return node;
};

// Finish an AST node, adding `type` and `end` properties.

pp.finishNode = function (node, type) {
  node.type = type;
  node.end = this.lastTokEnd;
  if (this.options.locations) node.loc.end = this.lastTokEndLoc;
  if (this.options.ranges) node.range[1] = this.lastTokEnd;
  return node;
};

// Finish node at given position

pp.finishNodeAt = function (node, type, pos, loc) {
  node.type = type;
  if (Array.isArray(pos)) {
    if (this.options.locations && loc === undefined) {
      // flatten pos
      loc = pos[1];
      pos = pos[0];
    }
  }
  node.end = pos;
  if (this.options.locations) node.loc.end = loc;
  if (this.options.ranges) node.range[1] = pos;
  return node;
};

},{"./location":8,"./state":13}],11:[function(_dereq_,module,exports){


// Interpret and default an options object

"use strict";

exports.getOptions = getOptions;
exports.__esModule = true;

var _util = _dereq_("./util");

var has = _util.has;
var isArray = _util.isArray;

var SourceLocation = _dereq_("./location").SourceLocation;

// A second optional argument can be given to further configure
// the parser process. These options are recognized:

var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must
  // be either 3, or 5, or 6. This influences support for strict
  // mode, the set of reserved words, support for getters and
  // setters and other features.
  ecmaVersion: 5,
  // Source type ("script" or "module") for different semantics
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // th position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are not enforced. Disable
  // `allowReserved` to enforce them. When this option has the
  // value "never", reserved words and keywords can also not be
  // used as property names.
  allowReserved: true,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokenize() returns. Note that you are not
  // allowed to call the parser from the callback—that will
  // corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false,
  plugins: {}
};exports.defaultOptions = defaultOptions;

function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt];
  }if (isArray(options.onToken)) {
    (function () {
      var tokens = options.onToken;
      options.onToken = function (token) {
        return tokens.push(token);
      };
    })();
  }
  if (isArray(options.onComment)) options.onComment = pushComment(options, options.onComment);

  return options;
}

function pushComment(options, array) {
  return function (block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start: start,
      end: end
    };
    if (options.locations) comment.loc = new SourceLocation(this, startLoc, endLoc);
    if (options.ranges) comment.range = [start, end];
    array.push(comment);
  };
}

},{"./location":8,"./util":18}],12:[function(_dereq_,module,exports){
"use strict";

var tt = _dereq_("./tokentype").types;

var Parser = _dereq_("./state").Parser;

var lineBreak = _dereq_("./whitespace").lineBreak;

var pp = Parser.prototype;

// ## Parser utilities

// Test whether a statement node is the string literal `"use strict"`.

pp.isUseStrict = function (stmt) {
  return this.options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && stmt.expression.value === "use strict";
};

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function (type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function (name) {
  return this.type === tt.name && this.value === name;
};

// Consumes contextual keyword if possible.

pp.eatContextual = function (name) {
  return this.value === name && this.eat(tt.name);
};

// Asserts that following token is given contextual keyword.

pp.expectContextual = function (name) {
  if (!this.eatContextual(name)) this.unexpected();
};

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function () {
  return this.type === tt.eof || this.type === tt.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};

pp.insertSemicolon = function () {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    return true;
  }
};

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function () {
  if (!this.eat(tt.semi) && !this.insertSemicolon()) this.unexpected();
};

pp.afterTrailingComma = function (tokType) {
  if (this.type == tokType) {
    if (this.options.onTrailingComma) this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    this.next();
    return true;
  }
};

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function (type) {
  this.eat(type) || this.unexpected();
};

// Raise an unexpected token error.

pp.unexpected = function (pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};

},{"./state":13,"./tokentype":17,"./whitespace":19}],13:[function(_dereq_,module,exports){
"use strict";

exports.Parser = Parser;
exports.__esModule = true;

var _identifier = _dereq_("./identifier");

var reservedWords = _identifier.reservedWords;
var keywords = _identifier.keywords;

var tt = _dereq_("./tokentype").types;

var lineBreak = _dereq_("./whitespace").lineBreak;

function Parser(options, input, startPos) {
  this.options = options;
  this.sourceFile = this.options.sourceFile || null;
  this.isKeyword = keywords[this.options.ecmaVersion >= 6 ? 6 : 5];
  this.isReservedWord = reservedWords[this.options.ecmaVersion];
  this.input = input;

  // Load plugins
  this.loadPlugins(this.options.plugins);

  // Set up token state

  // The current position of the tokenizer in the input.
  if (startPos) {
    this.pos = startPos;
    this.lineStart = Math.max(0, this.input.lastIndexOf("\n", startPos));
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }

  // Properties of the current token:
  // Its type
  this.type = tt.eof;
  // For tokens that include more information than their type, the value
  this.value = null;
  // Its start and end offset
  this.start = this.end = this.pos;
  // And, if locations are used, the {line, column} object
  // corresponding to those offsets
  this.startLoc = this.endLoc = null;

  // Position information for the previous token
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;

  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.
  this.context = this.initialContext();
  this.exprAllowed = true;

  // Figure out if it's a module code.
  this.strict = this.inModule = this.options.sourceType === "module";

  // Used to signify the start of a potential arrow function
  this.potentialArrowAt = -1;

  // Flags to track whether we are in a function, a generator.
  this.inFunction = this.inGenerator = false;
  // Labels in scope.
  this.labels = [];

  // If enabled, skip leading hashbang line.
  if (this.pos === 0 && this.options.allowHashBang && this.input.slice(0, 2) === "#!") this.skipLineComment(2);
}

Parser.prototype.extend = function (name, f) {
  this[name] = f(this[name]);
};

// Registered plugins

var plugins = {};

exports.plugins = plugins;
Parser.prototype.loadPlugins = function (plugins) {
  for (var _name in plugins) {
    var plugin = exports.plugins[_name];
    if (!plugin) throw new Error("Plugin '" + _name + "' not found");
    plugin(this, plugins[_name]);
  }
};

},{"./identifier":7,"./tokentype":17,"./whitespace":19}],14:[function(_dereq_,module,exports){
"use strict";

var tt = _dereq_("./tokentype").types;

var Parser = _dereq_("./state").Parser;

var lineBreak = _dereq_("./whitespace").lineBreak;

var pp = Parser.prototype;

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp.parseTopLevel = function (node) {
  var first = true;
  if (!node.body) node.body = [];
  while (this.type !== tt.eof) {
    var stmt = this.parseStatement(true, true);
    node.body.push(stmt);
    if (first && this.isUseStrict(stmt)) this.setStrict(true);
    first = false;
  }
  this.next();
  if (this.options.ecmaVersion >= 6) {
    node.sourceType = this.options.sourceType;
  }
  return this.finishNode(node, "Program");
};

var loopLabel = { kind: "loop" },
    switchLabel = { kind: "switch" };

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp.parseStatement = function (declaration, topLevel) {
  var starttype = this.type,
      node = this.startNode();

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
    case tt._break:case tt._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case tt._debugger:
      return this.parseDebuggerStatement(node);
    case tt._do:
      return this.parseDoStatement(node);
    case tt._for:
      return this.parseForStatement(node);
    case tt._function:
      if (!declaration && this.options.ecmaVersion >= 6) this.unexpected();
      return this.parseFunctionStatement(node);
    case tt._class:
      if (!declaration) this.unexpected();
      return this.parseClass(node, true);
    case tt._if:
      return this.parseIfStatement(node);
    case tt._return:
      return this.parseReturnStatement(node);
    case tt._switch:
      return this.parseSwitchStatement(node);
    case tt._throw:
      return this.parseThrowStatement(node);
    case tt._try:
      return this.parseTryStatement(node);
    case tt._let:case tt._const:
      if (!declaration) this.unexpected(); // NOTE: falls through to _var
    case tt._var:
      return this.parseVarStatement(node, starttype);
    case tt._while:
      return this.parseWhileStatement(node);
    case tt._with:
      return this.parseWithStatement(node);
    case tt.braceL:
      return this.parseBlock();
    case tt.semi:
      return this.parseEmptyStatement(node);
    case tt._export:
    case tt._import:
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) this.raise(this.start, "'import' and 'export' may only appear at the top level");
        if (!this.inModule) this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
      }
      return starttype === tt._import ? this.parseImport(node) : this.parseExport(node);

    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
    default:
      var maybeName = this.value,
          expr = this.parseExpression();
      if (starttype === tt.name && expr.type === "Identifier" && this.eat(tt.colon)) return this.parseLabeledStatement(node, maybeName, expr);else return this.parseExpressionStatement(node, expr);
  }
};

pp.parseBreakContinueStatement = function (node, keyword) {
  var isBreak = keyword == "break";
  this.next();
  if (this.eat(tt.semi) || this.insertSemicolon()) node.label = null;else if (this.type !== tt.name) this.unexpected();else {
    node.label = this.parseIdent();
    this.semicolon();
  }

  // Verify that there is an actual destination to break or
  // continue to.
  for (var i = 0; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
      if (node.label && isBreak) break;
    }
  }
  if (i === this.labels.length) this.raise(node.start, "Unsyntactic " + keyword);
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};

pp.parseDebuggerStatement = function (node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};

pp.parseDoStatement = function (node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.labels.pop();
  this.expect(tt._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) this.eat(tt.semi);else this.semicolon();
  return this.finishNode(node, "DoWhileStatement");
};

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp.parseForStatement = function (node) {
  this.next();
  this.labels.push(loopLabel);
  this.expect(tt.parenL);
  if (this.type === tt.semi) return this.parseFor(node, null);
  if (this.type === tt._var || this.type === tt._let || this.type === tt._const) {
    var _init = this.startNode(),
        varKind = this.type;
    this.next();
    this.parseVar(_init, true, varKind);
    this.finishNode(_init, "VariableDeclaration");
    if ((this.type === tt._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && _init.declarations.length === 1 && !(varKind !== tt._var && _init.declarations[0].init)) return this.parseForIn(node, _init);
    return this.parseFor(node, _init);
  }
  var refShorthandDefaultPos = { start: 0 };
  var init = this.parseExpression(true, refShorthandDefaultPos);
  if (this.type === tt._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
    this.toAssignable(init);
    this.checkLVal(init);
    return this.parseForIn(node, init);
  } else if (refShorthandDefaultPos.start) {
    this.unexpected(refShorthandDefaultPos.start);
  }
  return this.parseFor(node, init);
};

pp.parseFunctionStatement = function (node) {
  this.next();
  return this.parseFunction(node, true);
};

pp.parseIfStatement = function (node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement(false);
  node.alternate = this.eat(tt._else) ? this.parseStatement(false) : null;
  return this.finishNode(node, "IfStatement");
};

pp.parseReturnStatement = function (node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) this.raise(this.start, "'return' outside of function");
  this.next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.eat(tt.semi) || this.insertSemicolon()) node.argument = null;else {
    node.argument = this.parseExpression();this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};

pp.parseSwitchStatement = function (node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(tt.braceL);
  this.labels.push(switchLabel);

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  for (var cur, sawDefault; this.type != tt.braceR;) {
    if (this.type === tt._case || this.type === tt._default) {
      var isCase = this.type === tt._case;
      if (cur) this.finishNode(cur, "SwitchCase");
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) this.raise(this.lastTokStart, "Multiple default clauses");
        sawDefault = true;
        cur.test = null;
      }
      this.expect(tt.colon);
    } else {
      if (!cur) this.unexpected();
      cur.consequent.push(this.parseStatement(true));
    }
  }
  if (cur) this.finishNode(cur, "SwitchCase");
  this.next(); // Closing brace
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};

pp.parseThrowStatement = function (node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) this.raise(this.lastTokEnd, "Illegal newline after throw");
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};

// Reused empty array added for node fields that are always empty.

var empty = [];

pp.parseTryStatement = function (node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === tt._catch) {
    var clause = this.startNode();
    this.next();
    this.expect(tt.parenL);
    clause.param = this.parseBindingAtom();
    this.checkLVal(clause.param, true);
    this.expect(tt.parenR);
    clause.guard = null;
    clause.body = this.parseBlock();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.guardedHandlers = empty;
  node.finalizer = this.eat(tt._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) this.raise(node.start, "Missing catch or finally clause");
  return this.finishNode(node, "TryStatement");
};

pp.parseVarStatement = function (node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};

pp.parseWhileStatement = function (node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};

pp.parseWithStatement = function (node) {
  if (this.strict) this.raise(this.start, "'with' in strict mode");
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement(false);
  return this.finishNode(node, "WithStatement");
};

pp.parseEmptyStatement = function (node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};

pp.parseLabeledStatement = function (node, maybeName, expr) {
  for (var i = 0; i < this.labels.length; ++i) {
    if (this.labels[i].name === maybeName) this.raise(expr.start, "Label '" + maybeName + "' is already declared");
  }var kind = this.type.isLoop ? "loop" : this.type === tt._switch ? "switch" : null;
  this.labels.push({ name: maybeName, kind: kind });
  node.body = this.parseStatement(true);
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};

pp.parseExpressionStatement = function (node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp.parseBlock = function (allowStrict) {
  var node = this.startNode(),
      first = true,
      oldStrict = undefined;
  node.body = [];
  this.expect(tt.braceL);
  while (!this.eat(tt.braceR)) {
    var stmt = this.parseStatement(true);
    node.body.push(stmt);
    if (first && allowStrict && this.isUseStrict(stmt)) {
      oldStrict = this.strict;
      this.setStrict(this.strict = true);
    }
    first = false;
  }
  if (oldStrict === false) this.setStrict(false);
  return this.finishNode(node, "BlockStatement");
};

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp.parseFor = function (node, init) {
  node.init = init;
  this.expect(tt.semi);
  node.test = this.type === tt.semi ? null : this.parseExpression();
  this.expect(tt.semi);
  node.update = this.type === tt.parenR ? null : this.parseExpression();
  this.expect(tt.parenR);
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp.parseForIn = function (node, init) {
  var type = this.type === tt._in ? "ForInStatement" : "ForOfStatement";
  this.next();
  node.left = init;
  node.right = this.parseExpression();
  this.expect(tt.parenR);
  node.body = this.parseStatement(false);
  this.labels.pop();
  return this.finishNode(node, type);
};

// Parse a list of variable declarations.

pp.parseVar = function (node, isFor, kind) {
  node.declarations = [];
  node.kind = kind.keyword;
  for (;;) {
    var decl = this.startNode();
    this.parseVarId(decl);
    if (this.eat(tt.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === tt._const && !(this.type === tt._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      this.unexpected();
    } else if (decl.id.type != "Identifier" && !(isFor && (this.type === tt._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(tt.comma)) break;
  }
  return node;
};

pp.parseVarId = function (decl) {
  decl.id = this.parseBindingAtom();
  this.checkLVal(decl.id, true);
};

// Parse a function declaration or literal (depending on the
// `isStatement` parameter).

pp.parseFunction = function (node, isStatement, allowExpressionBody) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) node.generator = this.eat(tt.star);
  if (isStatement || this.type === tt.name) node.id = this.parseIdent();
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody);
  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
};

pp.parseFunctionParams = function (node) {
  this.expect(tt.parenL);
  node.params = this.parseBindingList(tt.parenR, false, false);
};

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp.parseClass = function (node, isStatement) {
  this.next();
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(tt.braceL);
  while (!this.eat(tt.braceR)) {
    if (this.eat(tt.semi)) continue;
    var method = this.startNode();
    var isGenerator = this.eat(tt.star);
    var isMaybeStatic = this.type === tt.name && this.value === "static";
    this.parsePropertyName(method);
    method["static"] = isMaybeStatic && this.type !== tt.parenL;
    if (method["static"]) {
      if (isGenerator) this.unexpected();
      isGenerator = this.eat(tt.star);
      this.parsePropertyName(method);
    }
    method.kind = "method";
    if (!method.computed) {
      var key = method.key;

      var isGetSet = false;
      if (!isGenerator && key.type === "Identifier" && this.type !== tt.parenL && (key.name === "get" || key.name === "set")) {
        isGetSet = true;
        method.kind = key.name;
        key = this.parsePropertyName(method);
      }
      if (!method["static"] && (key.type === "Identifier" && key.name === "constructor" || key.type === "Literal" && key.value === "constructor")) {
        if (hadConstructor) this.raise(key.start, "Duplicate constructor in the same class");
        if (isGetSet) this.raise(key.start, "Constructor can't have get/set modifier");
        if (isGenerator) this.raise(key.start, "Constructor can't be a generator");
        method.kind = "constructor";
        hadConstructor = true;
      }
    }
    this.parseClassMethod(classBody, method, isGenerator);
  }
  node.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};

pp.parseClassMethod = function (classBody, method, isGenerator) {
  method.value = this.parseMethod(isGenerator);
  classBody.body.push(this.finishNode(method, "MethodDefinition"));
};

pp.parseClassId = function (node, isStatement) {
  node.id = this.type === tt.name ? this.parseIdent() : isStatement ? this.unexpected() : null;
};

pp.parseClassSuper = function (node) {
  node.superClass = this.eat(tt._extends) ? this.parseExprSubscripts() : null;
};

// Parses module export declaration.

pp.parseExport = function (node) {
  this.next();
  // export * from '...'
  if (this.eat(tt.star)) {
    this.expectContextual("from");
    node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration");
  }
  if (this.eat(tt._default)) {
    // export default ...
    var expr = this.parseMaybeAssign();
    var needsSemi = true;
    if (expr.type == "FunctionExpression" || expr.type == "ClassExpression") {
      needsSemi = false;
      if (expr.id) {
        expr.type = expr.type == "FunctionExpression" ? "FunctionDeclaration" : "ClassDeclaration";
      }
    }
    node.declaration = expr;
    if (needsSemi) this.semicolon();
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  // export var|const|let|function|class ...
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(true);
    node.specifiers = [];
    node.source = null;
  } else {
    // export { x, y as z } [from '...']
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers();
    if (this.eatContextual("from")) {
      node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected();
    } else {
      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};

pp.shouldParseExportStatement = function () {
  return this.type.keyword;
};

// Parses a comma-separated list of module exports.

pp.parseExportSpecifiers = function () {
  var nodes = [],
      first = true;
  // export { x, y as z } [from '...']
  this.expect(tt.braceL);
  while (!this.eat(tt.braceR)) {
    if (!first) {
      this.expect(tt.comma);
      if (this.afterTrailingComma(tt.braceR)) break;
    } else first = false;

    var node = this.startNode();
    node.local = this.parseIdent(this.type === tt._default);
    node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }
  return nodes;
};

// Parses import declaration.

pp.parseImport = function (node) {
  this.next();
  // import '...'
  if (this.type === tt.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
    node.kind = "";
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === tt.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};

// Parses a comma-separated list of module imports.

pp.parseImportSpecifiers = function () {
  var nodes = [],
      first = true;
  if (this.type === tt.name) {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLVal(node.local, true);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(tt.comma)) return nodes;
  }
  if (this.type === tt.star) {
    var node = this.startNode();
    this.next();
    this.expectContextual("as");
    node.local = this.parseIdent();
    this.checkLVal(node.local, true);
    nodes.push(this.finishNode(node, "ImportNamespaceSpecifier"));
    return nodes;
  }
  this.expect(tt.braceL);
  while (!this.eat(tt.braceR)) {
    if (!first) {
      this.expect(tt.comma);
      if (this.afterTrailingComma(tt.braceR)) break;
    } else first = false;

    var node = this.startNode();
    node.imported = this.parseIdent(true);
    node.local = this.eatContextual("as") ? this.parseIdent() : node.imported;
    this.checkLVal(node.local, true);
    nodes.push(this.finishNode(node, "ImportSpecifier"));
  }
  return nodes;
};

},{"./state":13,"./tokentype":17,"./whitespace":19}],15:[function(_dereq_,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.__esModule = true;
// The algorithm used to determine whether a regexp can appear at a
// given point in the program is loosely based on sweet.js' approach.
// See https://github.com/mozilla/sweet.js/wiki/design

var Parser = _dereq_("./state").Parser;

var tt = _dereq_("./tokentype").types;

var lineBreak = _dereq_("./whitespace").lineBreak;

var TokContext = exports.TokContext = function TokContext(token, isExpr, preserveSpace, override) {
  _classCallCheck(this, TokContext);

  this.token = token;
  this.isExpr = isExpr;
  this.preserveSpace = preserveSpace;
  this.override = override;
};

var types = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", true),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function (p) {
    return p.readTmplToken();
  }),
  f_expr: new TokContext("function", true)
};

exports.types = types;
var pp = Parser.prototype;

pp.initialContext = function () {
  return [types.b_stat];
};

pp.braceIsBlock = function (prevType) {
  var parent = undefined;
  if (prevType === tt.colon && (parent = this.curContext()).token == "{") return !parent.isExpr;
  if (prevType === tt._return) return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  if (prevType === tt._else || prevType === tt.semi || prevType === tt.eof) return true;
  if (prevType == tt.braceL) return this.curContext() === types.b_stat;
  return !this.exprAllowed;
};

pp.updateContext = function (prevType) {
  var update = undefined,
      type = this.type;
  if (type.keyword && prevType == tt.dot) this.exprAllowed = false;else if (update = type.updateContext) update.call(this, prevType);else this.exprAllowed = type.beforeExpr;
};

// Token-specific context update code

tt.parenR.updateContext = tt.braceR.updateContext = function () {
  if (this.context.length == 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types.b_stat && this.curContext() === types.f_expr) {
    this.context.pop();
    this.exprAllowed = false;
  } else if (out === types.b_tmpl) {
    this.exprAllowed = true;
  } else {
    this.exprAllowed = !out.isExpr;
  }
};

tt.braceL.updateContext = function (prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
  this.exprAllowed = true;
};

tt.dollarBraceL.updateContext = function () {
  this.context.push(types.b_tmpl);
  this.exprAllowed = true;
};

tt.parenL.updateContext = function (prevType) {
  var statementParens = prevType === tt._if || prevType === tt._for || prevType === tt._with || prevType === tt._while;
  this.context.push(statementParens ? types.p_stat : types.p_expr);
  this.exprAllowed = true;
};

tt.incDec.updateContext = function () {};

tt._function.updateContext = function () {
  if (this.curContext() !== types.b_stat) this.context.push(types.f_expr);
  this.exprAllowed = false;
};

tt.backQuote.updateContext = function () {
  if (this.curContext() === types.q_tmpl) this.context.pop();else this.context.push(types.q_tmpl);
  this.exprAllowed = false;
};

// tokExprAllowed stays unchanged

},{"./state":13,"./tokentype":17,"./whitespace":19}],16:[function(_dereq_,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.__esModule = true;

var _identifier = _dereq_("./identifier");

var isIdentifierStart = _identifier.isIdentifierStart;
var isIdentifierChar = _identifier.isIdentifierChar;

var _tokentype = _dereq_("./tokentype");

var tt = _tokentype.types;
var keywordTypes = _tokentype.keywords;

var Parser = _dereq_("./state").Parser;

var SourceLocation = _dereq_("./location").SourceLocation;

var _whitespace = _dereq_("./whitespace");

var lineBreak = _whitespace.lineBreak;
var lineBreakG = _whitespace.lineBreakG;
var isNewLine = _whitespace.isNewLine;
var nonASCIIwhitespace = _whitespace.nonASCIIwhitespace;

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = exports.Token = function Token(p) {
  _classCallCheck(this, Token);

  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations) this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
  if (p.options.ranges) this.range = [p.start, p.end];
};

// ## Tokenizer

var pp = Parser.prototype;

// Are we running under Rhino?
var isRhino = typeof Packages !== "undefined";

// Move to the next token

pp.next = function () {
  if (this.options.onToken) this.options.onToken(new Token(this));

  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};

pp.getToken = function () {
  this.next();
  return new Token(this);
};

// If we're in an ES6 environment, make parsers iterable
if (typeof Symbol !== "undefined") pp[Symbol.iterator] = function () {
  var self = this;
  return { next: function next() {
      var token = self.getToken();
      return {
        done: token.type === tt.eof,
        value: token
      };
    } };
};

// Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).

pp.setStrict = function (strict) {
  this.strict = strict;
  if (this.type !== tt.num && this.type !== tt.string) return;
  this.pos = this.start;
  if (this.options.locations) {
    while (this.pos < this.lineStart) {
      this.lineStart = this.input.lastIndexOf("\n", this.lineStart - 2) + 1;
      --this.curLine;
    }
  }
  this.nextToken();
};

pp.curContext = function () {
  return this.context[this.context.length - 1];
};

// Read a single token, updating the parser object's token-related
// properties.

pp.nextToken = function () {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) this.skipSpace();

  this.start = this.pos;
  if (this.options.locations) this.startLoc = this.curPosition();
  if (this.pos >= this.input.length) return this.finishToken(tt.eof);

  if (curContext.override) return curContext.override(this);else this.readToken(this.fullCharCodeAtPos());
};

pp.readToken = function (code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */) return this.readWord();

  return this.getTokenFromCode(code);
};

pp.fullCharCodeAtPos = function () {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 55295 || code >= 57344) return code;
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 56613888;
};

pp.skipBlockComment = function () {
  var startLoc = this.options.onComment && this.options.locations && this.curPosition();
  var start = this.pos,
      end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) this.raise(this.pos - 2, "Unterminated comment");
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match = undefined;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this.curLine;
      this.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment) this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.options.locations && this.curPosition());
};

pp.skipLineComment = function (startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.options.locations && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
    ++this.pos;
    ch = this.input.charCodeAt(this.pos);
  }
  if (this.options.onComment) this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.options.locations && this.curPosition());
};

// Called at the start of the parse and after every token. Skips
// whitespace and comments, and.

pp.skipSpace = function () {
  while (this.pos < this.input.length) {
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 32) {
      // ' '
      ++this.pos;
    } else if (ch === 13) {
      ++this.pos;
      var next = this.input.charCodeAt(this.pos);
      if (next === 10) {
        ++this.pos;
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
    } else if (ch === 10 || ch === 8232 || ch === 8233) {
      ++this.pos;
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
    } else if (ch > 8 && ch < 14) {
      ++this.pos;
    } else if (ch === 47) {
      // '/'
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 42) {
        // '*'
        this.skipBlockComment();
      } else if (next === 47) {
        // '/'
        this.skipLineComment(2);
      } else break;
    } else if (ch === 160) {
      // '\xa0'
      ++this.pos;
    } else if (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
      ++this.pos;
    } else {
      break;
    }
  }
};

// Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.

pp.finishToken = function (type, val) {
  this.end = this.pos;
  if (this.options.locations) this.endLoc = this.curPosition();
  var prevType = this.type;
  this.type = type;
  this.value = val;

  this.updateContext(prevType);
};

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp.readToken_dot = function () {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) return this.readNumber(true);
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    // 46 = dot '.'
    this.pos += 3;
    return this.finishToken(tt.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(tt.dot);
  }
};

pp.readToken_slash = function () {
  // '/'
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;return this.readRegexp();
  }
  if (next === 61) return this.finishOp(tt.assign, 2);
  return this.finishOp(tt.slash, 1);
};

pp.readToken_mult_modulo = function (code) {
  // '%*'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) return this.finishOp(tt.assign, 2);
  return this.finishOp(code === 42 ? tt.star : tt.modulo, 1);
};

pp.readToken_pipe_amp = function (code) {
  // '|&'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) return this.finishOp(code === 124 ? tt.logicalOR : tt.logicalAND, 2);
  if (next === 61) return this.finishOp(tt.assign, 2);
  return this.finishOp(code === 124 ? tt.bitwiseOR : tt.bitwiseAND, 1);
};

pp.readToken_caret = function () {
  // '^'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) return this.finishOp(tt.assign, 2);
  return this.finishOp(tt.bitwiseXOR, 1);
};

pp.readToken_plus_min = function (code) {
  // '+-'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next == 45 && this.input.charCodeAt(this.pos + 2) == 62 && lineBreak.test(this.input.slice(this.lastTokEnd, this.pos))) {
      // A `-->` line comment
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(tt.incDec, 2);
  }
  if (next === 61) return this.finishOp(tt.assign, 2);
  return this.finishOp(tt.plusMin, 1);
};

pp.readToken_lt_gt = function (code) {
  // '<>'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) return this.finishOp(tt.assign, size + 1);
    return this.finishOp(tt.bitShift, size);
  }
  if (next == 33 && code == 60 && this.input.charCodeAt(this.pos + 2) == 45 && this.input.charCodeAt(this.pos + 3) == 45) {
    if (this.inModule) this.unexpected();
    // `<!--`, an XML-style comment that should be interpreted as a line comment
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) size = this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2;
  return this.finishOp(tt.relational, size);
};

pp.readToken_eq_excl = function (code) {
  // '=!'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) return this.finishOp(tt.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    // '=>'
    this.pos += 2;
    return this.finishToken(tt.arrow);
  }
  return this.finishOp(code === 61 ? tt.eq : tt.prefix, 1);
};

pp.getTokenFromCode = function (code) {
  switch (code) {
    // The interpretation of a dot depends on whether it is followed
    // by a digit or another two dots.
    case 46:
      // '.'
      return this.readToken_dot();

    // Punctuation tokens.
    case 40:
      ++this.pos;return this.finishToken(tt.parenL);
    case 41:
      ++this.pos;return this.finishToken(tt.parenR);
    case 59:
      ++this.pos;return this.finishToken(tt.semi);
    case 44:
      ++this.pos;return this.finishToken(tt.comma);
    case 91:
      ++this.pos;return this.finishToken(tt.bracketL);
    case 93:
      ++this.pos;return this.finishToken(tt.bracketR);
    case 123:
      ++this.pos;return this.finishToken(tt.braceL);
    case 125:
      ++this.pos;return this.finishToken(tt.braceR);
    case 58:
      ++this.pos;return this.finishToken(tt.colon);
    case 63:
      ++this.pos;return this.finishToken(tt.question);

    case 96:
      // '`'
      if (this.options.ecmaVersion < 6) break;
      ++this.pos;
      return this.finishToken(tt.backQuote);

    case 48:
      // '0'
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) return this.readRadixNumber(16); // '0x', '0X' - hex number
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) return this.readRadixNumber(8); // '0o', '0O' - octal number
        if (next === 98 || next === 66) return this.readRadixNumber(2); // '0b', '0B' - binary number
      }
    // Anything else beginning with a digit is an integer, octal
    // number, or float.
    case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
      // 1-9
      return this.readNumber(false);

    // Quotes produce strings.
    case 34:case 39:
      // '"', "'"
      return this.readString(code);

    // Operators are parsed inline in tiny state machines. '=' (61) is
    // often referred to. `finishOp` simply skips the amount of
    // characters it is given as second argument, and returns a token
    // of the type given by its first argument.

    case 47:
      // '/'
      return this.readToken_slash();

    case 37:case 42:
      // '%*'
      return this.readToken_mult_modulo(code);

    case 124:case 38:
      // '|&'
      return this.readToken_pipe_amp(code);

    case 94:
      // '^'
      return this.readToken_caret();

    case 43:case 45:
      // '+-'
      return this.readToken_plus_min(code);

    case 60:case 62:
      // '<>'
      return this.readToken_lt_gt(code);

    case 61:case 33:
      // '=!'
      return this.readToken_eq_excl(code);

    case 126:
      // '~'
      return this.finishOp(tt.prefix, 1);
  }

  this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
};

pp.finishOp = function (type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};

var regexpUnicodeSupport = false;
try {
  new RegExp("￿", "u");regexpUnicodeSupport = true;
} catch (e) {}

// Parse a regular expression. Some context-awareness is necessary,
// since a '/' inside a '[]' set does not end the expression.

pp.readRegexp = function () {
  var escaped = undefined,
      inClass = undefined,
      start = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) this.raise(start, "Unterminated regular expression");
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) this.raise(start, "Unterminated regular expression");
    if (!escaped) {
      if (ch === "[") inClass = true;else if (ch === "]" && inClass) inClass = false;else if (ch === "/" && !inClass) break;
      escaped = ch === "\\";
    } else escaped = false;
    ++this.pos;
  }
  var content = this.input.slice(start, this.pos);
  ++this.pos;
  // Need to use `readWord1` because '\uXXXX' sequences are allowed
  // here (don't ask).
  var mods = this.readWord1();
  var tmp = content;
  if (mods) {
    var validFlags = /^[gmsiy]*$/;
    if (this.options.ecmaVersion >= 6) validFlags = /^[gmsiyu]*$/;
    if (!validFlags.test(mods)) this.raise(start, "Invalid regular expression flag");
    if (mods.indexOf("u") >= 0 && !regexpUnicodeSupport) {
      // Replace each astral symbol and every Unicode escape sequence that
      // possibly represents an astral symbol or a paired surrogate with a
      // single ASCII symbol to avoid throwing on regular expressions that
      // are only valid in combination with the `/u` flag.
      // Note: replacing with the ASCII symbol `x` might cause false
      // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
      // perfectly valid pattern that is equivalent to `[a-b]`, but it would
      // be replaced by `[x-b]` which throws an error.
      tmp = tmp.replace(/\\u([a-fA-F0-9]{4})|\\u\{([0-9a-fA-F]+)\}|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x");
    }
  }
  // Detect invalid regular expressions.
  var value = null;
  // Rhino's regular expression parser is flaky and throws uncatchable exceptions,
  // so don't do detection if we are running under Rhino
  if (!isRhino) {
    try {
      new RegExp(tmp);
    } catch (e) {
      if (e instanceof SyntaxError) this.raise(start, "Error parsing regular expression: " + e.message);
      this.raise(e);
    }
    // Get a regular expression object for this pattern-flag pair, or `null` in
    // case the current environment doesn't support the flags it uses.
    try {
      value = new RegExp(content, mods);
    } catch (err) {}
  }
  return this.finishToken(tt.regexp, { pattern: content, flags: mods, value: value });
};

// Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.

pp.readInt = function (radix, len) {
  var start = this.pos,
      total = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    var code = this.input.charCodeAt(this.pos),
        val = undefined;
    if (code >= 97) val = code - 97 + 10; // a
    else if (code >= 65) val = code - 65 + 10; // A
    else if (code >= 48 && code <= 57) val = code - 48; // 0-9
    else val = Infinity;
    if (val >= radix) break;
    ++this.pos;
    total = total * radix + val;
  }
  if (this.pos === start || len != null && this.pos - start !== len) return null;

  return total;
};

pp.readRadixNumber = function (radix) {
  this.pos += 2; // 0x
  var val = this.readInt(radix);
  if (val == null) this.raise(this.start + 2, "Expected number in radix " + radix);
  if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
  return this.finishToken(tt.num, val);
};

// Read an integer, octal integer, or floating-point number.

pp.readNumber = function (startsWithDot) {
  var start = this.pos,
      isFloat = false,
      octal = this.input.charCodeAt(this.pos) === 48;
  if (!startsWithDot && this.readInt(10) === null) this.raise(start, "Invalid number");
  if (this.input.charCodeAt(this.pos) === 46) {
    ++this.pos;
    this.readInt(10);
    isFloat = true;
  }
  var next = this.input.charCodeAt(this.pos);
  if (next === 69 || next === 101) {
    // 'eE'
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) ++this.pos; // '+-'
    if (this.readInt(10) === null) this.raise(start, "Invalid number");
    isFloat = true;
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");

  var str = this.input.slice(start, this.pos),
      val = undefined;
  if (isFloat) val = parseFloat(str);else if (!octal || str.length === 1) val = parseInt(str, 10);else if (/[89]/.test(str) || this.strict) this.raise(start, "Invalid number");else val = parseInt(str, 8);
  return this.finishToken(tt.num, val);
};

// Read a string value, interpreting backslash-escapes.

pp.readCodePoint = function () {
  var ch = this.input.charCodeAt(this.pos),
      code = undefined;

  if (ch === 123) {
    if (this.options.ecmaVersion < 6) this.unexpected();
    ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 1114111) this.unexpected();
  } else {
    code = this.readHexChar(4);
  }
  return code;
};

function codePointToString(code) {
  // UTF-16 Decoding
  if (code <= 65535) {
    return String.fromCharCode(code);
  }return String.fromCharCode((code - 65536 >> 10) + 55296, (code - 65536 & 1023) + 56320);
}

pp.readString = function (quote) {
  var out = "",
      chunkStart = ++this.pos;
  for (;;) {
    if (this.pos >= this.input.length) this.raise(this.start, "Unterminated string constant");
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) break;
    if (ch === 92) {
      // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar();
      chunkStart = this.pos;
    } else {
      if (isNewLine(ch)) this.raise(this.start, "Unterminated string constant");
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(tt.string, out);
};

// Reads template string tokens.

pp.readTmplToken = function () {
  var out = "",
      chunkStart = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) this.raise(this.start, "Unterminated template");
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
      // '`', '${'
      if (this.pos === this.start && this.type === tt.template) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(tt.dollarBraceL);
        } else {
          ++this.pos;
          return this.finishToken(tt.backQuote);
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(tt.template, out);
    }
    if (ch === 92) {
      // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar();
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
        out += "\n";
      } else {
        out += String.fromCharCode(ch);
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};

// Used to read escaped characters

pp.readEscapedChar = function () {
  var ch = this.input.charCodeAt(++this.pos);
  var octal = /^[0-7]+/.exec(this.input.slice(this.pos, this.pos + 3));
  if (octal) octal = octal[0];
  while (octal && parseInt(octal, 8) > 255) octal = octal.slice(0, -1);
  if (octal === "0") octal = null;
  ++this.pos;
  if (octal) {
    if (this.strict) this.raise(this.pos - 2, "Octal literal in strict mode");
    this.pos += octal.length - 1;
    return String.fromCharCode(parseInt(octal, 8));
  } else {
    switch (ch) {
      case 110:
        return "\n"; // 'n' -> '\n'
      case 114:
        return "\r"; // 'r' -> '\r'
      case 120:
        return String.fromCharCode(this.readHexChar(2)); // 'x'
      case 117:
        return codePointToString(this.readCodePoint()); // 'u'
      case 116:
        return "\t"; // 't' -> '\t'
      case 98:
        return "\b"; // 'b' -> '\b'
      case 118:
        return "\u000b"; // 'v' -> '\u000b'
      case 102:
        return "\f"; // 'f' -> '\f'
      case 48:
        return "\u0000"; // 0 -> '\0'
      case 13:
        if (this.input.charCodeAt(this.pos) === 10) ++this.pos; // '\r\n'
      case 10:
        // ' \n'
        if (this.options.locations) {
          this.lineStart = this.pos;++this.curLine;
        }
        return "";
      default:
        return String.fromCharCode(ch);
    }
  }
};

// Used to read character escape sequences ('\x', '\u', '\U').

pp.readHexChar = function (len) {
  var n = this.readInt(16, len);
  if (n === null) this.raise(this.start, "Bad character escape sequence");
  return n;
};

// Used to signal to callers of `readWord1` whether the word
// contained any escape sequences. This is needed because words with
// escape sequences must not be interpreted as keywords.

var containsEsc;

// Read an identifier, and return it as a string. Sets `containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.

pp.readWord1 = function () {
  containsEsc = false;
  var word = "",
      first = true,
      chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      // "\"
      containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) != 117) // "u"
        this.raise(this.pos, "Expecting Unicode escape sequence \\uXXXX");
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) this.raise(escStart, "Invalid Unicode escape");
      word += codePointToString(esc);
      chunkStart = this.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};

// Read an identifier or keyword token. Will check for reserved
// words when necessary.

pp.readWord = function () {
  var word = this.readWord1();
  var type = tt.name;
  if ((this.options.ecmaVersion >= 6 || !containsEsc) && this.isKeyword(word)) type = keywordTypes[word];
  return this.finishToken(type, word);
};

},{"./identifier":7,"./location":8,"./state":13,"./tokentype":17,"./whitespace":19}],17:[function(_dereq_,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.__esModule = true;
// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var TokenType = exports.TokenType = function TokenType(label) {
  var conf = arguments[1] === undefined ? {} : arguments[1];

  _classCallCheck(this, TokenType);

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};

function binop(name, prec) {
  return new TokenType(name, { beforeExpr: true, binop: prec });
}
var beforeExpr = { beforeExpr: true },
    startsExpr = { startsExpr: true };

var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("prefix", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=", 6),
  relational: binop("</>", 7),
  bitShift: binop("<</>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10)
};

exports.types = types;
// Map keyword names to token types.

var keywords = {};

exports.keywords = keywords;
// Succinct definitions of keyword token types
function kw(name) {
  var options = arguments[1] === undefined ? {} : arguments[1];

  options.keyword = name;
  keywords[name] = types["_" + name] = new TokenType(name, options);
}

kw("break");
kw("case", beforeExpr);
kw("catch");
kw("continue");
kw("debugger");
kw("default");
kw("do", { isLoop: true });
kw("else", beforeExpr);
kw("finally");
kw("for", { isLoop: true });
kw("function", startsExpr);
kw("if");
kw("return", beforeExpr);
kw("switch");
kw("throw", beforeExpr);
kw("try");
kw("var");
kw("let");
kw("const");
kw("while", { isLoop: true });
kw("with");
kw("new", { beforeExpr: true, startsExpr: true });
kw("this", startsExpr);
kw("super", startsExpr);
kw("class");
kw("extends", beforeExpr);
kw("export");
kw("import");
kw("yield", { beforeExpr: true, startsExpr: true });
kw("null", startsExpr);
kw("true", startsExpr);
kw("false", startsExpr);
kw("in", { beforeExpr: true, binop: 7 });
kw("instanceof", { beforeExpr: true, binop: 7 });
kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true });
kw("void", { beforeExpr: true, prefix: true, startsExpr: true });
kw("delete", { beforeExpr: true, prefix: true, startsExpr: true });

},{}],18:[function(_dereq_,module,exports){
"use strict";

exports.isArray = isArray;

// Checks if an object has a property.

exports.has = has;
exports.__esModule = true;

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

function has(obj, propName) {
  return Object.prototype.hasOwnProperty.call(obj, propName);
}

},{}],19:[function(_dereq_,module,exports){
"use strict";

exports.isNewLine = isNewLine;
exports.__esModule = true;
// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/;
exports.lineBreak = lineBreak;
var lineBreakG = new RegExp(lineBreak.source, "g");

exports.lineBreakG = lineBreakG;

function isNewLine(code) {
  return code === 10 || code === 13 || code === 8232 || code == 8233;
}

var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
exports.nonASCIIwhitespace = nonASCIIwhitespace;

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],33:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.acorn || (g.acorn = {})).walk = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// AST walker module for Mozilla Parser API compatible trees

// A simple walk is one where you simply specify callbacks to be
// called on specific nodes. The last two arguments are optional. A
// simple use would be
//
//     walk.simple(myTree, {
//         Expression: function(node) { ... }
//     });
//
// to do something with all expressions. All Parser API node types
// can be used to identify node types, as well as Expression,
// Statement, and ScopeBody, which denote categories of nodes.
//
// The base argument can be used to pass a custom (recursive)
// walker, and state can be used to give this walked an initial
// state.

exports.simple = simple;

// An ancestor walk builds up an array of ancestor nodes (including
// the current node) and passes them to the callback as the state parameter.
exports.ancestor = ancestor;

// A recursive walk is one where your functions override the default
// walkers. They can modify and replace the state parameter that's
// threaded through the walk, and can opt how and whether to walk
// their child nodes (by calling their third argument on these
// nodes).
exports.recursive = recursive;

// Find a node with a given start, end, and type (all are optional,
// null can be used as wildcard). Returns a {node, state} object, or
// undefined when it doesn't find a matching node.
exports.findNodeAt = findNodeAt;

// Find the innermost node of a given type that contains the given
// position. Interface similar to findNodeAt.
exports.findNodeAround = findNodeAround;

// Find the outermost matching node after a given position.
exports.findNodeAfter = findNodeAfter;

// Find the outermost matching node before a given position.
exports.findNodeBefore = findNodeBefore;

// Used to create a custom walker. Will fill in all missing node
// type properties with the defaults.
exports.make = make;
exports.__esModule = true;

function simple(node, visitors, base, state) {
  if (!base) base = exports.base;(function c(node, st, override) {
    var type = override || node.type,
        found = visitors[type];
    base[type](node, st, c);
    if (found) found(node, st);
  })(node, state);
}

function ancestor(node, visitors, base, state) {
  if (!base) base = exports.base;
  if (!state) state = [];(function c(node, st, override) {
    var type = override || node.type,
        found = visitors[type];
    if (node != st[st.length - 1]) {
      st = st.slice();
      st.push(node);
    }
    base[type](node, st, c);
    if (found) found(node, st);
  })(node, state);
}

function recursive(node, state, funcs, base) {
  var visitor = funcs ? exports.make(funcs, base) : base;(function c(node, st, override) {
    visitor[override || node.type](node, st, c);
  })(node, state);
}

function makeTest(test) {
  if (typeof test == "string") {
    return function (type) {
      return type == test;
    };
  } else if (!test) {
    return function () {
      return true;
    };
  } else {
    return test;
  }
}

var Found = function Found(node, state) {
  _classCallCheck(this, Found);

  this.node = node;this.state = state;
};

function findNodeAt(node, start, end, test, base, state) {
  test = makeTest(test);
  if (!base) base = exports.base;
  try {
    ;(function c(node, st, override) {
      var type = override || node.type;
      if ((start == null || node.start <= start) && (end == null || node.end >= end)) base[type](node, st, c);
      if (test(type, node) && (start == null || node.start == start) && (end == null || node.end == end)) throw new Found(node, st);
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }throw e;
  }
}

function findNodeAround(node, pos, test, base, state) {
  test = makeTest(test);
  if (!base) base = exports.base;
  try {
    ;(function c(node, st, override) {
      var type = override || node.type;
      if (node.start > pos || node.end < pos) {
        return;
      }base[type](node, st, c);
      if (test(type, node)) throw new Found(node, st);
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }throw e;
  }
}

function findNodeAfter(node, pos, test, base, state) {
  test = makeTest(test);
  if (!base) base = exports.base;
  try {
    ;(function c(node, st, override) {
      if (node.end < pos) {
        return;
      }var type = override || node.type;
      if (node.start >= pos && test(type, node)) throw new Found(node, st);
      base[type](node, st, c);
    })(node, state);
  } catch (e) {
    if (e instanceof Found) {
      return e;
    }throw e;
  }
}

function findNodeBefore(node, pos, test, base, state) {
  test = makeTest(test);
  if (!base) base = exports.base;
  var max = undefined;(function c(node, st, override) {
    if (node.start > pos) {
      return;
    }var type = override || node.type;
    if (node.end <= pos && (!max || max.node.end < node.end) && test(type, node)) max = new Found(node, st);
    base[type](node, st, c);
  })(node, state);
  return max;
}

function make(funcs, base) {
  if (!base) base = exports.base;
  var visitor = {};
  for (var type in base) visitor[type] = base[type];
  for (var type in funcs) visitor[type] = funcs[type];
  return visitor;
}

function skipThrough(node, st, c) {
  c(node, st);
}
function ignore(_node, _st, _c) {}

// Node walkers.

var base = {};

exports.base = base;
base.Program = base.BlockStatement = function (node, st, c) {
  for (var i = 0; i < node.body.length; ++i) {
    c(node.body[i], st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression = function (node, st, c) {
  return c(node.expression, st, "Expression");
};
base.IfStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Statement");
  if (node.alternate) c(node.alternate, st, "Statement");
};
base.LabeledStatement = function (node, st, c) {
  return c(node.body, st, "Statement");
};
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function (node, st, c) {
  c(node.object, st, "Expression");
  c(node.body, st, "Statement");
};
base.SwitchStatement = function (node, st, c) {
  c(node.discriminant, st, "Expression");
  for (var i = 0; i < node.cases.length; ++i) {
    var cs = node.cases[i];
    if (cs.test) c(cs.test, st, "Expression");
    for (var j = 0; j < cs.consequent.length; ++j) {
      c(cs.consequent[j], st, "Statement");
    }
  }
};
base.ReturnStatement = base.YieldExpression = function (node, st, c) {
  if (node.argument) c(node.argument, st, "Expression");
};
base.ThrowStatement = base.SpreadElement = base.RestElement = function (node, st, c) {
  return c(node.argument, st, "Expression");
};
base.TryStatement = function (node, st, c) {
  c(node.block, st, "Statement");
  if (node.handler) c(node.handler.body, st, "ScopeBody");
  if (node.finalizer) c(node.finalizer, st, "Statement");
};
base.WhileStatement = base.DoWhileStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForStatement = function (node, st, c) {
  if (node.init) c(node.init, st, "ForInit");
  if (node.test) c(node.test, st, "Expression");
  if (node.update) c(node.update, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function (node, st, c) {
  c(node.left, st, "ForInit");
  c(node.right, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInit = function (node, st, c) {
  if (node.type == "VariableDeclaration") c(node, st);else c(node, st, "Expression");
};
base.DebuggerStatement = ignore;

base.FunctionDeclaration = function (node, st, c) {
  return c(node, st, "Function");
};
base.VariableDeclaration = function (node, st, c) {
  for (var i = 0; i < node.declarations.length; ++i) {
    var decl = node.declarations[i];
    if (decl.init) c(decl.init, st, "Expression");
  }
};

base.Function = function (node, st, c) {
  return c(node.body, st, "ScopeBody");
};
base.ScopeBody = function (node, st, c) {
  return c(node, st, "Statement");
};

base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = base.ArrayPattern = function (node, st, c) {
  for (var i = 0; i < node.elements.length; ++i) {
    var elt = node.elements[i];
    if (elt) c(elt, st, "Expression");
  }
};
base.ObjectExpression = base.ObjectPattern = function (node, st, c) {
  for (var i = 0; i < node.properties.length; ++i) {
    c(node.properties[i], st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = base.TemplateLiteral = function (node, st, c) {
  for (var i = 0; i < node.expressions.length; ++i) {
    c(node.expressions[i], st, "Expression");
  }
};
base.UnaryExpression = base.UpdateExpression = function (node, st, c) {
  c(node.argument, st, "Expression");
};
base.BinaryExpression = base.AssignmentExpression = base.AssignmentPattern = base.LogicalExpression = function (node, st, c) {
  c(node.left, st, "Expression");
  c(node.right, st, "Expression");
};
base.ConditionalExpression = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Expression");
  c(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function (node, st, c) {
  c(node.callee, st, "Expression");
  if (node.arguments) for (var i = 0; i < node.arguments.length; ++i) {
    c(node.arguments[i], st, "Expression");
  }
};
base.MemberExpression = function (node, st, c) {
  c(node.object, st, "Expression");
  if (node.computed) c(node.property, st, "Expression");
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function (node, st, c) {
  return c(node.declaration, st);
};
base.ImportDeclaration = function (node, st, c) {
  for (var i = 0; i < node.specifiers.length; i++) {
    c(node.specifiers[i], st);
  }
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.Literal = ignore;

base.TaggedTemplateExpression = function (node, st, c) {
  c(node.tag, st, "Expression");
  c(node.quasi, st);
};
base.ClassDeclaration = base.ClassExpression = function (node, st, c) {
  if (node.superClass) c(node.superClass, st, "Expression");
  for (var i = 0; i < node.body.body.length; i++) {
    c(node.body.body[i], st);
  }
};
base.MethodDefinition = base.Property = function (node, st, c) {
  if (node.computed) c(node.key, st, "Expression");
  c(node.value, st, "Expression");
};
base.ComprehensionExpression = function (node, st, c) {
  for (var i = 0; i < node.blocks.length; i++) {
    c(node.blocks[i].right, st, "Expression");
  }c(node.body, st, "Expression");
};

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],34:[function(require,module,exports){
/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "keygen": true,
  "link": true,
  "menuitem": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};

},{}],35:[function(require,module,exports){
'use strict';

var detect = require('acorn-globals');
var acorn = require('acorn');
var walk = require('acorn/dist/walk');

// polyfill for https://github.com/marijnh/acorn/pull/231
walk.base.ExportNamedDeclaration = walk.base.ExportDefaultDeclaration = function (node, st, c) {
  return c(node.declaration, st);
};
walk.base.ImportDefaultSpecifier = walk.base.ImportNamespaceSpecifier = function () {};

// hacky fix for https://github.com/marijnh/acorn/issues/227
function reallyParse(source) {
  try {
    return acorn.parse(source, {
      ecmaVersion: 5,
      allowReturnOutsideFunction: true
    });
  } catch (ex) {
    if (ex.name !== 'SyntaxError') {
      throw ex;
    }
    return acorn.parse(source, {
      ecmaVersion: 6,
      allowReturnOutsideFunction: true
    });
  }
}

module.exports = addWith

/**
 * Mimic `with` as far as possible but at compile time
 *
 * @param {String} obj The object part of a with expression
 * @param {String} src The body of the with expression
 * @param {Array.<String>} exclude A list of variable names to explicitly exclude
 */
function addWith(obj, src, exclude) {
  obj = obj + ''
  src = src + ''
  exclude = exclude || []
  exclude = exclude.concat(detect(obj).map(function (global) { return global.name; }))
  var vars = detect(src).map(function (global) { return global.name; })
    .filter(function (v) {
      return exclude.indexOf(v) === -1
    })

  if (vars.length === 0) return src

  var declareLocal = ''
  var local = 'locals_for_with'
  var result = 'result_of_with'
  if (/^[a-zA-Z0-9$_]+$/.test(obj)) {
    local = obj
  } else {
    while (vars.indexOf(local) != -1 || exclude.indexOf(local) != -1) {
      local += '_'
    }
    declareLocal = 'var ' + local + ' = (' + obj + ')'
  }
  while (vars.indexOf(result) != -1 || exclude.indexOf(result) != -1) {
    result += '_'
  }

  var inputVars = vars.map(function (v) {
    return JSON.stringify(v) + ' in ' + local + '?' +
      local + '.' + v + ':' +
      'typeof ' + v + '!=="undefined"?' + v + ':undefined'
  })

  src = '(function (' + vars.join(', ') + ') {' +
    src +
    '}.call(this' + inputVars.map(function (v) { return ',' + v; }).join('') + '))'

  return ';' + declareLocal + ';' + unwrapReturns(src, result) + ';'
}

/**
 * Take a self calling function, and unwrap it such that return inside the function
 * results in return outside the function
 *
 * @param {String} src    Some JavaScript code representing a self-calling function
 * @param {String} result A temporary variable to store the result in
 */
function unwrapReturns(src, result) {
  var originalSource = src
  var hasReturn = false
  var ast = reallyParse(src)
  var ref
  src = src.split('')

  // get a reference to the function that was inserted to add an inner context
  if ((ref = ast.body).length !== 1
   || (ref = ref[0]).type !== 'ExpressionStatement'
   || (ref = ref.expression).type !== 'CallExpression'
   || (ref = ref.callee).type !== 'MemberExpression' || ref.computed !== false || ref.property.name !== 'call'
   || (ref = ref.object).type !== 'FunctionExpression')
    throw new Error('AST does not seem to represent a self-calling function')
  var fn = ref

  walk.recursive(ast, null, {
    Function: function (node, st, c) {
      if (node === fn) {
        c(node.body, st, "ScopeBody");
      }
    },
    ReturnStatement: function (node) {
      hasReturn = true
      replace(node, 'return {value: ' + source(node.argument) + '};');
    }
  });
  function source(node) {
    return src.slice(node.start, node.end).join('')
  }
  function replace(node, str) {
    for (var i = node.start; i < node.end; i++) {
      src[i] = ''
    }
    src[node.start] = str
  }
  if (!hasReturn) return originalSource
  else return 'var ' + result + '=' + src.join('') + ';if (' + result + ') return ' + result + '.value'
}

},{"acorn":37,"acorn-globals":36,"acorn/dist/walk":38}],36:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"acorn":37,"acorn/dist/walk":38,"dup":31}],37:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"dup":32}],38:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"dup":33}]},{},[1])(1)
});
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.nextTick()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
                deferred.reject(new Error(
                    "Can't get fulfillment value from any promise, all " +
                    "promises were rejected."
                ));
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});
