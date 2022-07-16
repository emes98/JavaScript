function findLongestWordLength(str) {

    let length= str.length;
    let tab= [];
    let slowo=""
    
    for (let i=0; i<=length; i++)
    {

        if (i== length)
        {
          tab.push(slowo.length);
        }

      else if (str[i]==" " || i== length-1)
      {
        tab.push(slowo.length);
        slowo="";
      }
    
      else 
      {
        slowo = slowo + str[i];
      }
    }
    
    let najwieksza= tab[0];
    for (let i=1; i<tab.length; i++)
    {
      if(tab[i]>najwieksza)
      {
        najwieksza= tab[i];
        
      }
    }
    
    return najwieksza;
     
    }
    
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
    
    console.log(findLongestWordLength("Google do a barrel roll"))
    
    console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))