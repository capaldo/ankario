changeClozeText = function(text, newText){
    var currentText = $('.clozeText').html();
    $('.clozeText').html(currentText.replace(text,newText));
};

window.setTimeout(function(){
    changeClozeText(/(\*)/gm, '<span style="font-size:35px;font-weight:bold;color:var(--purple);">*</span>')
}, 0)

window.setTimeout(function(){
}, 0)

