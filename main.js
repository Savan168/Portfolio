$(document).ready(function(){
  const Protocols = ['EIGRP','RIP','OSPF','Static', 'IS-IS','VLAN','DHCP','Port Security'];
  const Interest = ['Networking', 'Linux', 'Tenology','Security','Read books', 'Research']
  const projectsCart = [
    {image:'Projects/DHCP,VLAN.png', title:'DHCP and VLAN Configuration',Link:'Projects/DHCP,VLAN.pkt'},
    {image:'filedonwload/DHCP.png', title:'Fedora Server: DHCP',Link:'filedonwload/DHCP.pdf'},
    {image:'filedonwload/DHCP.png', title:'12',Link:'filedonwload/DHCP.pdf'},
    {image:'filedonwload/DHCP, DNS, Web Server.png', title:'12',Link:'filedonwload/DHCP, DNS, Web Server.pdf'},
    {image:'filedonwload/Mail Server.png', title:'12',Link:'filedonwload/Mail Server.pdf'},
    {image:'filedonwload/SSH.png', title:'12',Link:'filedonwload/SSH.pdf'},
    {image:'filedonwload/te.png', title:'12',Link:'21'}
  ]
  const VideoCart = [
    'https://www.youtube.com/embed/1og_RL7NM4E?si=xGdL7myqdwV99kHT',
    'https://www.youtube.com/embed/Rxww4wOkyiI?si=4M0oB5jccntK8VES',
    'https://www.youtube.com/embed/Brp62NejQIw?si=8giUQFWv8wqLFexJ',
    'https://www.youtube.com/embed/Rxww4wOkyiI?si=4M0oB5jccntK8VES',
    'https://www.youtube.com/embed/Brp62NejQIw?si=8giUQFWv8wqLFexJ'
  ]
  let getProtocols = ``;  
  let getInterest =``;
  let getprojectsCart = ``;
  let getVideoCart = ``;
  Protocols.forEach(val => {
    getProtocols += `
      <h1 class="bg-gray-200 rounded-md py-1 px-2 cursor-pointer text-center">${val}</h1>
    `;
  });
  Interest.forEach(val=>{
    getInterest+= `
        <p class="font-normal px-2 border boder-bg-gray-400 rounded-md">${val}</p>
    `
  })
  projectsCart.forEach( (val)=>{
    getprojectsCart +=`
      <div class="bg-gray-200 rounded-md  lg:h-[370px] h-full lg:px-0 ">
          <div class="h-[75%] bg-blue-200 rounded-md">
            <img class="h-full rounded-t-md" src="${val.image}" alt="">
          </div>
          <div class="h-[25%] lg:p-4 p-3"> 
            <h1 class="lg:mb-3 mb-2">${val.title}</h1>
            <div class="lg:flex lg:flex-row flex flex-col gap-3">
                <button><a href="">View Configuration LAP</a></button>
                <button class="">
                  <a href="${val.Link}" download class="bg-blue-600 text-white px-4 lg:py-2 py-2 rounded-lg shadow-md hover:bg-blue-700">Download LAP</a>
                </button>
            </div>
          </div>
      </div> 
    `
  })
  VideoCart.forEach(val =>{
    getVideoCart += `
      <div class=" lg:h-[260px] h-[200px] rounded-md">
        <iframe class="lg:w-[390px] lg:h-[240px] w-[300px] h-[210px] rounded-md" 
        src="${val}" ></iframe>
      </div>
    `
  })
  $("#Protocol").html(getProtocols);  
  $("#Interest").html(getInterest)
  $("#projectsCart").html(getprojectsCart)
  $("#VideoCart").html(getVideoCart)
  

});



