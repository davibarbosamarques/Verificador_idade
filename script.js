function verificar() {
   var data= new Date()
   var ano=data.getFullYear()
   var fano=window.document.getElementById('txtano')
   var res=window.document.querySelector('div#resultado')

 
   if(fano.value==0 || fano.value>ano){
      res.innerHTML='<span> ERRO!!! confirme seus dados e tente novamente </span>'
   }
   else{
      var fsex=document.getElementsByName('radsex')
      var idade= ano-Number(fano.value)
      var genero=''
      var img=document.createElement('img')
      img.setAttribute('id','foto')

      if(fsex[0].checked){
         genero='Masculino'
         if(0<=idade && idade<21){
          img.setAttribute('src','img/boy.jpg')
         }
         else if(idade<60){
         img.setAttribute('src','img/adulto.jpg')
         }
         else{
         img.setAttribute('src','img/idoso.jpg')
         }
      }
      else{
         genero='Feminino'
         if(0<=idade && idade<21){
         img.setAttribute('src','img/girl.jpg')
         }
         else if(idade<60){
         img.setAttribute('src','img/adulta.jpg')
         }
         else{
         img.setAttribute('src','img/idosa.jpg')
         }
      }
      res.style.textAlign='center'
      res.innerHTML=`gênero ${genero} com ${idade} anos`
      res.appendChild(img)
   }
}