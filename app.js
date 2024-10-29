// const heading = React.createElement(             // creating an object not the tag here
//     "h1",
//      {id:"head"},                             // used for attributes
//       "hello world from react!"
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);                           // tag or element is getting created over here



// 2//


/**   WHAT IF WE WNAT TO CREATE NESTED HTML WITH REACT
 * 
 * 
 * 
 * 
 * 
 *    <div id = parent>
 *         <div id = child1>
 *                 <h1> Hi iam heading 1</h1>
 *                  <h2> hi Iam heading2</h2>
 *         </div>
 * 
 *           <div  id = child2>
 *                  <h1> Hi iam heading1</h1>
 *                  <h2> hi iam heading2</h2>
 * 
 * 
 *           </div>
 *    </div>
 * 
 * 
 * 
 * 
 * 
 
 */



const div1 = React.createElement("div",
    { id:"parent" },

      [ React.createElement("div",{ id:"child1" }, 

        [ React.createElement("h1",{}, "Hi Iam heading 1"), React.createElement("h2",{}, "Hi Iam heading 2")]),
        
        React.createElement("div",{ id:"child2" }, 

            [ React.createElement("h1",{}, "Hi Iam heading 1"), React.createElement("h2",{}, "Hi Iam heading 2")])]);                                                                                                               // in case adding more than one child to the di id:child,
                                                                                                                //  it is required to wrap inside an array
 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div1)