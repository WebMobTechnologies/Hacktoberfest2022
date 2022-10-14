def areEqual(arr1, arr2, N, M):

	if (N != M):
		return False

	
	arr1.sort()
	arr2.sort()

	for i in range(0, N):
		if (arr1[i] != arr2[i]):

			return False
	return True


# Driver Code
if __name__ == "__main__":
	arr1 = [3, 5, 2, 5, 2]
	arr2 = [2, 3, 5, 5, 2]
	n = len(arr1)
	m = len(arr2)

	if (areEqual(arr1, arr2, n, m)):
		print("Yes")
	else:
		print("No")
