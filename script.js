function descargarCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf'; // Ruta de tu archivo
    link.download = 'Mi_CV.pdf'; // Nombre con el que se guardará
    link.click();
}
