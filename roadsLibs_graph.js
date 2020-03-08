function roadsAndLibraries(n, c_lib, c_road, cities) {
  const adjList = Array.from(new Array(n), () => []);
  for (let edge of cities) {
    adjList[edge[0] - 1].push(edge[1] - 1);
    adjList[edge[1] - 1].push(edge[0] - 1);
  }
  const visited = new Array(n).fill(false);

  // just build libs everywhere if they're cheaper than roads
  if (c_lib <= c_road) {
    return c_lib * n;
  }

  let totalCost = 0;
  let root = 0;
  const stack = [];

  // NOTE - I did this while loop approach first, and it was much slower, failing a bunch of cases
  // it must be the .findIndex function - adds n^2 complexity
  //   while (visited.includes(false)) {
  //     root = visited.findIndex(element => !element);
  //     stack.push(root);
  // need to do DFS for each set of cities
  for (let city in visited) {
    if (visited[city]) {
      continue;
    }
    root = city;
    stack.push(root);

    // build one lib per connected component and build roads
    totalCost += c_lib;
    visited[root] = true; // has access to lib already
    while (stack.length) {
      const curr = stack.pop();
      if (!visited[curr]) {
        visited[curr] = true;
        totalCost += c_road;
      }
      for (let neighbor of adjList[curr]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }

  return totalCost;
}

console.log(
  roadsAndLibraries(3, 2, 1, [
    [1, 2],
    [3, 1],
    [2, 3],
  ]),
);
