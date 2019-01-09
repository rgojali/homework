function findEvenIndex(arr) {
    //Code goes here!

    /*Iterating through the array initializing at the index 0 and running through the array 
    until all indexes have been reached.*/
    for (var i = 0; i < arr.length; i++) {


        //Declared two variables set at 0
        var rightSum = 0;
        var leftSum = 0;

        //Iterating through the array and finding the sum of the array on the right
        for (var x = i + 1; x < arr.length; x++) {
            rightSum += arr[x];
        }

        //Iterating through the array and finding the sum of the array on the left
        for (var y = i - 1; y >= 0; y--) {
            leftSum += arr[y];
        }

        /*When the left side and right side equals to eachother, it returns the index of where
        they equal each other*/
        if (leftSum === rightSum) {
            return i
        }
    }

    //Otherwise if there isn't an index that fits the rules, then it will return -1
    return -1

}

findEvenIndex([1, 2, 3, 4, 3, 2, 1])
findEvenIndex([1, 100, 50, -51, 1, 1])
findEvenIndex([20, 10, -80, 10, 10, 15, 35])
findEvenIndex([10, -80, 10, 10, 15, 35])