graph = {
    1 : [2,3,4],
    2 : [5],
    3 : [5],
    4 : [],
    5 : [6,7],
    6 : [],
    7 : [3],
}

import sys
node = int(sys.stdin.readline())
print(graph[node])