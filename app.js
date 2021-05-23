//Get User Name

var Item_No=0;


AppInitialize()
function AppInitialize(){
    
    document.getElementById('BtnPrevious').style.display='none';
    document.getElementById('BtnNext').style.display='none';
    document.getElementById('ItemNo').style.display='none';
    document.getElementById('Size_Available').style.display='none';
    document.getElementById('Price').style.display='none';

}
async function GetData(Item_No){
    //alert('Entered GetData')
    console.log(Item_No)
    const Items=await fetch('Questions.csv');
    const data=await Items.text();
    console.log(data);

    const myTable=data.split('\n').slice(1);
    const row=myTable[Item_No];
    const columns=row.split(',');
    document.getElementById('Product_Segment').textContent=columns[2];
    document.getElementById('Product_Name').innerText=columns[3];
    document.getElementById('Size_Available').textContent='Size: '+columns[4];
    document.getElementById('Description').textContent=columns[5];
    document.getElementById('Price').textContent="Price: "+columns[6]+'/- only'
    document.getElementById('Image_Code').src="/images/"+columns[7];
    
    
    if (Item_No==0) {
        document.getElementById('BtnPrevious').style.display='none';
        document.getElementById('BtnStart').style.display='none';
    } else{
        document.getElementById('BtnNext').style.display='none';
        document.getElementById('BtnPrevious').style.display='block';
    };
    if (Item_No>myTable.length-3) {
        document.getElementById('BtnNext').style.display='none';
        document.getElementById('BtnPrevious').style.display='block';
        
    } else{
        document.getElementById('BtnNext').style.display='block';
        
    }
   
    
 }

 //***Reset Screen***
 function ResetScreen(Item_No){
    document.getElementById('Intro').style.display='block';
    document.getElementById('Size_Available').style.display='block';
    document.getElementById('Price').style.display='block';
    


    

}

document.getElementById('BtnStart').addEventListener('click',callStartQuestion);

function callStartQuestion(){
    ResetScreen(Item_No);
    Item_No=0
    GetData(Item_No);
    document.getElementById('ItemNo').textContent=Item_No;
    
}

document.getElementById('BtnNext').addEventListener('click',callNextItem);

function callNextItem(){
    ButtonClick='Enable';
    ResetScreen(Item_No);
    Item_No++;
    GetData(Item_No);
    document.getElementById('ItemNo').textContent=Item_No;
}

document.getElementById('BtnPrevious').addEventListener('click',callPreviousItem);

function callPreviousItem(){
    ResetScreen(Item_No);
    Item_No--;
    GetData(Item_No);
    document.getElementById('ItemNo').textContent=Item_No;
}





