let regulatorAudio= (scale, toggle, element, type) =>{
	scale.addEventListener('mousedown', (e)=>{
		let maxX= scale.getBoundingClientRect().x + scale.getBoundingClientRect().width;
		let minX= scale.getBoundingClientRect().x;
		let move= (e)=>{
			let left= e.pageX - minX;
			if(e.pageX > maxX){
				left= scale.getBoundingClientRect().width;
			}
			if(e.pageX < minX){
				left= 0;
			}
			toggle.style.width= left + 'px';
			let procent= Math.round( ( 100 / (scale.getBoundingClientRect().width) ) * left);

			if(type == 'volume'){
				element.volume= procent / 100;
			}

			if(type == 'currentTime'){
				element.currentTime= element.duration * procent / 100;
			}

		}
		document.addEventListener('mousemove', move);
		document.addEventListener('mousedown', move);
		document.addEventListener('mouseup', (e)=>{
			document.removeEventListener('mousemove', move);
			document.removeEventListener('mousedown', move);
		});
	});
}

export default regulatorAudio;