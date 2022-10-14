# importing libraries
import numpy as np
from numpy.linalg import inv

# Initial values
a =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0]
  
tdm =[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
  
# encoding matrix
ecm =[[3, 4],
     [3, 6]]
  
# Lists of Alphabets and its values
smallalpha = [" ","a", "b", "c", "d", "e", "f", "g", "h",
              "i", "j", "k", "l", "m", "n", "o", "p", "q",
              "r", "s", "t", "u", "v", "w", "x", "y", "z"]
capitalalpha = [" ","A", "B", "C", "D", "E", "F", "G", "H",
                "I", "J", "K", "L", "M", "N", "O", "P", "Q",
                "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
alphavalues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
               13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
               23, 24, 25, 26, 27]
  
  
# Take inputs
# elements in Encrypted Matrix
lenb = 6
a = [63, 46, 12, 81, 48, 12]
  
sobj = slice(lenb)
a = a[sobj]
  
  
# convert array to 2d matrix to further 
# multiplication with inverse of 2d matrix
j = 0
k = 0
  
# b[m][n] m is always 2
n = int(lenb / 2)
for i in range(0, lenb):
    if(j<n):
        tdm[k][j]= a[i]
        j = j + 1
    else:
        k = k + 1
        j = 0
        tdm[k][j]= a[i]
        j = j + 1
  
          
# Multiply by inverse matrix
dcm = inv(ecm)
dcm = np.matmul(dcm, tdm)
  
  
# Convert to 1d array for extracting word
i = 0
j = 0
k = 0
for i in range(2):
    for j in range(int(lenb / 2)):
        a[k]= dcm[i][j]
        k = k + 1
           
  
# Creating a decoded word
text = ""
for i in range(0, lenb):
    for j in range(0, 27):
        if(a[i]== alphavalues[j]):
            text =''.join([text, smallalpha[j]])
  
print("Decoded message is: = "+text)