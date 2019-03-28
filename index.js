var _ = require("lodash");

function getRidOfHim(shawnfulArg){
	if(_.isString(shawnfulArg)){
		return removeShawnFromString(shawnfulArg);
	}else if(_.isArray(shawnfulArg)){
		return removeShawnFromArray(shawnfulArg);
	}
	else if (_.isObject(shawnfulArg)){
		return removeShawnFromObject(shawnfulArg);
	}else{
		return shawnfulArg;
	}
}
function removeShawnFromString(shawnfulString){
	return shawnfulString.replace(/shawn/gi, '');
}
function removeShawnFromObject(shawnfulObject){
	var shawnlessObject = shawnfulObject;
	for(var p in shawnlessObject){
		if(p.toLowerCase().indexOf("shawn") > -1){
			delete shawnlessObject[p];
		}else{
			shawnlessObject[p] = getRidOfHim(shawnlessObject[p]);
		}
	}
	return shawnlessObject;
}
function removeShawnFromArray(shawnfulArray){
	var shawnlessArray = shawnfulArray;
	for(var i=shawnlessArray.length -1;i >= 0 ; i--){
		shawnlessArray[i] = getRidOfHim(shawnlessArray[i]);
	}
	return _.compact(shawnlessArray);
}
module.exports = getRidOfHim;