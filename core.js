
//destructuring assignment
export default function html([first, ...strings], ...values){
    //reduce là một phương thức của mảng (Array) cho phép bạn chuyển đổi một mảng thành một giá trị duy nhất thông qua việc áp dụng một hàm callback lên từng phần tử của mảng.
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}

export function createStore(reducer){
    let state = reducer()

    const roots = new Map()

    function render(){
        for(const [root, component] of roots){
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root){
            roots.set(root, component)
            render()
        },
        connect(selector = state => state){
            return component => (props, ...args) =>
                component(Object.assign({},props,selector(state), ...args))
        },
        dispatch(action, ...args){
            state = reducer(state, action, args)
            render()
        }
    }
}
