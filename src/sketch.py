import numpy as np

height = int(input("Largo de la sala: ")) + 2
width = int(input("Ancho de la sala: ")) + 2
exit_loc = tuple(map(int,input("Coordenadas de la entradas/salida: ").split(' ')))
# print(exit_loc[0])
test = np.full([width,height],'x')

for i in range(1,width-1):
    for j in range(1,height-1):
        test[i,j] = 'o'

print(test)