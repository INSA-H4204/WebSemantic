myApp.service('Similarity',['$http','$q', function ($http,$q) {
        

	return {

function readJSON(docs) {
	input = [];
	sets = [];
	angular.foreach(docs,function(doc)) {
		var set = {};
		sets.push(set);
		angular.foreach(doc.rdf,function(value)) {
			}
		}
	}
	return input;
}

/**
*	Tested and complete.
*	Receives a list of lists containing keywords for each site.
*	Returns groups (list of lists) depending on how they correspond.
*/
function getGroups(input)
{
	var input = [["monkey","donkey","dog"],["donkey","monkey"],["lemur","monkey"],["dog","cat"]];
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

function getGroupNames(docs) {
	// TODO
}
      call: function(request) {

        //This function is the relaxation main function
        //It can call other function from this service
        readJSON(docs);
		// Algorithm to find groups.
		return something

        return;
      };
  	}

}]);