var imagen = document.getElementById('imagen');
                    var x = 175;
                    var y = 0;
                    var movimientoActivado = false;
    
                    function moverImagen() {
                        
                        if (movimientoActivado) {
                            x += 1;
                            y += 1;
                                if (x >= 700){
                                x = 175;
                                }   
                            imagen.style.left = x + "px";
                        }
                    }
    
                    function iniciarMovimiento() {
                        movimientoActivado = !movimientoActivado;
                        if (movimientoActivado) {
                            setInterval(moverImagen, 50);
                        }
                    }