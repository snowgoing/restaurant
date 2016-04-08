import axios from 'axios';

export function getMenu() {
  return axios.get('https://json-data.herokuapp.com/restaurant/menu/1');
 
}

export function getSpecial(cb) {
  axios.get('https://json-data.herokuapp.com/restaurant/special/1')
  .then(function(resp){
  	var menuId = resp.data.menu_item_id;
  	axios.get('https://json-data.herokuapp.com/restaurant/menu/1')
  	.then(function(resp){
  	  var special = resp.data.entrees.filter(function(entree){
  	  	return (entree.id === menuId);
  	  })[0];
  	  cb(special);
  	})
  });
}



export default {
  getSpecial,
  getMenu
}
import React from 'react';

