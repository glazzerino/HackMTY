import numpy as np

distanciaEntreAsientos = 100
M=10
N=10
sanaDistancia = 250
intervalo = int( sanaDistancia / distanciaEntreAsientos)
# res = np.matrix([ [ " " for i in range(M) ] for j in range(N) ])
res = np.full([M,N],' ')
j = 0
i = 0
counter = 0
while(j < N):
    while(i < M):
        res[i,j] = 'O'
        counter += 1
        i+=intervalo
    j += intervalo
    i=0
print(res)
print("Personas: " + str(counter))
                    
