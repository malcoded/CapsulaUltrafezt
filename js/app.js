$(document).foundation()

$('[data-toggle-dia]').click(function(ev){
	const panel=$(this).data('toggleDia')
	$('#lineup-taps').foundation('selectTab',panel)
})

const $offCanvas=$('#offCanvas')
const $sticky=$('#sticky');

$offCanvas.find('li').click(function(){
	$offCanvas.foundation('close');
	setTimeout(function(){
		$sticky.css('letf','0px')	
	},300)
})
