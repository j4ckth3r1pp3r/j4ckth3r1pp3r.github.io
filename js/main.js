function wrapText(context, text, marginLeft, marginTop, maxWidth, lineHeight)
    {
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
                context.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        context.fillText(line, marginLeft, marginTop);
    }

var img=document.getElementById("dickmeme");
var imgText;
var canvas;
$('.meme').submit(function(e) {
  e.preventDefault();

  canvas=document.getElementById("draw")
  imgText=canvas.getContext("2d");
  let text = $('.meme-text').val();
  imgText.drawImage(img,0,0);
  imgText.font='12px Arial';
  imgText.fillStyle='#000';
  imgText.textAlign="center";
  wrapText(imgText, text, 365, 39, 60, 12);

  $('canvas').slideDown();
});
