changeTags = function(text, newText){
    var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};

changeBasicFrontText = function(text, newText){
    var currentText = $('.basicFront').html();
    $('.basicFront').html(currentText.replace(text,newText));
};

changeBasicBackText = function(text, newText){
    var currentText = $('.basicBack').html();
    $('.basicBack').html(currentText.replace(text,newText));
};

window.setTimeout(function(){
	changeTags(/(\b\s\b)/gm, '<span style="font-size:20px;position:relative;top:2px;border-right:5px solid var(--gray2);margin-right:15px;margin-left:15px;"></span>'),
	changeTags('Basic', '<span id="basic" style="font-size:20px;position:relative;top:2px;">&#xfb37;</span>'), 
	changeTags('Cloze', '<span id="cloze" style="font-size:20px;position:relative;top:2px;">&#xf549;</span>'), 
	changeTags(/MCAT/g, '<span id="mcat" style="font-size:20px;position:relative;top:3px;padding-right:20px;border-right:5px solid var(--gray2);">&#xf0fe;</span>'),
	changeTags(/MISSING/g, '<span id="missing" style="font-size:20px;position:relative;top:2px;margin-right:8px;color:var(--yellow);">&#xf071;</span>'),
	changeTags(/Physiology/, '<span id="physiology" style="font-size:20px;position:relative;top:2px;">&#xe23a;</span>'),
	changeTags(/Physiology::/, ''),
	changeTags(/Histology/, '<span id="histology" style="font-size:20px;position:relative;top:2px;">&#xe222;</span>'),
	changeTags(/Histology::/, ''),
	changeTags(/Biochemistry/, '<span id="biochemistry" style="font-size:20px;position:relative;top:2px;margin-right:8px;">&#xfbdf;</span>'),
	changeTags(/Biochemistry::/, ''),
	changeTags(/\:\:/g, '<span style="font-size:20px;margin-left:10px;margin-right:10px;position:relative;top:3px;">&#x2023;</span>'),
	changeBasicFrontText(/(\*)/gm, '<span style="font-size:30px;font-weight:bold;color:var(--indigo);">*</span>'),
	changeBasicBackText(/(\*)/gm, '<span style="font-size:30px;font-weight:bold;color:var(--indigo);">*</span>')
}, 0)


window.setTimeout(function(){
}, 0)

var config = {
    startOnLoad: true,
    theme: 'neutral',
    flowchart: {
	useMaxWidth: true,
	htmlLabels: true,
    }
};

mermaid.initialize(config);
window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));

