changeText = function(text, newText){
    var currentText = $('.tags').html();
    $('.tags').html(currentText.replace(text,newText));
};

window.setTimeout(function(){
	changeText(/(\b\s\b)/gm, '<span style="font-size:25px;position:relative;top:2px;border-right:5px solid var(--gray2);margin-right:15px;margin-left:15px;"></span>'),
	changeText('Basic', '<span id="basic" style="font-size:25px;position:relative;top:2px;">&#xfb37;</span>'), 
	changeText('Cloze', '<span id="cloze" style="font-size:25px;position:relative;top:2px;">&#xf549;</span>'), 
	changeText(/MCAT/g, '<span id="mcat" style="font-size:25px;position:relative;top:3px;padding-right:20px;border-right:5px solid var(--gray2);">&#xf0fe;</span>'),
	changeText(/MISSING/g, '<span id="missing" style="font-size:25px;position:relative;top:2px;margin-right:8px;color:var(--yellow);">&#xf071;</span>'),
	changeText(/Physiology/, '<span id="physiology" style="font-size:25px;position:relative;top:2px;">&#xe23a;</span>'),
	changeText(/Physiology::/, ''),
	changeText(/Histology/, '<span id="histology" style="font-size:25px;position:relative;top:2px;">&#xe222;</span>'),
	changeText(/Histology::/, ''),
	changeText(/Biochemistry/, '<span id="biochemistry" style="font-size:25px;position:relative;top:2px;margin-right:8px;">&#xfbdf;</span>'),
	changeText(/Biochemistry::/, ''),
	changeText(/\:\:/g, '<span style="font-size:25px;margin-left:10px;margin-right:10px;position:relative;top:3px;">&#x2023;</span>')
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

