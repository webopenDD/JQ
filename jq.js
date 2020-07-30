;(function(window,undefined){
    let jQuery=function(el){
        return new jQuery.init(el)
    
    }
        //静态方法
    jQuery.init=function(el){

        let els=document.querySelectorAll(el)
        els.forEach((item,index)=>{


            this[index]=item
            
        })
        this.length=els.length
        return this      
    }


    //原型方法
    jQuery.init.prototype=jQuery.prototype={
        css:function(cssAttr,cssValue){
           for(let i=0;i<this.length;i++){
            this[i].style[cssAttr]=cssValue
           }
           return    //链式调用 
        },
        attr:function(){
            
        },
        get:function(){
            
        },
        axios:function(){
            
        },
        ajax:function(){
            
        },

    }


    //暴露到全局对象
    window.jQuery=window.$=jQuery
})(window)


;(function(window,undefined){
    let jQuery=function(el){

        let els=document.querySelectorAll(el)
        els.forEach((item,index)=>{


            this[index]=item
            
        })
        this.length=els.length

    }

    //暴露到全局对象
    window.jQuery=window.$=jQuery
})(window)
