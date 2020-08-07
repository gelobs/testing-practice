const analyze = arr => {
    const average = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return {average, min, max, length}; 
};

export {analyze};