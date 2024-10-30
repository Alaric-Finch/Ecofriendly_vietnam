const  init = {
    cars: ['BMW']
}

export default function reducer(state = init, action, args){
    console.log(action, args)
    switch (action){
        case 'ADD':
            
        default:
            return state
    }
}
