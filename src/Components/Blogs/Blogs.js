import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-full p-5 lg:w-5/6 mx-auto bg-white rounded-lg mt-2 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='min-h-[24rem] shadow-2xl p-5 rounded-3xl'>
                <h1 className="text-2xl mb-5" >Q1. How will you improve the performance of a React Application?</h1>
                <p className='font-semibold text-lg'>Ans:</p>
                <p className="text-lg">1. Using Immutable Data Structures.</p>
                <p className="text-lg">2. Avoid Re-rendering.</p>
                <p className="text-lg">3. Use stateless components.</p>
                <p className="text-lg">4. Use optimized dependency.</p>
                <p className="text-lg">5. Use React.Fragments to Avoid Additional HTML Element Wrappers.</p>
                <p className="text-lg">There are more ways to improve performance of a React Application</p>
            </div>

            <div className='min-h-[24rem] shadow-2xl p-5 rounded-3xl'>
                <h1 className="text-2xl mb-5" >Q2. What are the different ways to manage a state in a React application?</h1>
                <p className='font-semibold text-lg'>Ans:</p>
                <p className="text-lg">There are four main types of state we need to properly manage in a React app. </p>
                <span className='font-semibold text-lg'>They are:</span>
                <ul className="text-lg pl-5">
                    <li>Local state</li>
                    <li>Global state</li>
                    <li>Server state</li>
                    <li>URL state</li>
                </ul>
                <p className="text-lg">We can easily manage the state by using useState(), useEffect(), useCallback(), useReducer(), useParams(), useNavigate() etc..</p>
                <p></p>
            </div>

            <div className='min-h-[24rem] shadow-2xl p-5 rounded-3xl'>
                <h1 className="text-2xl mb-5" >Q3. How does prototypical inheritance work?</h1>
                <p className='font-semibold text-lg'>Ans:</p>
                <p className="text-lg">In JavaScript, objects have a special hidden property named [[Prototype]], that is either null or references another object. That object is called “a prototype”.</p>
                <p className="text-lg">When we read a property from object, and it is not found, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.</p>
            </div>
            <div className='min-h-[24rem] shadow-2xl p-5 rounded-3xl'>
                <h1 className="text-2xl mb-5" >Q4. Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`?</h1>
                <p className='font-semibold text-lg'>Ans:</p>
                <p className="text-lg">If we update the state directly, we will lose control of the state across all components.</p>
                <p className="text-lg">If we update the state directly, calling the setState() afterward may just replace the update we made.</p>
                <p className="text-lg">If we directly update the state, it does not change the state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
            </div>
            <div className='min-h-[24rem] shadow-2xl p-5 rounded-3xl'>
                <h1 className="text-2xl mb-5" >Q5. What is a unit test? Why should write unit tests?</h1>
                <p className='font-semibold text-lg'>Ans:</p>
                <p className="text-lg">Unit testing is a development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
        </div>
    );
};

export default Blogs;