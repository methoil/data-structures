/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] to <name>To[i].
 *
 */
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  const adj = [];
  for (let i = 0; i < graphNodes; ++i) {
    adj.push([]);
  }
  for (let i = 0; i < graphFrom.length; ++i) {
    adj[graphFrom[i] - 1].push(graphTo[i] - 1);
    adj[graphTo[i] - 1].push(graphFrom[i] - 1);
  }

  const numOfColor = ids.filter(id => id === val).length;
  if (numOfColor < 2) {
    return -1;
  }

  const targetIdxs = ids.reduce((arr, color, idx) => {
    if (color === val) {
      arr.push(idx);
    }
    return arr;
  }, []);
  const stack = [...targetIdxs];
  const visited = new Array(graphNodes);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = { source: null, minDistance: Infinity, currDistance: 0 };
  }

  let currSourceIdx = null;
  while (stack.length) {
    const curr = stack.pop();
    if (targetIdxs.includes(curr)) {
      currSourceIdx = curr;
      visited[curr].currDistance = 0;
    }

    for (let neighbor of adj[curr]) {
      if (neighbor === currSourceIdx) {
        continue; // don't loop back to self
      }
      if (ids[neighbor] !== val && visited[neighbor].currDistance === 0) {
        stack.push(neighbor);
      }
      visited[neighbor].currDistance = visited[curr].currDistance + 1;
      if (ids[neighbor] === val && visited[neighbor].minDistance > visited[neighbor].currDistance) {
        visited[neighbor].minDistance = visited[neighbor].currDistance;
        visited[neighbor].source = currSourceIdx;
      }
    }
  }

  const results = targetIdxs.map(idx => visited[idx].minDistance);
  return Math.min(...results);
}

let graphNodes = 5,
  graphFrom = [1, 1, 2, 3],
  graphTo = [2, 3, 4, 5],
  ids = [1, 2, 3, 3, 2],
  val = 3;

console.log(findShortest(graphNodes, graphFrom, graphTo, ids, val));
