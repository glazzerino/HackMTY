import numpy as np

# def algSketch(matrix: np.matrix):
    

# Visualizacion
# height = int(input("Largo de la sala: ")) 
# width = int(input("Ancho de la sala: ")) 
exit_loc = tuple(map(int,input("Coordenadas de la entradas/salida: ").split(' '))) # tuple
width = 10
height = 10
test = np.full([width+2,height+2],' ')

for i in range(1,width+1):
    for j in range(1,height+1):
        test[i,j] = 'o'
# test[exit_loc] = 'e'
print(test)
maxquota = height * width
percentage = 20
attendees = maxquota * (percentage / 100)

print(attendees)
counter = 0
for i in range(1,width+1):
    for j in range(1,height+1):
        n = 2**j + 1
        if (n) < height+1:
            continue
        else:
            test[i,n] = 'm'
    
print(test)