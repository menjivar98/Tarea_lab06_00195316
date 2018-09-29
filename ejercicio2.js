

function convertir (unidad,utype, conver,tipo){
   
   
   
    if(tipo == 'L' || tipo == 'l'){
        if((utype == "M" && conver == 'cm' ) || ((utype == 'm' && conver == 'cm' ))){
            return unidad * 100 + ' Cm';

        }

        else if((utype == 'CM' && conver == 'm' ) || ((utype == 'cm' && conver == 'M' ))){
            return unidad / 100 + ' M';

        }

        else if((utype == 'Km' && conver == 'm' ) || ((utype == 'km' && conver == 'M' ))){
            return unidad * 1000 + ' M';

        }

        
        else if((utype == 'M' && conver == 'Km' ) || ((utype == 'm' && conver == 'km' ))){
            return unidad / 1000 + ' M';

        }

        
       else  if((utype == 'pies' && conver == 'm' ) || ((utype == 'Pies' && conver == 'M' ))){
            return unidad * 0.3048 + ' M';

        }
        
        else if((utype == 'M' && conver == 'Pies' ) || ((utype == 'm' && conver == 'pies' ))){
            return unidad * 3.28 + ' Pies';
        }

        else{
            console.log('Agregar un dato valido');
        }
        
    }
    else if(tipo == 'T' || tipo == 't'){
        if((utype == 'C' && conver == 'F' ) || ((utype == 'c' && conver == 'f' ))){
            return unidad * 1.8000 + 32.00 + ' Fahrenheit';
        }

        else if((utype == 'F' && conver == 'C' ) || ((utype == 'f' && conver == 'c' ))){
            return (unidad-32)/1.8000 + ' Celsius';
        }
        
        else if((utype == 'K' && conver == 'F' ) || ((utype == 'k' && conver == 'f' ))){
            return ((unidad-273.15)*1.8000 ) +32 + ' Kelvin';
        }

        else if((utype == 'K' && conver == 'C' ) || ((utype == 'k' && conver == 'c' ))){
            return (unidad -273.15)+ ' Celsius';
        }

        else{
            console.log('Agregar un dato valido');
        }



    }else{
        console.log('El Tipo de conversion no es valido');
    }


}