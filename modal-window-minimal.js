function closeModalWindow() {
	
	document.querySelector('.modal-window').outerHTML = ''; 
	
}

function keyUpClose(e) {
	
    if ((e || window.event).keyCode == 27) { // Esc

        closeModalWindow();

    }
    
    document.querySelector('html').removeEventListener('keyup', keyUpClose);

}

function openModalWindow(content) { 

	document.querySelector('body').insertAdjacentHTML('beforeend', '<div class=modal-window> <a>X</a> <div class=content><div>' + content + '</div></div></div>');

	document.querySelector('.modal-window > a').onclick = function () { // To do: Esc key to close
		
		closeModalWindow();
	
	};
	
    document.querySelector('html').onkeyup = keyUpClose;
		

	return false;

}
