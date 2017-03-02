function wrapText(context, text, marginLeft, centerText, maxWidth, lineHeight)
    {
        var words = text.split(" ");
        var countWords = words.length;
        var line = "";
		var arr = [];
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = context.measureText(testLine).width;
            if (testWidth > maxWidth) {
				arr.push({ line: line, marginLeft: marginLeft } );
                line = words[n] + " ";
            }
            else {
                line = testLine;
            }
        }
		arr.push({ line: line, marginLeft: marginLeft } );
		for (var i = 0; i < arr.length; i++)
		{
			var mar = ((arr.length * lineHeight) / 2) - i * lineHeight;
			context.fillText(arr[i].line, arr[i].marginLeft, centerText - mar);
		}
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
  imgText.font='bold 12px Arial';
  imgText.fillStyle='#000';
  imgText.textAlign="center";
  wrapText(imgText, text, 365, 58, 60, 12);

  $('canvas').slideDown();
});
