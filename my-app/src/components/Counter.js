// import { useDispatch, useSelector } from 'react-redux';
// import { counterActions } from "../store";
// import classes from './Counter.module.css';

// const Counter = () => {
//   // const dispatch = useDispatch();
//   const counter = useSelector((state) => {
//     return state.counter.counter;
//   });
//   const show = useSelector((state) => {
//     return state.counter.showCounter;
//   });
// const incrementHandl = () => {
//   dispatch(counterActions.increment());
// };
// const actionInceaseHandl = () => {
//   dispatch(counterActions.increase(10));
// };
// const decrementHandl = () => {
//   dispatch(counterActions.decrement());
// };

// const hideAndSee = () => {
//   dispatch(counterActions.toggleCounter());
// };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandl}>증가</button>
//         <button onClick={actionInceaseHandl}>5+ 증가버튼</button>
//         <button onClick={decrementHandl}>감소</button>
//       </div>
//       <button onClick={hideAndSee}>변형</button>
//     </main>
//   );
// };

// export default Counter;
