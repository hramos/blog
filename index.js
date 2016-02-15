#!/usr/bin/env node

var glob = require("glob")
var fs = require("fs")
var toMarkdown = require("to-markdown")
var wget = require('wget');

var htmlToMarkdown = function() {
  glob("published/*.html", function (er, files) {
    for (var i=0; i<files.length; i++) {
      var file = files[i];

      var dateStrAndPermalink = file.match(/(\d{4}-\d{2}-\d{2})-(.*)(?=.html)/);
      var dateStr = dateStrAndPermalink[1];
      var permalink = dateStrAndPermalink[2];

      // Convert HTML files to Markdown
      var fileContents = fs.readFileSync(file, "utf8");
      var frontMatterAndContents = fileContents.match(/(---[\s\S]+---)([\s\S]+)/);
      var frontmatter = frontMatterAndContents[1];
      var contents = frontMatterAndContents[2];

      var markdown = toMarkdown(contents);
      var newFileContents = frontmatter + "\n" + markdown;

      var newFilename = "published/" + dateStr + "-" + permalink + ".markdown";
      fs.writeFileSync(newFilename, newFileContents);
    }
  })
}

var markdownToSubdirectories = function() {
  glob("published/*.m*d*", function (er, files) {
    for (var i=0; i<files.length; i++) {
      var file = files[i];

      var dateStrAndPermalink = file.match(/(\d{4}-\d{2}-\d{2})-(.*)(?=.markdown)/);
      var dateStr = dateStrAndPermalink[1];
      var permalink = dateStrAndPermalink[2];

      var newDir = "published/" + dateStr + "-" + permalink;

      var stat = fs.statSync(newDir);
      if (stat != undefined && !stat.isDirectory()) {
        fs.mkdirSync(newDir);
      }
      fs.renameSync(file, newDir + "/" + permalink + ".md");
    }
  })
}

function getMatches(string, regex, index) {
  index || (index = 1); // default to the first capturing group
  var matches = [];
  var match;
  while (match = regex.exec(string)) {
    matches.push(match[index]);
  }
  return matches;
}


// For each markdown file, find any hrefs to external hosts and download assets to local folder
var externalImagesToLocal = function() {
  glob("published/**/*.md", function (er, files) {
    for (var i=0; i<files.length; i++) {
      var file = files[i];
      var fileContents = fs.readFileSync(file, "utf8");

      // First, convert links to images to markdown.
      var urls = fileContents.match(/https?:\/\/c185824.r24.cf1.rackcdn.com\/([^)>\]]*[.jpe?g|.png])/g);
      var images = getMatches(fileContents, /https?:\/\/c185824.r24.cf1.rackcdn.com\/([^)>\]]*[.jpe?g|.png])/ig, 1)
      if (urls) {
        console.log(urls)
        var permalink = file.match(/\d{4}-\d{2}-\d{2}-.*\//);
        var directory = "published/" + permalink;

        for (var j=0; j<urls.length;j++) {
          var url = urls[j];

          var output = directory + images[j]
          console.log("I would download " + url + " to " + output)
          var download = wget.download(url, output, {});
          download.on('error', function(err) {
              console.log(err + ": " + url);
          });
        }
      }
    }
  });
}
