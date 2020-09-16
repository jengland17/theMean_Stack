/*

{  val: Number, 
next: Node, 
pri: Number
}

*/

function SLNode(val,pri) {
    this.val = val
    this.pri = pri
    this.next = null
}

function SLPriQueue() {
    this.head = null


    this.queue = (val, pri) => {

        // create a node from val and pri
        let nn = new SLNode(val,pri)
        let runner = this.head;

        //what if there is no head
        if(runner == null) {
            this.head = nn
            return this
        }

        //what if there is a head and need to be first
        if (nn.pri < runner.pri) {
            nn.next = runner
            this.head = nn
        }

        // find the place that it belongs
        //change pointers to add it to the queue
        while(runner.next != null){
            if(runner.pri <= nn.pri && nn.pri < runner.next.pri){
                // add to the queue
                nn.next = runner.next
                runner.next = nn
                return this
            }
            // didn't find the spot
            // iterate runner
            runner = runner.next
        }
        //if spot never found stick to the end
        runner.next = nn
        return this
    }

    this.status = ()=> {
        runner = this.head
        while(runner) {
            console.log(runner.pri, runner.val)
            runner = runner.next
        }
    }


}

que = new SLPriQueue()

que.queue(4,5)
que.queue(99,2)
que.queue(77,4)
que.queue(50,4)

que.status()

