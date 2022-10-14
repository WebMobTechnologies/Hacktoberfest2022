mystr = input("enter a string")
user_input = input("enter character you went to delete")
output = ""
if user_input in mystr:
    for ch in mystr:
        if ch != user_input:
            output += ch
else:
    print("character not found")
print(output)