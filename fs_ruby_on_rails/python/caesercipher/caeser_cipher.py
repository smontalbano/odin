def shift(key, word):

    result = ""

    for char in word:
        i = alpha_numeric.index(char)
        new_i = (i + key) % len(alpha_numeric)
        result += alpha_numeric[new_i]        
    return result

alpha_numeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

word = input("Enter word: ")
key = int(input("Enter key (must be an integer): "))
result = shift(key, word)

print(result)