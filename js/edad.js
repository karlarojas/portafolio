function calcularEdad() {
	var hoy = new Date();
	var cumpleanos = new Date('07/13/1999');
	var edad = hoy.getFullYear() - cumpleanos.getFullYear();
	var m = hoy.getMonth() - cumpleanos.getMonth();

	if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
		edad--;
	}
	return edad;
}
document.querySelector("#edad").textContent = calcularEdad();

