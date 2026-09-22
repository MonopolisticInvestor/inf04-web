// function Hello() {
//     return (
//         <>
//             <h1>Hello</h1>
//         </>
//     )
// }

// export default Hello
import Test from "./Test"

const Hello = (props) => {
    return (
        <>
            <h1>Hello {props.name}, {props.klasa}</h1>
            <Test />
        </>
    )
}
        
export default Hello
        