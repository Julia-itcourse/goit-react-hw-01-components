const getRandomColor = () =>{
    return `rgb(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255
      )},${Math.round(Math.random() * 255)} )`;
}


export default getRandomColor