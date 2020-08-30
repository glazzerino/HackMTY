import numpy as np
import math  

distanciaEntreAsientos = 35
M=15
N=15
sanaDistancia = 150
res = np.matrix([ [ "O" for i in range(M) ] for j in range(N) ])
for j in range(M):
    for i in range(N):
        if(res[j, i]=="O"):
            for y in range(M):
                for x in range(N):   
                    if(y==j and x==i):
                        continue
                    val = ((y-j)**2+(x-i)**2)**.5 *distanciaEntreAsientos
                    if val<150:
                        res[y, x]="X"

print(res)
                    
