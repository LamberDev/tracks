import React, {useReducer} from 'react';
/**
 * Funcion para crear nuestro propio Contexto automaticamente para cualquier recurso
 * @param {*} reducer recibimos una funcion reductora para manejar el estado
 * @param {*} actions objeto que contiene las diferentes acciones (funciones) que se le van a hacer a nuestro estado 
 * @param {*} initialState valor por defecto que tendra la variable de estado al iniciarse la app (ej: [], null, 0, etc)
 * @returns Esta funcion nos devuelve un objeto con el contexto para utilizarlo en el useContext y tener acceso desde calquier
 * hijo anidado al Provider que es quien nos manda dichos datos
 */
export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ( { children } ) => {
        
        const [state, dispatch] = useReducer(reducer,initialState)

        const boundActions = {} //Inicializamos variable
        //Recorremos el objeto pasado por param y le vamos agregando cada propiedad que contenga a la variable
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch); //Le pasamos a cada funcion el argumento que necesita para ser llamado desde el reducer
        }

        //Devolvemos al componente hijo el state y el objeto que contiene las acciones
        return  (<Context.Provider value={ { state, ...boundActions } }> 
                    {children} 
                </Context.Provider>);
    }

    return { Context, Provider };
};