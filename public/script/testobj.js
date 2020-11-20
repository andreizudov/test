class Worker {
    constructor(name,surname, rate, days){
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }
    getSalary (){
        var sum = this._rate*this._days
        return "зарплата" + " "+ this._name + " "+"за"+" "+this._days+' '+"дней"+ ":"+ sum
    }

    getName (){
        return  this._name
    }
    getSurname(){
        return this._surname
    }
    getRate(){
        return this._rate
    }
    getDays(){
        return this._days
    }

    setRate(x){
        var x=3
        return this._rate*x
    }
}

class MyString {
    constructor(www){
        this.www = www
    }
    reverse(){
        var t =this.www.split (' ');
        for (let i=0;i<t.length/2;i++){
            var time = t[i]
            t[i] =t[t.length-i-1]
            t[t.length-i-1] = time
            console.log(t)
        }
        t= t.join(' ')
        return t
    
    }
    ucFirst(){
       var t =this.www.split ('')
       t[0] = t[0].toUpperCase()
       t = t.join('')
        return t
    }
    ucWords(){  
        var t = this.www
        t = t.split(' ')

        for (let i=0;i<t.length;i++)
        { var o = t[i]
            o = o.split('')
            o[0]=o[0].toUpperCase()
            o = o.join('')
            t[i] = o
        }   
        t = t.join(' ')
        return t
    }
}