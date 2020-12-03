/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = table.rows;

    for (let tr of rows) {
    	if (!tr.cells[3].hasAttribute('data-available')) {
    		tr.setAttribute('hidden', '');
    	}
    	if (tr.cells[3].getAttribute('data-available') === "true") {
    		tr.classList.add("available");
    	}
    	if (tr.cells[3].getAttribute('data-available') === "false") {
    		tr.classList.add("unavailable");
    	}
    	if (tr.cells[2].textContent === "m") {
    		tr.classList.add("male");
    	}
    	if (tr.cells[2].textContent === "f") {
    		tr.classList.add("female");
    	}
    	if (+(tr.cells[1].textContent) < 18) {
    		tr.style.textDecoration = "line-through";
    	}
    } 
}
