// min_heap

// 2n and (2n + 1) parent to child [n is index]

// Math.floor(n/2) n is index (child to parent)


// First algo to not click at all

class min_heap  {

    constructor () {
        this.arr = [null]
    }

    // array[0] set to null 

    // insert into the array and organize to where the min val is at the front
    // using 2n and (2n+1)

    insert (val) {

        this.arr.push(val)

        if (this.arr.length > 1) {

            let current = this.arr.length - 1;

            while (current > 1 && this.arr[Math.floor(current/2)] > this.arr[current]) {

                [this.arr[Math.floor(current/2)], this.arr[current]] = [this.arr[current], this.arr[Math.floor(current/2)]]
                current = Math.floor(current/2)

            }

        }

        return arr
        
    }

    // after finding the min value we need to remove it and store in a temp

    // after removing we need to then take the last value in the array and move it to the front ( arr[1] = arr.pop() )

    // rearrange the array to where the min value is at the front again

}


val = new min_heap()

val.insert(2).insert(5)



