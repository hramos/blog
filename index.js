#!/usr/bin/env node

var glob = require("glob")
var fs = require("fs")
var toMarkdown = require("to-markdown")

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

// For each markdown file, find any hrefs to external hosts and download assets to local folder, then rewrite href
var externalImagesToLocal = function() {
  glob("published/**/*.md", function (er, files) {
    for (var i=0; i<files.length; i++) {
      var file = files[i];
      var fileContents = fs.readFileSync(file, "utf8");

      // First, convert links to images to markdown.
      var images = fileContents.match(/<img src=\"(.*)$/gm);
      if (images) {
        console.log(file)
        // console.log(images)
        var image = images[1];
        var thumbnail = images[2];
        // console.log(file + ": Found image " + image + " with thumb " + thumbnail);
      }
    }
  });
}

externalImagesToLocal();
