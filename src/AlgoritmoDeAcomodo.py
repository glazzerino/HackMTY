import numpy as np
import math  

distanciaEntreAsientos = 33
M=10
N=10
sanaDistancia = 153
res = np.matrix([ [ "O" for i in range(M) ] for j in range(N) ])
for j in range(M):

    for i in range(N):

        if(res[j, i]=="O"):

            for y in range(M):

                for x in range(N):   

                    if(y==j and x==i):
                        continue

                    val = ((y-j)**2+(x-i)**2)**.5 *distanciaEntreAsientos
                    if val<sanaDistancia:
                        
                        res[y, x]=" "

print(res)
                    
