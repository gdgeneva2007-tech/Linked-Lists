class Node{
    constructor(){
        this.value=null;
        this.nextNode=null;
    }
}
export class LinkedList{
    head=null;
    tail(){
        if(this.head===null){
            return undefined;
        }
        let cur=this.head;
        while(cur.nextNode!=null){
            cur=cur.nextNode;
        }
        return cur.value;
    }
    getHead(){
        if(this.head===null){
            return undefined;
        }
        return this.head.value;
    }
    size(){        
        if(this.head===null){
            return 0;
        }
        let num=1;
        let cur=this.head;
        while(cur.nextNode!==null){
            num++;
            cur=cur.nextNode;
        }
        return num;
    }
    append(value){
        let newNode=new Node();
        newNode.value=value;
        if(this.head===null){
            this.head=newNode;
        }
        else{
            let cur=this.head;
            while(cur.nextNode!==null){
                cur=cur.nextNode;
            }
            cur.nextNode=newNode;
        }
    }
    prepend(value){
        let newNode=new Node();
        newNode.value=value;
        if(this.head===null){
            this.head=newNode;
        }
        else{
            newNode.nextNode=this.head;
            this.head=newNode;
        }
    }
    at(index){
        if(this.head===null|| index>=this.size()||index<0){
            return undefined;
        }
        let cur=this.head;
        let start=0;        
        while(start<index){
            cur=cur.nextNode;
            start++;
        }
        return cur.value;
    }
    pop(){
        if(this.head===null){
            return undefined;
        }
        let q=this.head;
        this.head=this.head.nextNode;
        q.nextNode=null;
        return q.value;
    }
    contains(value){
        if(this.head===null){
            return false;
        }
        let cur=this.head;
        while(cur.value!==value){
            if(cur.nextNode===null){
                return false;
            }
            cur=cur.nextNode;
        }
        return true;
    }
    findIndex(value){
        if(!this.contains(value)){
            return -1;
        }
        let cur=this.head;
        let index=0;
        while(cur.value!==value){
            cur=cur.nextNode;
            index++;
        }
        return index;
    }
    toString(){
        let str='';
        if(this.head===null){
            return '';
        }
        let cur=this.head;
        while(cur.nextNode!==null){
            str+=`(${cur.value}) -> `;
            cur=cur.nextNode;
        }
        str+=`(${cur.value}) -> null`;
        return str;    
    }
    insertAt(index,...values){
       if(index<0 || index>this.size()){
        throw new RangeError("Range invalid");
        
       }       
       else{ 
        if(values.length>=1){
            let tempHead=new Node();
            tempHead.value=values[0];
            let tempTail=tempHead;
            if(values.length>=2){
                for(let i=1;i<=values.length-1;i++){
                    let node=new Node();
                    node.value=values[i];
                    tempTail.nextNode=node;
                    tempTail=node;
                }
            }
            if(this.head===null){
                this.head=tempHead;
            }
            else{
                if(index===0){
                    tempTail.nextNode=this.head;
                    this.head=tempHead;
                }
                else{
                    let cur=this.head;
                    let i=0;
                    while(i<index-1){
                        cur=cur.nextNode;
                        i++;
                    }
                    let p=cur.nextNode;
                    cur.nextNode=tempHead;
                    tempTail.nextNode=p;
                }
            }
        }
        
       }
    }
    removeAt(index){
        if(index<0 || index>=this.size()){
            throw new RangeError("Range invalid");
        }
        else if(this.head===null){
            throw new RangeError('This is an empty linked list so you cannot remove node');
        }
        else{
            let cur=this.head;
            let i=0;
            if(index===0){
                this.head=cur.nextNode;
            }
            else{
                while(i<index-1){
                    cur=cur.nextNode;
                    i++;
                }
                cur.nextNode=cur.nextNode.nextNode;
            }            
        }
    }
}

