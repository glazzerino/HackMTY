import numpy as np
import math  

distanciaEntreAsientos = 25
longitud=18
rango=18
sanaDistancia = 150
res = np.matrix([ [ "O" for i in range(rango) ] for j in range(longitud) ])
for j in range(rango):
    for i in range(longitud):
        if(res[j, i]=="O"):
            for y in range(rango):
                for x in range(longitud):   
                    if(y==j and x==i):
                        continue

                    val = ((y-j)**2+(x-i)**2)**.5 *distanciaEntreAsientos
                    if val<sanaDistancia:
                        res[y, x]=" "

print(res)
                    
