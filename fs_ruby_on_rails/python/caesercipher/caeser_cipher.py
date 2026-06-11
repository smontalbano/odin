def shift(key, word):

    result = ""

    for char in word:
        for index, char2 in enumerate(alpha_numeric):
            if char == char2:
                new_index = (index + key) % len(alpha_numeric)
                result = result + alpha_numeric[new_index]
                break             
    return result

alpha_numeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

word = input("Enter word: ")
key = int(input("Enter key (must be an integer): "))



result = shift(key, word)

print(result)

