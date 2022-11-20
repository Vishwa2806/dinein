const cart={
    items:[],
    total:0
};

const foodArr=["idli","dosa","rotti","poori","briyani","curd rice","lemon","egg rice","paani puri","aloo gobi","chana masala","fish curry","kebab","appam","upma","pongal"];

$(".addItemCart").click((e)=>{
    let foodNo = $(e.target).attr("data-id");
    let $div = $(e.target).parent("div");
    if(cart.items.length==0){
        $div.find("span").html(1);
        cart.items.push(
            {
                itemNo:foodNo,
                name:foodArr[foodNo],
                qty:1
            }
        )
    }else{
        for(let i=0;i<cart.items.length;i++){
            if(cart.items[i].itemNo==foodNo){
                let qty = cart.items[i].qty;
                cart.items[i].qty = qty+1;
                $div.find("span").html(qty+1);
                break;
            }else{
                if(i==cart.items.length-1){
                    cart.items.push(
                        {
                            itemNo:foodNo,
                            name:foodArr[foodNo],
                            qty:1
                        }
                    )
                    $div.find("span").html(1);
                    break;
                }
                
            }
        }
    }
    
})

$(".removeItemCart").click((e)=>{
    let foodNo = $(e.target).attr("data-id");
    let $div = $(e.target).parent("div");
    // if(cart.items.length==0){
    //     cart.items.push(
    //         {
    //             itemNo:foodNo,
    //             name:foodArr[foodNo],
    //             qty:1
    //         }
    //     )
    // }else{
        for(let i=0;i<cart.items.length;i++){
            if(cart.items[i].itemNo==foodNo){
                let qty = cart.items[i].qty;
                if(qty>1){
                    cart.items[i].qty = qty-1;
                    $div.find("span").html(qty-1);
                    break;
                }else{
                    cart.items.splice(i, 1);
                    $div.find("span").html(0);
                    break;
                }
                
            }
        }
    // }
    
})
let show =0
$("#cartShow").click((e)=>{
    if(show==0){
        addItems();
        $(".cartDiv").css("display","flex");
        show=1;
    }else{
        $(".cartDiv").css("display","none");
        show=0;
    }
  
})

function addItems(){
    if(cart.items.length==0){
        $(".cartOrder").html("<h4>No items to proceed</h4>")
    }else{
        $(".cartOrder").empty();
        for(let c=0;c<cart.items.length;c++){
            
            $(".cartOrder").append(`
                <div class="ltemDetCart">
                    <span>`+cart.items[c].name+`</span>
                    <span>x  `+cart.items[c].qty+`</span>
                </div>
            `)
        }
    }
}