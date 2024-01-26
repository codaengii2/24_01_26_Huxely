
    $(document).ready(function(){

    
    //스크롤을 내리면 이미지가 빙글빙글 돌게

    const bodyEl = document.querySelector('body');
    const topBtn = document.querySelector('#top_btn img');
    const topP = document.querySelector('#top_btn p');
    // console.log(topBtn);
    const scrollEvent = () => {
        const pageY =  window.pageYOffset;
        // console.log(pageY);

        // (window.pageYoffset / (bodyEl.offsetHieght - window.innerHieght) * 100);
       
        // console.log(wrapEl.offsetHeight);
        const useScroll = bodyEl.scrollHeight - window.innerHeight;
        
        const perResult = (pageY / useScroll) * 100;
        // console.log(perResult);
        
        topP.innerText = `${Math.floor(perResult)}%`
        topBtn.style.transform = `rotate(${perResult}deg)`;
    }

    window.addEventListener('scroll', scrollEvent);


    //스크롤을 내리면 숫자 퍼센트 게이지가 백퍼센트로 올라가게

});//end

