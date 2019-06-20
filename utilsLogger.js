'use strict';


let logger = data => {
  let payload = JSON.parse(data.toString().trim());
  if(payload.name === 'error'){
    console.error(payload);
  }else if(payload.name === 'saved'){
    console.log(payload);
  }else{
    console.log('neither error or saved');
  }
};

module.exports = {logger};
