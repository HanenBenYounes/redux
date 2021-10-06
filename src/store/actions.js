//ACTION
const increment = (num) => {
    return { 
      type:"INC",
      payload: num ? num : 1,
    }
  }
  const decrement = (num) => {
    return { 
      type:"INC",
      payload: num ? num : 1,
    }
  };
  export { increment, decrement};
  
  
  