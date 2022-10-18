document.getElementById('redb').addEventListener('click',()=>{
    if(document.getElementById('red').style.backgroundColor=='red'){
        document.getElementById('red').style.backgroundColor='rgb(0, 0, 0, 0.3)';
    }else{
        document.getElementById('red').style.backgroundColor='red';
    }
    document.getElementById('yellow').style.backgroundColor='rgb(0, 0, 0, 0.3)';
    document.getElementById('green').style.backgroundColor='rgb(0, 0, 0, 0.3)';
})
document.getElementById('yellowb').addEventListener('click',()=>{
    if(document.getElementById('yellow').style.backgroundColor=='yellow'){
        document.getElementById('yellow').style.backgroundColor='rgb(0, 0, 0, 0.3)';
    }else{
        document.getElementById('yellow').style.backgroundColor='yellow';
    }
    document.getElementById('red').style.backgroundColor='rgb(0, 0, 0, 0.3)';
    document.getElementById('green').style.backgroundColor='rgb(0, 0, 0, 0.3)';
})
document.getElementById('greenb').addEventListener('click',()=>{
    if(document.getElementById('green').style.backgroundColor=='green'){
        document.getElementById('green').style.backgroundColor='rgb(0, 0, 0, 0.3)';
    }else{
        document.getElementById('green').style.backgroundColor='green';
    }
    document.getElementById('red').style.backgroundColor='rgb(0, 0, 0, 0.3)';
    document.getElementById('yellow').style.backgroundColor='rgb(0, 0, 0, 0.3)';
})