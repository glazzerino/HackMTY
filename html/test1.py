import numpy as np
import math  

distanciaEntreAsientos = 33
M=12
N=10
sanaDistancia = 153
intervalo = int( sanaDistancia / distanciaEntreAsientos)
# res = np.matrix([ [ " " for i in range(M) ] for j in range(N) ])
res = np.full([M,N],'x')
j = 0
i = 0
counter = 0
while(j < N):
    if (j == 0):
        res[intervalo, j] = 'x'
    while(i < M):
        res[i,j] = 'O'
        counter += 1
        i+=intervalo
    j += intervalo
    i=0
print(res)
print("Personas: " + str(counter))
                    
