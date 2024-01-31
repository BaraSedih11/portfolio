import"./hoisted.gE-GBxgi.js";


function c(s,t="success",a=3e3){
    const o=document.getElementById("toast-container"),n=document.getElementById("toast-template").content.cloneNode(!0),e=n.querySelector(".toast"),r=n.querySelector(".toast-message"),i=n.querySelector(".toast-icon");e&&r&&o&&i&&(r.textContent=s,t==="success"?i.innerHTML=`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#61d345"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            ></path>
          </svg>`:i.innerHTML=`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ff4b4b"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            ></path>
          </svg>`,o.appendChild(e),setTimeout(()=>{e.classList.remove("opacity-0","translate-y-24"),e.classList.add("animate-toast-enter")},100),setTimeout(()=>{e.classList.remove("animate-toast-enter"),e.classList.add("animate-toast-leave"),setTimeout(()=>{o.removeChild(e)},600)},a))
        }
        
        const l=document.querySelector("form"),m=document.getElementById("contact-button");
        
        function g(){
            l.reset()
        }
        
        function d(s,t){
            m.disabled=s,m.querySelector("p").textContent=t
        }
        l?.addEventListener("submit",async s=>{s.preventDefault(),d(!0,"Sending...");

        const t=new FormData(l);
        
        try{
            (await fetch("/api/sendgrid",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:t.get("firstName"),lastName:t.get("lastName"),email:t.get("email"),subject:t.get("subject"),message:t.get("message")})})).ok?(c("Message sent!","success",3e3),g()):c("Failed to send message","fail",3e3)
        }
        catch{
            c("Something went wrong. Please try again.","fail",3e3)
        }finally{
            d(!1,"Send")}
        });