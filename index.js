class SortedList {
  constructor() {

    this.items=[]
    this.length= this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){
      return a-b;
    }
    )
    this.length = this.items.length

  }

  get(pos) {

    if(pos<=this.items.length)
    {
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }

  }

  max() {

    if(this.items.length===0){
      throw new Error('EmptySortedList');
    }
    else{
      const max= Math.max(this.items);
      return max
    }

    }

  

  min() {
    if(this.items.length === 0)
    {
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(this.tems);
    }
  }

  sum() {

    let sum = 0;
    for(let i = 0; i< this.items.length;i++)
    {
      sum += this.items[i]
    }
     return  sum

  }

  avg() {

    if(this.items.length === 0)
    {
      throw new Error('EmptySortedList');
    }
    else{
    let sum = 0;
    for(let i = 0; i< this.items.length;i++)
    {
      sum += this.items[i]
    }
     return  sum/this.items.length
    }
  }
  
}

module.exports = SortedList;
