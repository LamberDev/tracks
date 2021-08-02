import { NavigationActions } from 'react-navigation';

/**
 * Funcion para acceder a la navegacion de React desde fuera de los componenetes
 * Por ejemplo nos puede servir navegar de un componenete a otro dependiendo de la respuesta de una Api
 */
// inicializamos varibale
let navigator;

//Funcion para poder setear la navegacion a nuestro objeto
export const setNavigator = nav => {
    navigator = nav;
}

// Funcion a la cual llamamos desde fuera pasandole el Nombre de la ruta donde queremos navegar y parametros
export const navigate = (routeName, params) => {
    //Llammamos a la API interna de React de la navegacion pasandole una funcion con un objeto dentro con los parametros que pedimos
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    );
}
