myApp.service('Similarity',['$http','$q', function ($http,$q) {
var threshold = 0.1;
var groups = [];        

	

function readJSON(docs) {
	input = [];
	sets = [];
	angular.forEach(docs,function(doc,key) {
		var set = {};
		sets.push(set);
		input.push([]);
		angular.forEach(doc.rdf,function(arrays) {
			angular.forEach(arrays,function(value){
				if(!(sets[value.x.value])) {
					input[key].push(value.x.value);
					sets[key][value.x.value] = true;
				}
				if(!(sets[value.z.value])) {
					input[key].push(value.z.value);
					sets[key][value.z.value] = true;
				}
			});
		});
	})
	console.log(input);
	return input;
}

/**
*	Tested and complete.
*	Receives a list of lists containing keywords for each site.
*	Returns groups (list of lists) depending on how they correspond.
*/
function getGroups(input)
{
	var keyWords = []; // Might be faster to allocate complete size from beginning
	for (var i = 0; i < input.length; i++) {
		var b = {};
		b["totalSize"] = 0;
		keyWords.push(b);
		for (var j = 0; j < input[i].length; j++) {
			keyWords[i][input[i][j]] = true;
			keyWords[i]["totalSize"]++;
		}
	}
	var jaccardMatrix = new Array(keyWords.length);
  	for (var i = 0; i < keyWords.length; i++) {
    	jaccardMatrix[i] = new Array(keyWords.length);
  	}
  	for(var i = 0; i < keyWords.length; i++) {
  		for(var j = i; j < keyWords.length; j++) {
  			if(i !== j) {
  				jaccardMatrix[i][j] = getJaccardIndex(input[i], keyWords[j]);
  				jaccardMatrix[j][i] = jaccardMatrix[i][j];
  			} else {
  				jaccardMatrix[i][j] = 1;
  			}
  		}
  	}
  	var graph = new Array(jaccardMatrix.length);
  	for(var i = 0; i < jaccardMatrix.length; i++) {
  		graph[i] = [];
  		for(var j = 0; j < jaccardMatrix.length; j++) {
  			if(i !== j) {
  				if(jaccardMatrix[i][j] > threshold) {
  					graph[i].push(j);
 				}
  			}
  		}
  	}
  	console.log(jaccardMatrix);
  	var visited = new Array(jaccardMatrix.length);
  	for(var i = 0; i < jaccardMatrix.length; i++) {
  		visited[i] = false;
  	}
	
  	bfs(graph, visited, 0, groups);
  	return groups;
}

/**
*	Tested and complete.
*	Returns the JaccardIndex between a list and a set of entities. (The weird input is due to Javascript limitations)
*/
function getJaccardIndex(a, b)
{
	var intersection = 0.0;
	var total = 0.0;
	for(var i = 0; i < a.length; i++) {
		if(b[a[i]]) {
			intersection++;
		} else {
			total++;
		}
	}
	total += b["totalSize"];
	return intersection / total;
}

/**
*	Tested and complete.
*	Sets the global variable groups to a list of lists where each first index corresponds to a group and the lists corresponding
*	to each group contains a list of which pages that share similiarities (Their indices).
*/
function bfs(graph, visited, start, returnValue)
{
	if(start === graph.length) {
		return 1;
	}
	if(!(visited[start])) {
		var Q = [];
		var list = [];
		Q.push(start);
		visited[start] = true;
		list.push(start);
		while(Q.length !== 0) {
			var current = Q.shift();
			for(var i = 0; i<graph[current].length; i++) {
				if(!(visited[graph[current][i]])) {
					visited[graph[current][i]] = true;
					list.push(graph[current][i]);
					Q.push(graph[current][i]);
				}
			}
		}
		returnValue.push(list);
	}
	bfs(graph, visited, start+1, returnValue);
}

function getGroupRetVal(request) {
	// TODO
	var response =[];
	angular.forEach(groups,function(category,key) {
		response[key] = {
				category : key,
				pages:[]
			}
		angular.forEach(category,function(value) {
			response[key].pages.push(request[value]);
		})
	})
	console.log(response);
	return response;
}

	return {
      call: function(request) {
      	groups = [];

        //This function is the relaxation main function
        //It can call other function from this service
        var input = readJSON(request);

        getGroups(input);
        console.log(groups);
        return getGroupRetVal(request);

		// Algorithm to find groups.
      }
  	}

}]);